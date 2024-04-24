'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { privateEncrypt } from 'crypto';
import { Employee } from '../ui/form/buttons';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
const FormSchema = z.object({
    userId: z.number(),
    userRole: z.string(),
    userName: z.string({
        invalid_type_error: 'Please select a user.',
    }),
    userPhone: z.number(),
    password: z.string(),
    employeeId: z.number(),
    date: z.string(),
  });
   
const CreateUser = FormSchema.omit({ id: true, date: true });
const UpdateUser = FormSchema.omit({ id: true, date: true });
export type State = {
    errors?: {
      userId: number; 
      userRole: string;
      userName: string;
      userPhone: number;
      password: string;
      employeeId: number;
    };
    message?: string | null;
  };
  export async function createUser(prevState: State, formData: FormData) {
    const validatedFields = CreateUser.safeParse({
      userId: formData.get('userId'),
      userRole: formData.get('userRole'),
      userName: formData.get('userName'),
      userPhone: formData.get('userPhone'),
      password: formData.get('password'),
      employeeId: formData.get('employeeId'),
    });
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create User.',
        };
      }
      // Prepare data for insertion into the database
    const { userId, userRole, userName, userPhone, password, employeeId } = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
    try {
        await sql`
            INSERT INTO User (UserID, UserRole, UserName, UserPhone, Password)
            VALUES (${userId}, ${userRole}, ${userName}, ${userPhone}, ${password})
            WHERE EmployeeID = ${employeeId}
        `;
        await sql `
            INSERT INTO AuthenticationHistory (UserID, date)
            VALUES (${userId}, ${date})
      `;
      } catch (error) {
        return {
          message: 'Database Error: Failed to Create User.',
        };
      }
    revalidatePath('/dashboard/users');
    redirect('/dashboard/users');
  }
  export async function updateUser(
    id: string,
    prevState: State,
    formData: FormData,
  ) {
    const validatedFields = UpdateUser.safeParse({
      userId: formData.get('userId'),
      userRole: formData.get('userRole'),
      userName: formData.get('userName'),
      userPhone: formData.get('userPhone'),
      password: formData.get('password'),
      employeeId: formData.get('employeeId'),
    });
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Update User.',
        };
    }
    const { userId, userRole, userName, userPhone, password, employeeId } = validatedFields.data;
   
    try {
        await sql`
        UPDATE User
        SET UserId = ${userId}, UserRole = ${userRole}, UserName = ${userName}, UserPhone = ${userPhone}, Password = ${password}, EmployeeID = ${employeeId}
        WHERE id = ${id}
        `;
    } catch (error) {
        return {
            message: 'Database Error: Failed to Create User.',
        };
    }
   
    revalidatePath('/dashboard/Users');
    redirect('/dashboard/Users');
  }
  export async function deleteUser(id: string) {
    // throw new Error('Failed to Delete User');
    try {
        await sql`DELETE FROM User WHERE id = ${id}`;
    } catch (error) {
        return {
        message: 'Database Error: Failed to Delete User.',
        };
    }
    revalidatePath('/dashboard/users');
  }
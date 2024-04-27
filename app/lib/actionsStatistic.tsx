'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { privateEncrypt } from 'crypto';
import { BuildingCapacity, Employee, MuseumService } from '../ui/form/buttons';

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
    employeeID: z.number(),
    date: z.string(),
  });
   
const CreateUser = FormSchema.omit({ UserID: true, date: true });
const UpdateUser = FormSchema.omit({ UserID: true, date: true });
export type State = {
    errors?: {
      userId: number; 
      userRole: string;
      userName: string;
      userPhone: number;
      password: string;
      employeeID: number;
    };
    message?: string | null;
  };
  export async function createUser(prevState: State, formData: FormData) {
    const validatedFields = CreateUser.safeParse({
      userID: formData.get('userID'),
      userRole: formData.get('userRole'),
      userName: formData.get('userName'),
      userPhone: formData.get('userPhone'),
      password: formData.get('password'),
      employeeID: formData.get('employeeID'),
    });
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create User.',
        };
      }
      // Prepare data for insertion into the database
    const { userId, userRole, userName, userPhone, password, employeeID } = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
    try {
        await sql`
            INSERT INTO User (UserID, UserRole, UserName, UserPhone, Password)
            VALUES (${userId}, ${userRole}, ${userName}, ${userPhone}, ${password})
            WHERE EmployeeID = ${employeeID}
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
      employeeID: formData.get('employeeID'),
    });
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Update User.',
        };
    }
    const { userId, userRole, userName, userPhone, password, employeeID } = validatedFields.data;
   
    try {
        await sql`
        UPDATE User
        SET UserId = ${userId}, UserRole = ${userRole}, UserName = ${userName}, UserPhone = ${userPhone}, Password = ${password}, EmployeeID = ${employeeID}
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
  const FormExhibitSchema = z.object({
    exhibitType: z.string(),
    name: z.string(),
    addedExhibit: z.string(),
    rating: z.string(),
    weight: z.number(),
    set: z.string(),
    restoration: z.boolean(),
    restorationDetail: z.string(),
    exposed: z.boolean(),
    exposedDetail: z.string(),
    definition: z.boolean(),
    status: z.string(),
    addressID: z.number(),
    date: z.string(),
  });
  export type ExhibitState = {
    errors?: {
      exhibitType: number; 
      name: string;
      addedExhibit: string;
      rating: string;
      weight: number;
      set: string;
      status: string,
      addressID: number,
    };
    message?: string | null;
  };
const CreateExhibit = FormExhibitSchema.omit({ ExhibitID: true, date: true });
  export async function createExhibit(prevState: ExhibitState, formData: FormData) {
    const validatedFields = CreateExhibit.safeParse({
      exhibitType: formData.get('ExhibitType'),
      name: formData.get('Name'),
      addedExhibit: formData.get('Added_Exhibit'),
      rating: formData.get('Rating'),
      weight: formData.get('Weight'),
      set: formData.get('Set'),
      status: formData.get('Status'),
      addressID: formData.get('AddressID'),
    });
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create Exhibit.',
        };
      }
      // Prepare data for insertion into the database
    const { exhibitType, name, addedExhibit, rating, weight, set, definition, status, addressID} = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
    try {
        await sql`
            INSERT INTO ExhibitHistory (ExhibitType, Name, Added_Exhibit, Rating, Weight, Set, Restoration, RestorationDetail, Exposed, ExposedDetail, Definition, Status, AddressID)
            VALUES (${exhibitType}, ${name}, ${addedExhibit}, ${rating}, ${weight}, ${set}, ${definition}, ${status}, ${addressID})
        `;
      } catch (error) {
        return {
          message: 'Database Error: Failed to Create Exhibit.',
        };
      }
    revalidatePath('/dashboard/form/createExhibit');
    redirect('/dashboard/form/createExhibit');
  }
  const FormMuseumServiceSchema = z.object({
    museumServiceID: z.number(), 
    exhibitTypeID: z.number(),
    customerTypeID: z.number(),
    kindID: z.number(),
  });
  export type MuseumServiceState = {
    errors?: {
      museumServiceID: number; 
      exhibitTypeID: number;
      customerTypeID: number;
      kindID: number;
    };
    message?: string | null;
  };
const CreateMuseumService = FormMuseumServiceSchema.omit({ museumServiceID: true, date: true });
  export async function createMuseumService(prevState: MuseumServiceState, formData: FormData) {
    const validatedFields = CreateMuseumService.safeParse({
      museumServiceID: formData.get('museumServiceID'),
      exhibitTypeID: formData.get('exhibitTypeID'),
      customerTypeID: formData.get('customerTypeID'),
      kindID: formData.get('kindID'),
    });
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create MuseumService.',
        };
      }
      // Prepare data for insertion into the database
    const { exhibitTypeID, customerTypeID, kindID } = validatedFields.data;
    const date = new Date().toISOString().split('T')[0];
    try {
        await sql`
            INSERT INTO MuseumService (ExhibitTypeID, CustomerTypeID, KindID)
            VALUES (${exhibitTypeID}, ${customerTypeID}, ${kindID})
        `;
      } catch (error) {
        return {
          message: 'Database Error: Failed to Create MuseumService.',
        };
      }
    revalidatePath('/dashboard/form/createMuseumService');
    redirect('/dashboard/createMuseumService');
  }
  const FormEmployeeSchema = z.object({
    employeeID: z.number(),
    lastName: z.string(),
    firstName: z.string(),
    birthdate: z.string(),
    sex: z.string(),
    register: z.string(),
    phone: z.number(),
    education: z.string(),
    occupation: z.number(),
    stateprize: z.boolean(),
    impairment: z.boolean(),
    addressID: z.number(),
  });
  export type EmployeeState = {
    errors?: {
      employeeID: number;
      lastName: string;
      firstName: string;
      birthdate: string;
      sex: string;
      register: string;
      phone: number;
      education: string;
      occupation: number;
      stateprize: boolean;
      impairment: boolean;
      addressID: number;
    };
    message?: string | null;
  };
const CreateEmployee = FormEmployeeSchema.omit({ employeeID: true, date: true });
  export async function createEmployee(prevState: MuseumServiceState, formData: FormData) {
    const validatedFields = CreateEmployee.safeParse({
      employeeID: formData.get('employeeID'),
      lastName: formData.get('lastName'),
      firstName: formData.get('firstName'),
      birthdate: formData.get('birthdate'),
      sex: formData.get('sex'),
      register: formData.get('register'),
      phone: formData.get('phone'),
      education: formData.get('education'),
      occupation: formData.get('occupation'),
      stateprize: formData.get('stateprize'),
      impairment: formData.get('impairment'),
      addressID: formData.get('addressID')
    });
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create MuseumService.',
        };
      }
      // Prepare data for insertion into the database
    const {lastName, firstName, birthdate, sex, register, phone, education, occupation, stateprize, impairment, addressID } = validatedFields.data;
    try {
        await sql`
            INSERT INTO Employee (lastName, firstName, birthdate, sex, register, phone, education, occupation, stateprize, impairment, addressID)
            VALUES (
              ${lastName},
              ${firstName},
              ${birthdate},
              ${sex},
              ${register},
              ${phone},
              ${education},
              ${occupation},
              ${stateprize},
              ${impairment},
              ${addressID})
        `;
      } catch (error) {
        return {
          message: 'Database Error: Failed to Create MuseumService.',
        };
      }
    revalidatePath('/dashboard/form/createMuseumService');
    redirect('/dashboard/createMuseumService');
  }
  const FormBuildingCapacitySchema = z.object({
    buildingCapacityID: z.number(),
    buildingCapacity: z.string(),
    capacityPlan: z.number(),
    capacityPerformance: z.number(),
  });
  export type BuildingCapacityState = {
    errors?: {
      buildingCapacityID: number;
      buildingCapacity: string;
      capacityPlan: number;
      capacityPerformance: number;
    };
    message?: string | null;
  };
const CreateBuildingCapacity = FormBuildingCapacitySchema.omit({ buildingCapacityID: true, date: true });
  export async function createBuildingCapacity(prevState: BuildingCapacityState, formData: FormData) {
    const validatedFields = CreateBuildingCapacity.safeParse({
      buildingCapacityID: formData.get('buildingCapacityID'),
      buildingCapacity: formData.get('buildingCapacity'),
      capacityPlan: formData.get('capacityPlan'),
      capacityPerformance: formData.get('capacityPerformance'),
    });
    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create BuildingCapacity.',
        };
      }
      // Prepare data for insertion into the database
    const {buildingCapacity, capacityPlan, capacityPerformance } = validatedFields.data;
    try {
        await sql`
            INSERT INTO BuildingCapacity (buildingCapacity, capacityPlan, capacityPerformance)
            VALUES (${buildingCapacity},
                    ${capacityPlan},
                    ${capacityPerformance},
              )
        `;
      } catch (error) {
        return {
          message: 'Database Error: Failed to Create MuseumService.',
        };
      }
    revalidatePath('/dashboard/form/createMuseumService');
    redirect('/dashboard/createMuseumService');
  }
'use server';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { privateEncrypt } from 'crypto';
import { BuildingCapacity, Employee, MuseumService } from '../ui/form/buttons';
import { buildingcapacity } from './definitions';

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
    userMail: string;
    password: string;
    employeeID: number;
  };
  message?: string | null;
};
export async function createUser(user: any) {
  const date = new Date().toISOString().split('T')[0];
  try {
    await sql`
            INSERT INTO Users (UserRole, UserMail, Password, EmployeeID)
            VALUES (${user.userRole}, ${user.userMail}, ${user.password}, ${user.employeeID})
        `;
  } catch (error) {
    console.log(error);
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
export async function createExhibit(exhibit: any) {
  try {
    await sql`
        INSERT INTO Address (Country, province, district, khoroo)
        VALUES (${exhibit.country}, ${exhibit.province}, ${exhibit.district}, ${exhibit.khoroo})
      `;
    await sql`
            INSERT INTO ExhibitHistory (ExhibitTypeID, Name, Added_Exhibit, Definition, Status, weight, set, rating)
            VALUES (${exhibit.exhibittype},
                    ${exhibit.name}, 
                    (SELECT added_exhibit
                      FROM added_exhibit
                      WHERE addedexhibitid = ${exhibit.addedexhibit}
                    ),
                    ${exhibit.description}, 
                    ${exhibit.status},
                    ${exhibit.weight},
                    ${exhibit.set},
                    ${exhibit.rating})
        `;
    await sql`
        UPDATE exhibitHistory
        SET addressid = (
            SELECT MAX(addressid)
            FROM address
        )
        WHERE exhibitid = (
                            SELECT MAX(exhibitid)
                            FROM exhibitHistory)
        ;`;
  } catch (error) {
      console.log(error);
    return {
      message: 'Database Error: Failed to Create Exhibit.',
    };
  }
  revalidatePath('/dashboard/form/createExhibit');
  redirect('/dashboard/form/createExhibit');
}
export async function deleteExhibit(id: number) {
  // throw new Error('Failed to Delete User');
  try {
    await sql`DELETE FROM ExhibitHistory WHERE exhibitID = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Exhibit.',
    };
  }
  revalidatePath('/dashboard/form');
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
export async function createMuseumService(museumservice: any) {
  try {
    await sql`
            INSERT INTO MuseumService (ExhibitTypeID, CustomerTypeID, CustomerCount, KindID)
            VALUES (${museumservice.exhibitTypeID}, ${museumservice.customerTypeID}, ${museumservice.customerCount}, ${museumservice.kindID})
        `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create MuseumService.',
    };
  }
  revalidatePath('/dashboard/form/createMuseumService');
  redirect('/dashboard/form/createMuseumService');
}
export async function deleteMuseumService(id: string) {
  // throw new Error('Failed to Delete User');
  try {
    await sql`DELETE FROM MuseumService WHERE id = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete MuseumService.',
    };
  }
  revalidatePath('/dashboard/form');
}
const FormOtherServiceSchema = z.object({
  otherServiceID: z.number(),
  services: z.string(),
  customerTypeID: z.number(),
  kindID: z.number(),
  customerCount: z.number(),
});
export type OtherServiceState = {
  errors?: {
    otherServiceID: number;
    services: string;
    customerTypeID: number;
    kindID: number;
    customerCount: number;
  };
  message?: string | null;
};
export async function deleteOtherService(id: string) {
  // throw new Error('Failed to Delete User');
  try {
    await sql`DELETE FROM OtherService WHERE id = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete OtherService.',
    };
  }
  revalidatePath('/dashboard/form');
}
const CreateOtherService = FormOtherServiceSchema.omit({ otherServiceID: true, date: true });
export async function createOtherService(otherservice: any) {
  try {
    await sql`
            INSERT INTO OtherService (Services, CustomerTypeID, CustomerCount)
            VALUES (${otherservice.service}, ${otherservice.customerTypeID}, ${otherservice.customerCount})
        `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create OtherService.',
    };
  }
  revalidatePath('/dashboard/form/createOtherService');
  redirect('/dashboard/form/createOtherService');
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
export async function createEmployee(employee: any) {
  try {
    await sql`
          INSERT INTO Address (Country, province, district, khoroo)
          VALUES (${employee.country}, ${employee.province}, ${employee.district}, ${employee.khoroo})
        `;
    await sql`
            INSERT INTO Employee (lastName, firstName, birthDate, sex, register, phone, education, occupationid, stateprize, impairment, departmentid)
            VALUES (
              ${employee.lastName},
              ${employee.firstName},
              ${employee.birthdate},
              ${employee.sex},
              ${employee.register},
              ${employee.phone},
              ${employee.education},
              ${employee.occupationid},
              ${employee.stateprize},
              ${employee.impairment},
              ${employee.departmentid}
            )
        `;
    await sql`
        UPDATE employee
        SET addressid = (
            SELECT MAX(addressid)
            FROM address
        )
        WHERE employeeid = (
                            SELECT MAX(employeeid)
                            FROM employee)
        ;
        `;
  } catch (error) {
    console.log('error' + error);
    return {
      message: 'Database Error: Failed to Create Employee.',
    };
  }
  revalidatePath('/dashboard/from/createEmployee');
  redirect('/dashboard/form/createEmployee');
}
export async function deleteEmployee(id: any) {
  // throw new Error('Failed to Delete User');
  try {
    await sql`DELETE FROM Employee WHERE EmployeeID = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Employee.',
    };
  }
  revalidatePath('/dashboard/form');
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
export async function createBuildingCapacity(building: any) {
  try {
    await sql`
            INSERT INTO BuildingCapacity (buildingCapacity, capacityPlan, capacityPerformance)
            VALUES (${building.buildingCapacity},
                    ${building.capacityPlan},
                    ${building.capacityPerformance},
              )
        `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create BuildingCapacity.',
    };
  }
  revalidatePath('/dashboard/form/createBuildingCapacity');
  redirect('/dashboard/form/createBuildingCapacity');
}
const FormIncomeSchema = z.object({
  incomeID: z.number(),
  incomeTypeID: z.number(),
  incomePlan: z.number(),
  incomePerformance: z.number(),
});
export type IncomeState = {
  errors?: {
    incomeID: number;
    incomeTypeID: string;
    incomePlan: number;
    incomePerformance: number;
  };
  message?: string | null;
};
const CreateIncome = FormIncomeSchema.omit({ incomeID: true, date: true });
export async function createIncome(prevState: IncomeState, formData: FormData) {
  const validatedFields = CreateIncome.safeParse({
    incomeID: formData.get('incomeID'),
    incomeType: formData.get('incomeType'),
    incomePlan: formData.get('incomePlan'),
    incomePerformance: formData.get('incomePerformance'),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Income.',
    };
  }
  // Prepare data for insertion into the database
  const { incomeTypeID, incomePlan, incomePerformance } = validatedFields.data;
  try {
    await sql`
            INSERT INTO Income (IncomeTypeID, IncomePlan, IncomePerformance)
            VALUES (${incomeTypeID},
                    ${incomePlan},
                    ${incomePerformance},
              )
        `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Income.',
    };
  }
  revalidatePath('/dashboard/form/createIncome');
  redirect('/dashboard/form/createIncome');
}
export async function deleteIncome(id: string) {
  // throw new Error('Failed to Delete User');
  try {
    await sql`DELETE FROM Income WHERE id = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Income.',
    };
  }
  revalidatePath('/dashboard/form');
}
const FormExpensesSchema = z.object({
  expensesID: z.number(),
  expensesTypeID: z.number(),
  expensesPlan: z.number(),
  expensesPerformance: z.number(),
});
export type ExpensesState = {
  errors?: {
    expensesID: number;
    expensesTypeID: string;
    expensesPlan: number;
    expensesPerformance: number;
  };
  message?: string | null;
};
const CreateExpenses = FormExpensesSchema.omit({ expensesID: true, date: true });
export async function createExpenses(prevState: ExpensesState, formData: FormData) {
  const validatedFields = CreateExpenses.safeParse({
    expensesID: formData.get('expensesID'),
    expensesType: formData.get('expensesType'),
    expensesPlan: formData.get('expensesPlan'),
    expensesPerformance: formData.get('expensesPerformance'),
  });
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Expenses.',
    };
  }
  // Prepare data for insertion into the database
  const { expensesTypeID, expensesPlan, expensesPerformance } = validatedFields.data;
  try {
    await sql`
            INSERT INTO Expenses (ExpensesTypeID, ExpensesPlan, ExpensesPerformance)
            VALUES (${expensesTypeID},
                    ${expensesPlan},
                    ${expensesPerformance},
              )
        `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Expenses.',
    };
  }
  revalidatePath('/dashboard/form/createExpenses');
  redirect('/dashboard/form/createExpenses');
}
export async function deleteExpenses(id: string) {
  // throw new Error('Failed to Delete User');
  try {
    await sql`DELETE FROM Expenses WHERE id = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Expenses.',
    };
  }
  revalidatePath('/dashboard/form');
}
export async function deleteBuilding(id: string) {
  // throw new Error('Failed to Delete User');
  try {
    await sql`DELETE FROM BuildingCapacity WHERE id = ${id}`;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Delete Building.',
    };
  }
  revalidatePath('/dashboard/form');
}
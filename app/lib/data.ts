import { sql } from '@vercel/postgres';
  import {
    users,
    usertable,
    employee,
    employeetable,
    exhibittype,
    exhibitHistory,
    // exhibitTable,
    museumservice,
    museumservicetable,
    otherservice,
    otherservicetable,
    occupation,
    address,
    kind,
    buildingcapacity,
    income,
    incometable,
    incometype,
    expenses,
    latestexhibit,
    auth,
    authenticationHistory,
    expensestype,
    province,
    district
  } from './definitions';
  import { formatCurrency } from './utils';
  import { unstable_noStore as noStore } from 'next/cache';
  import { NextResponse } from 'next/server';
  // export async function fetchUser() {
  //   // Add noStore() here to prevent the response from being cached.
  //   // This is equivalent to in fetch(..., {cache: 'no-store'}).
  //   noStore();
  //   try {
  //     // Artificially delay a response for demo purposes.
  //     // Don't do this in production :)
  
  //     console.log('Fetching revenue data...');
  //     await new Promise((resolve) => setTimeout(resolve, 3000));
  
  //     const data = await sql<User>`
  //     SELECT
  //     User.UserID,
  //     User.UserRole,
  //     User.UserName,
  //     User.UserPhone,
  //     User.Password
  //     Employee.EmployeeID
  //   FROM User
  //   JOIN Employee ON Employee.EmployeeID = User.EmployeeID
  //   WHERE
  //     Employee.FirstName ILIKE ${`%${query}%`}`
  //       ;
  
  //     console.log('Data fetch completed after 3 seconds.');
  
  //     return data.rows;
  //   } catch (error) {
  //     console.error('Database Error:', error);
  //     throw new Error('Failed to fetch user data.');
  //   }
  // }
  const ITEMS_PER_PAGE = 6;
  // export async function fetchFilteredUser(query: string, currentPage: number,) {
  //   try {
  //     const users =
  //       await sql<User>`SELECT
  //       Users.UserID,
  //       Users.UserRole,
  //       Users.UserMail,
  //       Users.UserPhone,
  //       Users.Password,
  //       Employee.FirstName
  //   FROM Users
  //   JOIN Employee ON Employee.EmployeeID = Users.EmployeeID;`;

  //     // return NextResponse.json({ result }, { status: 200 });
  //     return users.rows;
  //   } catch (error) {
  //     return NextResponse.json({ error }, { status: 500 });
  //   }
  // }


  export async function fetchFilteredUser(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const users = await sql<users>`
      SELECT
          Users.*,
          Employee.*
      FROM Users
      JOIN Employee ON Employee.EmployeeID = Users.EmployeeID;;
  
      `;
      console.log(users);
      return users.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Users.');
    }
  }

  export async function fetchUser() {
    noStore();
    try {
      const data = await sql<users>`
      SELECT
          Users.*,
          Employee.*,
          Address.*
      FROM Users
      JOIN Employee ON Employee.EmployeeID = Users.EmployeeID;`;
  
      const User = data.rows.map((user) => ({
        ...user,
      }));
      return User;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the user.');
    }
  }
  export async function fetchEmployee() {
    noStore();
    try {
      const data = await sql<employee>`
          SELECT *
          FROM Employee
          JOIN Occupation ON Occupation.OccupationID = Employee.OccupationID
          JOIN Department ON Department.DepartmentID = Employee.DepartmentID
          JOIN Address ON Address.AddressID = Employee.AddressID
          ORDER BY Employee.FirstName ASC`;
  
      const Employee  = data.rows.map((employee) => ({
        ...employee,
      }));
      return Employee;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the employee.');
    }
  }
  export async function fetchFilteredEmployee(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const Employees = await sql<employeetable>`
        SELECT *
        FROM Employee
        JOIN Occupation ON Occupation.OccupationID = Employee.OccupationID
        ORDER BY Employee.FirstName DESC
      `;
  
      return Employees.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Employee.');
    }
  }
  export async function fetchCardData() {
    noStore();
    try {
      // You can probably combine these into a single SQL query
      // However, we are intentionally splitting them to demonstrate
      // how to initialize multiple queries in parallel with JS.
      const ExhibitCount = sql`SELECT COUNT(*) FROM ExhibitHistory`;
      const EmployeeCount = sql`SELECT COUNT(*) FROM Employee`;
      const MuseumServiceCount = sql`SELECT COUNT(*) FROM MuseumService`;
      const OtherServiceCount = sql`SELECT COUNT(*) FROM OtherService`;
  
      const data = await Promise.all([
        ExhibitCount,
        EmployeeCount,
        MuseumServiceCount,
        OtherServiceCount,
      ]);
  
      const numberOfExhibit = Number(data[0].rows[0].count ?? '0');
      const numberOfEmployee = Number(data[1].rows[0].count ?? '0');
      const numberOfMuseumService = Number(data[2].rows[0].count ?? '0');
      const numberOfOtherService = Number(data[2].rows[0].count ?? '0');
  
      return {
        numberOfExhibit,
        numberOfEmployee,
        numberOfMuseumService,
        numberOfOtherService,
      };
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch card data.');
    }
  }
  export async function fetchExhibitHistory() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      console.log('Fetching exhibit data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<exhibitHistory>`
        SELECT ExhibitHistory.*, ExhibitType.ExhibitType
        FROM ExhibitHistory
        Join Address on Address.AddressID = ExhibitHistory.AddressID
        Join ExhibitType on ExhibitType.ExhibitTypeID = ExhibitHistory.ExhibitTypeID`
        ;
  
      console.log('Data fetch completed after 3 seconds.');
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch exhibithistory data.');
    }
  }
  export async function fetchExhibitType() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      console.log('Fetching exhibit data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<exhibittype>`
        SELECT * 
        FROM ExhibitType`
        ;
  
      console.log('Data fetch completed after 3 seconds.');
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch exhibitType data.');
    }
  }
  export async function fetchFilteredExhibit(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const users = await sql<exhibitHistory>`
          SELECT * 
          FROM ExhibitHistory
          Join Address on Address.AddressID = ExhibitHistory.AddressID
          JOIN ExhibitType on ExhibitType.ExhibitTypeID = ExhibitHistory.ExhibitTypeID`;
  
      return users.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Exhibit.');
    }
  }
  export async function fetchMuseumService() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      console.log('Fetching MuseumService data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<museumservice>`
        SELECT M.*, ExhibitType.*, CustomerType.*, Kind.*
        FROM MuseumService M
        JOIN ExhibitType ON ExhibitType.ExhibitTypeID = M.ExhibitTypeID
        JOIN CustomerType ON CustomerType.CustomerTypeID = M.CustomerTypeID
        JOIN Kind ON Kind.KindID = M.KindID;
      `
        ;
  
      console.log('Data fetch completed after 3 seconds.');
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch MuseumService data.');
    }
  }
  export async function fetchFilteredMuseumService(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const users = await sql<museumservicetable>`
        SELECT M.*, ExhibitType.*, CustomerType.*, Kind.*
        FROM MuseumService M
        JOIN ExhibitType ON ExhibitType.ExhibitTypeID = M.ExhibitTypeID
        JOIN CustomerType ON CustomerType.CustomerTypeID = M.CustomerTypeID
        JOIN Kind ON Kind.KindID = M.KindID;
      `;
  
      return users.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch MuseumServic.');
    }
  }
  
  export async function fetchOtherService() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      console.log('Fetching OtherService data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<otherservice>`
        SELECT M.*, CustomerType.*, Kind.*
        FROM OtherService M
        JOIN CustomerType ON CustomerType.CustomerTypeID = M.CustomerTypeID
        JOIN Kind ON Kind.KindID = M.KindID;
      `
        ;
  
      console.log('Data fetch completed after 3 seconds.');
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch OtherService data.');
    }
  }
  export async function fetchFilteredOtherService(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const users = await sql<otherservicetable>`
        SELECT M.*, CustomerType.CustomerType, Kind.KInd
        FROM OtherService M
        JOIN CustomerType ON CustomerType.CustomerTypeID = M.CustomerTypeID
        JOIN Kind ON Kind.KindID = M.KindID;
      `;
      return users.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch FilteredOtherService.');
    }
  }
  
  export async function fetchIncome() {
    noStore();
    try {
      const data = await sql<income>`
        SELECT Income.* , IncomeType.IncomeType
        FROM Income
        JOIN IncomeType ON IncomeType.IncomeTypeID = Income.IncomeTypeID`;
  
      const latestIncome = data.rows.map((Income) => ({
        ...Income,
      }));
      return latestIncome;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest Income.');
    }
  }
  export async function fetchIncomeType() {
    noStore();
    try {
      const data = await sql<incometype>`
        SELECT *
        FROM IncomeType`;
  
      const IncomeType = data.rows.map((IncomeType) => ({
        ...IncomeType,
      }));
      return IncomeType;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the IncomeType.');
    }
  }
  export async function fetchBuildingCapacity() {
    noStore();
    try {
      const data = await sql<buildingcapacity>`
        SELECT *
        FROM BuildingCapacity`;
  
      const BuildingCapacity = data.rows.map((BuildingCapacity) => ({
        ...BuildingCapacity,
      }));
      return BuildingCapacity;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the BuildingCapacity.');
    }
  }
  export async function fetchFilteredBuilding(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const users = await sql<buildingcapacity>`
        SELECT *
        FROM BuildingCapacity
      `;
  
      return users.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch FilteredBuildingCapacity.');
    }
  }
  export async function fetchFilteredIncome(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const users = await sql<incometable>`
        SELECT *
        FROM Income
        JOIN IncomeType ON IncomeType.IncomeTypeID = Income.IncomeTypeID
      `;
  
      return users.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch FilteredIncome.');
    }
  }
  export async function fetchFilteredExpenses(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const users = await sql<expenses>`
        SELECT *
        FROM Expenses
        JOIN ExpensesType ON ExpensesType.ExpensesTypeID = Expenses.ExpensesTypeID
      `;
  
      return users.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch FilteredExpenses.');
    }
  }
  export async function fetchLatestExhibit() {
    noStore();
    try {
      const data = await sql<latestexhibit>`
        SELECT * 
        FROM ExhibitHistory
        Join Address on Address.AddressID = ExhibitHistory.AddressID
        LIMIT 5`;
  
      const latestExhibits = data.rows.map((exhibit) => ({
        ...exhibit,
        amount: formatCurrency(exhibit.weight),
      }));
      return latestExhibits;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest Exhibit.');
    }
  }
  export async function fetchExpenses() {
    noStore();
    try {
      const data = await sql<expenses>`
        SELECT Expenses.* , ExpensesType.ExpensesType
        FROM Expenses
        JOIN ExpensesType ON ExpensesType.ExpensesTypeID = Expenses.ExpensesTypeID`;
  
      const latestExpenses = data.rows.map((Expenses) => ({
        ...Expenses,
      }));
      return latestExpenses;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the Expenses.');
    }
  }
  export async function fetchExpensesType() {
    noStore();
    try {
      const data = await sql<expensestype>`
        SELECT *
        FROM ExpensesType`;
  
      const ExpensesType = data.rows.map((ExpensesType) => ({
        ...ExpensesType,
      }));
      return ExpensesType;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the ExpensesType.');
    }
  }
  export async function fetchAuth() {
    noStore();
    try {
      const data = await sql<auth>`
        SELECT UserID, LoginDate
        FROM AuthenticationHistory`;
  
      const AuthenticationHistory = data.rows.map((auth) => ({
        ...auth,
      }));
      return AuthenticationHistory;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the authenticationhistory.');
    }
  }
  export async function fetchAddress() {
    noStore();
    try {
      const data = await sql<address>`
      SELECT *
      FROM Address`;
  
      const Address = data.rows.map((address) => ({
        ...address,
      }));
      return Address;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the address.');
    }
  }
  export async function fetchProvince() {
    noStore();
    try {
      const data = await sql<province>`
      SELECT *
      FROM province`;
  
      const Province = data.rows.map((province) => ({
        ...province,
      }));
      return Province;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the province.');
    }
  }
  export async function fetchDistrict() {
    noStore();
    try {
      const data = await sql<district>`
      SELECT *
      FROM district
      JOIN province ON province.provinceid = district.provinceid`;
  
      const District = data.rows.map((district) => ({
        ...district,
      }));
      return District;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the district.');
    }
  }
  // export async function fetchEmployeePages(query: string) {
  //   noStore();
  //   try {
  //     const count = await sql`SELECT COUNT(*)
  //     FROM Employee
  //     JOIN Occupation ON Occupation.OccupationID = Employee.OccupationID
  //     JOIN Department ON Department.DepartmentID = Employee.DepartmentID
  //     JOIN Department ON Department.DepartmentID = Employee.DepartmentID
  //     JOIN Address ON Address.AddressID = Employee.AddressID
  //     WHERE
  //       Employee.EmployeeID ${`%${query}%`} OR
  //       Employee.Sex ILIKE ${`%${query}%`} OR
  //       Employee.Occupation::text ILIKE ${`%${query}%`} OR
  //       Employee.Education::text ILIKE ${`%${query}%`}
  //   `;
  
  //     const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
  //     return totalPages;
  //   } catch (error) {
  //     console.error('Database Error:', error);
  //     throw new Error('Failed to fetch total number of employee.');
  //   }
  // }
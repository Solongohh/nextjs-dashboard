import { sql } from '@vercel/postgres';
  import {
    User,
    UserTable,
    Employee,
    EmployeeTable,
    ExhibitType,
    ExhibitHistory,
    // ExhibitTable,
    MuseumService,
    MuseumServiceTable,
    OtherService,
    OtherServiceTable,
    Occupation,
    Address,
    Kind,
    BuildingCapacity,
    Income,
    IncomeTable,
    Expenses,
    LatestExhibit,
    Auth,
    AuthenticationHistory
  } from './definitions';
  import { formatCurrency } from './utils';
  import { unstable_noStore as noStore } from 'next/cache';
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
  export async function fetchFilteredUser(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const users = await sql<User>`
      SELECT
          Users.UserID,
          Users.UserRole,
          Users.UserMail,
          Users.UserPhone,
          Users.Password,
          Employee.FirstName
      FROM Users
      JOIN Employee ON Employee.EmployeeID = Users.EmployeeID;
  
      `;
  
      return users.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Users.');
    }
  }
  export async function fetchUser() {
    noStore();
    try {
      const data = await sql<User>`
      SELECT
          Users.UserID,
          Users.UserRole,
          Users.UserMail,
          Users.UserPhone,
          Users.Password,
          Employee.FirstName
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
      const data = await sql<Employee>`
        SELECT *
        FROM Employee
        JOIN Occupation ON Occupation.OccupationID = Employee.OccupationID
        JOIN Department ON Department.DepartmentID = Employee.DepartmentID
        JOIN Address ON Address.AddressID = Employee.AddressID
        ORDER BY Employee.FirstName DESC`;
  
      const latestEmployee = data.rows.map((employee) => ({
        ...employee,
      }));
      return latestEmployee;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest employee.');
    }
  }
  export async function fetchFilteredEmployee(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const Employees = await sql<EmployeeTable>`
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
  
      const data = await sql<ExhibitHistory>`
        SELECT * 
        FROM ExhibitHistory
        Join Address on Address.AddressID = ExhibitHistory.AddressID`
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
  
      const data = await sql<ExhibitType>`
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
      const users = await sql<ExhibitHistory>`
          SELECT * 
          FROM ExhibitHistory
          Join Address on Address.AddressID = ExhibitHistory.AddressID`;
  
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
  
      const data = await sql<MuseumService>`
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
      const users = await sql<MuseumServiceTable>`
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
  
      const data = await sql<OtherService>`
        SELECT M.*, ExhibitType.*, CustomerType.*, Kind.*
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
      const users = await sql<OtherServiceTable>`
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
      const data = await sql<Income>`
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
  export async function fetchBuildingCapacity() {
    noStore();
    try {
      const data = await sql<BuildingCapacity>`
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
      const users = await sql<BuildingCapacity>`
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
      const users = await sql<IncomeTable>`
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
      const users = await sql<Expenses>`
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
      const data = await sql<LatestExhibit>`
        SELECT * 
        FROM ExhibitHistory
        Join Address on Address.AddressID = ExhibitHistory.AddressID
        LIMIT 5`;
  
      const latestExhibits = data.rows.map((exhibit) => ({
        ...exhibit,
        amount: formatCurrency(exhibit.Weight),
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
      const data = await sql<Income>`
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
  export async function fetchAuth() {
    noStore();
    try {
      const data = await sql<Auth>`
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
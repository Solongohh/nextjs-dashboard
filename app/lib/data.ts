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
    service,
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
    district,
    added_exhibit,
    rating,
    customertype,
    role,
    report
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
  //    LEFT JOIN Employee ON Employee.EmployeeID = User.EmployeeID
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
  //    LEFT JOIN Employee ON Employee.EmployeeID = Users.EmployeeID;`;

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
      LEFT JOIN Employee ON Employee.EmployeeID = Users.EmployeeID;;
  
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
      const data = await sql<users>`
      SELECT
          Users.*,
          Employee.*
      FROM Users
      LEFT JOIN Employee ON Employee.EmployeeID = Users.EmployeeID;`;
  
      const User = data.rows.map((user) => ({
        ...user,
      }));
      return User;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the user.');
    }
  }
  export async function fetchRole() {
    noStore();
    try {
      const data = await sql<role>`
      SELECT *
      FROM roles`;
  
      const Role = data.rows.map((role) => ({
        ...role,
      }));
      return Role;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the role.');
    }
  }
  export async function fetchEmployee() {
    noStore();
    try {
      const data = await sql<employee>`
        SELECT *
        FROM Employee
        LEFT  JOIN Occupation ON Occupation.OccupationID = Employee.OccupationID
        LEFT  JOIN Department ON Department.DepartmentID = Employee.DepartmentID
        LEFT JOIN Address ON Address.AddressID = Employee.AddressID
        ORDER BY Employee.employeeid ASC`;
  
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
        LEFT JOIN Occupation ON Occupation.OccupationID = Employee.OccupationID
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
        LEFT Join Address on Address.AddressID = ExhibitHistory.AddressID
        LEFT Join ExhibitType on ExhibitType.ExhibitTypeID = ExhibitHistory.ExhibitTypeID
        ORDER BY ExhibitHistory.exhibitID ASC`
        ;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch exhibithistory data.');
    }
  }
  export async function fetchAddedExhibit() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      console.log('Fetching added_exhibit data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<added_exhibit>`
        SELECT *
        FROM added_exhibit`
        ;
  
      console.log('Data fetch completed after 3 seconds.');
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch added_exhibit data.');
    }
  }
  export async function fetchRating() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<rating>`
        SELECT *
        FROM rating`
        ;
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch rating data.');
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
          LEFT Join Address on Address.AddressID = ExhibitHistory.AddressID
          LEFT JOIN ExhibitType on ExhibitType.ExhibitTypeID = ExhibitHistory.ExhibitTypeID`;
  
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
        LEFT JOIN ExhibitType ON ExhibitType.ExhibitTypeID = M.ExhibitTypeID
        LEFT JOIN CustomerType ON CustomerType.CustomerTypeID = M.CustomerTypeID
        LEFT JOIN Kind ON Kind.KindID = M.KindID;
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
        LEFT JOIN ExhibitType ON ExhibitType.ExhibitTypeID = M.ExhibitTypeID
        LEFT JOIN CustomerType ON CustomerType.CustomerTypeID = M.CustomerTypeID
        LEFT JOIN Kind ON Kind.KindID = M.KindID;
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
        LEFT JOIN CustomerType ON CustomerType.CustomerTypeID = M.CustomerTypeID
        LEFT JOIN Kind ON Kind.KindID = M.KindID;
      `
        ;
  
      console.log('Data fetch completed after 3 seconds.');
  
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch OtherService data.');
    }
  }
  export async function fetchService() {
    // Add noStore() here to prevent the response from being cached.
    // This is equivalent to in fetch(..., {cache: 'no-store'}).
    noStore();
    try {
      // Artificially delay a response for demo purposes.
      // Don't do this in production :)
  
      console.log('Fetching Service data...');
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      const data = await sql<service>`
        SELECT *
        FROM services;
      `;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Service data.');
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
        LEFT JOIN CustomerType ON CustomerType.CustomerTypeID = M.CustomerTypeID
        LEFT JOIN Kind ON Kind.KindID = M.KindID;
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
        LEFT JOIN IncomeType ON IncomeType.IncomeTypeID = Income.IncomeTypeID`;
  
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
        LEFT JOIN IncomeType ON IncomeType.IncomeTypeID = Income.IncomeTypeID
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
        LEFT JOIN ExpensesType ON ExpensesType.ExpensesTypeID = Expenses.ExpensesTypeID
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
        LEFT Join Address on Address.AddressID = ExhibitHistory.AddressID
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
      LEFT JOIN ExpensesType ON ExpensesType.ExpensesTypeID = Expenses.ExpensesTypeID `;
  
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
        FROM ExpensesType
        WHERE ExpensesType.ExpensesTypeID not in (SELECT ParentID FROM ExpensesType)`;
  
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
      LEFT JOIN province ON province.provinceid = district.provinceid`;
  
      const District = data.rows.map((district) => ({
        ...district,
      }));
      return District;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the district.');
    }
  }
  export async function fetchKind() {
    noStore();
    try {
      const data = await sql<kind>`
      SELECT *
      FROM kind`;
  
      const Kind = data.rows.map((kind) => ({
        ...kind,
      }));
      return Kind;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the kind.');
    }
  }
  export async function fetchCustomerType() {
    noStore();
    try {
      const data = await sql<customertype>`
      SELECT *
      FROM customertype`;
  
      const CustomerType = data.rows.map((customertype) => ({
        ...customertype,
      }));
      return CustomerType;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the customertype.');
    }
  }
  export async function fetchReport(
    query: string,
    currentPage: number,
  ) {
    noStore();
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      const report = await sql<report>`
      SELECT *
      FROM report  
      `;
      return report.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Users.');
    }
  }
  // create table report(
  //   reportid serial primary key,
  //   report jsonb,
  //   status varchar,
  //   sentdate date
  //   )
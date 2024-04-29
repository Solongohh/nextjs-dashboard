import { sql } from '@vercel/postgres';
  import {
    User,
    UserTable,
    Employee,
    EmployeeTable,
    ExhibitType,
    ExhibitHistory,
    ExhibitTable,
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
    Expenses
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
          User.UserID,
          User.UserRole,
          User.UserMail,
          User.UserPhone,
          User.Password,
          Employee.EmployeeID
        FROM User
        JOIN Employee ON Employee.EmployeeID = User.EmployeeID
        WHERE
          Employee.FirstName ILIKE ${`%${query}%`}
      `;
  
      return users.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch Users.');
    }
  }
  
  export async function fetchEmployee() {
    noStore();
    try {
      const data = await sql<Employee>`
        SELECT *
        FROM Employee
        JOIN Occupation ON Occupation.OccupationID = Employee.OccupationID
        JOIN Department ON Department.EmployeeID = Employee.EmployeeID
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
        JOIN Occupation ON Occupation.OccupationID = OccupationID
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
      const ExhibitCount = sql`SELECT COUNT(*) FROM Exhibit`;
      const UserCount = sql`SELECT COUNT(*) FROM User`;
      const MuseumServiceCount = sql`SELECT COUNT(*) FROM MuseumService`;
      const OtherServiceCount = sql`SELECT COUNT(*) FROM OtherService`;
  
      const data = await Promise.all([
        ExhibitCount,
        UserCount,
        MuseumServiceCount,
        OtherServiceCount,
      ]);
  
      const numberOfExhibit = Number(data[0].rows[0].count ?? '0');
      const numberOfUser = Number(data[1].rows[0].count ?? '0');
      const numberOfMuseumService = Number(data[1].rows[0].count ?? '0');
      const numberOfOtherService = Number(data[1].rows[0].count ?? '0');
  
      return {
        numberOfExhibit,
        numberOfUser,
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
      const users = await sql<ExhibitTable>`
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
        SELECT M.*, ExhibitType.*, CustomerType.CustomerType, Kind.KInd
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
        JOIN IncomeType ON IncomeType.IncomeTypeID = IncomeTypeID`;
  
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
  
      const latestBuildingCapacity = data.rows.map((BuildingCapacity) => ({
        ...BuildingCapacity,
      }));
      return latestBuildingCapacity;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest BuildingCapacity.');
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
        JOIN IncomeType ON IncomeType.IncomeTypeID = IncomeTypeID
      `;
  
      return users.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch FilteredIncome.');
    }
  }
//   export async function fetchFilteredInvoices(
//     query: string,
//     currentPage: number,
//   ) {
//     noStore();
//     const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
//     try {
//       const invoices = await sql<InvoicesTable>`
//         SELECT
//           invoices.id,
//           invoices.amount,
//           invoices.date,
//           invoices.status,
//           customers.name,
//           customers.email,
//           customers.image_url
//         FROM invoices
//         JOIN customers ON invoices.customer_id = customers.id
//         WHERE
//           customers.name ILIKE ${`%${query}%`} OR
//           customers.email ILIKE ${`%${query}%`} OR
//           invoices.amount::text ILIKE ${`%${query}%`} OR
//           invoices.date::text ILIKE ${`%${query}%`} OR
//           invoices.status ILIKE ${`%${query}%`}
//         ORDER BY invoices.date DESC
//         LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
//       `;
  
//       return invoices.rows;
//     } catch (error) {
//       console.error('Database Error:', error);
//       throw new Error('Failed to fetch invoices.');
//     }
//   }
  
//   export async function fetchInvoicesPages(query: string) {
//     noStore();
//     try {
//       const count = await sql`SELECT COUNT(*)
//       FROM invoices
//       JOIN customers ON invoices.customer_id = customers.id
//       WHERE
//         customers.name ILIKE ${`%${query}%`} OR
//         customers.email ILIKE ${`%${query}%`} OR
//         invoices.amount::text ILIKE ${`%${query}%`} OR
//         invoices.date::text ILIKE ${`%${query}%`} OR
//         invoices.status ILIKE ${`%${query}%`}
//     `;
  
//       const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
//       return totalPages;
//     } catch (error) {
//       console.error('Database Error:', error);
//       throw new Error('Failed to fetch total number of invoices.');
//     }
//   }
  
//   export async function fetchInvoiceById(id: string) {
//     noStore();
//     try {
//       const data = await sql<InvoiceForm>`
//         SELECT
//           invoices.id,
//           invoices.customer_id,
//           invoices.amount,
//           invoices.status
//         FROM invoices
//         WHERE invoices.id = ${id};
//       `;
  
//       const invoice = data.rows.map((invoice) => ({
//         ...invoice,
//         // Convert amount from cents to dollars
//         amount: invoice.amount / 100,
//       }));
//       console.log(invoice); // Invoice is an empty array []
//       return invoice[0];
//     } catch (error) {
//       console.error('Database Error:', error);
//       throw new Error('Failed to fetch invoice.');
//     }
//   }
  
//   export async function fetchCustomers() {
//     try {
//       const data = await sql<CustomerField>`
//         SELECT
//           id,
//           name
//         FROM customers
//         ORDER BY name ASC
//       `;
  
//       const customers = data.rows;
//       return customers;
//     } catch (err) {
//       console.error('Database Error:', err);
//       throw new Error('Failed to fetch all customers.');
//     }
//   }
  
//   export async function fetchFilteredCustomers(query: string) {
//     try {
//       const data = await sql<CustomersTableType>`
//           SELECT
//             customers.id,
//             customers.name,
//             customers.email,
//             customers.image_url,
//             COUNT(invoices.id) AS total_invoices,
//             SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
//             SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
//           FROM customers
//           LEFT JOIN invoices ON customers.id = invoices.customer_id
//           WHERE
//             customers.name ILIKE ${`%${query}%`} OR
//           customers.email ILIKE ${`%${query}%`}
//           GROUP BY customers.id, customers.name, customers.email, customers.image_url
//           ORDER BY customers.name ASC
//         `;
  
//       const customers = data.rows.map((customer) => ({
//         ...customer,
//         total_pending: formatCurrency(customer.total_pending),
//         total_paid: formatCurrency(customer.total_paid),
//       }));
  
//       return customers;
//     } catch (err) {
//       console.error('Database Error:', err);
//       throw new Error('Failed to fetch customer table.');
//     }
//   }
  
//   export async function getUser(email: string) {
//     try {
//       const user = await sql`SELECT * FROM users WHERE email=${email}`;
//       return user.rows[0] as User;
//     } catch (error) {
//       console.error('Failed to fetch user:', error);
//       throw new Error('Failed to fetch user.');
//     }
//   }
  
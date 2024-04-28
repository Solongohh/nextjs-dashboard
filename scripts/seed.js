const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');
// const { Employee } = require('@/app/ui/form/buttons.tsx');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS User (
        UserID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        UserRole VARCHAR(255) NOT NULL,
        UserName VARCHAR(255) NOT NULL,
        UserPhone INTEGER NOT NULL,
        Password Varchar NOT NULL,
        EmployeeID INTEGER NOT NULL
      );
    `;

    console.log(`Created "user" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO User (UserRole, UserName, UserPhone, Password, EmployeeID)
        VALUES (${users.role}, ${user.name}, ${user.phone}, ${hashedPassword},
          ( SELECT EmployeeID
            FROM Employee
            WHERE ${user.employee}))
        ON CONFLICT (UserID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}
async function seedEmployee(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        EmployeeID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        LastName VARCHAR(255) NOT NULL,
        FirstName VARCHAR(255) NOT NULL,
        Birthdate DATE FORMAT 'yyyy.mm.dd',
        Sex CHAR(1),
        Register Char(10),
        Phone Char(8),
        Education VARCHAR,
        Occupation INTEGER NOT NULL.
        Stateprize BOOLEAN NOT NULL,
        Impairment BOOLEAN NOT NULL,
        AddressID INTEGER NOT NULL
      );
    `;

    console.log(`Created "Employee" table`);

    // Insert data into the "employee" table
    const insertedEmployee = await Promise.all(
      Employee.map(async (employee) => {
        return client.sql`
        INSERT INTO Employee (LastName, FirstName, Birthdate, Sex, Register, Phone, Education, OccupationID, Stateprize, Impairment, AddressID)
        VALUES (${employee.lastname}, ${employee.firstname}, ${employee.birthdate}, ${employee.sex},${employee.register},${employee.phone},${employee.education},${employee.occupationID},${employee.stateprize},${employee.impairment},
        (
          SELECT AddressID
          FROM Address
          WHERE Country = ${address.country}
            AND Province = ${address.province}
            AND District = ${address.district}
            AND Khoroo = ${address.khoroo}
          )
        )
        ON CONFLICT (EmployeeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedEmployee.length} Employee`);

    return {
      createTable,
      users: insertedEmployee,
    };
  } catch (error) {
    console.error('Error seeding employee:', error);
    throw error;
  }
}
async function seedOccupation(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Occupation (
        OccupationID INTEGER PRIMARY KEY,
        Occupation VARCHAR(255) NOT NULL,
        ParentID INTEGER NOT NULL
      );
    `;

    console.log(`Created "Occupation" table`);

    // Insert data into the "Occupation" table
    const insertedOccupation = await Promise.all(
      Occupation.map(async (occupation) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO Occupation (OccupationID, Occupation, ParentID)
        VALUES (${occupation.occupationid}, ${occupation.occupation}, ${occupation.parentid})
        ON CONFLICT (OccupationID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedOccupation.length} Occupation`);

    return {
      createTable,
      users: insertedOccupation,
    };
  } catch (error) {
    console.error('Error seeding Occupation:', error);
    throw error;
  }
}
async function seedAddress(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Address (
        AddressID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        Country VARCHAR(255) NOT NULL,
        Province VARCHAR,
        Disctrict VARCHAR,
        Khoroo Varchar(255)
      );
    `;

    console.log(`Created "Address" table`);

    // Insert data into the "Address" table
    const insertedAddress = await Promise.all(
      Addresses.map(async (address) => {
        return client.sql`
        INSERT INTO Address (Country, Province, District, Khoroo)
        VALUES (${address.country}, ${address.province}, ${address.district}, ${address.khoroo})
        ON CONFLICT (AddressID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedAddress.length} address`);

    return {
      createTable,
      users: insertedAddress,
    };
  } catch (error) {
    console.error('Error seeding address:', error);
    throw error;
  }
}
async function seedExhibitHistory(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS ExhibitHistory (
        ExhibitHistoryID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        ExhibitTypeID INTEGER NOT NULL,
        Name VARCHAR(255) NOT NULL,
        Added_Exhibit VARCHAR,
        Rating VARCHAR,
        Weight Double precision,
        Set VARCHAR(255),
        Restoration BOOLEAN NOT NULL,
        RestorationDetail VARCHAR(255),
        Exposed BOOLEAN NOT NULL,
        ExposedDetail VARCHAR(255),
        Definition VARCHAR(255),
        Status VARCHAR,
        AddressID INTEGER NOT NULL
      );
    `;

    console.log(`Created "ExhibitHistory" table`);

    // Insert data into the "ExhibitHistory" table
    const insertedExhibitHistory = await Promise.all(
      ExhibitHistory.map(async (exhibithistory) => {
        return client.sql`
        INSERT INTO ExhibitHistory (
          ExhibitTypeID,
          Name,
          Added_Exhibit,
          Rating,
          Weight,
          Set,
          Restoration,
          RestorationDetail,
          Exposed,
          ExposedDetail,
          Definition,
          Status,
          AddressID
      )
      VALUES (
          ${exhibithistory.exhibitTypeId},     
          ${exhibithistory.name}, 
          ${exhibithistory.added_exhibit},
          ${exhibithistory.rating},               
          ${exhibithistory.weight},                 
          ${exhibithistory.set},                 
          ${exhibithistory.restoration},               
          ${exhibithistory.restorationDetail},       
          ${exhibithistory.exposed},                 
          ${exhibithistory.exposedDetail},         
          ${exhibithistory.definition},         
          ${exhibithistory.status},
          (
              SELECT AddressID
              FROM Address
              WHERE Country = ${address.country}
                AND Province = ${address.province}
                AND District = ${address.district}
                AND Khoroo = ${address.khoroo}
          ) 
      );

      `;
      }),
    );

    console.log(`Seeded ${insertedExhibitHistory.length} exhibithistory`);

    return {
      createTable,
      users: insertedExhibitHistory,
    };
  } catch (error) {
    console.error('Error seeding exhibithistory:', error);
    throw error;
  }
}
async function seedExhibitType(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS ExhibitType (
        ExhibitTypeID INTEGER PRIMARY KEY,
        ExhibitType VARCHAR,
        ParentID INTEGER NOT NULL
      );
    `;

    console.log(`Created "ExhibitType" table`);

    // Insert data into the "users" table
    const insertedExhibitType = await Promise.all(
      ExhibitType.map(async (exhibittype) => {
        return client.sql`
        INSERT INTO ExhibitType
      `;
      }),
    );

    console.log(`Seeded ${insertedExhibitType.length} exhibittype`);

    return {
      createTable,
      users: insertedExhibitType,
    };
  } catch (error) {
    console.error('Error seeding exhibittype:', error);
    throw error;
  }
}
async function seedMuseumService(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS MuseumService (
        MuseumServiceID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        ExhibitTypeID INTEGER NOT NULL,
        CustomerTypeID INTEGER NOT NULL,
        KindID  INTEGER NOT NULL,
        CustomerCount INTEGER NOT NULL,
      );
    `;

    console.log(`Created "MuseumService" table`);

    // Insert data into the "MuseumService" table
    const insertedMuseumService = await Promise.all(
      MuseumServicees.map(async (MuseumService) => {
        return client.sql`
        INSERT INTO MuseumService (ExhibitTypeID, CustomerTypeID, KindID, CustomerCount)
        VALUES (${MuseumService.exhibitTypeId}, ${MuseumService.customerTypeId}, ${MuseumService.kindId}, ${MuseumService.customerCount})
        ON CONFLICT (MuseumServiceID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedMuseumService.length} MuseumService`);

    return {
      createTable,
      users: insertedMuseumService,
    };
  } catch (error) {
    console.error('Error seeding MuseumService:', error);
    throw error;
  }
}
async function seedOtherService(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS OtherService (
        OtherServiceID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        Services VARCHAR,
        CustomerTypeID INTEGER NOT NULL,
        CustomerCount INTEGER,
      );
    `;

    console.log(`Created "OtherService" table`);

    // Insert data into the "OtherService" table
    const insertedOtherService = await Promise.all(
      OtherServicees.map(async (OtherService) => {
        return client.sql`
        INSERT INTO OtherService (Services, CustomerTypeID, CustomerCount)
        VALUES (${OtherService.services}, ${OtherService.customerTypeId}, ${OtherService.customerCount})
        ON CONFLICT (OtherServiceID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedOtherService.length} OtherService`);

    return {
      createTable,
      users: insertedOtherService,
    };
  } catch (error) {
    console.error('Error seeding OtherService:', error);
    throw error;
  }
}
async function seedKind(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Kind (
        KindID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        Kind VARCHAR,
        ParentID INTEGER NOT NULL,
      );
    `;

    console.log(`Created "Kind" table`);

    // Insert data into the "Kind" table
    const insertedKind = await Promise.all(
      Kindes.map(async (Kind) => {
        return client.sql`
        INSERT INTO Kind (Kind, ParentID)
        VALUES (${Kind.kind}, ${Kind.parentid})
        ON CONFLICT (KindID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedKind.length} Kind`);

    return {
      createTable,
      users: insertedKind,
    };
  } catch (error) {
    console.error('Error seeding Kind:', error);
    throw error;
  }
}
async function seedCustomerType(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS CustomerType (
        CustomerTypeID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        CustomerType VARCHAR,
      );
    `;

    console.log(`Created "CustomerType" table`);

    // Insert data into the "CustomerType" table
    const insertedCustomerType = await Promise.all(
      CustomerTypees.map(async (CustomerType) => {
        return client.sql`
        INSERT INTO CustomerType (CustomerType)
        VALUES (${CustomerType.CustomerType},)
        ON CONFLICT (CustomerTypeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedCustomerType.length} CustomerType`);

    return {
      createTable,
      users: insertedCustomerType,
    };
  } catch (error) {
    console.error('Error seeding CustomerType:', error);
    throw error;
  }
}
async function seedBuildingCapacity(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS BuildingCapacity (
        BuildingCapacityID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        BuildingCapacity VARCHAR,
        CapacityPlan INTEGER NOT NULL,
        CapacityPerformance INTEGER NOT NULL,
      );
    `;

    console.log(`Created "BuildingCapacity" table`);

    // Insert data into the "BuildingCapacity" table
    const insertedBuildingCapacity = await Promise.all(
      BuildingCapacityes.map(async (BuildingCapacity) => {
        return client.sql`
        INSERT INTO BuildingCapacity (BuildingCapacity, CapacityPlan, CapacityPerformance)
        VALUES (${BuildingCapacity.BuildingCapacity},${BuildingCapacity.capacityPlan},${BuildingCapacity.capacityPerformance})
        ON CONFLICT (BuildingCapacityID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedBuildingCapacity.length} BuildingCapacity`);

    return {
      createTable,
      users: insertedBuildingCapacity,
    };
  } catch (error) {
    console.error('Error seeding BuildingCapacity:', error);
    throw error;
  }
}
async function seedExpenses(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Expenses (
        ExpensesID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        ExpensesTypeID INTEGER NOT NULL,
        ExpensesPlan INTEGER NOT NULL,
        ExpensesPerformance INTEGER NOT NULL,
      );
    `;

    console.log(`Created "Expenses" table`);

    // Insert data into the "Expenses" table
    const insertedExpenses = await Promise.all(
      Expenseses.map(async (Expenses) => {
        return client.sql`
        INSERT INTO Expenses (ExpensesType, ExpensesPlan, ExpensesPerformance)
        VALUES (${Expenses.ExpensesType},${Expenses.expensesPlan},${Expenses.expensesPerformance})
        ON CONFLICT (ExpensesID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedExpenses.length} Expenses`);

    return {
      createTable,
      users: insertedExpenses,
    };
  } catch (error) {
    console.error('Error seeding Expenses:', error);
    throw error;
  }
}
async function seedExpensesType(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS ExpensesType (
        ExpensesTypeID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        ExpensesType VARCHAR,
        ParentID INTEGER NOT NULL,
      );
    `;

    console.log(`Created "ExpensesType" table`);

    // Insert data into the "ExpensesType" table
    const insertedExpensesType = await Promise.all(
      ExpensesTypees.map(async (ExpensesType) => {
        return client.sql`
        INSERT INTO ExpensesType (ExpensesType, ParentID)
        VALUES (${ExpensesType.ExpensesType},${ExpensesType.parentid})
        ON CONFLICT (ExpensesTypeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedExpensesType.length} ExpensesType`);

    return {
      createTable,
      users: insertedExpensesType,
    };
  } catch (error) {
    console.error('Error seeding ExpensesType:', error);
    throw error;
  }
}
async function seedIncome(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Income (
        IncomeID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        IncomeTypeID INTEGER NOT NULL,
        IncomePlan INTEGER NOT NULL,
        IncomePerformance INTEGER NOT NULL,
      );
    `;

    console.log(`Created "Income" table`);

    // Insert data into the "Income" table
    const insertedIncome = await Promise.all(
      Incomees.map(async (Income) => {
        return client.sql`
        INSERT INTO Income (IncomeType, IncomePlan, IncomePerformance)
        VALUES (${Income.IncomeType},${Income.IncomePlan},${Income.IncomePerformance})
        ON CONFLICT (IncomeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedIncome.length} Income`);

    return {
      createTable,
      users: insertedIncome,
    };
  } catch (error) {
    console.error('Error seeding Income:', error);
    throw error;
  }
}
async function seedIncomeType(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS IncomeType (
        IncomeTypeID UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        IncomeType VARCHAR,
        ParentID INTEGER NOT NULL,
      );
    `;

    console.log(`Created "IncomeType" table`);

    // Insert data into the "IncomeType" table
    const insertedIncomeType = await Promise.all(
      IncomeTypees.map(async (IncomeType) => {
        return client.sql`
        INSERT INTO IncomeType (IncomeType, ParentID)
        VALUES (${IncomeType.IncomeType},${IncomeType.parentid})
        ON CONFLICT (IncomeTypeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedIncomeType.length} IncomeType`);

    return {
      createTable,
      users: insertedIncomeType,
    };
  } catch (error) {
    console.error('Error seeding IncomeType:', error);
    throw error;
  }
}
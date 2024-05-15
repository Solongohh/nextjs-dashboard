const { db } = require('@vercel/postgres');
const {
  Users,
  Employee,
  Department,
  Organisation,
  Branch,
  OtherService,
  ExhibitHistory,
  ExhibitType,
  Income,
  IncomeType,
  Expenses,
  ExpensesType,
  MuseumService,
  Kind,
  Occupation,
  CustomerType,
  BuildingCapacity,
  Address,
  AuthenticationHistory,
  ServiceAddress
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

// const { Employee, MuseumService, OtherService } = require('@/app/ui/form/buttons.jsx');
// const { Employee } = require('@/app/ui/form/buttons.tsx');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Users (
        UserID SERIAL PRIMARY KEY,
        UserRole VARCHAR(255) NOT NULL,
        UserMail VARCHAR(255) NOT NULL,
        UserPhone CHAR(8) NOT NULL,
        Password Varchar NOT NULL,
        EmployeeID INTEGER NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      Users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.Password, 10);
        return client.sql`
        INSERT INTO Users (UserRole, UserMail, UserPhone, Password, EmployeeID)
        VALUES ( ${user.UserRole}, ${user.UserMail}, ${user.UserPhone}, ${hashedPassword}, ${user.EmployeeID})
        ON CONFLICT (UserID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      Users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}
async function seedEmployee(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "Employee" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Employee (
        EmployeeID SERIAL PRIMARY KEY, 
        LastName VARCHAR(255) NOT NULL,
        FirstName VARCHAR(255) NOT NULL,
        Birthdate DATE,
        Sex CHAR(1),
        Register Char(10),
        Phone Char(8),
        Education VARCHAR,
        OccupationID INTEGER,
        Stateprize BOOLEAN,
        Impairment BOOLEAN, 
        AddressID INTEGER,
        DepartmentID INTEGER
      );
    `;
    console.log(`Created "Employee" table`);

    // Insert data into the "employee" table
    const insertedEmployee = await Promise.all(
      Employee.map(async (employee) => {
        return client.sql`
        INSERT INTO Employee (EmployeeID, LastName, FirstName, Birthdate, Sex, Register, Phone, Education, OccupationID, Stateprize, Impairment, AddressID, DepartmentID)
        VALUES (${employee.EmployeeID}, ${employee.LastName}, ${employee.FirstName}, ${employee.BirthDate}, ${employee.Sex},${employee.Register},${employee.Phone},${employee.Education},${employee.OccupationID},${employee.Stateprize},${employee.Impairment}, ${employee.AddressID}, ${employee.DepartmentID})
        ON CONFLICT (EmployeeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedEmployee.length} Employee`);

    return {
      createTable,
      Employee: insertedEmployee,
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
        OccupationID SERIAL PRIMARY KEY,
        Occupation VARCHAR(255) NOT NULL,
        ParentID INTEGER
      );
    `;

    console.log(`Created "Occupation" table`);

    // Insert data into the "Occupation" table
    const insertedOccupation = await Promise.all(
      Occupation.map(async (occupation) => {
        return client.sql`
        INSERT INTO Occupation (OccupationID, Occupation, ParentID)
        VALUES (${occupation.OccupationID}, ${occupation.Occupation}, ${occupation.Parentid})
        ON CONFLICT (OccupationID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedOccupation.length} Occupation`);

    return {
      createTable,
      Occupation: insertedOccupation,
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
        AddressID SERIAL PRIMARY KEY,
        Country VARCHAR(255) NOT NULL,
        Province VARCHAR,
        District VARCHAR,
        Khoroo Varchar(255)
      );
    `;

    console.log(`Created "Address" table`);

    // Insert data into the "Address" table
    const insertedAddress = await Promise.all(
      Address.map(async (address) => {
        return client.sql`
        INSERT INTO Address (AddressID, Country, Province, District, Khoroo)
        VALUES (${address.AddressID}, ${address.Country}, ${address.Province}, ${address.District}, ${address.Khoroo})
        ON CONFLICT (AddressID) DO NOTHING
      `;
      }),
    );

    console.log(`Seeded ${insertedAddress.length} address`);

    return {
      createTable,
      Address: insertedAddress,
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
        ExhibitID SERIAL PRIMARY KEY,
        ExhibitTypeID INTEGER NOT NULL,
        Name VARCHAR(255) NOT NULL,
        Added_Exhibit VARCHAR,
        Rating VARCHAR,
        Weight Double precision,
        Set VARCHAR(255),
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
          ExhibitID,
          ExhibitTypeID,
          Name,
          Added_Exhibit,
          Rating,
          Weight,
          Set,
          Definition,
          Status,
          AddressID
      )
      VALUES (
          ${exhibithistory.ExhibitID},
          ${exhibithistory.ExhibitTypeID},     
          ${exhibithistory.Name}, 
          ${exhibithistory.Added_Exhibit},
          ${exhibithistory.Rating},               
          ${exhibithistory.Weight},                 
          ${exhibithistory.Set},         
          ${exhibithistory.Definition},         
          ${exhibithistory.Status},
          ${exhibithistory.AddressID}
      )
      ON CONFLICT (ExhibitID) DO NOTHING;

      `;
      }),
    );

    console.log(`Seeded ${insertedExhibitHistory.length} exhibithistory`);

    return {
      createTable,
      ExhibitHistory: insertedExhibitHistory,
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
        ExhibitTypeID SERIAL PRIMARY KEY,
        ExhibitType VARCHAR,
        ParentID INTEGER NOT NULL
      );
    `;

    console.log(`Created "ExhibitType" table`);

    // Insert data into the "exhibittype" table
    const insertedExhibitType = await Promise.all(
      ExhibitType.map(async (exhibittype) => {
        return client.sql`
        INSERT INTO ExhibitType (ExhibitTypeID, ExhibitType, ParentID)
        Values (${exhibittype.ExhibitTypeID}, ${exhibittype.ExhibitType}, ${exhibittype.ParentID})
        ON CONFLICT (ExhibitTypeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedExhibitType.length} exhibittype`);

    return {
      createTable,
      ExhibitType: insertedExhibitType,
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
        MuseumServiceID SERIAL PRIMARY KEY,
        ExhibitTypeID INTEGER NOT NULL,
        CustomerTypeID INTEGER NOT NULL,
        KindID INTEGER NOT NULL,
        CustomerCount INTEGER NOT NULL
      );
    `;

    console.log(`Created "MuseumService" table`);

    // Insert data into the "MuseumService" table
    const insertedMuseumService = await Promise.all(
      MuseumService.map(async (MuseumService) => {
        return client.sql`
        INSERT INTO MuseumService (MuseumServiceID, ExhibitTypeID, CustomerTypeID, KindID, CustomerCount)
        VALUES (${MuseumService.MuseumServiceID}, ${MuseumService.ExhibitTypeID}, ${MuseumService.CustomerTypeID}, ${MuseumService.KindID}, ${MuseumService.CustomerCount})
        ON CONFLICT (MuseumServiceID) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedMuseumService.length} MuseumService`);

    return {
      createTable,
      MuseumService: insertedMuseumService,
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
        OtherServiceID SERIAL PRIMARY KEY,
        Services VARCHAR,
        KindID INTEGER NOT NULL,
        CustomerTypeID INTEGER NOT NULL,
        CustomerCount INTEGER NOT NULL
      );
    `;

    console.log(`Created "OtherService" table`);

    // Insert data into the "OtherService" table
    const insertedOtherService = await Promise.all(
      OtherService.map(async (OtherService) => {
        return client.sql`
        INSERT INTO OtherService (OtherServiceID, Services, KindID, CustomerTypeID, CustomerCount)
        VALUES (${OtherService.OtherServiceID}, ${OtherService.Services}, ${OtherService.KindID}, ${OtherService.CustomerTypeID}, ${OtherService.CustomerCount})
        ON CONFLICT (OtherServiceID) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedOtherService.length} OtherService`);

    return {
      createTable,
      OtherService: insertedOtherService,
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
        KindID SERIAL PRIMARY KEY,
        Kind VARCHAR,
        ParentID INTEGER NOT NULL
      );
    `;

    console.log(`Created "Kind" table`);

    // Insert data into the "Kind" table
    const insertedKind = await Promise.all(
      Kind.map(async (Kind) => {
        return client.sql`
        INSERT INTO Kind (KindID, Kind, ParentID)
        VALUES (${Kind.KindID}, ${Kind.Kind}, ${Kind.ParentID})
        ON CONFLICT (KindID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedKind.length} Kind`);

    return {
      createTable,
      Kind: insertedKind,
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
        CustomerTypeID SERIAL PRIMARY KEY,
        CustomerType VARCHAR
      );
    `;

    console.log(`Created "CustomerType" table`);

    // Insert data into the "CustomerType" table
    const insertedCustomerType = await Promise.all(
      CustomerType.map(async (CustomerType) => {
        return client.sql`
        INSERT INTO CustomerType (CustomerTypeID, CustomerType)
        VALUES (${CustomerType.CustomerTypeID}, ${CustomerType.CustomerType})
        ON CONFLICT (CustomerTypeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedCustomerType.length} CustomerType`);

    return {
      createTable,
      CustomerType: insertedCustomerType,
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
        BuildingCapacityID SERIAL PRIMARY KEY,
        BuildingCapacity VARCHAR,
        CapacityPlan DOUBLE precision NOT NULL,
        CapacityPerformance DOUBLE precision NOT NULL
      );
    `;

    console.log(`Created "BuildingCapacity" table`);

    // Insert data into the "BuildingCapacity" table
    const insertedBuildingCapacity = await Promise.all(
      BuildingCapacity.map(async (BuildingCapacity) => {
        return client.sql`
        INSERT INTO BuildingCapacity (BuildingCapacityID, BuildingCapacity, CapacityPlan, CapacityPerformance)
        VALUES (${BuildingCapacity.BuildingCapacityID}, ${BuildingCapacity.BuildingCapacity},${BuildingCapacity.CapacityPlan},${BuildingCapacity.CapacityPerformance})
        ON CONFLICT (BuildingCapacityID) DO NOTHING;
        `;
      }),
    );

    console.log(`Seeded ${insertedBuildingCapacity.length} BuildingCapacity`);

    return {
      createTable,
      BuildingCapacity: insertedBuildingCapacity,
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
        ExpensesID SERIAL PRIMARY KEY,
        ExpensesTypeID INTEGER NOT NULL,
        ExpensesPlan DOUBLE precision NOT NULL,
        ExpensesPerformance DOUBLE precision NOT NULL
      );
    `;

    console.log(`Created "Expenses" table`);

    // Insert data into the "Expenses" table
    const insertedExpenses = await Promise.all(
      Expenses.map(async (Expenses) => {
        return client.sql`
        INSERT INTO Expenses (ExpensesID, ExpensesTypeID, ExpensesPlan, ExpensesPerformance)
        VALUES (${Expenses.ExpensesTypeID},${Expenses.ExpensesTypeID},${Expenses.ExpensesPlan},${Expenses.ExpensesPerformance})
        ON CONFLICT (ExpensesID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedExpenses.length} Expenses`);

    return {
      createTable,
      Expenses: insertedExpenses,
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
        ExpensesTypeID SERIAL PRIMARY KEY,
        ExpensesType VARCHAR,
        ParentID INTEGER NOT NULL
      );
    `;

    console.log(`Created "ExpensesType" table`);

    // Insert data into the "ExpensesType" table
    const insertedExpensesType = await Promise.all(
      ExpensesType.map(async (ExpensesType) => {
        return client.sql`
        INSERT INTO ExpensesType (ExpensesTypeID, ExpensesType, ParentID)
        VALUES (${ExpensesType.ExpensesTypeID}, ${ExpensesType.ExpensesType},${ExpensesType.ParentID})
        ON CONFLICT (ExpensesTypeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedExpensesType.length} ExpensesType`);

    return {
      createTable,
      ExpensesType: insertedExpensesType,
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
        IncomeID SERIAL PRIMARY KEY,
        IncomeTypeID INTEGER NOT NULL,
        IncomePlan DOUBLE precision NOT NULL,
        IncomePerformance DOUBLE precision NOT NULL
      );
    `;

    console.log(`Created "Income" table`);

    // Insert data into the "Income" table
    const insertedIncome = await Promise.all(
      Income.map(async (Income) => {
        return client.sql`
        INSERT INTO Income (IncomeID, IncomeTypeID, IncomePlan, IncomePerformance)
        VALUES (${Income.IncomeID}, ${Income.IncomeTypeID},${Income.IncomePlan},${Income.IncomePerformance})
        ON CONFLICT (IncomeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedIncome.length} Income`);

    return {
      createTable,
      Income: insertedIncome,
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
        IncomeTypeID SERIAL PRIMARY KEY,
        IncomeType VARCHAR,
        ParentID INTEGER NOT NULL
      );
    `;

    console.log(`Created "IncomeType" table`);

    // Insert data into the "IncomeType" table
    const insertedIncomeType = await Promise.all(
      IncomeType.map(async (IncomeType) => {
        return client.sql`
        INSERT INTO IncomeType (IncomeTypeID, IncomeType, ParentID)
        VALUES (${IncomeType.IncomeTypeID}, ${IncomeType.IncomeType},${IncomeType.ParentID})
        ON CONFLICT (IncomeTypeID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedIncomeType.length} IncomeType`);

    return {
      createTable,
      IncomeType: insertedIncomeType,
    };
  } catch (error) {
    console.error('Error seeding IncomeType:', error);
    throw error;
  }
}
async function seedDepartment(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Department (
        DepartmentID SERIAL PRIMARY KEY,
        DepartmentName VARCHAR,
        OrganisationID INTEGER
      );
    `;

    console.log(`Created "Department" table`);

    // Insert data into the "Department" table
    const insertedDepartment = await Promise.all(
      Department.map(async (Department) => {
        return client.sql`
        INSERT INTO Department (DepartmentID, DepartmentName, OrganisationID)
        VALUES (${Department.DepartmentID},${Department.DepartmentName}, ${Department.OrganisationID})
        ON CONFLICT (DepartmentID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedDepartment.length} Department`);

    return {
      createTable,
      Department: insertedDepartment,
    };
  } catch (error) {
    console.error('Error seeding Department:', error);
    throw error;
  }
}
async function seedOrganisation(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "organisation" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Organisation (
        OrganisationID SERIAL PRIMARY KEY,
        OrganisationName VARCHAR
      );
    `;

    console.log(`Created "Organisation" table`);

    // Insert data into the "Organisation" table
    const insertedOrganisation = await Promise.all(
      Organisation.map(async (Organisation) => {
        return client.sql`
        INSERT INTO Organisation (OrganisationID, OrganisationName)
        VALUES (${Organisation.OrganisationID},${Organisation.OrganisationName})
        ON CONFLICT (OrganisationID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedOrganisation.length} Organisation`);

    return {
      createTable,
      Organisation: insertedOrganisation,
    };
  } catch (error) {
    console.error('Error seeding Organisation:', error);
    throw error;
  }
}
async function seedBranch(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "branch" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS Branch (
        BranchID SERIAL PRIMARY KEY,
        BranchName VARCHAR,
        AddressID INTEGER,
        OrganisationID INTEGER
      );
    `;

    console.log(`Created "Branch" table`);

    // Insert data into the "Organisation" table
    const insertedBranch = await Promise.all(
      Branch.map(async (Branch) => {
        return client.sql`
        INSERT INTO Branch (BranchID, BranchName, AddressID, OrganisationID)
        VALUES (${Branch.BranchID},${Branch.BranchName}, ${Branch.AddressID}, ${Branch.OrganisationID})
        ON CONFLICT (BranchID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedBranch.length} Branch`);

    return {
      createTable,
      Branch: insertedBranch,
    };
  } catch (error) {
    console.error('Error seeding Branch:', error);
    throw error;
  }
}
async function seedAuthenticationHistory(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "AuthenticationHistory" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS AuthenticationHistory (
        AuthenticationHistoryID SERIAL PRIMARY KEY,
        LoginDate Date,
        BuildingCapacityID INTEGER,
        ExpensesID INTEGER,
        IncomeID INTEGER,
        OtherServiceID INTEGER,
        MuseumServiceID INTEGER,
        ExhibitID INTEGER,
        UserID INTEGER
      );
    `;

    console.log(`Created "AuthenticationHistory" table`);

    // Insert data into the "Organisation" table
    const insertedAuthenticationHistory = await Promise.all(
      AuthenticationHistory.map(async (AuthenticationHistory) => {
        return client.sql`
        INSERT INTO AuthenticationHistory (
          AuthenticationHistoryID,
          LoginDate,
          BuildingCapacityID,
          ExpensesID,
          IncomeID,
          OtherServiceID,
          MuseumServiceID,
          ExhibitID,
          UserID
        )
        VALUES (
          ${AuthenticationHistory.AuthenticationHistoryID},
          ${AuthenticationHistory.LoginDate},
          ${AuthenticationHistory.BuildingCapacityID},
          ${AuthenticationHistory.ExpensesID},
          ${AuthenticationHistory.IncomeID},
          ${AuthenticationHistory.OtherServiceID},
          ${AuthenticationHistory.MuseumServiceID},
          ${AuthenticationHistory.ExhibitID},
          ${AuthenticationHistory.UserID}
        )
        ON CONFLICT (AuthenticationHistoryID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedAuthenticationHistory.length} AuthenticationHistory`);

    return {
      createTable,
      AuthenticationHistory: insertedAuthenticationHistory,
    };
  } catch (error) {
    console.error('Error seeding AuthenticationHistory:', error);
    throw error;
  }
}
async function seedServiceAddress(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "ServiceAddress" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS ServiceAddress (
        ServiceAddressID SERIAL PRIMARY KEY,
        MuseumServiceID INTEGER,
        AddressID INTEGER
      );
    `;

    console.log(`Created "ServiceAddress" table`);

    // Insert data into the "Organisation" table
    const insertedServiceAddress = await Promise.all(
      ServiceAddress.map(async (ServiceAddress) => {
        return client.sql`
        INSERT INTO ServiceAddress (
          ServiceAddressID,
          MuseumServiceID,
          AddressID
        )
        VALUES (
          ${ServiceAddress.ServiceAddressID},
          ${ServiceAddress.MuseumServiceID},
          ${ServiceAddress.AddressID}
        )
        ON CONFLICT (ServiceAddressID) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedServiceAddress.length} ServiceAddress`);

    return {
      createTable,
      ServiceAddress: insertedServiceAddress,
    };
  } catch (error) {
    console.error('Error seeding ServiceAddress:', error);
    throw error;
  }
}
async function main() {
  const client = await db.connect();
    await seedUsers(client);
    await seedEmployee(client);
    await seedOccupation(client);
    await seedAddress(client);
    await seedExhibitHistory(client);
    await seedExhibitType(client);
    await seedMuseumService(client);
    await seedOtherService(client);
    await seedKind(client);
    await seedCustomerType(client);
    await seedBuildingCapacity(client);
    await seedExpenses(client);
    await seedExpensesType(client);
    await seedIncome(client);
    await seedIncomeType(client);
    await seedDepartment(client);
    await seedOrganisation(client);
    await seedBranch(client);
    await seedAuthenticationHistory(client);
    await seedServiceAddress(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});

// DROP TABLE ServiceAddress;
// DROP TABLE AuthenticationHistory;
// DROP TABLE BuildingCapacity;
// DROP TABLE ExpensesType;
// DROP TABLE IncomeType;
// DROP TABLE Department;
// DROP TABLE Expenses;
// DROP TABLE Income;
// DROP TABLE Organisation;
// DROP TABLE Branch;
// DROP TABLE Kind;
// DROP TABLE CustomerType;
// DROP TABLE MuseumService;
// DROP TABLE OtherService;
// DROP TABLE ExhibitType;
// DROP TABLE ExhibitHistory;
// DROP TABLE Address;
// DROP TABLE Occupation;
// DROP TABLE Employee;
// DROP TABLE Users;

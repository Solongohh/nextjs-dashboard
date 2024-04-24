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
        EmployeeID Int FOREIGN KEY REFERENCES Employee (EmployeeID)
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
        Sex ENUM ('F', 'M'),
        Register Char(10),
        Phone Char(8),
        Education ENUM('Боловсролгүй','Бага','Суурь','Бүрэн дунд','Техникийн болон мэргэжилтэн','Тусгай мэргэжлийн дунд','Дипломын болон бакалаврын дээд','Магистр','Доктор'),
        Occupation Int FOREIGN KEY REFERENCES Occupation (OccupationID).
        Stateprize BOOLEAN NOT NULL,
        Impairment BOOLEAN NOT NULL,
        AddressID Int FOREIGN KEY REFERENCES Address (AddressID)
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
        OccupationID Int PRIMARY KEY,
        Occupation VARCHAR(255) NOT NULL,
        ParentID Int FOREIGN KEY REFERENCES Occupation (OccupationID)
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
        Province ENUM('Архангай', 'Баян-өлгий', 'Баянхонгор', 'Булган', 'Говь-Алтай', 'Говьсүмбэр', 'Дархан-Уул', 'Дорноговь', 'Дорнод', 'Дундговь', 'Завхан', 'Орхон', 'Өвөрхангай', 'Өмнөговь', 'Сүхбаатар', 'Сэлэнгэ', 'Төв', 'Увс', 'Ховд', 'Хөвсгөл', 'Хэнтий'),
        Disctrict ENUM('Багануур', 'Багахангай', 'Баянгол', 'Баянзүрх', 'Налайх', 'Сонгинохайрхан', 'Сүхбаатар', 'Хан-Уул', 'Чингэлтэй'),
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
        ExhibitTypeID Int FOREIGN KEY REFERENCES ExhibitType (ExhibitTypeID),
        Name VARCHAR(255) NOT NULL,
        Added_Exhibit ENUM('Худалдан авсан' | 'Бэлэг хандив' | 'Шилжүүлсэн' | 'Хайгуул малтлага, судалгаагаар'),
        Rating ENUM('Түүх, соёлын хосгүй үнэт' | 'Түүх соёлын үнэт'),
        Weight Double precision,
        Set VARCHAR(255),
        Restoration BOOLEAN NOT NULL,
        RestorationDetail VARCHAR(255),
        Exposed BOOLEAN NOT NULL,
        ExposedDetail VARCHAR(255),
        Definition VARCHAR(255),
        Status ENUM('Хасагдсан үзмэр' | 'Дижитал хэлбэрт оруулсан' | 'Сэргээн засварласан' | 'Хуулбарлагдсан'),
        AddressID Int FOREIGN KEY REFERENCES Address (AddressID)
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
        ExhibitTypeID Int PRIMARY KEY,
        ExhibitType ENUM('Байнгын үзүүллэг' | 'Түр үзэсгэлэн' | 'Байгалийн өвийн' | 'Археологийн' | 'Түүхийн' | 'Угсаатны зүйн' | 'Шашин шүтлэгийн' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - Уран зураг' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - Монгол зураг - шүтээн зураг' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - Уран баримал' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - График' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - Инстоляци' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - Гар урлалын' | 'Урлаг, уран сайхны - Гэрэл зургийн'),
        ParentID Int FOREIGN KEY REFERENCES ExhibitType (ExhibitTypeID)
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
        ExhibitTypeID Int FOREIGN KEY REFERENCES ExhibitType (ExhibitTypeID),
        CustomerTypeID Int FOREIGN KEY REFERENCES CustomerType (CustomerTypeID),
        KindID  Int FOREIGN KEY REFERENCES Kind (KindID)
      );
    `;

    console.log(`Created "MuseumService" table`);

    // Insert data into the "MuseumService" table
    const insertedMuseumService = await Promise.all(
      MuseumServicees.map(async (MuseumService) => {
        return client.sql`
        INSERT INTO MuseumService (ExhibitTypeID, CustomerTypeID, KindID)
        VALUES (${MuseumService.exhibitTypeId}, ${MuseumService.customerTypeId}, ${MuseumService.kindId})
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
        Services ENUM('Музейн боловсролын ажил','Сургалт семинар','Дугуйлан','Уралдаан, тэмцээн, наадам','Хурал, зөвлөгөөн','Үзэсгэлэн худалдаа','Зохион байгуулсан эвент / арга хэмжээ'),
        CustomerTypeID Int FOREIGN KEY REFERENCES CustomerType (CustomerTypeID),
      );
    `;

    console.log(`Created "OtherService" table`);

    // Insert data into the "OtherService" table
    const insertedOtherService = await Promise.all(
      OtherServicees.map(async (OtherService) => {
        return client.sql`
        INSERT INTO OtherService (Services, CustomerTypeID)
        VALUES (${OtherService.services}, ${OtherService.customerTypeId})
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
        Kind ENUM('Үзэсгэлэнгийн танхимаар','Өөрийн','Хамтарсан','Гадны','Нүүдлийн үйлчилгээгээр','Дотоодод','Аймаг, нийслэл','Сум, дүүрэг','Баг, хороо','Гадаадад','Ази','Европ','Бусад'),
        ParentID Int FOREIGN KEY REFERENCES Kind (KindID),
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
        CustomerType ENUM('Хүүхэд','Төлбөргүй','Гадаад','Тусгай бүлгийн','Хөгжлийн бэрхшээлтэй','Бусад'),
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
        BuildingCapacity ENUM('Барилгын нийт талбай м2' | 'Барилгын нийт эзлэхүүн м3' | 'Тоглолтын тайзны эзлэхүүн м3' | 'Барилын нийт өрөөний тоо' | 'Барилгын давхрын тоо' | 'Цахилгаан шатны тоо' | 'Хөрөөны хөгжлийн бэрхшээлтэй иргэд явах тусгай замын тоо' | 'Хөгжлийн бэрхшээлтэй иргэдэд зориулсан ариун цэврийн өрөөний тоо' | 'Тэргэнцэртэй иргэдийн налуу замын тоо' | 'Тайзны тоо' | 'Суудлын тоо'),
        CapacityPlan Int NOT NULL,
        CapacityPerformance Int NOT NULL,
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
        ExpensesTypeID Int FOREIGN KEY REFERENCES ExpensesType (ExpensesTypeID),
        ExpensesPlan Int NOT NULL,
        ExpensesPerformance Int NOT NULL,
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
        ExpensesType ENUM ('Урсгал зардал','Соёлын үйл ажиллагааны зардал','Ном хэвлэл худалдан авах зардал','Уран бүтээлийн зардал','Түүх соёлын дурсгал зүйлийг хамгаалах зардал','Түүх соёлын дурсгалт зүйл сэргээн засварлах зардал','Гадаадад зохиогдох соёл урлагийн а/хэмжээний зардал','Сургалтын зардал','Үүнээс гадагш чиглэсэн сургалтын зардал','Соёл, олон нийтийн ажил зохион байгуулсан зардал','Үүнээс гадагш чиглэсэн арга хэмжээний зардал'),
        ParentID Int FOREIGN KEY REFERENCES ExpensesType (ExpensesTypeID),
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
        IncomeTypeID Int FOREIGN KEY REFERENCES IncomeType (IncomeTypeID),
        IncomePlan Int NOT NULL,
        IncomePerformance Int NOT NULL,
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
        IncomeType ENUM ('Үйл ажиллагааны орлого','Байгууллагын ажил үйлчилгээний (өөрийн) орлого','Түрээсийн орлого','Бусад орлого','Тусламж санхүүжилтийн орлого','Улсын төсвөөс','Орон нутгийн төсвөөс','Хөтөлбөр, төслийн санхүүжилт'),
        ParentID Int FOREIGN KEY REFERENCES IncomeType (IncomeTypeID),
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
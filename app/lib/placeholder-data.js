// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

const { Exhibit } = require("../ui/form/buttons");

// const { Employee } = require("../ui/form/buttons");

// https://nextjs.org/learn/dashboard-app/fetching-data
const User = [
  {
    UserID: '02',
    UserRole: 'Administrator',
    UserMail: 'User@gmail.com',
    UserPhone: '88151515',
    Password: '123456',
    EmployeeID: '102'
  },
];
const Employee = [
  {
    EmployeeID: '1',
    LastName: 'asdf',
    FirstName: 'asdf',
    Birthdate: '2024/01/01',
    Sex: 'F',
    Register: 'АБ12345687',
    Phone: '88776655',
    Education: 'Бага',
    Occupation: '01',
    Stateprize: false,
    Impairment: false,
    AddressID: '01'
  }
];
const OtherService = [
  {
    OtherServiceID: '1',
    Service: 'Боловсролын, ажил',
    KindID: '1',
    CustomerTypeID: '1',
    CustomerCount: '50'
  },
  {
    OtherServiceID: '2',
    Service: 'Сургалт, семинар',
    KindID: '2',
    CustomerTypeID: '1',
    CustomerCount: '52'
  },
  {
    OtherServiceID: '3',
    Service: 'Дугуйлан',
    KindID: '3',
    CustomerTypeID: '2',
    CustomerCount: '15'
  }
];
const ExhibitHistory = [
  {
    ExhibitID: '1',
    ExhibitType: '5',
    Name: 'Богд хааны сандал',
    Added_Exhibit: 'Хайгуул малтлага, судалгаагаар',
    Rating: 'Түүх соёлын хосгүй үнэт',
    Weight: '45',
    Set: 'Эсгий дэвсгэр, хас хээн бүтээлэг',
    Definition: '',
    Status: 'Сэргээн засварласан',
    AddressID: '3',
  },
  {
    ExhibitID: '2',
    ExhibitType: '4',
    Name: 'Үлэг гүрвэлийн яс',
    Added_Exhibit: 'Хайгуул малтлага, судалгаагаар',
    Rating: 'Түүх соёлын үнэт',
    Weight: '45',
    Set: 'Эсгий дэвсгэр, хас хээн бүтээлэг',
    Definition: 'Цэрдийн галавын үеийн үлэг гүрвэлийн олдвор ',
    Status: 'Дижитал хэлбэрт оруулсан',
    AddressID: '3',
  }
]
const income = [
  {
    IncomeID: '1',
    IncomeTypeID: '1',
    IncomePlan: '1200000',
    IncomeID: '1190000'
  },
  {
    IncomeID: '2',
    IncomeTypeID: '3',
    IncomePlan: '450000',
    IncomeID: '420000'
  },
  {
    IncomeID: '3',
    IncomeTypeID: '4',
    IncomePlan: '55000',
    IncomeID: '55000'
  }
]
const MuseumService = [
  {
    MuseumServiceID: '1',
    ExhibitTypeID: '1',
    KindID: '1',
    CustomerTypeID: '3',
    CustomerCount: '42'
  },
  {
    MuseumServiceID: '2',
    ExhibitTypeID: '5',
    KindID: '3',
    CustomerTypeID: '2',
    CustomerCount: '18'
  },
  {
    MuseumServiceID: '1',
    ExhibitTypeID: '3',
    KindID: '4',
    CustomerTypeID: '1',
    CustomerCount: '63'
  }
]
// const customers = [
//   {
//     id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
//     name: 'Delba de Oliveira',
//     email: 'delba@oliveira.com',
//     image_url: '/customers/delba-de-oliveira.png',
//   },
//   {
//     id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
//     name: 'Lee Robinson',
//     email: 'lee@robinson.com',
//     image_url: '/customers/lee-robinson.png',
//   },
//   {
//     id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
//     name: 'Hector Simpson',
//     email: 'hector@simpson.com',
//     image_url: '/customers/hector-simpson.png',
//   },
//   {
//     id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
//     name: 'Steven Tey',
//     email: 'steven@tey.com',
//     image_url: '/customers/steven-tey.png',
//   },
//   {
//     id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
//     name: 'Steph Dietz',
//     email: 'steph@dietz.com',
//     image_url: '/customers/steph-dietz.png',
//   },
//   {
//     id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
//     name: 'Michael Novotny',
//     email: 'michael@novotny.com',
//     image_url: '/customers/michael-novotny.png',
//   },
//   {
//     id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
//     name: 'Evil Rabbit',
//     email: 'evil@rabbit.com',
//     image_url: '/customers/evil-rabbit.png',
//   },
//   {
//     id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
//     name: 'Emil Kowalski',
//     email: 'emil@kowalski.com',
//     image_url: '/customers/emil-kowalski.png',
//   },
//   {
//     id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
//     name: 'Amy Burns',
//     email: 'amy@burns.com',
//     image_url: '/customers/amy-burns.png',
//   },
//   {
//     id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
//     name: 'Balazs Orban',
//     email: 'balazs@orban.com',
//     image_url: '/customers/balazs-orban.png',
//   },
// ];

// const invoices = [
//   {
//     customer_id: customers[0].id,
//     amount: 15795,
//     status: 'pending',
//     date: '2022-12-06',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 20348,
//     status: 'pending',
//     date: '2022-11-14',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 3040,
//     status: 'paid',
//     date: '2022-10-29',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 44800,
//     status: 'paid',
//     date: '2023-09-10',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 34577,
//     status: 'pending',
//     date: '2023-08-05',
//   },
//   {
//     customer_id: customers[7].id,
//     amount: 54246,
//     status: 'pending',
//     date: '2023-07-16',
//   },
//   {
//     customer_id: customers[6].id,
//     amount: 666,
//     status: 'pending',
//     date: '2023-06-27',
//   },
//   {
//     customer_id: customers[3].id,
//     amount: 32545,
//     status: 'paid',
//     date: '2023-06-09',
//   },
//   {
//     customer_id: customers[4].id,
//     amount: 1250,
//     status: 'paid',
//     date: '2023-06-17',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8546,
//     status: 'paid',
//     date: '2023-06-07',
//   },
//   {
//     customer_id: customers[1].id,
//     amount: 500,
//     status: 'paid',
//     date: '2023-08-19',
//   },
//   {
//     customer_id: customers[5].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-03',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-06-18',
//   },
//   {
//     customer_id: customers[0].id,
//     amount: 8945,
//     status: 'paid',
//     date: '2023-10-04',
//   },
//   {
//     customer_id: customers[2].id,
//     amount: 1000,
//     status: 'paid',
//     date: '2022-06-05',
//   },
// ];

// const revenue = [
//   { month: 'Jan', revenue: 2000 },
//   { month: 'Feb', revenue: 1800 },
//   { month: 'Mar', revenue: 2200 },
//   { month: 'Apr', revenue: 2500 },
//   { month: 'May', revenue: 2300 },
//   { month: 'Jun', revenue: 3200 },
//   { month: 'Jul', revenue: 3500 },
//   { month: 'Aug', revenue: 3700 },
//   { month: 'Sep', revenue: 2500 },
//   { month: 'Oct', revenue: 2800 },
//   { month: 'Nov', revenue: 3000 },
//   { month: 'Dec', revenue: 4800 },
// ];

module.exports = {
  User,
  Employee,
  OtherService,
  ExhibitHistory,
  Income,
  MuseumService
};

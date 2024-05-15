const Users = [
  {
    UserRole: 'User',
    UserMail: 'User@gmail.com',
    UserPhone: '88151515',
    Password: '123456',
    EmployeeID: '1'
  },
  {
    UserRole: 'Admin',
    UserMail: 'Soko7596@gmail.com',
    UserPhone: '88151515',
    Password: '123456',
    EmployeeID: '2'
  }
];
const Employee = [
  {
    LastName: 'Дөлгөөн',
    FirstName: 'Наран',
    Birthdate: '2000/01/01',
    Sex: 'F',
    Register: 'АБ12345687',
    Phone: '88776655',
    Education: 'Бага',
    OccupationID: '1',
    Stateprize: false,
    Impairment: false,
    AddressID: '01',
    DepartmentID: '1'
  },
  {
    LastName: 'Батбаяр',
    FirstName: 'Сувд',
    Birthdate: '2000/03/11',
    Sex: 'F',
    Register: 'БА12455687',
    Phone: '88774152',
    Education: 'Бүрэн',
    OccupationID: '5',
    Stateprize: false,
    Impairment: true,
    AddressID: '02',
    DepartmentID: '2'
  },
  {
    LastName: 'Учрал',
    FirstName: 'Цэцэнбилэг',
    Birthdate: '1999/01/21',
    Sex: 'F',
    Register: 'АЛ9638587',
    Phone: '88765412',
    Education: 'Магистр',
    OccupationID: '2',
    Stateprize: false,
    Impairment: false,
    AddressID: '03',
    DepartmentID: '1'
  },
  {
    LastName: 'Мөнх-Ирээдүй',
    FirstName: 'Марал',
    Birthdate: '2002/08/03',
    Sex: 'F',
    Register: 'УБ12301687',
    Phone: '88798765',
    Education: 'Бага',
    OccupationID: '3',
    Stateprize: true,
    Impairment: false,
    AddressID: '04',
    DepartmentID: '2'
  },
  {
    LastName: 'Энх-Од',
    FirstName: 'Ялгуун',
    Birthdate: '2003/11/30',
    Sex: 'М',
    Register: 'БЛ02445687',
    Phone: '88963455',
    Education: 'Суурь',
    OccupationID: '4',
    Stateprize: false,
    Impairment: false,
    AddressID: '05',
    DepartmentID: '3'
  }
];
const Department = [
  {
    DepartmentName: 'Мэдээлэл технологийн алба',
    OrganisationID: '1'
  },
  {
    DepartmentName: 'Мэдээлэл технологийн алба',
    OrganisationID: '2'
  },
  {
    DepartmentName: 'Санхүүгийн алба',
    OrganisationID: '2'
  }
];
const Organisation = [
  {
    OrganisationName: 'Байгалийн түүхийн музей'
  },
  {
    OrganisationName: 'Богд хааны музей'
  },
  {
    OrganisationName: 'Чингис хааны музей'
  }
];
const Branch = [
  {
    BranchName: 'Салбар 1',
    AddressID: '6',
    OrganisationID: '1'
  },
  {
    BranchName: 'Салбар 2',
    AddressID: '7',
    OrganisationID: '1'
  }
];
const OtherService = [
  {
    Service: 'Боловсролын, ажил',
    KindID: '1',
    CustomerTypeID: '1',
    CustomerCount: '50'
  },
  {
    Service: 'Сургалт, семинар',
    KindID: '2',
    CustomerTypeID: '1',
    CustomerCount: '52'
  },
  {
    Service: 'Дугуйлан',
    KindID: '3',
    CustomerTypeID: '2',
    CustomerCount: '15'
  }
];
const ExhibitHistory = [
  {
    ExhibitTypeID: '5',
    Name: 'Богд хааны сандал',
    Added_Exhibit: 'Хайгуул малтлага, судалгаагаар',
    Rating: 'Түүх соёлын хосгүй үнэт',
    Weight: '45',
    Set: 'Эсгий дэвсгэр, хас хээн бүтээлэг',
    Definition: '',
    Status: 'Сэргээн засварласан',
    AddressID: '8',
  },
  {
    ExhibitTypeID: '4',
    Name: 'Үлэг гүрвэлийн яс',
    Added_Exhibit: 'Хайгуул малтлага, судалгаагаар',
    Rating: 'Түүх соёлын үнэт',
    Weight: '45',
    Set: 'Эсгий дэвсгэр, хас хээн бүтээлэг',
    Definition: 'Цэрдийн галавын үеийн үлэг гүрвэлийн олдвор ',
    Status: 'Дижитал хэлбэрт оруулсан',
    AddressID: '9',
  }
];
const Income = [
  {
    IncomeTypeID: '1',
    IncomePlan: '1200000',
    IncomePerformance: '1190000'
  },
  {
    IncomeTypeID: '3',
    IncomePlan: '450000',
    IncomePerformance: '420000'
  },
  {
    IncomeTypeID: '4',
    IncomePlan: '55000',
    IncomePerformance: '55000'
  }
];
const IncomeType = [
  { IncomeType: 'Үйл ажиллагааны орлого', ParentID: '0'},
  { IncomeType: 'Байгууллагын ажил үйлчилгээний өөрийн орлого', ParentID: '1'},
  { IncomeType: 'Үнэ төлбөргүй хүлээн авсан орлого', ParentID: '1'},
  { IncomeType: 'Түрээсийн орлого', ParentID: '1'},
  { IncomeType: 'Тусламж санхүүжилтийн орлого', ParentID: '0'},
  { IncomeType: 'Улсын төсвөөс', ParentID: '5'},
  { IncomeType: 'Орон нутгийн төсвөөс', ParentID: '5'},
  { IncomeType: 'Хөтөлбөр, төслийн санхүүжилт', ParentID: '5'},
  { IncomeType: 'Бусад орлого', ParentID: '5'}
];
const Expenses = [
  {
    ExpensesTypeID: '4',
    ExpensesPlan: '55000',
    ExpensesPerformance: '55000'
  },
  {
    ExpensesTypeID: '3',
    ExpensesPlan: '55000',
    ExpensesPerformance: '55000'
  },
  {
    ExpensesTypeID: '1',
    ExpensesPlan: '55000',
    ExpensesPerformance: '55000'
  },
  {
    ExpensesTypeID: '5',
    ExpensesPlan: '55000',
    ExpensesPerformance: '55000'
  }
];
const ExpensesType = [
  { ExpensesType: 'Урсгал зардал', ParentID: '0'},
  { ExpensesType: 'Соёлын үйл ажиллагааны зардал', ParentID: '1'},
  { ExpensesType: 'Ном хэвлэл худалдан авах зардал', ParentID: '2'},
  { ExpensesType: 'Музейн үзмэр худалдан авах зардал', ParentID: '2'},
  { ExpensesType: 'Уран бүтээлийн зардал', ParentID: '2'},
  { ExpensesType: 'Түүх соёлын дурсгалт зүйлийг хамгаалах зардал', ParentID: '2'},
  { ExpensesType: 'Түүх соёлын дурсгалт зүйлийг сэргээн засварлах зардал', ParentID: '2'},
  { ExpensesType: 'Гадаадад зохиогдох соёл урлагийн а/хэмжээний зардал', ParentID: '2'},
  { ExpensesType: 'Сургалтын зардал', ParentID: '1'},
  { ExpensesType: 'Үүнээс гадагш чиглэсэн сургалтын зардал', ParentID: '9'},
  { ExpensesType: 'Соёл, олон нийтийн ажил зохион байгуулсан зардал', ParentID: '1'},
  { ExpensesType: 'Үүнээс гадагшаа чиглэсэн арга хэмжээний зардал', ParentID: '11'}
];
const MuseumService = [
  {
    ExhibitTypeID: '1',
    KindID: '1',
    CustomerTypeID: '3',
    CustomerCount: '42'
  },
  {
    ExhibitTypeID: '5',
    KindID: '3',
    CustomerTypeID: '2',
    CustomerCount: '18'
  },
  {
    ExhibitTypeID: '3',
    KindID: '4',
    CustomerTypeID: '1',
    CustomerCount: '63'
  }
];
const Kind = [
  { Kind: 'Үзэсгэлэнгийн танхимаар', ParentID: '0'},
  { Kind: 'Өөрийн', ParentID: '0'},
  { Kind: 'Хамтарсан', ParentID: '2'},
  { Kind: 'Гадны',  ParentID: '2'},
  { Kind: 'Нүүдлийн үйлчилгээгээр',  ParentID: '2'},
  { Kind: 'Дотоодод',  ParentID: '2'},
  { Kind: 'Аймаг, нийслэл',  ParentID: '2'},
  { Kind: 'Сум, дүү',  ParentID: '2'},
  { Kind: 'Дүрслэх урлагийн',  ParentID: '8'},
  { Kind: 'Уран зураг',  ParentID: '9'},
  { Kind: 'Монгол зураг',  ParentID: '9'},
  { Kind: 'Уран баримал',  ParentID: '9'},
  { Kind: 'График',  ParentID: '9'},
  { Kind: 'Инстоляци',  ParentID: '9'},
  { Kind: 'Гар урлалын',  ParentID: '9'},
  { Kind: 'Гэрэл зургийн',  ParentID: '8'}
];
const Occupation = [
  { Occupation: 'Захиргаа аж ахуйн ажиллагчид', ParentID: '0'},
  { Occupation: 'Захирал /эрхлэгч/ дарга', ParentID: '1'},
  { Occupation: 'Маркетингийн ажилтан', ParentID: '1'},
  { Occupation: 'Номын санч, архив, бичиг хэрэг', ParentID: '1'},
  { Occupation: 'Бусад', ParentID: '1'},
  { Occupation: 'Мэргэжлийн ажиллагчид', ParentID: '0'},
  { Occupation: 'Эрдэм шинжилгээний ажилтан', ParentID: '6'},
  { Occupation: 'Боловсролын ажилтан', ParentID: '6'},
  { Occupation: 'Сан хөмрөгийн ажилтан', ParentID: '6'},
  { Occupation: 'Бүртгэл мэдээллийн санч', ParentID: '6'},
  { Occupation: 'Арга зүйч', ParentID: '6'},
  { Occupation: 'Лабораторын ажилтан', ParentID: '6'},
  { Occupation: 'Зураач дизайнер', ParentID: '6'},
  { Occupation: 'Куратор', ParentID: '6'},
  { Occupation: 'Чихмэлчин', ParentID: '6'},
  { Occupation: 'Сэргээн засварлагч', ParentID: '6'},
  { Occupation: 'Бусад', ParentID: '6'},
  { Occupation: 'Үйлчилгээний ажиллагчид', ParentID: '0'},
  { Occupation: 'Тайлбарлагч', ParentID: '18'},
  { Occupation: 'Үйлчилгээний зохион байгуулагч', ParentID: '18'},
  { Occupation: 'Үзмэр арчлан хамгаалах', ParentID: '18'},
  { Occupation: 'Үзмэр харгалзагч', ParentID: '18'},
  { Occupation: 'Бусад', ParentID: '18'},
  { Occupation: 'Түр хугацаагаар ажиллагчид', ParentID: '0'}
];
const ExhibitType = [
  { ExhibitType: 'Байнгын үзүүллэг',ParentID: '0'},
  { ExhibitType:  'Түр үзэсгэлэн',ParentID: '0'},
  { ExhibitType:  'Байгалийн өвийн',ParentID: '2'},
  { ExhibitType:  'Археологийн', ParentID: '2'},
  { ExhibitType:  'Түүхийн', ParentID: '2'},
  { ExhibitType:  'Угсаатны зүйн', ParentID: '2'},
  { ExhibitType:  'Шашин шүтлэгийн', ParentID: '2'},
  { ExhibitType:  'Урлаг, уран сайхны', ParentID: '2'},
  { ExhibitType:  'Дүрслэх урлагийн', ParentID: '8'},
  { ExhibitType:  'Уран зураг', ParentID: '9'},
  { ExhibitType:  'Монгол зураг', ParentID: '9'},
  { ExhibitType:  'Уран баримал', ParentID: '9'},
  { ExhibitType:  'График', ParentID: '9'},
  { ExhibitType:  'Инстоляци', ParentID: '9'},
  { ExhibitType:  'Гар урлалын', ParentID: '9'},
  { ExhibitType:  'Гэрэл зургийн', ParentID: '8'}
];
const CustomerType = [
  { CustomerType: 'Хүүхэд'},
  { CustomerType: 'Төлбөргүй'},
  { CustomerType: 'Гадаад'},
  { CustomerType: 'Тусгай бүлгийн'},
  { CustomerType: 'Хөгжлийн бэрхшээлтэй'},
  { CustomerType: 'Бусад'}
];
const BuildingCapacity = [
  { BuildingCapacity: 'Барилгын нийт талбай м2', CapacityPlan: '123', CapacityPerformance: '118'},
  { BuildingCapacity: 'Барилгын нийт эзлэхүүн м3', CapacityPlan: '452', CapacityPerformance: '410'},
  { BuildingCapacity: 'Тоглолтын тайзны эзлэхүүн', CapacityPlan: '80', CapacityPerformance: '80'},
  { BuildingCapacity: 'Барилгын нийт өрөөний тоо', CapacityPlan: '6', CapacityPerformance: '5'},
  { BuildingCapacity: 'Барилгын давхрын тоо', CapacityPlan: '2', CapacityPerformance: '2'},
  { BuildingCapacity: 'Цахилгаан шатны тоо', CapacityPlan: '1', CapacityPerformance: '1'},
  { BuildingCapacity: 'Харааны хөгжлийн бэрхшээлтэй иргэд явах тусгай замын тоо', CapacityPlan: '1', CapacityPerformance: '0'},
  { BuildingCapacity: 'Хөгжлийн бэрхшээлтэй иргэдэд зориулсан ариун цэврийн өрөөний тоо', CapacityPlan: '1', CapacityPerformance: '1'},
  { BuildingCapacity: 'Тэргэнцэртэй иргэдийн налуу замын тоо', CapacityPlan: '1', CapacityPerformance: '1'},
  { BuildingCapacity: 'Тайзны тоо', CapacityPlan: '2', CapacityPerformance: '2'},
  { BuildingCapacity: 'Суудлын тоо', CapacityPlan: '60', CapacityPerformance: '50'}
];
const Address = [
  { Country: 'Монгол', Province: 'Архангай', District: '-', Khoroo: '-'},
  { Country: 'Монгол', Province: 'Баян-Өлгий', District: '-', Khoroo: '-'},
  { Country: 'Монгол', Province: 'Булган', District: '-', Khoroo: '-'},
  { Country: 'Монгол', Province: 'Завхан', District: '-', Khoroo: '-'},
  { Country: 'Монгол', Province: 'Улаанбаатар', District: 'Баянзүрх', Khoroo: '1-р хороо'},
  { Country: 'Монгол', Province: 'Улаанбаатар', District: 'Сонгинохайрхан', Khoroo: '1-р хороо'},
  { Country: 'Монгол', Province: 'Улаанбаатар', District: 'Баянзүрх', Khoroo: '2-р хороо'},
  { Country: 'Монгол', Province: 'Улаанбаатар', District: 'Хан-Уул', Khoroo: '3-р хороо'},
  { Country: 'Монгол', Province: 'Улаанбаатар', District: 'Сонгинохайрхан', Khoroo: '1-р хороо'},
];
const AuthenticationHistory = [
  { LoginDate: '2024/04/30', BuildingCapacity: '3', ExpensesID: '0', IncomeID: '2', OtherService: '0', MuseumServiceID: '2', ExhibitID: '2', UserID: '1'},
  { LoginDate: '2024/04/28', BuildingCapacity: '2', ExpensesID: '2', IncomeID: '0', OtherService: '2', MuseumServiceID: '0', ExhibitID: '1', UserID: '1'},
  { LoginDate: '2024/04/26', BuildingCapacity: '1', ExpensesID: '1', IncomeID: '1', OtherService: '1', MuseumServiceID: '1', ExhibitID: '0', UserID: '1'}
];
const ServiceAddress = [
  { MuseumServiceID: '1', AddressID: '3'},
  { MuseumServiceID: '2', AddressID: '5'}
];
module.exports = {
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
};

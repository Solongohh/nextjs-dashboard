const Users = [
  {
    UserID: '01',
    UserRole: 'User',
    UserMail: 'User@gmail.com',
    UserPhone: '88151515',
    Password: '123456',
    EmployeeID: '1'
  },
  {
    UserID: '02',
    UserRole: 'Admin',
    UserMail: 'Soko7596@gmail.com',
    UserPhone: '88151515',
    Password: '123456',
    EmployeeID: '2'
  }
];
const Employee = [
  {
    EmployeeID: '1',
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
    EmployeeID: '2',
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
    EmployeeID: '3',
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
    EmployeeID: '4',
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
    EmployeeID: '5',
    LastName: 'Энх-Од',
    FirstName: 'Ялгуун',
    Birthdate: '2003/11/31',
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
    DepartmentID: '1',
    DepartmentName: 'Мэдээлэл технологийн алба',
    OrganisationID: '1'
  },
  {
    DepartmentID: '2',
    DepartmentName: 'Мэдээлэл технологийн алба',
    OrganisationID: '2'
  },
  {
    DepartmentID: '3',
    DepartmentName: 'Санхүүгийн алба',
    OrganisationID: '2'
  }
];
const Organisation = [
  {
    OrganisationID: '1',
    OrganisationName: 'Байгалийн түүхийн музей'
  },
  {
    OrganisationID: '2',
    OrganisationName: 'Богд хааны музей'
  },
  {
    OrganisationID: '3',
    OrganisationName: 'Чингис хааны музей'
  }
];
const Branch = [
  {
    BranchID: '1',
    BranchName: 'Салбар 1',
    AddressID: '6',
    OrganisationID: '1'
  },
  {
    BranchID: '2',
    BranchName: 'Салбар 2',
    AddressID: '7',
    OrganisationID: '1'
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
    ExhibitID: '2',
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
    IncomeID: '1',
    IncomeTypeID: '1',
    IncomePlan: '1200000',
    IncomePerformance: '1190000'
  },
  {
    IncomeID: '2',
    IncomeTypeID: '3',
    IncomePlan: '450000',
    IncomePerformance: '420000'
  },
  {
    IncomeID: '3',
    IncomeTypeID: '4',
    IncomePlan: '55000',
    IncomePerformance: '55000'
  }
];
const IncomeType = [
  {IncomeTypeID: '1' , IncomeType: 'Үйл ажиллагааны орлого', ParentID: '0'},
  {IncomeTypeID: '2' , IncomeType: 'Байгууллагын ажил үйлчилгээний өөрийн орлого', ParentID: '1'},
  {IncomeTypeID: '3' , IncomeType: 'Үнэ төлбөргүй хүлээн авсан орлого', ParentID: '1'},
  {IncomeTypeID: '4' , IncomeType: 'Түрээсийн орлого', ParentID: '1'},
  {IncomeTypeID: '5' , IncomeType: 'Тусламж санхүүжилтийн орлого', ParentID: '0'},
  {IncomeTypeID: '6' , IncomeType: 'Улсын төсвөөс', ParentID: '5'},
  {IncomeTypeID: '7' , IncomeType: 'Орон нутгийн төсвөөс', ParentID: '5'},
  {IncomeTypeID: '8' , IncomeType: 'Хөтөлбөр, төслийн санхүүжилт', ParentID: '5'},
  {IncomeTypeID: '9' , IncomeType: 'Бусад орлого', ParentID: '5'}
];
const Expenses = [
  {
    ExpensesID: '1',
    ExpensesTypeID: '4',
    ExpensesPlan: '55000',
    ExpensesPerformance: '55000'
  },
  {
    ExpensesID: '2',
    ExpensesTypeID: '3',
    ExpensesPlan: '55000',
    ExpensesPerformance: '55000'
  },
  {
    ExpensesID: '3',
    ExpensesTypeID: '1',
    ExpensesPlan: '55000',
    ExpensesPerformance: '55000'
  },
  {
    ExpensesID: '4',
    ExpensesTypeID: '5',
    ExpensesPlan: '55000',
    ExpensesPerformance: '55000'
  }
];
const ExpensesType = [
  {ExpensesTypeID: '1', ExpensesType: 'Урсгал зардал', ParentID: '0'},
  {ExpensesTypeID: '2', ExpensesType: 'Соёлын үйл ажиллагааны зардал', ParentID: '1'},
  {ExpensesTypeID: '3', ExpensesType: 'Ном хэвлэл худалдан авах зардал', ParentID: '2'},
  {ExpensesTypeID: '4', ExpensesType: 'Музейн үзмэр худалдан авах зардал', ParentID: '2'},
  {ExpensesTypeID: '5', ExpensesType: 'Уран бүтээлийн зардал', ParentID: '2'},
  {ExpensesTypeID: '6', ExpensesType: 'Түүх соёлын дурсгалт зүйлийг хамгаалах зардал', ParentID: '2'},
  {ExpensesTypeID: '7', ExpensesType: 'Түүх соёлын дурсгалт зүйлийг сэргээн засварлах зардал', ParentID: '2'},
  {ExpensesTypeID: '8', ExpensesType: 'Гадаадад зохиогдох соёл урлагийн а/хэмжээний зардал', ParentID: '2'},
  {ExpensesTypeID: '9', ExpensesType: 'Сургалтын зардал', ParentID: '1'},
  {ExpensesTypeID: '1',  ExpensesType: 'Үүнээс гадагш чиглэсэн сургалтын зардал', ParentID: '9'},
  {ExpensesTypeID: '1',  ExpensesType: 'Соёл, олон нийтийн ажил зохион байгуулсан зардал', ParentID: '1'},
  {ExpensesTypeID: '1',  ExpensesType: 'Үүнээс гадагшаа чиглэсэн арга хэмжээний зардал', ParentID: '11'}
];
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
];
const Kind = [
  { KindID: '1', Kind: 'Үзэсгэлэнгийн танхимаар', ParentID: '0'},
  { KindID: '2', Kind: 'Өөрийн', ParentID: '0'},
  { KindID: '3', Kind: 'Хамтарсан', ParentID: '2'},
  { KindID: '4', Kind: 'Гадны',  ParentID: '2'},
  { KindID: '5', Kind: 'Нүүдлийн үйлчилгээгээр',  ParentID: '2'},
  { KindID: '6', Kind: 'Дотоодод',  ParentID: '2'},
  { KindID: '7', Kind: 'Аймаг, нийслэл',  ParentID: '2'},
  { KindID: '8', Kind: 'Сум, дүү',  ParentID: '2'},
  { KindID: '9', Kind: 'Дүрслэх урлагийн',  ParentID: '8'},
  { KindID: '10', Kind: 'Уран зураг',  ParentID: '9'},
  { KindID: '11', Kind: 'Монгол зураг',  ParentID: '9'},
  { KindID: '12', Kind: 'Уран баримал',  ParentID: '9'},
  { KindID: '13', Kind: 'График',  ParentID: '9'},
  { KindID: '14', Kind: 'Инстоляци',  ParentID: '9'},
  { KindID: '15', Kind: 'Гар урлалын',  ParentID: '9'},
  { KindID: '16', Kind: 'Гэрэл зургийн',  ParentID: '8'}
];
const Occupation = [
  { OccupationID: '1', Occupation: 'Захиргаа аж ахуйн ажиллагчид', ParentID: '0'},
  { OccupationID: '2', Occupation: 'Захирал /эрхлэгч/ дарга', ParentID: '1'},
  { OccupationID: '3', Occupation: 'Маркетингийн ажилтан', ParentID: '1'},
  { OccupationID: '4', Occupation: 'Номын санч, архив, бичиг хэрэг', ParentID: '1'},
  { OccupationID: '5', Occupation: 'Бусад', ParentID: '1'},
  { OccupationID: '6', Occupation: 'Мэргэжлийн ажиллагчид', ParentID: '0'},
  { OccupationID: '7', Occupation: 'Эрдэм шинжилгээний ажилтан', ParentID: '6'},
  { OccupationID: '8', Occupation: 'Боловсролын ажилтан', ParentID: '6'},
  { OccupationID: '9', Occupation: 'Сан хөмрөгийн ажилтан', ParentID: '6'},
  { OccupationID: '10', Occupation: 'Бүртгэл мэдээллийн санч', ParentID: '6'},
  { OccupationID: '11', Occupation: 'Арга зүйч', ParentID: '6'},
  { OccupationID: '12', Occupation: 'Лабораторын ажилтан', ParentID: '6'},
  { OccupationID: '13', Occupation: 'Зураач дизайнер', ParentID: '6'},
  { OccupationID: '14', Occupation: 'Куратор', ParentID: '6'},
  { OccupationID: '15', Occupation: 'Чихмэлчин', ParentID: '6'},
  { OccupationID: '16', Occupation: 'Сэргээн засварлагч', ParentID: '6'},
  { OccupationID: '17', Occupation: 'Бусад', ParentID: '6'},
  { OccupationID: '18', Occupation: 'Үйлчилгээний ажиллагчид', ParentID: '0'},
  { OccupationID: '19', Occupation: 'Тайлбарлагч', ParentID: '18'},
  { OccupationID: '20', Occupation: 'Үйлчилгээний зохион байгуулагч', ParentID: '18'},
  { OccupationID: '21', Occupation: 'Үзмэр арчлан хамгаалах', ParentID: '18'},
  { OccupationID: '22', Occupation: 'Үзмэр харгалзагч', ParentID: '18'},
  { OccupationID: '23', Occupation: 'Бусад', ParentID: '18'},
  { OccupationID: '24', Occupation: 'Түр хугацаагаар ажиллагчид', ParentID: '0'}
];
const ExhibitType = [
  { ExhibitTypeID: '1', ExhibitType: 'Байнгын үзүүллэг',ParentID: '0'},
  { ExhibitTypeID: '2', ExhibitType:  'Түр үзэсгэлэн',ParentID: '0'},
  { ExhibitTypeID: '3', ExhibitType:  'Байгалийн өвийн',ParentID: '2'},
  { ExhibitTypeID: '4', ExhibitType:  'Археологийн', ParentID: '2'},
  { ExhibitTypeID: '5', ExhibitType:  'Түүхийн', ParentID: '2'},
  { ExhibitTypeID: '6', ExhibitType:  'Угсаатны зүйн', ParentID: '2'},
  { ExhibitTypeID: '7', ExhibitType:  'Шашин шүтлэгийн', ParentID: '2'},
  { ExhibitTypeID: '8', ExhibitType:  'Урлаг, уран сайхны', ParentID: '2'},
  { ExhibitTypeID: '9', ExhibitType:  'Дүрслэх урлагийн', ParentID: '8'},
  { ExhibitTypeID: '10', ExhibitType:  'Уран зураг', ParentID: '9'},
  { ExhibitTypeID: '11', ExhibitType:  'Монгол зураг', ParentID: '9'},
  { ExhibitTypeID: '12', ExhibitType:  'Уран баримал', ParentID: '9'},
  { ExhibitTypeID: '13', ExhibitType:  'График', ParentID: '9'},
  { ExhibitTypeID: '14', ExhibitType:  'Инстоляци', ParentID: '9'},
  { ExhibitTypeID: '15', ExhibitType:  'Гар урлалын', ParentID: '9'},
  { ExhibitTypeID: '16', ExhibitType:  'Гэрэл зургийн', ParentID: '8'}
];
const CustomerType = [
  {CustomerTypeID: '1', CustomerType: 'Хүүхэд'},
  {CustomerTypeID: '2', CustomerType: 'Төлбөргүй'},
  {CustomerTypeID: '3', CustomerType: 'Гадаад'},
  {CustomerTypeID: '4', CustomerType: 'Тусгай бүлгийн'},
  {CustomerTypeID: '5', CustomerType: 'Хөгжлийн бэрхшээлтэй'},
  {CustomerTypeID: '6', CustomerType: 'Бусад'}
];
const BuildingCapacity = [
  {BuildingCapacityID: '1', BuildingCapacity: 'Барилгын нийт талбай м2', CapacityPlan: '123', CapacityPerformance: '118'},
  {BuildingCapacityID: '2', BuildingCapacity: 'Барилгын нийт эзлэхүүн м3', CapacityPlan: '452', CapacityPerformance: '410'},
  {BuildingCapacityID: '3', BuildingCapacity: 'Тоглолтын тайзны эзлэхүүн', CapacityPlan: '80', CapacityPerformance: '80'},
  {BuildingCapacityID: '4', BuildingCapacity: 'Барилгын нийт өрөөний тоо', CapacityPlan: '6', CapacityPerformance: '5'},
  {BuildingCapacityID: '5', BuildingCapacity: 'Барилгын давхрын тоо', CapacityPlan: '2', CapacityPerformance: '2'},
  {BuildingCapacityID: '6', BuildingCapacity: 'Цахилгаан шатны тоо', CapacityPlan: '1', CapacityPerformance: '1'},
  {BuildingCapacityID: '7', BuildingCapacity: 'Харааны хөгжлийн бэрхшээлтэй иргэд явах тусгай замын тоо', CapacityPlan: '1', CapacityPerformance: '0'},
  {BuildingCapacityID: '8', BuildingCapacity: 'Хөгжлийн бэрхшээлтэй иргэдэд зориулсан ариун цэврийн өрөөний тоо', CapacityPlan: '1', CapacityPerformance: '1'},
  {BuildingCapacityID: '9', BuildingCapacity: 'Тэргэнцэртэй иргэдийн налуу замын тоо', CapacityPlan: '1', CapacityPerformance: '1'},
  {BuildingCapacityID: '10', BuildingCapacity: 'Тайзны тоо', CapacityPlan: '2', CapacityPerformance: '2'},
  {BuildingCapacityID: '11', BuildingCapacity: 'Суудлын тоо', CapacityPlan: '60', CapacityPerformance: '50'}
];
const Address = [
  {AddressID: '1', Country: 'Монгол', Province: 'Архангай', District: '-', Khoroo: '-'},
  {AddressID: '2', Country: 'Монгол', Province: 'Баян-Өлгий', District: '-', Khoroo: '-'},
  {AddressID: '3', Country: 'Монгол', Province: 'Булган', District: '-', Khoroo: '-'},
  {AddressID: '4', Country: 'Монгол', Province: 'Завхан', District: '-', Khoroo: '-'},
  {AddressID: '5', Country: 'Монгол', Province: 'Улаанбаатар', District: 'Баянзүрх', Khoroo: '1-р хороо'},
  {AddressID: '6', Country: 'Монгол', Province: 'Улаанбаатар', District: 'Сонгинохайрхан', Khoroo: '1-р хороо'},
  {AddressID: '7', Country: 'Монгол', Province: 'Улаанбаатар', District: 'Баянзүрх', Khoroo: '2-р хороо'},
  {AddressID: '8', Country: 'Монгол', Province: 'Улаанбаатар', District: 'Хан-Уул', Khoroo: '3-р хороо'},
  {AddressID: '9', Country: 'Монгол', Province: 'Улаанбаатар', District: 'Сонгинохайрхан', Khoroo: '1-р хороо'},
];
const AuthenticationHistory = [
  {AuthenticationHistoryID: '1', LoginDate: '2024/04/30', BuildingCapacity: '3', ExpensesID: '0', IncomeID: '2', OtherService: '0', MuseumServiceID: '2', ExhibitID: '2', UserID: '1'},
  {AuthenticationHistoryID: '2', LoginDate: '2024/04/28', BuildingCapacity: '2', ExpensesID: '2', IncomeID: '0', OtherService: '2', MuseumServiceID: '0', ExhibitID: '1', UserID: '1'},
  {AuthenticationHistoryID: '3', LoginDate: '2024/04/26', BuildingCapacity: '1', ExpensesID: '1', IncomeID: '1', OtherService: '1', MuseumServiceID: '1', ExhibitID: '0', UserID: '1'}
];
const ServiceAddress = [
  {ServiceAddressID: '1', MuseumServiceID: '1', AddressID: '3'},
  {ServiceAddressID: '2', MuseumServiceID: '2', AddressID: '5'}
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

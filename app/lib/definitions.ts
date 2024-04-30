// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.

import { EnumType } from 'typescript';
import { OtherService } from '../ui/form/buttons';

// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  UserID: number;
  UserRole: 'Admin' | 'User';
  UserMail: string;
  UserPhone: number;
  Password: string;
  EmployeeID: number
};
export type UserTable = {
  UserID: number;
  UserRole: string;
  UserMail: string;
  UserPhone: string;
  date: string;
};
export type AuthenticationHistory = {
  AuthenticationHistoryID: number;
  LoginDate: Date;
  BuildingCapacityID: number;
  ExpensesID: number;
  IncomeID: number;
  OtherServiceID: number;
  MuseumServiceID: number;
  ExhibitID: number;
  UserID: number;
}
export type Auth = {
  LoginDate: Date;
  UserID: number;
}
export type Employee = {
  EmployeeID: number;
  LastName: string;
  FirsName: string;
  BirthDate: Date;
  Sex: 'F' | 'M';
  Register: string[10];
  Phone: number;
  Education: 'Боловсролгүй' | 'Бага' | 'Суурь' | 'Бүрэн дунд' | 'Техникийн болон мэргэжилтэн' | 'Тусгай мэргэжлийн дунд' | 'Дипломын болон бакалаврын дээд' | 'Магистр' | 'Доктор';
  OccupationID: number;
  StatePrize: boolean;
  Impairment: boolean;
  Address: number;
  DepartmentID: number;
};
export type EmployeeTable = {
  EmployeeID: number;
  LastName: string;
  FirsName: string;
  BirthDate: Date;
  Sex: 'F' | 'M';
  Register: string[10];
  Phone: number;
  Education: 'Боловсролгүй' | 'Бага' | 'Суурь' | 'Бүрэн дунд' | 'Техникийн болон мэргэжилтэн' | 'Тусгай мэргэжлийн дунд' | 'Дипломын болон бакалаврын дээд' | 'Магистр' | 'Доктор';
  Occupation: string;
  StatePrize: boolean;
  Impairment: boolean;
  Address: number;
};
export type Occupation = {
  OccupationID: number;
  Occupation: string;
  ParentID: number;
};
export type Address = {
  AddressID: number;
  Country: string;
  Province: 'Архангай' | 'Баян-өлгий' | 'Баянхонгор' | 'Булган' | 'Говь-Алтай' | 'Говьсүмбэр' | 'Дархан-Уул' | 'Дорноговь' | 'Дорнод' | 'Дундговь' | 'Завхан' | 'Орхон' | 'Өвөрхангай' | 'Өмнөговь' | 'Сүхбаатар' | 'Сэлэнгэ' | 'Төв' | 'Увс' | 'Ховд' | 'Хөвсгөл' | 'Хэнтий' | '-';
  District: 'Багануур' | 'Багахангай' | 'Баянгол' | 'Баянзүрх' | 'Налайх' | 'Сонгинохайрхан' | 'Сүхбаатар' | 'Хан-Уул' | 'Чингэлтэй' | '-';
  Khoroo: string;
};
export type ExhibitHistory = {
  ExhibitID: number;
  ExhibitTypeID: number;
  Name: string;
  Added_Exhibit: 'Худалдан авсан' | 'Бэлэг хандив' | 'Шилжүүлсэн' | 'Хайгуул малтлага, судалгаагаар';
  Rating: 'Түүх, соёлын хосгүй үнэт' | 'Түүх соёлын үнэт';
  Weight: number;
  Set: string;
  Definition: string;
  Status: 'Хасагдсан үзмэр' | 'Дижитал хэлбэрт оруулсан' | 'Сэргээн засварласан' | 'Хуулбарлагдсан';
  AddressID: number;
};
export type LatestExhibit = {
  ExhibitID: number;
  ExhibitTypeID: number;
  Name: string;
  Added_Exhibit: 'Худалдан авсан' | 'Бэлэг хандив' | 'Шилжүүлсэн' | 'Хайгуул малтлага, судалгаагаар';
  Rating: 'Түүх, соёлын хосгүй үнэт' | 'Түүх соёлын үнэт';
  Weight: number;
  Set: string;
  Definition: string;
  Status: 'Хасагдсан үзмэр' | 'Дижитал хэлбэрт оруулсан' | 'Сэргээн засварласан' | 'Хуулбарлагдсан';
  AddressID: number;
};
export type ExhibitType = {
  ExhibitTypeID: number;
  ExhibitType: 'Байнгын үзүүллэг' | 'Түр үзэсгэлэн' | 'Байгалийн өвийн' | 'Археологийн' | 'Түүхийн' | 'Угсаатны зүйн' | 'Шашин шүтлэгийн' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - Уран зураг' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - Монгол зураг - шүтээн зураг' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - Уран баримал' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - График' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - Инстоляци' | 'Урлаг, уран сайхны - Дүрслэх урлагийн - Гар урлалын' | 'Урлаг, уран сайхны - Гэрэл зургийн';
  ParentID: number;
};
export type MuseumService = {
  MuseumServiceID: number;
  ExhibitTypeID: number;
  CustomerTypeID: number;
  KindID: number; 
  CustomerCount: number;
};
export type MuseumServiceTable = {
  MuseumServiceID: number;
  ExhibitTypeID: number;
  CustomerTypeID: number;
  KindID: number; 
  CustomerCount: number;
};
export type OtherService = {
  OtherServiceID: number;
  Services: 'Музейн боловсролын ажил' | 'Сургалт семинар' | 'Дугуйлан' | 'Уралдаан, тэмцээн, наадам' | 'Хурал, зөвлөгөөн' | 'Үзэсгэлэн худалдаа' | 'Зохион байгуулсан эвент / арга хэмжээ';
  KindID: number;
  CustomerTypeID: number;
  CustomerCount: number;
};
export type OtherServiceTable = {
  OtherServiceID: number;
  Services: 'Музейн боловсролын ажил' | 'Сургалт семинар' | 'Дугуйлан' | 'Уралдаан, тэмцээн, наадам' | 'Хурал, зөвлөгөөн' | 'Үзэсгэлэн худалдаа' | 'Зохион байгуулсан эвент / арга хэмжээ';
  KindID: number;
  CustomerTypeID: number;
  CustomerCount: number;
};
export type Kind = {
  KindID: number;
  Kind: 'Үзэсгэлэнгийн танхимаар' | 'Өөрийн' | 'Хамтарсан' | 'Гадны' | 'Нүүдлийн үйлчилгээгээр' | 'Дотоодод' | 'Аймаг, нийслэл' | 'Сум, дүүрэг' | 'Баг, хороо' | 'Гадаадад' | 'Ази' | 'Европ' | 'Бусад';
  ParentID: number;
};
export type CustomerType = {
  CustomerTypeID: number;
  CustomerType: 'Хүүхэд' | 'Төлбөргүй' | 'Гадаад' | 'Тусгай бүлгийн' | 'Хөгжлийн бэрхшээлтэй' | 'Бусад';
};
export type BuildingCapacity = {
  BuildingCapacityID: number;
  BuildingCapacity:  'Барилгын нийт талбай м2' | 'Барилгын нийт эзлэхүүн м3' | 'Тоглолтын тайзны эзлэхүүн м3' | 'Барилын нийт өрөөний тоо' | 'Барилгын давхрын тоо' | 'Цахилгаан шатны тоо' | 'Хөрөөны хөгжлийн бэрхшээлтэй иргэд явах тусгай замын тоо' | 'Хөгжлийн бэрхшээлтэй иргэдэд зориулсан ариун цэврийн өрөөний тоо' | 'Тэргэнцэртэй иргэдийн налуу замын тоо' | 'Тайзны тоо' | 'Суудлын тоо';
  CapacityPlan: number;
  CapacityPerformance: number;
};
export type Expenses = {
  ExpensesID: number;
  ExpensesTypeID: number;
  ExpensesPlan: number;
  ExpensesPerformance: number;
};
export type ExpensesType = {
  ExpensesTypeID: number;
  ExpensesType: 'Урсгал зардал' | 'Соёлын үйл ажиллагааны зардал' | 'Ном хэвлэл худалдан авах зардал' | 'Уран бүтээлийн зардал' | 'Түүх соёлын дурсгал зүйлийг хамгаалах зардал' | 'Түүх соёлын дурсгалт зүйл сэргээн засварлах зардал' | 'Гадаадад зохиогдох соёл урлагийн а/хэмжээний зардал' | 'Сургалтын зардал' | 'Үүнээс гадагш чиглэсэн сургалтын зардал' | 'Соёл, олон нийтийн ажил зохион байгуулсан зардал' | 'Үүнээс гадагш чиглэсэн арга хэмжээний зардал';
  ParentID: number;
};
export type Income = {
  IncomeID: number;
  IncomeTypeID: number;
  IncomePlan: number;
  IncomePerformance: number;
};
export type IncomeTable = {
  IncomeID: number;
  IncomeTypeID: number;
  IncomePlan: number;
  IncomePerformance: number;
};
export type Incometype = {
  IncomeTypeID: number;
  IncomeType: 'Үйл ажиллагааны орлого' | 'Байгууллагын ажил үйлчилгээний (өөрийн) орлого' | 'Түрээсийн орлого' | 'Бусад орлого' | 'Тусламж санхүүжилтийн орлого' | 'Улсын төсвөөс' | 'Орон нутгийн төсвөөс' | 'Хөтөлбөр, төслийн санхүүжилт';
  ParentID: number;
}
export type Department = {
  DepartmentID: number;
  DepartmentName: string;
  Employees: Employee[];
}
export type Organisation = {
  OrganisationID: number;
  OrganisationName: string;
  Branch: Branch[];
  Department: Department[];
}
export type Branch = {
  BranchID: number;
  BranchName: string;
  AddressID: number;
  OrganisationID: number
}
export type ServiceAddress = {
  ServiceAddressID: number;
  MuseumServiceID: number; 
  AddressID: number;
}
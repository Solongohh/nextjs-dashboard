// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.

import { EnumType } from 'typescript';
import { OtherService } from '../ui/form/buttons';

// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  UserID: string;
  UserRole: 'Admin' | 'User';
  UserName: string;
  UserPhone: number;
  Password: string;
};

export type Employee = {
  EmployeeID: number;
  LastName: string;
  FirsName: string;
  BirthDate: Date;
  Sex: 'F' | 'M';
  Register: Char(10);
  Address: number;
  Phone: number;
  Education: 'Боловсролгүй' | 'Бага' | 'Суурь' | 'Бүрэн дунд' | 'Техникийн болон мэргэжилтэн' | 'Тусгай мэргэжлийн дунд' | 'Дипломын болон бакалаврын дээд' | 'Магистр' | 'Доктор';
  Occupation: number;
  StatePrize: Boolean;
  Impairment: boolean;
};
export type Occupation = {
  OccupationID: number;
  Occupation: string;
  ParentID: number;
};
export type Address = {
  AddressID: number;
  Country: string;
  Province: 'Архангай' | 'Баян-өлгий' | 'Баянхонгор' | 'Булган' | 'Говь-Алтай' | 'Говьсүмбэр' | 'Дархан-Уул' | 'Дорноговь' | 'Дорнод' | 'Дундговь' | 'Завхан' | 'Орхон' | 'Өвөрхангай' | 'Өмнөговь' | 'Сүхбаатар' | 'Сэлэнгэ' | 'Төв' | 'Увс' | 'Ховд' | 'Хөвсгөл' | 'Хэнтий';
  District: number;
  Khoroo: string;
};
export type District = {
  DistrictID: number;
  District: 'Багануур' | 'Багахангай' | 'Баянгол' | 'Баянзүрх' | 'Налайх' | 'Сонгинохайрхан' | 'Сүхбаатар' | 'Хан-Уул' | 'Чингэлтэй';
};
export type ExhibitHistory = {
  ExhibitID: number;
  ExhibitType: number;
  Name: string;
  Added_Exhibit: 'Худалдан авсан' | 'Бэлэг хандив' | 'Шилжүүлсэн' | 'Хайгуул малтлага, судалгаагаар';
  Rating: 'Түүх, соёлын хосгүй үнэт' | 'Түүх соёлын үнэт';
  Weight: number;
  Set: string;
  Restoration: boolean;
  RestorationDetail: string;
  Exposed: boolean;
  ExposedDetail: string;
  Definition: string;
  Location: number;
};
export type Exhibit = {
  ExhibitID: number;
  ExhibitType: string;
  ParentID: number;
};
export type Location = {
  LocationID: number;
  Latitude: string;
  Longtitude: string;
};
export type MuseumService = {
  MuseumServiceID: number;
  ServiceType: 'Байнгын үзүүллэг' | 'Түр үзэсгэлэн';
  ServiceSubType: ;
  Customer: ;
  KindID: ; 
};
export type OtherService = {
  OtherService: number;
  Services: '';
  Customer: number;
};
export type Kind = {
  KindID: number;
  Kind: string;
  ParentID: number;
};
export type Customer = {
  CustomerID: number;
  Customer: 'Хүүхэд' | 'Төлбөргүй' | 'Гадаад' | 'Тусгай бүлгийн' | 'Хөгжлийн бэрхшээлтэй' | 'Бусад';
};
export type BuildingCapacity = {
  BuildingCapacityID: number;
  BuildingCapacity: 
} 
export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the 'status' property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};
export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// The database returns a number for amount, but we later format it to a string with the formatCurrency function
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTableType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};

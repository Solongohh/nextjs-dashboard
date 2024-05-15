// this file contains type definitions for your data.
// it describes the shape of the data, and what data type each property should accept.
// for simplicity of teaching, we're manually defining these types.

// import { enumtype } from 'typescript';
import { OtherService } from '../ui/form/buttons';

// However, these types are generated automatically if you're using an orm such as prisma.
export type users = {
  userid: number;
  userrole: ['admin', 'user'];
  usermail: string;
  password: string;
  employeeid: number
};
export type usertable = {
  userid: number;
  userrole: string;
  usermail: string;
  Date: string;
};
export type authenticationHistory = {
  authenticationhistoryid: number;
  loginDate: Date;
  buildingcapacityid: number;
  expensesid: number;
  incomeid: number;
  otherserviceid: number;
  museumserviceid: number;
  exhibitid: number;
  userid: number;
}
export type auth = {
  logindate: Date;
  userid: number;
}
export type employee = {
  employeeid: number;
  lastname: string;
  firsname: string;
  birthDate: Date;
  sex: ['F', 'M'];
  register: string[10];
  phone: number;
  education: ['Боловсролгүй', 'Бага', 'Суурь', 'Бүрэн дунд', 'Техникийн болон мэргэжилтэн', 'Тусгай мэргэжлийн дунд', 'Дипломын болон бакалаврын дээд', 'Магистр', 'Доктор'];
  occupationid: number;
  stateprize: boolean;
  impairment: boolean;
  address: number;
  departmentid: number;
};
export type employeetable = {
  employeeid: number;
  lastname: string;
  firsname: string;
  birthdate: Date;
  sex: ['F', 'M'];
  register: string[10];
  phone: number;
  education: ['Боловсролгүй', 'Бага', 'Суурь', 'Бүрэн дунд', 'Техникийн болон мэргэжилтэн', 'Тусгай мэргэжлийн дунд', 'Дипломын болон бакалаврын дээд', 'Магистр', 'Доктор'];
  occupation: string;
  stateprize: boolean;
  impairment: boolean;
  address: number;
};
export type occupation = {
  occupationid: number;
  occupation: string;
  parentid: number;
};
export type address = {
  addressid: number;
  country: string;
  province: ['Архангай', 'Баян-өлгий', 'Баянхонгор', 'Булган', 'Говь-Алтай', 'Говьсүмбэр', 'Дархан-Уул', 'Дорноговь', 'Дорнод', 'Дундговь', 'Завхан', 'Орхон', 'Өвөрхангай', 'Өмнөговь', 'Сүхбаатар', 'Сэлэнгэ', 'Төв', 'Увс', 'Ховд', 'Хөвсгөл', 'Хэнтий', '-'];
  district: ['Багануур', 'Багахангай', 'Баянгол', 'Баянзүрх', 'Налайх', 'Сонгинохайрхан', 'Сүхбаатар', 'Хан-Уул', 'Чингэлтэй', '-'];
  khoroo: string;
};
export type exhibitHistory = {
  exhibitid: number;
  exhibittypeid: number;
  name: string;
  added_exhibit: ['Худалдан авсан', 'Бэлэг хандив', 'Шилжүүлсэн', 'Хайгуул малтлага, судалгаагаар'];
  rating: ['Түүх, соёлын хосгүй үнэт', 'Түүх соёлын үнэт'];
  weight: number;
  set: string;
  definition: string;
  status: ['Хасагдсан үзмэр', 'Дижитал хэлбэрт оруулсан', 'Сэргээн засварласан', 'Хуулбарлагдсан'];
  addressid: number;
};
export type latestexhibit = {
  exhibitid: number;
  exhibittypeid: number;
  name: string;
  added_exhibit: ['Худалдан авсан', 'Бэлэг хандив', 'Шилжүүлсэн', 'Хайгуул малтлага, судалгаагаар'];
  rating: ['Түүх, соёлын хосгүй үнэт', 'Түүх соёлын үнэт'];
  weight: number;
  set: string;
  definition: string;
  status: ['Хасагдсан үзмэр', 'Дижитал хэлбэрт оруулсан', 'Сэргээн засварласан', 'Хуулбарлагдсан'];
  addressid: number;
};
export type exhibittype = {
  exhibittypeid: number;
  exhibittype: ['Байнгын үзүүллэг', 'Түр үзэсгэлэн', 'Байгалийн өвийн', 'Археологийн', 'Түүхийн', 'Угсаатны зүйн', 'Шашин шүтлэгийн', 'Урлаг, уран сайхны - Дүрслэх урлагийн - Уран зураг', 'Урлаг, уран сайхны - Дүрслэх урлагийн - Монгол зураг - шүтээн зураг', 'Урлаг, уран сайхны - Дүрслэх урлагийн - Уран баримал', 'Урлаг, уран сайхны - Дүрслэх урлагийн - График', 'Урлаг, уран сайхны - Дүрслэх урлагийн - Инстоляци', 'Урлаг, уран сайхны - Дүрслэх урлагийн - Гар урлалын', 'Урлаг, уран сайхны - Гэрэл зургийн'];
  parentid: number;
};
export type museumservice = {
  museumserviceid: number;
  exhibittypeid: number;
  customertypeid: number;
  kindid: number; 
  customercount: number;
};
export type museumservicetable = {
  museumserviceid: number;
  exhibittypeid: number;
  customertypeid: number;
  kindid: number; 
  customercount: number;
};
export type otherservice = {
  otherserviceid: number;
  services: ['Музейн боловсролын ажил', 'Сургалт семинар', 'Дугуйлан', 'Уралдаан, тэмцээн, наадам', 'Хурал, зөвлөгөөн', 'Үзэсгэлэн худалдаа', 'Зохион байгуулсан эвент / арга хэмжээ'];
  kindid: number;
  customertypeid: number;
  customercount: number;
};
export type otherservicetable = {
  otherserviceid: number;
  services: ['Музейн боловсролын ажил', 'Сургалт семинар', 'Дугуйлан', 'Уралдаан, тэмцээн, наадам', 'Хурал, зөвлөгөөн', 'Үзэсгэлэн худалдаа', 'Зохион байгуулсан эвент / арга хэмжээ'];
  kindid: number;
  customertypeid: number;
  customercount: number;
};
export type kind = {
  kindid: number;
  kind: ['Үзэсгэлэнгийн танхимаар', 'Өөрийн', 'Хамтарсан', 'Гадны', 'Нүүдлийн үйлчилгээгээр', 'Дотоодод', 'Аймаг, нийслэл', 'Сум, дүүрэг', 'Баг, хороо', 'Гадаадад', 'Ази', 'Европ', 'Бусад'];
  parentid: number;
};
export type customertype = {
  customertypeid: number;
  customertype: ['Хүүхэд', 'Төлбөргүй', 'Гадаад', 'Тусгай бүлгийн', 'Хөгжлийн бэрхшээлтэй', 'Бусад'];
};
export type buildingcapacity = {
  buildingcapacityid: number;
  buildingcapacity:  ['Барилгын нийт талбай м2', 'Барилгын нийт эзлэхүүн м3', 'Тоглолтын тайзны эзлэхүүн м3', 'Барилын нийт өрөөний тоо', 'Барилгын давхрын тоо', 'Цахилгаан шатны тоо', 'Хөрөөны хөгжлийн бэрхшээлтэй иргэд явах тусгай замын тоо', 'Хөгжлийн бэрхшээлтэй иргэдэд зориулсан ариун цэврийн өрөөний тоо', 'Тэргэнцэртэй иргэдийн налуу замын тоо', 'Тайзны тоо', 'Суудлын тоо'];
  capacityplan: number;
  capacityperformance: number;
};
export type expenses = {
  expensesid: number;
  expensestypeid: number;
  expensesplan: number;
  expensesperformance: number;
};
export type expensestype = {
  expensestypeid: number;
  expensestype: ['Урсгал зардал', 'Соёлын үйл ажиллагааны зардал', 'Ном хэвлэл худалдан авах зардал', 'Уран бүтээлийн зардал', 'Түүх соёлын дурсгал зүйлийг хамгаалах зардал', 'Түүх соёлын дурсгалт зүйл сэргээн засварлах зардал', 'Гадаадад зохиогдох соёл урлагийн а/хэмжээний зардал', 'Сургалтын зардал', 'Үүнээс гадагш чиглэсэн сургалтын зардал', 'Соёл, олон нийтийн ажил зохион байгуулсан зардал', 'Үүнээс гадагш чиглэсэн арга хэмжээний зардал'];
  parentid: number;
};
export type income = {
  incomeid: number;
  incometypeid: number;
  incomeplan: number;
  incomeperformance: number;
};
export type incometable = {
  incomeid: number;
  incometypeid: number;
  incomeplan: number;
  incomeperformance: number;
};
export type incometype = {
  incometypeid: number;
  incometype: ['Үйл ажиллагааны орлого', 'Байгууллагын ажил үйлчилгээний (өөрийн) орлого', 'Түрээсийн орлого', 'Бусад орлого', 'Тусламж санхүүжилтийн орлого', 'Улсын төсвөөс', 'Орон нутгийн төсвөөс', 'Хөтөлбөр, төслийн санхүүжилт'];
  parentid: number;
}
export type department = {
  departmentid: number;
  departmentname: string;
  employees: employee[];
}
export type organisation = {
  organisationid: number;
  organisationname: string;
  branch: branch[];
  department: department[];
}
export type branch = {
  branchid: number;
  branchname: string;
  addressid: number;
  organisationid: number
}
export type serviceaddress = {
  serviceaddressid: number;
  museumserviceid: number; 
  addressid: number;
}
export type province = {
  provinceid: number;
  province: string; 
}
export type district = {
  districtid: number;
  district: string; 
  provinceid: number;
}
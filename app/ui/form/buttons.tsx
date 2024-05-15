import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function Employee() {
  return (
    <Link
      href="/dashboard/form"
      className="flex h-[48px] grow items-center border-black justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3"
    >
      <span className="hidden md:block">Ажилтны мэдээлэл</span>{' '}
    </Link>
  );
}
export function IncomeExpenses() {
    return (
      <Link
        href="/dashboard/form/createIncomeExpenses"
        className="flex h-[48px] grow items-center border-black justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3">
        <span className="hidden md:block">Орлого зарлагын мэдээлэл</span>{' '}
      </Link>
    );
}
export function BuildingCapacity() {
    return (
      <Link
        href="/dashboard/form/createBuilding"
        className="flex h-[48px] grow items-center border-black justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3">
        <span className="hidden md:block">Барилгын хүчин чадал</span>{' '}
      </Link>
    );
}
export function Exhibit() {
    return (
      <Link
        href="/dashboard/form/createExhibit"
        className="flex h-[48px] grow items-center border-black justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3">
        <span className="hidden md:block">Үзмэр бүртгэл</span>{' '}
      </Link>
    );
}
export function MuseumService() {
    return (
      <Link
        href="/dashboard/form/createMuseumService"
        className="flex h-[48px] grow items-center border-black justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3">
        <span className="hidden md:block">Музейн үйлчилгээ</span>{' '}
      </Link>
    );
}
export function OtherService() {
    return (
      <Link
        href="/dashboard/form/createOtherService"
        className="flex h-[48px] grow items-center border-black justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3">
        <span className="hidden md:block">Бусад үйлчилгээ</span>{' '}
      </Link>
    );
}
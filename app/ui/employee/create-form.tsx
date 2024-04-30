'use client';
import { Employee, Address } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createEmployee } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ employees, addresses }: { employees: Employee[] , addresses: Address[]}) {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createEmployee, initialState);
  return (
    // <form action={dispatch}>
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* employee Name */}
        <div className="mb-4">
          <h2>Ажилтны үндсэн мэдээлэл</h2><hr></hr>
          <label htmlFor="fullname" className="mb-2 block text-sm font-medium mt-4">
            Нэр
          </label>
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <input
              id="lastname"
              name="lastname"
              type="string"
              step="0.01"
              placeholder="Овог"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <input
                id="firstname"
                name="firstname"
                type="string"
                step="0.01"
                placeholder="Нэр"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4 ">
            <label htmlFor="birthdate" className="mb-2 block text-sm font-medium">
                Төрсөн он сар өдөр
              </label>
              <label htmlFor="sex" className="mb-2 block text-sm font-medium">
                Хүйс
              </label>
          </div> 
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <input
                id="birthdate"
                name="birthdate"
                type="date"
                step="0.01"
                placeholder=""
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-2">
              <div>
                  <input type="radio" id="male" name="gender" value="male" />
                  <label htmlFor="male">Эрэгтэй</label>
              </div>
              <div>
                  <input type="radio" id="female" name="gender" value="female" />
                  <label htmlFor="female">Эмэгтэй</label>
              </div>
            </div>

          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4">
            <label htmlFor="register" className="mb-2 block text-sm font-medium">
                Регистрийн дугаар
              </label>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Утасны дугаар
              </label>
          </div>
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <input
                id="register"
                name="register"
                type="string"
                step="0.01"
                placeholder="РД12345678"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <input
                id="phone"
                name="phone"
                type="number"
                step="0.01"
                placeholder="88778877 "
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
          </div>
          <h2 className="mt-6">Гэрийн хаяг</h2><hr></hr>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4">
            <label htmlFor="province" className="mb-2 block text-sm font-medium">
                Улс
              </label>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Аймаг
              </label>
          </div>
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <input
                id="country"
                name="country"
                type="string"
                step="0.01"
                placeholder="Монгол"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <select
                id="province"
                name="province"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="province-error"
                >
                <option value="" disabled>
                </option>
                {addresses && addresses.length > 0 && addresses.map((address)=> (
                  <option key={address.AddressID} value={address.AddressID}>
                    {address.Province}
                  </option>
                ))}
              </select>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4">
            <label htmlFor="province" className="mb-2 block text-sm font-medium">
                Дүүрэг
              </label>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                Хороо
              </label>
          </div>
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <select
                id="district"
                name="district"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="district-error"
                >
                <option value="" disabled>
                </option>
                {addresses && addresses.length > 0 && addresses.map((address)=> (
                  <option key={address.AddressID} value={address.AddressID}>
                    {address.District}
                  </option>
                ))}
              </select>
              <input
                id="khoroo"
                name="khoroo"
                type="string"
                step="0.01"
                placeholder="1-р хороо"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              </div>

        <h2 className="mt-6">Нэмэлт мэдээлэл</h2><hr></hr>
        <div className="mb-4">
          <label htmlFor="education" className="mb-2 block text-sm font-medium mt-4">
            Боловсролын түвшин
          </label>
          <select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value=""></option>
              <option value="Боловсролгүй">Боловсролгүй</option>
              <option value="Бага">Бага</option>
              <option value="Суурь">Суурь</option>
              <option value="Бүрэн дунд">Бүрэн дунд</option>
              <option value="Техникийн болон мэргэжлийн">Техникийн болон мэргэжлийн</option>
              <option value="Тусгай мэргэжлийн дунд">Тусгай мэргэжлийн дунд</option>
              <option value="Дипломын болон бакалаврын дээд">Дипломын болон бакалаврын дээд</option>
              <option value="Магистр">Магистр</option>
              <option value="Доктор">Доктор</option>
            </select>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4">
            <label htmlFor="impairment" className="mb-2 block text-sm font-medium">
                Хөгжлийн бэрхшээл байгаа эсэх
              </label>
              <label htmlFor="stateprize" className="mb-2 block text-sm font-medium">
                Төрийн шагнал авч байсан эсэх
              </label>
          </div>
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <select
                id="impairment"
                name="impairment"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="impairment-error"
                >
                <option value=""></option>
                <option value="yes">Тийм</option>
                <option value="no">Үгүй</option>
              </select>
              <select
                id="stateprize"
                name="stateprize"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                aria-describedby="stateprize-error"
                >
                <option value=""></option>
                <option value="yes">Тийм</option>
                <option value="no">Үгүй</option>
              </select>
            </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/form/createEmployee"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Бүртгэх</Button>
      </div>
    </form>
  );
}

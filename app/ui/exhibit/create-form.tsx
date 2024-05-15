'use client';
import { address, exhibitHistory, exhibittype } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createExhibit } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ exhibits, exhibittypes, addresses}: { exhibits: exhibitHistory[], exhibittypes: exhibittype[], addresses: address[] }) {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createExhibit, initialState);
  return (
    // <form action={dispatch}>
    <form>
      
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <h2>Үзмэрийн мэдээлэл</h2><hr></hr>
          <label htmlFor="exhibitname" className="mb-2 block text-sm font-medium mt-4">
            Үзмэрийн нэр
          </label>
          <div className="relative">
            <input
                id="exhibit"
                name="exhibit"
                type="text"
                placeholder="Нэр"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4 ">
            <label htmlFor="exhibittype" className="mb-2 block text-sm font-medium">
                Үзмэрийн төрөл
              </label>
              <label htmlFor="added_exhibit" className="mb-2 block text-sm font-medium">
                Нэмэгдсэн үзмэрийн төрөл
              </label>
          </div> 
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <select
              id="ExhibitType"
              name="ExhibitType"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="ExhibitType-error"
            >
              <option value="" disabled>
                
              </option>
              {exhibits.map((ExhibitHistory) => (
                <option key={ExhibitHistory.exhibitid} value={ExhibitHistory.exhibitid}>
                  {ExhibitHistory.added_exhibit}
                </option>
              ))}
            </select>
            <select
              id="added_exhibit"
              name="added_exhibit"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="added_exhibit-error"
            >
              <option value="" disabled>
                
              </option>
              {exhibits.map((ExhibitHistory) => (
                <option key={ExhibitHistory.exhibitid} value={ExhibitHistory.exhibitid}>
                  {ExhibitHistory.added_exhibit}
                </option>
              ))}
            </select>
          </div>
          
          <label htmlFor="description" className="mb-2 block text-sm font-medium mt-4">
            Нэмэлт тайлбар
          </label>
          <input
                id="description"
                name="description"
                type="text"
                placeholder=""
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />

          <h2 className='mt-6'>Байршил</h2><hr></hr>
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
                type="text"
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
                  <option key={address.addressid} value={address.addressid}>
                    {address.province}
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
                  <option key={address.addressid} value={address.addressid}>
                    {address.district}
                  </option>
                ))}
              </select>
              <input
                id="khoroo"
                name="khoroo"
                type="text"
                step="0.01"
                placeholder="1-р хороо"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              </div>
              <div className='flex flex-col mt-6'>
                <input type="checkbox" id="hasagdsan" name="hasagdsan" />
                <label htmlFor="hasagdsan">Хасагдсан үзмэр</label>
                <input type="checkbox" id="digital" name="digital" />
                <label htmlFor="digital">Дижитал хэлбэр оруулсан</label>
                <input type="checkbox" id="sergeesen" name="sergeesen" />
                <label htmlFor="sergeesen">Сэргээн засварласан</label>
                <input type="checkbox" id="huulbarlasan" name="huulbarlasan" />
                <label htmlFor="huulbarlasan">Хуулбарлагдсан</label>
              </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/form/createExhibit"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Бүртгэх</Button>
      </div>
    </form>
  );
}

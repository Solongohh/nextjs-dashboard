'use client';
import { province, district, exhibitHistory, exhibittype, added_exhibit, rating } from '@/app/lib/definitions';
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

export default function Form({ exhibits, exhibittypes, addedexhibits, provinces, districts, ratings }: { exhibits: exhibitHistory[], addedexhibits: added_exhibit[], exhibittypes: exhibittype[], provinces: province[], districts: district[], ratings: rating[] }) {
  const exhibit = {
    "name": '',
    "exhibittype": '',
    "addedexhibit": '',
    "description": '',
    "country": '',
    "province": '',
    "district": '',
    "khoroo": '',
    "status": '',
    "rating": '',
    "weight": 0,
    "set": ''
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createExhibit(exhibit);
  };

  return (
    <form onSubmit={handleSubmit}>
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
              onChange={(e) => exhibit.name = e.target.value}
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
              onChange={(e) => exhibit.exhibittype = e.target.value}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="ExhibitType-error"
              required
            >
              <option value="" disabled>

              </option>
              {exhibittypes.map((exhibittype) => (
                <option key={exhibittype.exhibittypeid} value={exhibittype.exhibittypeid}>
                  {exhibittype.exhibittype}
                </option>
              ))}
            </select>
            <select
              id="added_exhibit"
              name="added_exhibit"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              onChange={(e) => exhibit.addedexhibit = e.target.value}
              aria-describedby="added_exhibit-error"
              required
            >
              <option value="" disabled>

              </option>
              {addedexhibits.map((added_exhibit) => (
                <option key={added_exhibit.addedexhibitid} value={added_exhibit.addedexhibitid}>
                  {added_exhibit.added_exhibit}
                </option>
              ))}
            </select>
          </div>
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <label htmlFor="rating" className="mb-2 block text-sm font-medium mt-4">
              Үнэлгээ
            </label>
            <label htmlFor="weight" className="mb-2 block text-sm font-medium mt-4">
              Жин
            </label>
          </div>
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <select
              id="rating"
              name="rating"
              onChange={(e) => exhibit.rating = e.target.value}
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="rating-error"
              required
            >
              <option value="" disabled>
              </option>
              {ratings.map((rating) => (
                <option key={rating.ratingid} value={rating.ratingid}>
                  {rating.rating}
                </option>
              ))}
            </select>
            <input
              id="weight"
              name="weight"
              type="number"
              placeholder=""
              onChange={(e) => exhibit.weight = parseInt(e.target.value)}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
          </div>
          <label htmlFor="description" className="mb-2 block text-sm font-medium mt-4">
            Set
          </label>
          <input
            id="set"
            name="set"
            type="text"
            placeholder=""
            onChange={(e) => exhibit.set = e.target.value}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          />
          <label htmlFor="description" className="mb-2 block text-sm font-medium mt-4">
            Нэмэлт тайлбар
          </label>
          <input
            id="description"
            name="description"
            type="text"
            placeholder=""
            onChange={(e) => exhibit.description = e.target.value}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
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
              placeholder=""
              onChange={(e) => exhibit.country = e.target.value}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
            <select
              id="province"
              name="province"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              onChange={(e) => exhibit.province = e.target.value}
              aria-describedby="province-error"
              required
            >
              <option value="" disabled>
              </option>
              {provinces.map((province) => (
                <option key={province.provinceid} value={province.provinceid}>
                  {province.province}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4">
            <label htmlFor="province" className="mb-2 block text-sm font-medium">
              Дүүрэг
            </label>
            <label htmlFor="khoroo" className="mb-2 block text-sm font-medium">
              Хороо
            </label>
          </div>
          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            <select
              id="district"
              name="district"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              onChange={(e) => exhibit.district = e.target.value}
              aria-describedby="district-error"
              required
            >
              <option value="" disabled>
              </option>
              {districts && districts.length > 0 && districts.map((district) => (
                <option key={district.districtid} value={district.districtid}>
                  {district.district}
                </option>
              ))}
            </select>
            <input
              id="khoroo"
              name="khoroo"
              type="text"
              placeholder="1-р хороо"
              onChange={(e) => exhibit.khoroo = e.target.value}
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              required
            />
          </div>
          <div className='flex flex-col mt-6'>
            <div className='flex flex-row mt-4'>
              <input type="checkbox" id="hasagdsan" name="hasagdsan" value={'Хасагдсан үзмэр'} onChange={(e) => exhibit.status = e.target.value} className='mr-4' />
              <label htmlFor="hasagdsan">Хасагдсан үзмэр</label>
            </div>
            <div className='flex flex-row mt-4'>
              <input type="checkbox" id="digital" name="digital" value={'Дижитал хэлбэр оруулсан'} onChange={(e) => exhibit.status = e.target.value} className='mr-4' />
              <label htmlFor="digital">Дижитал хэлбэр оруулсан</label>
            </div>
            <div className='flex flex-row mt-4'>
              <input type="checkbox" id="sergeesen" name="sergeesen" value={'Сэргээн засварласан'} onChange={(e) => exhibit.status = e.target.value} className='mr-4' />
              <label htmlFor="sergeesen">Сэргээн засварласан</label>
            </div>
            <div className='flex flex-row mt-4'>
              <input type="checkbox" id="huulbarlasan" name="huulbarlasan" value={'Хуулбарлагдсан'} onChange={(e) => exhibit.status = e.target.value} className='mr-4' />
              <label htmlFor="huulbarlasan">Хуулбарлагдсан</label>
            </div>
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

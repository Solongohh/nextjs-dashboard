'use client';
import { service, exhibittype, province, district, kind, customertype } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createOtherService } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { CustomerType } from '@/app/lib/placeholder-data';

export default function Form({ services, exhibittypes, kinds, provinces, districts, customertypes }: { services: service[], kinds: kind[], exhibittypes: exhibittype[], provinces: province[], districts: district[], customertypes: customertype[] }) {
  const otherservice = {
    "service": "",
    "customertype": "",
    "customercount": 0,
    "country": "",
    "province": "",
    "district": "",
    "khoroo": ""
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createOtherService(otherservice);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <h2>Музейн үйлчилгээний мэдээлэл</h2><hr></hr>
        <div className="mb-4 relative ">
          <label htmlFor="zoriulalt" className="mb-4 block text-sm font-medium mt-4">
            Үйлчилгээ
          </label>
          <select
            id="service"
            name="service"
            onChange={(e) => otherservice.service = e.target.value}
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            aria-describedby="service-error"
            required
          >
            <option value="" disabled>
            </option>
            {services.map((service) => (
              <option key={service.serviceid} value={service.serviceid}>
                {service.service}
              </option>
            ))}
          </select>
        </div>
        <h2>Үйлчлүүлэгчид</h2><hr></hr>
        <div className="mt-4 relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {customertypes.map((customertype) => (
            <div key={customertype.customertypeid} className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2"> 
              <option key={customertype.customertypeid} value={customertype.customertypeid} className='text-sm font-medium'>
                {customertype.customertype}
              </option>
              <input
                id={`customercount-${customertype.customertypeid}`}
                name={`customercount-${customertype.customertypeid}`} 
                type="number"
                step="1"
                onChange={(e) => otherservice.customercount = parseInt(e.target.value)}
                placeholder=""
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 text-sm font-medium"
                required
              />
            </div>
          ))}
        </div>

        <h2 className='mt-4'>Байршил</h2><hr></hr>
        <div className="mt-4 relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <label htmlFor="province" className="block text-sm font-medium">
            Улс
          </label>
          <label htmlFor="phone" className="block text-sm font-medium">
            Аймаг
          </label>
          <input
            id="country"
            name="country"
            type="text"
            placeholder=""
            onChange={(e) => otherservice.country = e.target.value}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
          <select
            id="province"
            name="province"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            onChange={(e) => otherservice.province = e.target.value}
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
          <label htmlFor="province" className="block text-sm font-medium">
            Дүүрэг
          </label>
          <label htmlFor="khoroo" className="block text-sm font-medium">
            Хороо
          </label>
          <select
            id="district"
            name="district"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            onChange={(e) => otherservice.district = e.target.value}
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
            onChange={(e) => otherservice.khoroo = e.target.value}
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/form/createOtherService"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Бүртгэх</Button>
        </div>
      </div>
    </form>
  );
}

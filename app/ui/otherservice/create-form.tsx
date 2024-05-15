'use client';
import { otherservice } from '@/app/lib/definitions';
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

export default function Form({ otherservices }: { otherservices: otherservice[] }) {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createOtherService, initialState);
  return (
    // <form action={dispatch}>
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <fieldset>
          <legend>Үйлчилгээний зориулалт</legend>
          {otherservices.map((service) => (
            <div key={service.otherserviceid.toString()}>
              <input
                type="checkbox"
                id={service.otherserviceid.toString()}
                name="interest"
                value={service.otherserviceid.toString()}
              />
              <label htmlFor={service.otherserviceid.toString()}>{service.services}</label>
            </div>
          ))}
        </fieldset>

        <label htmlFor="otherService" className="mb-2 block font-medium">
            Бусад үйлчилгээ
        </label>
        <div className="relative">
          <select
            id="service"
            name="service"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            aria-describedby="service-error"
          >
            <option value="" disabled>
              
            </option>
            {otherservices.map((otherservice) => (
              <option key={otherservice.otherserviceid.toString()} value={otherservice.otherserviceid.toString()}>
                {otherservice.services}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mt-4 ">
          <label htmlFor="exhibittype" className="mb-2 block text-sm font-medium">
              Үйлчилгээний хэлбэр
            </label>
            <label htmlFor="added_exhibit" className="mb-2 block text-sm font-medium">
              Дэд хэлбэр
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
              {otherservices.map((otherservice) => (
                <option key={otherservice.otherserviceid.toString()} value={otherservice.otherserviceid.toString()}>
                  {/* {otherservice.kind} */}
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
              {otherservices.map((otherservice) => (
                <option key={otherservice.otherserviceid.toString()} value={otherservice.otherserviceid.toString()}>
                  {otherservice.kindid}
                </option>
              ))}
            </select>
        </div>
        <label htmlFor="otherService" className="mb-2 block font-medium">
            Үзэсгэлэнгийн танхимын үйлчилгээ
        </label>
        <select
          id="added_exhibit"
          name="added_exhibit"
          className="relative"
          defaultValue=""
          aria-describedby="added_exhibit-error"
        >
          <option value="" disabled>
            
          </option>
          {otherservices.map((otherservice) => (
            <option key={otherservice.otherserviceid.toString()} value={otherservice.otherserviceid.toString()}>
              {/* {otherservice.kind} */}
            </option>
          ))}
        </select>
        <fieldset>
          <legend>Үйлчлүүлэгчид</legend>
          {otherservices.map((service) => (
            <div key={service.otherserviceid.toString()}>
              <input type="number" id={service.otherserviceid.toString()} name="interest" value={service.otherserviceid} />
              <label htmlFor={service.otherserviceid.toString()}>{service.customertypeid}</label>
            </div>
          ))}
        </fieldset>
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
    </form>
  );
}

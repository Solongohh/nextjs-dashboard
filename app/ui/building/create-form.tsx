'use client';
import { BuildingCapacity } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createBuildingCapacity } from '@/app/lib/actionsStatistic';
import { useFormState } from 'react-dom';

export default function Form({ buildingcapacities }: { buildingcapacities: BuildingCapacity[] }) {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBuildingCapacity, initialState);
  return (
    <form action={dispatch}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* employee Name */}
        <div className="mb-4">
          <label htmlFor="employee" className="mb-2 block text-sm font-medium">
            Choose employee
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
              aria-describedby="customer-error"
            >
              <option value="" disabled>
                Select a employee
              </option>
              {buildingcapacities.map((BuildingCapacity) => (
                <option key={BuildingCapacity.BuildingCapacityID} value={BuildingCapacity.BuildingCapacityID}>
                  {BuildingCapacity.BuildingCapacity}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <div id="employee-error" aria-live="polite" aria-atomic="true">
            {state.errors?.buildingCapacityID &&
              state.errors.buildingCapacityID.map((error: number) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/invoices"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}

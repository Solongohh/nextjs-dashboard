'use client';
import { buildingcapacity } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createBuildingCapacity } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
// import { BuildingCapacity } from '../form/buttons';

export default function Form({ buildingcapacities }: { buildingcapacities: buildingcapacity[] }) {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createBuildingCapacity, initialState);
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
            <div className="relative grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
              <input
                    id="plan"
                    name="plan"
                    type="string"
                    step="0.01"
                    placeholder=""
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    required
                />
              <input
                  id="plan"
                  name="plan"
                  type="string"
                  step="0.01"
                  placeholder=""
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
              />
            </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/form"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Бүртгэх</Button>
      </div>
    </form>
  );
}

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
  const building = {
    "buildingCapacity": '',
    "capacityPlan": 0 ,
    "capacityPerformance": 0,
   };
 
   const handleSubmit = (event: any) => {
     event.preventDefault();
     createBuildingCapacity(building);
   };
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3 mt-4 ">
            <label htmlFor="birthdate" className="mb-2 block text-sm font-medium">
                Барилгын хүчин чадал
              </label>
              <label htmlFor="sex" className="mb-2 block text-sm font-medium">
                Төлөвлөгөө
              </label>
              <label htmlFor="sex" className="mb-2 block text-sm font-medium">
                Гүйцэтгэл
              </label>
              <select
                id="buildingCapacity"
                name="buildingCapacity"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
                onChange={(e) => building.buildingCapacity = e.target.value}
                aria-describedby="buildingCapacity-error"
                >
                <option value="" disabled>
                </option>
                {buildingcapacities.map((buildingcapacity)=> (
                  <option key={buildingcapacity.buildingcapacityid} value={buildingcapacity.buildingcapacityid}>
                    {buildingcapacity.buildingcapacity}
                  </option>
                ))}
              </select>
              <input
                    id="plan"
                    name="plan"
                    type="number"
                    placeholder=""
                    onChange={(e) => building.capacityPlan = parseInt(e.target.value)}
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    required
                />
              <input
                  id="performance"
                  name="performance"
                  type="number"
                  onChange={(e) => building.capacityPerformance = parseInt(e.target.value)}
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  required
              />
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

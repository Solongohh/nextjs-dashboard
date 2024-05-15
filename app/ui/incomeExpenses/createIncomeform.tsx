'use client';
import { income, incometype } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createIncome } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ incomes, incomeType }: { incomes: income[], incomeType: incometype[] }) {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createIncome, initialState);
  return (
    // <form action={dispatch}>
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="relative grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
          <label htmlFor="IncomePerformance" className="mb-2 block font-medium">
            Үйл ажиллагааны орлого
          </label>
          <label htmlFor="IncomePlan" className="mb-2 block font-medium">
            Төлөвлөгөө
          </label>
          <label htmlFor="IncomePerformance" className="mb-2 block font-medium">
            Гүйцэтгэл
          </label>
        </div>
          <div className='relative text-sm overflow-hidden'>
            {incomeType.map((incomeType) => (
              <div key={incomeType.incometypeid} className="flex items-center mb-4  grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
                <option key={incomeType.incometypeid} value={incomeType.incometypeid} className="text-sm font-medium mr-4">
                  {incomeType.incometype}
                </option>
                <div className="relative w-full">
                  <input
                    id={`incomePlan-${incomeType.incometypeid}`}
                    name={`incomePlan-${incomeType.incometypeid}`}
                    type="number"
                    step="0.01"
                    placeholder=""
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    required
                  />
                  <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                <div className="relative w-full">
                  <input
                    id={`incomePlan-${incomeType.incometypeid}`}
                    name={`incomePlan-${incomeType.incometypeid}`}
                    type="number"
                    step="0.01"
                    placeholder=""
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    required
                  />
                  <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/form/createIncomeExpenses"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Бүртгэх</Button>
      </div>
    </form>
  );
}

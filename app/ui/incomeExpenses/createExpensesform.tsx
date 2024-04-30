'use client';
import { ExpensesType } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createExpenses } from '@/app/lib/actions';
import { useFormState } from 'react-dom';

export default function Form({ ExpensesType }: { ExpensesType: ExpensesType[] }) {
  const initialState = { message: null, errors: {} };
  // const [state, dispatch] = useFormState(createExpenses, initialState);
  return (
    // <form action={dispatch}>
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="relative grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
          <label htmlFor="ExpensesPerformance" className="mb-2 block text-sm font-medium">
            Зардал
          </label>
          <label htmlFor="ExpensesPlan" className="mb-2 block text-sm font-medium">
            Төлөвлөгөө
          </label>
          <label htmlFor="ExpensesPerformance" className="mb-2 block text-sm font-medium">
            Гүйцэтгэл
          </label>
          {ExpensesType.map((ExpensesType)=> (
                  <option key={ExpensesType.ExpensesTypeID} value={ExpensesType.ExpensesTypeID}>
                    {ExpensesType.ExpensesType}
                  </option>
                ))}
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="ExpensesPlan"
                name="ExpensesPlan"
                type="number"
                step="0.01"
                placeholder=""
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="ExpensesPerformance"
                name="ExpensesPerformance"
                type="number"
                step="0.01"
                placeholder=""
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                required
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/form/createExpensesExpenses"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Бүртгэх</Button>
      </div>
    </form>
  );
}

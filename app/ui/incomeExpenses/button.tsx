import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteIncome, deleteExpenses } from '@/app/lib/actions';

export function CreateIncome() {
  return (
    <Link
      href="/dashboard/form/createIncomeExpenses/createIncome"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Орлого бүртгэх</span>
    </Link>
  );
}
export function DeleteIncome({ id }: { id: number }) {
  // Convert 'id' to string explicitly
  const deleteIncomeWithId = () => deleteIncome(String(id));

  return (
    <button
      className="rounded-md border p-2 hover:bg-gray-100"
      onClick={deleteIncomeWithId}
    >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" />
    </button>
  );
}
export function CreateExpenses() {
  return (
    <Link
      href="/dashboard/form/createIncomeExpenses/createExpenses"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Зарлага бүртгэх</span>
    </Link>
  );
}
export function DeleteExpenses({ id }: { id: number }) {
  // Convert 'id' to string explicitly
  const deleteExpensesWithId = () => deleteExpenses(String(id));

  return (
    <button
      className="rounded-md border p-2 hover:bg-gray-100"
      onClick={deleteExpensesWithId}
    >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" />
    </button>
  );
}

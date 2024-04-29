import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteOtherService } from '@/app/lib/actions';

export function CreateOtherService() {
  return (
    <Link
      href="/dashboard/form/createOtherService"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Бусад үйлчилгээ бүртгэх</span>
    </Link>
  );
}

export function UpdateOtherService({ id }: { id: number }) {
  // Convert 'id' to string explicitly
  const editUrl = `/dashboard/invoices/${id}/edit`;

  return (
    <Link href={editUrl}>
      <a className="rounded-md border p-2 hover:bg-gray-100">
        <PencilIcon className="w-5" />
      </a>
    </Link>
  );
}

export function DeleteOtherService({ id }: { id: number }) {
  // Convert 'id' to string explicitly
  const deleteOtherServiceWithId = () => deleteOtherService(String(id));

  return (
    <button
      className="rounded-md border p-2 hover:bg-gray-100"
      onClick={deleteOtherServiceWithId}
    >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" />
    </button>
  );
}

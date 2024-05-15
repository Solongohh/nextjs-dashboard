import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteMuseumService } from '@/app/lib/actions';

export function CreateMuseumService() {
  return (
    <Link
      href="/dashboard/form/createMuseumService/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Музейн үйлчилгээ бүртгэх</span>
    </Link>
  );
}

export function DeleteMuseumService({ id }: { id: number }) {
  // Convert 'id' to string explicitly
  const deleteMuseumServiceWithId = () => deleteMuseumService(String(id));

  return (
    <button
      className="rounded-md border p-2 hover:bg-gray-100"
      onClick={deleteMuseumServiceWithId}
    >
      <span className="sr-only">Delete</span>
      <TrashIcon className="w-5" />
    </button>
  );
}

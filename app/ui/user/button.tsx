import Link from 'next/link';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { deleteUser } from '@/app/lib/actions';

export function CreateUser() {
  return (
    <Link
      href="/dashboard/users/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Хэрэглэгч бүртгэх</span>
    </Link>
  );
}

// export function UpdateUser({ id }: { id: number }) {
//   // Convert 'id' to string explicitly
//   const editUrl = `/dashboard/users/${id}/edit`;

//   return (
//     <Link href={editUrl}>
//       <a className="rounded-md border p-2 hover:bg-gray-100">
//         <PencilIcon className="w-5" />
//       </a>
//     </Link>
//   );
// }

// export function DeleteUser({ id }: { id: number }) {
//   // Convert 'id' to string explicitly
//   const deleteUserWithId = () => deleteUser(String(id));

//   return (
//     <button
//       className="rounded-md border p-2 hover:bg-gray-100"
//       onClick={deleteUserWithId}
//     >
//       <span className="sr-only">Delete</span>
//       <TrashIcon className="w-5" />
//     </button>
//   );
// }

export function DeleteUser({ id }: { id?: number }) {
  if (id === undefined) {
    // Handle the case where id is undefined
    return null; // or render an appropriate message or component
  }

  const deleteUserWithId = deleteUser.bind(null, id.toString()); // Convert id to string

  return (
    <form onSubmit={deleteUserWithId}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}


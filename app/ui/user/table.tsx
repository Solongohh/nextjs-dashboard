import Image from 'next/image';
import { UpdateUser, DeleteUser } from '@/app/ui/user/button';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredUser } from '@/app/lib/data1';
import { User } from '@/app/lib/placeholder-data';

export default async function UserTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const user = await fetchFilteredUser(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {user?.map((user) => (
              <div
                key={user.UserID}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{user.UserName}</p>
                    </div>
                    <p className="text-sm text-gray-500">{user.UserName}</p>
                  </div>
                  {/* <InvoiceStatus status={invoice.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    {/* <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p> */}
                    <p>{formatDateToLocal(user.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateUser id={user.UserID} />
                    <DeleteUser id={user.UserID} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  UserID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  UserRole
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  UserName
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  UserPhone
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Password
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  EmployeeID
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {user?.map((User) => (
                <tr
                  key={User.UserID}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{User.UserName}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {User.UserRole}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {(User.UserPhone)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(User.date)}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateUser id={User.UserID} />
                      <DeleteUser id={User.UserID} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

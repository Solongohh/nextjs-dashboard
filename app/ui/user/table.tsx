import Image from 'next/image';
import { DeleteUser } from '@/app/ui/user/button';
// import InvoiceStatus from '@/app/ui/users/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredUser } from '@/app/lib/data';
import { users } from '@/app/lib/definitions';

export default async function UserTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const users: any[] | undefined = await fetchFilteredUser(query, currentPage);

  // Check if users data is available
  if (!users) {
    return <div>Loading...</div>;
  }
  
  return (
  <div className="mt-6 flow-root">
    <div className="inline-block min-w-full align-middle">
      <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
        <div className="md:hidden">
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
                UserMail
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                EmployeeID
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Нэр
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Хүйс
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Утасны дугаар
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user, index) => (
              <tr
                key={index}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">{user.userid}</td>
                <td className="whitespace-nowrap px-3 py-3">{user.userrole}</td>
                <td className="whitespace-nowrap px-3 py-3">{user.usermail}</td>
                <td className="whitespace-nowrap px-3 py-3">{user.employeeid}</td>
                <td className="whitespace-nowrap px-3 py-3">{user.firstname}</td>
                <td className="whitespace-nowrap px-3 py-3">{user.sex}</td>
                <td className="whitespace-nowrap px-3 py-3">{user.phone}</td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    {/* <UpdateInvoice id={user.id} /> */}
                    <DeleteUser id={user.UserID} />
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

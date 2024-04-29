import Image from 'next/image';
// import { UpdateUser, DeleteUser } from '@/app/ui/user/button';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredEmployee } from '@/app/lib/data';
import { Employee} from '@/app/lib/placeholder-data';
import { DeleteEmployee } from './button';

export default async function EmployeeTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const Employee = await fetchFilteredEmployee(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {Employee?.map((Employee) => (
              <div
                key={Employee.EmployeeID}
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
                      <p>{Employee.FirsName}</p>
                    </div>
                    <p className="text-sm text-gray-500">{Employee.Sex}</p>
                  </div>
                  {/* <InvoiceStatus status={invoice.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    {/* <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p> */}
                    {/* <p>{formatDateToLocal(user.date)}</p> */}
                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <UpdateUser id={user.UserID} />
                    <DeleteUser id={user.UserID} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  EmployeeID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  FirstName
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Sex
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Birthdate
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Occupation
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {Employee?.map((Employee) => (
                <tr
                  key={Employee.EmployeeID}
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
                      <p>{Employee.EmployeeID}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {Employee.FirsName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {(Employee.Sex)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* {formatDateToLocal(User.date)} */}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateUser id={User.UserID} /> */}
                      <DeleteEmployee id={Employee.EmployeeID} />
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

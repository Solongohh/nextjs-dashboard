import Image from 'next/image';
// import { UpdateUser, DeleteUser } from '@/app/ui/user/button';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchEmployee } from '@/app/lib/data';
import { DeleteEmployee } from './button';

export default async function EmployeeTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const employees: any[] | undefined = await fetchEmployee(); // Rename the variable to avoid conflict

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {employees?.map((employee) => (
              <div
                key={employee.EmployeeID}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{employee.EmployeeID}</p>
                    </div>
                    <p className="text-sm text-gray-500">{employee.FirsName}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <UpdateUser id={user.UserID} /> */}
                    {/* <DeleteEmployee id={employee.EmployeeID} /> */}
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
                    Овог
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Нэр
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Төрсөн огноо
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Хүйс
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Регистр
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Утас
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Боловсрол
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Мэргэжил
                  </th>
                  <th scope="col" className="relative pb-4 pl-3 pr-6 pt-2 sm:pr-6">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {employees.map((employee) => (
                  <tr key={employee.employeeid} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">{employee.employeeid}</td>
                    <td className="whitespace-nowrap px-3 py-3">{employee.lastname}</td>
                    <td className="whitespace-nowrap px-3 py-3">{employee.firstname}</td>
                    <td className="whitespace-nowrap px-3 py-3">{employee.birthdate ? formatDateToLocal(employee.birthdate.toISOString()) : ''}</td>
                    <td className="whitespace-nowrap px-3 py-3">{employee.sex}</td>
                    <td className="whitespace-nowrap px-3 py-3">{employee.register}</td>
                    <td className="whitespace-nowrap px-3 py-3">{employee.phone}</td>
                    <td className="whitespace-nowrap px-3 py-3">{employee.education}</td>
                    <td className="whitespace-nowrap px-3 py-3">{employee.occupation}</td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        {/* <UpdateInvoice id={employee.id} /> */}
                        {/* <DeleteEmployee id={employee.employeeID} /> */}
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

import Image from 'next/image';
// import { UpdateUser, DeleteUser } from '@/app/ui/user/button';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredBuilding } from '@/app/lib/data';
import { DeleteBuilding } from './button';

export default async function BuildingTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const Buildings = await fetchFilteredBuilding(query, currentPage); // Rename the variable to avoid conflict

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {Buildings?.map((building) => (
              <div
                key={building.BuildingCapacityID}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{building.BuildingCapacityID}</p>
                    </div>
                    <p className="text-sm text-gray-500">{building.BuildingCapacity}</p>
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
                  BuildingCapacityID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Барилгын хүчин чадал
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Төлөвлөгөө
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Гүйцэтгэл
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {Buildings?.map((building) => (
                <tr
                  key={building.BuildingCapacityID}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{building.BuildingCapacityID}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {building.BuildingCapacity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {building.CapacityPlan}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {building.CapacityPerformance}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateUser id={User.UserID} /> */}
                      {/* <DeleteEmployee id={Employee.EmployeeID} /> */}
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

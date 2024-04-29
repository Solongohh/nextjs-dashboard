import Image from 'next/image';
// import { UpdateOtherService, DeleteOtherService } from '@/app/ui/user/button';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredOtherService } from '@/app/lib/data';
import { OtherService} from '@/app/lib/placeholder-data';

export default async function OtherServiceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const otherservice = await fetchFilteredOtherService(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {otherservice?.map((otherservice) => (
              <div
                key={otherservice.OtherServiceID}
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
                      <p>{otherservice.Services}</p>
                    </div>
                    <p className="text-sm text-gray-500">{otherservice.KindID}</p>
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
                  OtherServiceID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Services
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  KindID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  CustomerTypeID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  CustomerCount
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {otherservice?.map((OtherService) => (
                <tr
                  key={OtherService.OtherServiceID}
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
                      <p>{OtherService.Services}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {OtherService.KindID}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {(OtherService.CustomerTypeID)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* {formatDateToLocal(User.date)} */}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateUser id={User.UserID} />
                      <DeleteUser id={User.UserID} /> */}
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

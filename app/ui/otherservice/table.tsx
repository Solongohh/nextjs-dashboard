import Image from 'next/image';
// import { UpdateOtherService, DeleteOtherService } from '@/app/ui/user/button';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredOtherService } from '@/app/lib/data';
// import { OtherService} from '@/app/lib/placeholder-data';

export default async function OtherServiceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const otherservice : any[] | undefined = await fetchFilteredOtherService(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {otherservice?.map((otherservice) => (
              <div
                key={otherservice.otherserviceid}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{otherservice.services}</p>
                    </div>
                    <p className="text-sm text-gray-500">{otherservice.kind}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
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
                  Үйлчилгээ
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Хэлбэр
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Үйлчлүүлэгчийн төрөл
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Үйлчлүүлэгчийн тоо
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {otherservice?.map((OtherService) => (
                <tr key={OtherService.otherserviceid} className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">{OtherService.otherserviceid}</td>
                  <td className="whitespace-nowrap px-3 py-3">{OtherService.services}</td>
                  <td className="whitespace-nowrap px-3 py-3">{OtherService.kind}</td>
                  <td className="whitespace-nowrap px-3 py-3">{OtherService.customertype}</td>
                  <td className="whitespace-nowrap px-3 py-3">{OtherService.customercount}</td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateInvoice id={OtherService.id} /> */}
                      {/* <DeleteOtherService id={OtherService.OtherServiceID} /> */}
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

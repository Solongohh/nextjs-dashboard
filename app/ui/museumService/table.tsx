import Image from 'next/image';
import { DeleteMuseumService } from '@/app/ui/museumService/button';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredMuseumService } from '@/app/lib/data';
// import { MuseumService} from '@/app/lib/placeholder-data';
// import { DeleteMuseumService } from './button';

export default async function MuseumServiceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const museumservice : any[] | undefined = await fetchFilteredMuseumService(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {museumservice?.map((museumservice) => (
              <div
                key={museumservice.museumserviceid}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{museumservice.museumserviceid}</p>
                    </div>
                    <p className="text-sm text-gray-500">{museumservice.exhibittype}</p>
                  </div>
                  {/* <InvoiceStatus status={invoice.status} /> */}
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {museumservice.kind}
                    </p>
                    {/* <p>{formatDateToLocal(user.date)}</p> */}
                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <UpdateUser id={user.UserID} /> */}
                    {/* <DeleteMuseumService id={museumservice.MuseumServiceID} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  MuseumServiceID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Төрөл
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
              {museumservice?.map((MuseumService) => (
                <tr
                  key={MuseumService.museumserviceid}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{MuseumService.museumserviceid}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {MuseumService.exhibittype}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {(MuseumService.kind)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {MuseumService.customertype}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {MuseumService.customercount}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateUser id={User.UserID} /> */}
                      {/* <DeleteMuseumService id={MuseumService.MuseumServiceID} /> */}
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

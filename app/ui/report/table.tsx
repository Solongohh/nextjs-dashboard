import Image from 'next/image';
import { DeleteUser } from '@/app/ui/user/button';
// import InvoiceStatus from '@/app/ui/users/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchReport } from '@/app/lib/data';
import { report } from '@/app/lib/definitions';

export default async function Table({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const reports: report[] | undefined = await fetchReport(query, currentPage);

  // Check if users data is available
  if (!reports) {
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
                №
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Тайлан
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Төлөв
              </th>
              <th scope="col" className="px-3 py-5 font-medium">
                Илгээсэн хугацаа
              </th>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {reports.map((report) => (
              <tr
                key={report.reportid}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap py-3 pl-6 pr-3">{report.reportid}</td>
                <td className="whitespace-nowrap px-3 py-3">{report.report}</td>
                <td className="whitespace-nowrap px-3 py-3">{report.status}</td>
                <td className="whitespace-nowrap px-3 py-3">{report.sentDate.toLocaleDateString()}</td>

                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    {/* <UpdateInvoice id={user.id} /> */}
                    <DeleteUser id={report.reportid} />
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

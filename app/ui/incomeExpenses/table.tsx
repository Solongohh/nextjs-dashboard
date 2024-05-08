import Image from 'next/image';
import { DeleteIncome } from '@/app/ui/incomeExpenses/button';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredIncome, fetchFilteredExpenses } from '@/app/lib/data';

export async function IncomeTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const income : any[] | undefined = await fetchFilteredIncome(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {income?.map((income) => (
              <div
                key={income.incomeid}
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
                      <p>{income.incomeid}</p>
                    </div>
                    <p className="text-sm text-gray-500">{income.incomeplan}</p>
                  </div>
                  {/* <InvoiceStatus status={invoice.status} /> */}<p>{income.incomeperformance}</p>
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
                  IncomeID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Орлого
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
              {income?.map((Income) => (
                <tr
                  key={Income.incomeid}
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
                      <p>{Income.incomeid}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {Income.incometype}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {Income.incomeplan}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* {formatDateToLocal(User.date)} */}{Income.incomeperformance}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <UpdateUser id={User.UserID} /> */}
                      {/* <DeleteIncome id={Income.IncomeID} /> */}
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
export async function ExpensesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const Expenses: any[] | undefined = await fetchFilteredExpenses(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {Expenses?.map((Expenses) => (
              <div
                key={Expenses.expensesid}
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
                      <p>{Expenses.expensesid}</p>
                    </div>
                    <p className="text-sm text-gray-500">{Expenses.expensesplan}</p>
                  </div>
                  {/* <InvoiceStatus status={invoice.status} /> */}<p>{Expenses.expensesperformance}</p>
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
                  ExpensesID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Зардал
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
              {Expenses?.map((Expenses) => (
                <tr
                  key={Expenses.expensesid}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{Expenses.expensesid}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {Expenses.expensestype}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {Expenses.expensesplan}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {Expenses.expensesperformance}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      {/* <DeleteExpenses id={Expenses.ExpensesID} /> */}
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
import ExpensesForm from '@/app/ui/incomeExpenses/createExpensesform';
import Breadcrumbs from '@/app/ui/incomeExpenses/breadcrumbs';
import { fetchExpenses, fetchExpensesType } from '@/app/lib/data';
 
export default async function Page() {
  const Expenses = await fetchExpenses();
  const ExpensesType = await fetchExpensesType();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Маягт', href: '/dashboard/form' },
          {
            label: 'Зарлага',
            href: '/dashboard/form/createExpenses',
            active: true,
          },
        ]}
      />
      <ExpensesForm Expenses={Expenses} ExpensesType={ExpensesType} />
    </main>
  );
}
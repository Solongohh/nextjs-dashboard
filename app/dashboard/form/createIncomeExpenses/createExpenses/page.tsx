import ExpensesForm from '@/app/ui/incomeExpenses/createExpensesform';
import Breadcrumbs from '@/app/ui/incomeExpenses/breadcrumbs';
import { fetchExpenses } from '@/app/lib/data';
 
export default async function Page() {
  const Expenses = await fetchExpenses();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Expenses', href: '/dashboard/form/createExpenses' },
          {
            label: 'Create Expenses',
            href: '/dashboard/form/createExpenses',
            active: true,
          },
        ]}
      />
      <ExpensesForm Expensess={Expenses} />
    </main>
  );
}
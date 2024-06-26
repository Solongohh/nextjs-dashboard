import Form from '@/app/ui/incomeExpenses/createIncomeform';
import Breadcrumbs from '@/app/ui/incomeExpenses/breadcrumbs';
import { fetchIncome, fetchIncomeType } from '@/app/lib/data';
 
export default async function Page() {
  const income = await fetchIncome();
  const incomeType = await fetchIncomeType();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Маягт', href: '/dashboard/form/createIncomeExpenses' },
          {
            label: 'Орлого',
            href: '/dashboard/form/createIncomeExpenses',
            active: true,
          },
        ]}
      />
      <Form incomes={income} incomeType={incomeType} />
    </main>
  );
}
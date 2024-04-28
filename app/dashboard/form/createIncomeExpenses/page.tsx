import Form from '@/app/ui/income/create-form';
import Breadcrumbs from '@/app/ui/income/breadcrumbs';
import { fetchIncome } from '@/app/lib/data';
 
export default async function Page() {
  const income = await fetchIncome();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Income', href: '/dashboard/form/createIncome' },
          {
            label: 'Create Income',
            href: '/dashboard/form/createIncome',
            active: true,
          },
        ]}
      />
      <Form incomes={income} />
    </main>
  );
}
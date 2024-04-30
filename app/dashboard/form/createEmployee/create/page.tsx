import Form from '@/app/ui/employee/create-form';
import Breadcrumbs from '@/app/ui/employee/breadcrumbs';
import { fetchEmployee } from '@/app/lib/data';
 
export default async function Page() {
  const employee = await fetchEmployee();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Employee', href: '/dashboard/form' },
          {
            label: 'Create Employee',
            href: '/dashboard/form/createEmployee',
            active: true,
          },
        ]}
      />
      <Form employees={employee} />
    </main>
  );
}
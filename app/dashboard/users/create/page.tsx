import Form from '@/app/ui/user/create-form';
import Breadcrumbs from '@/app/ui/building/breadcrumbs';
import { fetchEmployee, fetchRole } from '@/app/lib/data';
 
export default async function Page() {
  const employee = await fetchEmployee();
  const role = await fetchRole();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Хэрэглэгч', href: '/dashboard/users' },
          {
            label: 'Хэрэглэгч бүртгэх',
            href: '/dashboard/users/create',
            active: true,
          },
        ]}
      />
      <Form employees={employee} roles={role}/>
    </main>
  );
}
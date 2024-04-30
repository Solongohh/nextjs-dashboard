import Form from '@/app/ui/user/create-form';
import Breadcrumbs from '@/app/ui/building/breadcrumbs';
import { fetchUser } from '@/app/lib/data';
 
export default async function Page() {
  const user = await fetchUser();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'User', href: '/dashboard/form/createUser' },
          {
            label: 'Create User',
            href: '/dashboard/form/createUser',
            active: true,
          },
        ]}
      />
      <Form users={user}/>
    </main>
  );
}
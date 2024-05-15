import Form from '@/app/ui/otherservice/create-form';
import Breadcrumbs from '@/app/ui/otherservice/breadcrumbs';
import { fetchOtherService } from '@/app/lib/data';
 
export default async function Page() {
  const otherservice = await fetchOtherService();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Маягт', href: '/dashboard/form' },
          {
            label: 'Бусад үйлчилгээ',
            href: '/dashboard/form/createMuseumService',
            active: true,
          },
        ]}
      />
      <Form otherservices={otherservice} />
    </main>
  );
}
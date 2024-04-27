import Form from '@/app/ui/museumService/create-form';
import Breadcrumbs from '@/app/ui/museumService/breadcrumbs';
import { fetchMuseumService } from '@/app/lib/data1';
 
export default async function Page() {
  const museumService = await fetchMuseumService();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'museumService', href: '/dashboard/museumService' },
          {
            label: 'Create MuseumService',
            href: '/dashboard/form/createMuseumService',
            active: true,
          },
        ]}
      />
      <Form museumservices={museumService} />
    </main>
  );
}
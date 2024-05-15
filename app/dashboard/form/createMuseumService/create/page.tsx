import Form from '@/app/ui/museumService/create-form';
import Breadcrumbs from '@/app/ui/museumService/breadcrumbs';
import { fetchMuseumService, fetchExhibitType } from '@/app/lib/data';
 
export default async function Page() {
  const museumService = await fetchMuseumService();
  const exhibittype = await fetchExhibitType();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Маягт', href: '/dashboard/form' },
          {
            label: 'Музейн үйлчилгээ',
            href: '/dashboard/form/createMuseumService',
            active: true,
          },
        ]}
      />
      <Form museumservices={museumService} exhibittypes = {exhibittype} />
    </main>
  );
}
import Form from '@/app/ui/exhibit/create-form';
import Breadcrumbs from '@/app/ui/exhibit/breadcrumbs';
import { fetchExhibitHistory, fetchExhibitType, fetchAddress } from '@/app/lib/data';
 
export default async function Page() {
  const exhibit = await fetchExhibitHistory();
  const exhibittype = await fetchExhibitType();
  const address = await fetchAddress();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Маягт', href: '/dashboard/form' },
          {
            label: 'Үзмэр',
            href: '/dashboard/form/createExhibit',
            active: true,
          },  
        ]}
      />
      <Form exhibits={exhibit} exhibittypes={exhibittype} addresses={address} />
    </main>
  );
}
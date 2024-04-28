import Form from '@/app/ui/exhibit/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchExhibitHistory } from '@/app/lib/data';
 
export default async function Page() {
  const exhibit = await fetchExhibitHistory();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Exhibit', href: '/dashboard/form' },
          {
            label: 'Create Exhibit',
            href: '/dashboard/form/createExhibit',
            active: true,
          },
        ]}
      />
      <Form exhibits={exhibit} />
    </main>
  );
}
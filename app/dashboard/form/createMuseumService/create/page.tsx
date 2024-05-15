import Form from '@/app/ui/museumService/create-form';
import Breadcrumbs from '@/app/ui/museumService/breadcrumbs';
import { fetchMuseumService, fetchExhibitType, fetchProvince, fetchDistrict, fetchKind, fetchCustomerType } from '@/app/lib/data';
 
export default async function Page() {
  const museumService = await fetchMuseumService();
  const exhibittype = await fetchExhibitType();
  const province = await fetchProvince();
  const district = await fetchDistrict();
  const kind = await fetchKind();
  const customertype = await fetchCustomerType();
 
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
      <Form museumservices={museumService} exhibittypes = {exhibittype} provinces={province} districts={district} kinds={kind} customertypes={customertype}/>
    </main>
  );
}
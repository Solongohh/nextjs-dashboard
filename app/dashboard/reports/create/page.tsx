import Form from '@/app/ui/otherservice/create-form';
import Breadcrumbs from '@/app/ui/otherservice/breadcrumbs';
import { fetchService, fetchExhibitType, fetchProvince, fetchDistrict, fetchKind, fetchCustomerType } from '@/app/lib/data';
 
export default async function Page() {
  const service = await fetchService();
  const exhibittype = await fetchExhibitType();
  const province = await fetchProvince();
  const district = await fetchDistrict();
  const kind = await fetchKind();
  const customertype = await fetchCustomerType();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Маягт', href: '/dashboard/reports' },
          {
            label: 'Бусад үйлчилгээ',
            href: '/dashboard/reports',
            active: true,
          },
        ]}
      />
      <Form  services={service} exhibittypes = {exhibittype} provinces={province} districts={district} kinds={kind} customertypes={customertype}/>
    </main>
  );
}
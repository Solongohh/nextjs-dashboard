import Form from '@/app/ui/employee/create-form';
import Breadcrumbs from '@/app/ui/employee/breadcrumbs';
import { fetchEmployee, fetchAddress, fetchProvince, fetchDistrict } from '@/app/lib/data';
 
export default async function Page() {
  const employee = await fetchEmployee();
  const address = await fetchAddress();
  const province = await fetchProvince();
  const district = await fetchDistrict();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Маягт', href: '/dashboard/form' },
          {
            label: 'Ажилтан',
            href: '/dashboard/form/createEmployee',
            active: true,
          },
        ]}
      />
      <Form employees={employee} provinces={province} districts={district}/>
    </main>
  );
}
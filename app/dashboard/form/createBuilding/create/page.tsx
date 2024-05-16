import Form from '@/app/ui/building/create-form';
import Breadcrumbs from '@/app/ui/building/breadcrumbs';
import { fetchBuildingCapacity } from '@/app/lib/data';
 
export default async function Page() {
  const buildingcapacity = await fetchBuildingCapacity();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Маягт', href: '/dashboard/form/createBuilding' },
          {
            label: 'Барилгын хүчин чадал',
            href: '/dashboard/form/createBuilding/create',
            active: true,
          },
        ]}
      />
      <Form buildingcapacities={buildingcapacity}/>
    </main>
  );
}
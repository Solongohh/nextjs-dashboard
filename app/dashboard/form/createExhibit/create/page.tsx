import Form from '@/app/ui/exhibit/create-form';
import Breadcrumbs from '@/app/ui/exhibit/breadcrumbs';
import { fetchExhibitHistory, fetchExhibitType, fetchProvince, fetchDistrict, fetchAddedExhibit, fetchRating } from '@/app/lib/data';
 
export default async function Page() {
  const exhibit = await fetchExhibitHistory();
  const exhibittype = await fetchExhibitType();
  const province = await fetchProvince();
  const district = await fetchDistrict();
  const addedexhibit = await fetchAddedExhibit();
  const rating = await fetchRating();
 
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
      <Form exhibits={exhibit} exhibittypes={exhibittype} provinces={province} districts={district} addedexhibits={addedexhibit} ratings={rating}/>
    </main>
  );
}
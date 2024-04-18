import {    Employee, 
            IncomeExpenses,
            BuildingCapacity,
            Exhibit,
            MuseumService,
            OtherService  } from '@/app/ui/form/buttons';
export default function Page() {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
        <Employee/>
        <IncomeExpenses/>
        <BuildingCapacity/>
        <Exhibit/>
        <MuseumService/>
        <OtherService/>
      </div>
    );
  }
  
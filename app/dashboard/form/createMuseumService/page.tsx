import Pagination from '@/app/ui/employee/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/museumService/table';
import { CreateMuseumService } from '@/app/ui/museumService/button';
import { lusitana } from '@/app/ui/fonts';
import { MuseumServiceTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import {    Employee, 
  IncomeExpenses,
  BuildingCapacity,
  Exhibit,
  MuseumService,
  OtherService  } from '@/app/ui/form/buttons';
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
          <Employee/>
          <IncomeExpenses/>
          <BuildingCapacity/>
          <Exhibit/>
          <MuseumService/>
          <OtherService/>
      </div>
      <hr className="mt-10"></hr>
      <div className="flex w-full items-center justify-between mt-6">
        
        <h1 className={`${lusitana.className} text-2xl`}>Музейн үйлчилгээ хүснэгт</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Музейн үйлчилгээ хайх..." />
        <CreateMuseumService />
      </div>
       <Suspense key={query + currentPage} fallback={<MuseumServiceTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
      </div>
    </div>
  );
}
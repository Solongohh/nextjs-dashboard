import Pagination from '@/app/ui/otherservice/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/otherservice/table';
import { CreateOtherService } from '@/app/ui/otherservice/button';
import { lusitana } from '@/app/ui/fonts';
import { OtherServiceTableSkeleton } from '@/app/ui/skeletons';
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
    <div id='dot1'></div>
    <div id='dot2'></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> 
          <Employee/>
          <IncomeExpenses/>
          <BuildingCapacity/>
          <Exhibit/>
          <MuseumService/>
          <OtherService/>
      </div>
      <div className="bg-white rounded-lg p-6 border-black mt-10">
        <div className="flex w-full items-center justify-between mt-6">
          
          <h1 className={`${lusitana.className} text-2xl`}>Бусад үйлчилгээ хүснэгт</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Ажилтан хайх..." />
          <CreateOtherService />
        </div>
        <Suspense key={query + currentPage} fallback={<OtherServiceTableSkeleton />}>
          <Table query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </div>
  );
}
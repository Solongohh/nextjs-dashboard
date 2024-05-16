import Pagination from '@/app/ui/employee/pagination';
import Search from '@/app/ui/search';
import { CreateReport } from '@/app/ui/report/button';
import { lusitana } from '@/app/ui/fonts';
import { UsersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import Table from '@/app/ui/report/table';
 
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
      <div className="bg-white rounded-lg p-6 border-black mt-10">
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search report..." />
          <CreateReport />
        </div>
        <Table query={query} currentPage={currentPage} />
        </div>
    </div>
  );
}
import Pagination from '@/app/ui/employee/pagination';
import Search from '@/app/ui/search';
// import Table from '@/app/ui/user/table';
import { CreateUser } from '@/app/ui/user/button';
import { lusitana } from '@/app/ui/fonts';
import { UsersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import UserTable from '@/app/ui/user/table';
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  console.log('user page');
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Users</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search user..." />
        <CreateUser />
      </div>
       {/* <Suspense key={query + currentPage} fallback={<UsersTableSkeleton />}>
      </Suspense> */}
      <UserTable query={query} currentPage={currentPage} />
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
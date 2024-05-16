'use client';
import { employee, role } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createUser } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
// import { users } from '@/app/lib/placeholder-data';

export default function Form({ employees, roles }: { employees: employee[], roles: role[] }) {
  const user = {
    "userMail": "",
    "password": "",
    "employeeID": 0,
    "userRole": ""
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createUser(user);
  };
  return (
    <form className='rounded-lg bg-gray-50 p-2 md:pt-0 border-black' onSubmit={handleSubmit}>
    <div id='dot1'></div>
    <div id='dot2'></div>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mt-4 relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <label htmlFor="employee" className="mb-2 block text-sm font-medium">
            Ажилтан
          </label>
          <label htmlFor="employee" className="mb-2 block text-sm font-medium">
            Хандалтын түвшин
          </label>
          <select
            id="employeeid"
            name="employeeid"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            onChange={(e) => user.employeeID = parseInt(e.target.value)}
            aria-describedby="customer-error"
          >
            <option value="" disabled>
              Select a employee
            </option>
            {employees.map((employee) => (
              <option key={employee.employeeid} value={employee.employeeid}>
                {employee.lastname} {employee.firstname}
              </option>
            ))}
          </select>
          <select
            id="userRole"
            name="userRole"
            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
            defaultValue=""
            onChange={(e) => user.userRole = (e.target.value)}
            aria-describedby="customer-error"
          >
            <option value="" disabled>
              Select a role
            </option>
            {roles.map((role) => (
              <option key={role.roleid} value={role.role}>
                {role.role}
              </option>
            ))}
          </select>
          <label htmlFor="UserMail" className="mb-2 block text-sm font-medium">
            UserMail
          </label>
          <label htmlFor="Password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <input
                id="userMail"
                name="userMail"
                type="text"
                onChange={(e) => user.userMail = (e.target.value)}
                placeholder=""
                className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 text-sm font-medium"
                required
              />
              <input
                id="Password"
                name="Password"
                type="text"
                onChange={(e) => user.password = (e.target.value)}
                placeholder=""
                className="peer block w-full rounded-md border border-black py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 text-sm font-medium"
                required
              />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/users"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Create User</Button>
        </div>
      </div>
    </form>
  );
}

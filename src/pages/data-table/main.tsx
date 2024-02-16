import React from 'react';
import { EmployeeTable } from '@/widgets/employee-table/employee-table';
import { Search } from '@/widgets/search';

export const Main: React.FC = () => {
  return (
    <>
      <Search />
      <EmployeeTable />
    </>
  );
};

import { Table } from '@/entities/table';
import { Tabs } from '@/features/table-tabs';
import React from 'react';

export const EmployeeTable: React.FC = () => {
  return (
    <>
      <Tabs />
      <Table />
    </>
  );
};

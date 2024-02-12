import React from 'react';
import styles from './data-table.module.scss';
import { EmployeeTable } from '@/widgets/employee-table/ui';
import { Search } from '@/widgets/search';

export const DatatablePage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Search />
      <EmployeeTable />
    </div>
  );
};

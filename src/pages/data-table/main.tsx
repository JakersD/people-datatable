import React from 'react';
import styles from './main.module.scss';
import { EmployeeTable } from '@/widgets/employee-table/employee-table';
import { Search } from '@/widgets/search';

export const Main: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Search />
      <EmployeeTable />
    </div>
  );
};

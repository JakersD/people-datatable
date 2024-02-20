import React from 'react';
import { Search } from './search/search';
import { Table } from './table/table';
import { TabList } from './tab-list/tab-list';

export const Main: React.FC = () => {
  return (
    <>
      <Search />
      <TabList />
      <Table />
    </>
  );
};

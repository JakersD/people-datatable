import { ESort, IEmployee } from '@/_data/models/employee';

export const showData = (data: IEmployee[], filteredData: IEmployee[] | undefined) => filteredData || data;

export const sortData = (data: IEmployee[], sort: ESort) =>
  sort !== ESort.default ? sortByKey(data, sort) : data;

const sortByKey = (data: IEmployee[], key: 'firstName' | 'birthday') =>
  [...data].sort((a, b) => +(a[key] > b[key]) || -(a[key] < b[key]));

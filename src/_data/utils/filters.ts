import { EDepartment, IEmployee } from '../models/employee';

export const filterByActiveTab = (employees: IEmployee[], activeTab: EDepartment) =>
  activeTab !== EDepartment.all ? employees.filter((v) => v.department === activeTab) : employees;

export const searchEmployees = (employees: IEmployee[], search: string) =>
  employees.filter((v) => Object.values(v).some((i) => i.includes(search)));

export const isDefaultFilter = (search: string, tab: EDepartment) => search === '' && tab === EDepartment.all;

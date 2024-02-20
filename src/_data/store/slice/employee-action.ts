import { EQueries } from '@/_data/api/models';
import { getPathWithQuery } from '@/_data/api/utils';
import { EDepartment, ESort, IEmployee } from '@/_data/models/employee';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, AppState } from '..';
import { employeeSlice } from './employee-reducer';
import { filterByActiveTab, isDefaultFilter, searchEmployees } from '@/_data/utils/filters';

interface IFetchAllEmployeesRes {
  items: IEmployee[];
}

export const fetchEmployees = createAsyncThunk('fetchEmployees', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get<IFetchAllEmployeesRes>(getPathWithQuery(EQueries.all));

    return res.data.items;
  } catch (err) {
    throw rejectWithValue(err);
  }
});

export const setSorting = (sort: ESort) => (dispatch: AppDispatch) => {
  dispatch(employeeSlice.actions.setSorting(sort));
};

export const setActiveTabAction = (tab: EDepartment) => (dispatch: AppDispatch) => {
  dispatch(employeeSlice.actions.setActiveTab(tab));
};

export const setSearch = (search: string) => (dispatch: AppDispatch) => {
  dispatch(employeeSlice.actions.setSearch(search));
};

export const filterData = () => (dispatch: AppDispatch, getState: AppState) => {
  const { data } = getState().employee;
  const { activeTab, search } = getState().employee.filter;

  if (isDefaultFilter(search, activeTab)) {
    return dispatch(employeeSlice.actions.filteredData(undefined));
  }

  return dispatch(
    employeeSlice.actions.filteredData(searchEmployees(filterByActiveTab(data, activeTab), search)),
  );
};

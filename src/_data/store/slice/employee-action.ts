import { EQueries } from '@/_data/api/models';
import { getPathWithQuery } from '@/_data/api/utils';
import { EDepartment, ESort, IEmployee } from '@/_data/models/employee';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from '..';
import { employeeSlice } from './employee-reducer';

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

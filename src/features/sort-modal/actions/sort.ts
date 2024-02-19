import { AppDispatch } from '@/app/store';
import { ESort } from '../model/sort';
import { employeeTableSlice } from '@/entities/table';

export const setActiveSort = (sort: ESort) => (dispatch: AppDispatch) =>
  dispatch(employeeTableSlice.actions.setActiveSort(sort));

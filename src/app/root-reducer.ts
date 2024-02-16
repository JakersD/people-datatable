import { combineReducers } from '@reduxjs/toolkit';
import { employeeTableSlice } from '@/entities/table';

export const rootReducer = combineReducers({
  employeeTable: employeeTableSlice.reducer,
});

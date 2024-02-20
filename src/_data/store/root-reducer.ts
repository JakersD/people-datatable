import { combineReducers } from '@reduxjs/toolkit';
import employeeSlice from './slice/employee-reducer';

export const rootReducer = combineReducers({
  employee: employeeSlice,
});

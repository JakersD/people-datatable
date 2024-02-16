import { createSlice } from '@reduxjs/toolkit';
import { IEmployeeState } from '../models/employee';
import { fetchEmployees } from './employee-action';

const initialState: IEmployeeState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const employeeTableSlice = createSlice({
  initialState,
  name: 'employeeTable',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(fetchEmployees.rejected, (state) => {
      state.data = [];
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default employeeTableSlice.reducer;

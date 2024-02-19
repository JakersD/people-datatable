import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEmployeeState } from '../models/employee';
import { fetchEmployees } from './employee-action';
import { IEmployee } from '@/shared/models';

const initialState: IEmployeeState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const employeeTableSlice = createSlice({
  initialState,
  name: 'employeeTable',
  reducers: {
    setActiveTab(state, action: PayloadAction<IEmployee[] | undefined>) {
      return {
        ...state,
        filteredData: action.payload,
      };
    },
  },
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

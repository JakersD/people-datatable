import { EDepartment, ESort, IEmployee, IEmployeeState } from '@/_data/models/employee';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchEmployees } from './employee-action';

const initialState: IEmployeeState = {
  data: [],
  filter: {
    search: '',
    sort: ESort.default,
    activeTab: EDepartment.all,
  },
  isLoading: false,
  isError: false,
};

export const employeeSlice = createSlice({
  initialState,
  name: 'employee',
  reducers: {
    setActiveTab(state, action: PayloadAction<EDepartment>) {
      return {
        ...state,
        filter: {
          ...state.filter,
          activeTab: action.payload,
        },
      };
    },
    setSearch(state, action: PayloadAction<string>) {
      return {
        ...state,
        filter: {
          ...state.filter,
          search: action.payload,
        },
      };
    },
    setSorting(state, action: PayloadAction<ESort>) {
      return {
        ...state,
        filter: {
          ...state.filter,
          sort: action.payload,
        },
      };
    },
    filteredData(state, action: PayloadAction<IEmployee[] | undefined>) {
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

export default employeeSlice.reducer;

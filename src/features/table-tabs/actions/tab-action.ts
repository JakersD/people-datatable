import { AppDispatch, AppState } from '@/app/store';
import { employeeTableSlice } from '@/entities/table';
import { EDepartment } from '@/shared/models';

export const setActiveTabAction = (activeTab: EDepartment) => (dispatch: AppDispatch, getState: AppState) => {
  const data = getState().employeeTable.data;

  if (activeTab !== EDepartment.all) {
    const filtered = data.filter((v) => v.department === activeTab);
    return dispatch(employeeTableSlice.actions.setActiveTab(filtered));
  }

  dispatch(employeeTableSlice.actions.setActiveTab());
};

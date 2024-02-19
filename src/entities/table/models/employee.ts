import { EDepartment, IEmployee } from '@/shared/models';

export interface IEmployeeState {
  data: IEmployee[];
  filteredData?: IEmployee[];
  isLoading: boolean;
  isError: boolean;
}

import { IEmployee } from '@/shared/models';

export interface IEmployeeState {
  data: IEmployee[];
  isLoading: boolean;
  isError: boolean;
}

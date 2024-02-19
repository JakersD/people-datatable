import { ESort } from '@/features/sort-modal/model/sort';
import { IEmployee } from '@/shared/models';

export interface IEmployeeState {
  data: IEmployee[];
  filter: {
    sort: ESort;
  };
  filteredData?: IEmployee[];
  isLoading: boolean;
  isError: boolean;
}

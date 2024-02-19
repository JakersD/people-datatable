import { IEmployee } from '@/shared/models';

export const getDataToShow = (data: IEmployee[], filteredData: IEmployee[] | undefined) =>
  filteredData || data;

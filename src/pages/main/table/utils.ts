import { IEmployee } from '@/_data/models/employee';

export const showData = (data: IEmployee[], filteredData: IEmployee[] | undefined) => filteredData || data;

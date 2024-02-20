import { EDepartment, IEmployee } from '@/_data/models/employee';

export const getUniqueDepartments = (emp: IEmployee[]) =>
  emp
    .reduce(
      (acc: Array<EDepartment | null>, v) => [
        ...acc,
        acc.find((dep) => dep === v.department) ? null : v.department,
      ],
      [],
    )
    .filter((v) => v) as EDepartment[];

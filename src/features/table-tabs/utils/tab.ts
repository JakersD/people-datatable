import { EDepartment, IEmployee } from '@/shared/models';

export const getDepartments = (emp: IEmployee[]) =>
  emp
    .reduce(
      (acc: Array<EDepartment | null>, v) => [
        ...acc,
        acc.find((dep) => dep === v.department) ? null : v.department,
      ],
      [],
    )
    .filter((v) => v) as EDepartment[];

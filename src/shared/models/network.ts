import { IEmployee } from '.';

export enum EQueries {
  all = '__example=all',
  dynamic = '__dynamic=true',
}

export interface IQueryAllRes {
  items: IEmployee[];
}

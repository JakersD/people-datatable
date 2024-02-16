export interface IEmployee {
  id: string;
  avatarUrl: string;
  firstName: string;
  lastName: string;
  userTag: string;
  department: EDepartment;
  position: string;
  birthday: string;
  phone: string;
}

export enum EDepartment {
  all = 'all',
  design = 'design',
  analytics = 'analytics',
  management = 'management',
  ios = 'ios',
  android = 'android',
  qa = 'qa',
  back_office = 'back_office',
  frontend = 'frontend',
  hr = 'hr',
  pr = 'pr',
  backend = 'backend',
  support = 'support',
}

export type Division = 'Software Development' | 'Logistics';
export type UserRole =
  | 'Lead Developer'
  | 'Developer'
  | 'Project Manager'
  | 'Document Manager'
  | 'Vice President'
  | 'Team Manager';

export type UserResponse = {
  id: number;
  username: string;
  name: string;
  division: Division;
  role: UserRole;
  email: string;
  hireDate: string;
};

export type User = {
  id: number;
  username: string;
  name: string;
  division: Division;
  role: UserRole;
  email: string;
  hireDate: Date;
};

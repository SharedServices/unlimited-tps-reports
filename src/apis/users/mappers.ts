import { User, UserResponse } from './types';

export const toUserFromResponse = (response: UserResponse): User => {
  return {
    id: response.id,
    username: response.username,
    name: response.name,
    division: response.division,
    role: response.role,
    email: response.email,
    hireDate: new Date(response.hireDate),
  };
};

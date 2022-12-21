import ky from 'ky';

import { User, UserResponse } from './types';

import { toUserFromResponse } from './mappers';

export const fetchUsers = async (): Promise<Array<User>> => {
  const response = await ky
    .get('http://localhost:3001/users')
    .json<Array<UserResponse>>();

  return response.map(toUserFromResponse);
};

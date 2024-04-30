import { instance } from '@/lib';

import type { GetUserInfoResponseType, UserInfo } from './userInfo.types';

export const requestGetUserInfo = async (
  id?: string
): Promise<GetUserInfoResponseType> => {
  if (!id) {
    throw new Error('Invalid body');
  }

  const response = await instance.get('/users/' + id);

  const user: UserInfo = response.data;

  const followers = (await instance.get(user.followers_url)).data;

  return {
    user,
    followers,
  };
};

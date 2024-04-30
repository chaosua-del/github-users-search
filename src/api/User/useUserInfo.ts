import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { QueryOptions } from '@/lib';

import { requestGetUserInfo } from './userInfo.request';
import { GetUserInfoResponseType } from './userInfo.types';

export const useUserInfo = (
  id?: string,
  options?: QueryOptions<GetUserInfoResponseType, AxiosError>
) => {
  return useQuery({
    queryKey: ['user-info', id],
    queryFn: async () => await requestGetUserInfo(id),
    ...options,
    retry: 0,
  });
};

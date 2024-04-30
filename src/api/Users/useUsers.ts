import { useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { InfiniteQueryOptions } from '@/lib';

import { requestGetUsers } from './users.request';
import { GetUsersResponseType } from './users.types';

export const useUsers = (
  query: string,
  toggle: boolean,
  options?: InfiniteQueryOptions<GetUsersResponseType, AxiosError>
) => {
  return useInfiniteQuery({
    queryKey: ['users', toggle],
    initialPageParam: 1,
    queryFn: async ({ pageParam }) =>
      await requestGetUsers({ page: pageParam as number, searchQuery: query }),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    ...options,
    enabled: Boolean(query),
    retry: 1,
  });
};

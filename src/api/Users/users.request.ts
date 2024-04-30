import { AxiosHeaders } from 'axios';

import { instance } from '@/lib';

import type { GetUsersParamsType, GetUsersResponseType } from './users.types';

const PER_PAGE_DEFAULT_VALUE = 20;

export const requestGetUsers = async (
  params: GetUsersParamsType
): Promise<GetUsersResponseType> => {
  if (!params.page || !params.searchQuery) {
    throw new Error('Invalid body');
  }

  const response = await instance.get('search/users', {
    params: {
      q: params.searchQuery,
      page: params.page,
      perPage: PER_PAGE_DEFAULT_VALUE,
    },
  });

  const headersLink =
    response.headers instanceof AxiosHeaders && response.headers.get('Link');

  const nextPage =
    typeof headersLink === 'string' && headersLink.includes('rel="next"')
      ? params.page + 1
      : null;

  return {
    data: response.data,
    nextPage,
  };
};

export interface GetUsersParamsType {
  searchQuery: string;
  page: number;
}

export interface GetUsersResponseType {
  data: {
    total_count: number;
    incomplete_results: boolean;
    items: GetUsersItemType[];
  };
  nextPage: number | null;
}

export interface GetUsersItemType {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  score: 1.0;
}

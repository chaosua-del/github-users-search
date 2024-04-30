import { GetUsersItemType } from '../Users/users.types';

export interface GetUserInfoResponseType {
  user: UserInfo;
  followers: GetUsersItemType[];
}

export interface UserInfo {
  login: string;
  id: number;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  followers: number;
  following: number;
  company: string | null;
  email: string | null;
  name: string;
  blog: string;
  html_url: string;
}

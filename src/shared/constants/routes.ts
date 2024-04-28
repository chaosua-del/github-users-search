import { roles } from './roles';

type RouteType = {
  url: string;
  title: string;
};

enum RouteKeyEnum {
  HOME = 'HOME',
  LOGIN = 'LOGIN',
  INTERNET_LINE = 'INTERNET_LINE',
  LIVE_LINE = 'LIVE_LINE',
  POSTPONED = 'POSTPONED',
  CURRENT_LINE = 'CURRENT_LINE',
  ENDED = 'ENDED',
}

export const routes: Record<RouteKeyEnum, RouteType> = {
  HOME: {
    url: '/',
    title: 'Дім',
  },
  LOGIN: {
    url: '/login',
    title: 'Авторизація',
  },
  INTERNET_LINE: {
    url: '/internet-line',
    title: 'Попередня реєстрація',
  },
  LIVE_LINE: {
    url: '/live-line',
    title: 'Жива черга',
  },
  POSTPONED: {
    url: '/postponed',
    title: 'Відкладені',
  },
  CURRENT_LINE: {
    url: '/current-line',
    title: 'Поточна черга',
  },
  ENDED: {
    url: '/ended',
    title: 'Завершені',
  },
};

const { ADMIN, INSPECTOR, OPERATOR } = roles;

const { CURRENT_LINE, ENDED, INTERNET_LINE, LIVE_LINE, POSTPONED } = routes;

export const routesByRole: Record<number, RouteType[]> = {
  [ADMIN]: [CURRENT_LINE, ENDED, INTERNET_LINE, LIVE_LINE],
  [INSPECTOR]: [CURRENT_LINE, ENDED, INTERNET_LINE, LIVE_LINE],
  [OPERATOR]: [CURRENT_LINE, ENDED, POSTPONED],
};

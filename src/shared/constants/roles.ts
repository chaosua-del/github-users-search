export type rolesKeyType = 'ADMIN' | 'OPERATOR' | 'INSPECTOR';

export const roles: Record<rolesKeyType, number> = {
  ADMIN: 1,
  OPERATOR: 2,
  INSPECTOR: 3,
};

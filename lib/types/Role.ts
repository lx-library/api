export const roleNames = {
  Anon: 0,
  Tester: 1,
  Administrator: 2,
  Teacher: 3,
  Student: 4,
};
export type Role = keyof typeof roleNames;
export const roles = Object.keys(roleNames);

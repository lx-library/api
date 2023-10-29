import { z, string, object, number } from "zod";

export const User = object({
  id: string(),
  firstName: string(),
  lastName: string().nullish(),
  email: string(),
  password: string().optional(),
  roleId: number(),
  createdAt: string().datetime(),
  updatedAt: string().datetime(),
});
export type User = z.infer<typeof User>;

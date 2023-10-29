import { z } from "zod";

export const AuthUser = z.object({
  uid: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  fullName: z.string(),
  email: z.string(),
  grade: z.string(),
  roleId: z.number(),
});
export type AuthUser = z.infer<typeof AuthUser>;

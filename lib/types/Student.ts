import { z, string, object } from "zod";

export const Student = object({
  id: string(),
  firstName: string(),
  lastName: string().nullish(),
  createdAt: string().datetime(),
  updatedAt: string().datetime(),
});
export type Student = z.infer<typeof Student>;

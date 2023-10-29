import z from "zod";

export const Slide = z.object({
  id: z.string(),
  LessonId: z.string().optional(),
  ParentId: z.string().optional(),
  order: z.number(),
  show: z.boolean(),
  title: z.string(),
  type: z.string(),
  data: z.string(),
  Children: z.array(z.object({ id: z.string(), title: z.string() })),
});
export type Slide = z.infer<typeof Slide>;

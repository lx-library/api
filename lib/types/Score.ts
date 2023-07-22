import z from "zod";
import { makeId } from "../utils/makeId";

export const Score = z.object({
  id: z.string().default(() => makeId()),
  StudentId: z.string(),
  SlideId: z.string(),
  score: z.number().default(0),
  level: z.number().default(0),
  pass: z.boolean().default(false),
  next: z.date({ coerce: true }).optional(),
  data: z.string().default(""),
  createdAt: z.date({ coerce: true }).default(() => new Date()),
  updatedAt: z.date({ coerce: true }).default(() => new Date()),
});
export type Score = z.infer<typeof Score>;
export type ScoreInput = z.input<typeof Score>;

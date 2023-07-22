import z from "zod";
import { Score } from "./Score";

export const StudentScore = z.object({
  StudentId: z.string(),
  SlideId: z.string(),
  scores: z.array(Score),
});
export type StudentScore = z.infer<typeof StudentScore>;
export type StudentScoreInput = z.input<typeof StudentScore>;

import { makeCrudApi } from "../utils/makeCrudApi";
import { mergeApis } from "@zodios/core";
import { StudentScore } from "../types/StudentScore";

export const studentApi = mergeApis({
  "/scores": makeCrudApi("studentScore", StudentScore),
});

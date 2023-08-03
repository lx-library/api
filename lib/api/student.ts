import { makeCrudApi } from "../utils/makeCrudApi.js";
import { mergeApis } from "@zodios/core";
import { StudentScore } from "../types/StudentScore.js";

export const studentApi = mergeApis({
  "/scores": makeCrudApi("studentScore", StudentScore),
});

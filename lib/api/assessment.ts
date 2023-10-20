import { z, array } from "zod";
import { makeApi } from "@zodios/core";
import { errors } from "./errors.js";
import { Assessment } from "../types/Assessment.js";

export const assessmentApi = makeApi([
  {
    method: "get",
    path: "/",
    alias: "getAssessments",
    description: "Get all assessments",
    parameters: [
      {
        name: "learningObjective",
        type: "Query",
        schema: z.ostring(),
      },
    ],
    response: array(Assessment),
    errors,
  },
]);

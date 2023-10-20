import { mergeApis } from "@zodios/core";
import { aiApi } from "./ai.js";
import { userApi } from "./user.js";
import { slideApi } from "./slide.js";
import { studentApi } from "./student.js";
import { assessmentApi } from "./assessment.js";
import { loginApi } from "./login.js";

export const mainApi = mergeApis({
  "/ai": aiApi,
  "/users": userApi,
  "/slides": slideApi,
  "/student": studentApi,
  "/assessments": assessmentApi,
  "/login": loginApi,
});

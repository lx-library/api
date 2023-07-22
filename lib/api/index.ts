import { mergeApis } from "@zodios/core";
import { userApi } from "./user";
import { slideApi } from "./slide";
import { studentApi } from "./student";

export default mergeApis({
  "/users": userApi,
  "/slides": slideApi,
  "/student": studentApi,
});

import { mergeApis } from "@zodios/core";
import { aiApi } from "./ai";
import { userApi } from "./user";
import { slideApi } from "./slide";
import { studentApi } from "./student";

export default mergeApis({
  "/ai": aiApi,
  "/users": userApi,
  "/slides": slideApi,
  "/student": studentApi,
});

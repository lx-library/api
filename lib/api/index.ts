import { mergeApis } from "@zodios/core";
import user from "./user";

export default mergeApis({
  "": user,
});

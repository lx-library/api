import { makeCrudApi } from "../utils/makeCrudApi.js";
import { User } from "../types/User.js";

export const userApi = makeCrudApi("user", User);

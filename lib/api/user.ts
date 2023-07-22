import { makeCrudApi } from "../utils/makeCrudApi";
import { User } from "../types/User";

export const userApi = makeCrudApi("user", User);

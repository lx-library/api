import { makeCrudApi } from "../utils/makeCrudApi";
import { Slide } from "../types/Slide";

export const slideApi = makeCrudApi("slide", Slide);

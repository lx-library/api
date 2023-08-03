import { makeCrudApi } from "../utils/makeCrudApi.js";
import { Slide } from "../types/Slide.js";

export const slideApi = makeCrudApi("slide", Slide);

import { Zodios } from "@zodios/core";
import { mainApi } from "lx-api/api/index";
import { config } from "../config/config.js";

export const apiClient = new Zodios(config.api.host + "/v2", mainApi);

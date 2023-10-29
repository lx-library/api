import { Zodios } from "@zodios/core";
import { mainApi } from "../api/index.js";
import { config } from "../config/config.js";

export const apiClient = new Zodios(config.api.url + "/v2", mainApi);

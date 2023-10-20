import { z } from "zod";
import { makeApi } from "@zodios/core";
import { errors } from "./errors.js";

export const loginApi = makeApi([
  {
    method: "post",
    path: "/",
    alias: "login",
    description: "Login to get token",
    parameters: [
      {
        name: "Body",
        type: "Body",
        schema: z.object({
          email: z.string(),
          password: z.string(),
        }),
      },
    ],
    response: z.string(),
    errors,
  },
]);

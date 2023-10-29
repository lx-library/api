import process from "node:process";

const { REACT_APP_API = "http://localhost:4002/api" } = process.env;

export const api = { url: REACT_APP_API };

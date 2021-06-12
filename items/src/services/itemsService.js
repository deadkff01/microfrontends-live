import baseService from "./baseService";

export const getItems = (search = "") =>
  baseService().post("/", {
    search,
  });

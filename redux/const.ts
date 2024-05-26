import config from "@/config/config";

export const BASE_URL = config.serverURL;

export const apiBase = "/api/visitka/";

export enum Method {
  Get = "GET",
  Post = "POST",
  Delete = "DELETE",
  Put = "PUT",
}

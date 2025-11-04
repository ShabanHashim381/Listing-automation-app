import { makeAPICall } from "./Apihelper";
import { LOGIN } from "./UrlHelper";

export const loginCallApi = (data) =>
  makeAPICall({ option: { method: "post", url: LOGIN }, data });

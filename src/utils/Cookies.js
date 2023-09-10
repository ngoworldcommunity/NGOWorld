import Cookies from "js-cookie";

export const ClearCookies = () => {
  Cookies.remove("isLoggedIn");
  Cookies.remove("username");
  Cookies.remove("emptyProfile");
};

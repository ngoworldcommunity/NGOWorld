import Cookies from "js-cookie";

export const SetAuthCookies = (Data) => {
  Cookies.set("isLoggedIn", true, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    isuser: Data?.data?.isuser,
  });

  Cookies.set("isuser", Data?.data?.isuser, {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    isuser: Data?.data?.isuser,
  });
};

export const ClearCookies = () => {
  Cookies.remove("isLoggedIn");
  Cookies.remove("isuser");
};

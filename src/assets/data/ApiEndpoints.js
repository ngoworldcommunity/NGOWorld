// ApiEndpoints.js

const API = import.meta.env.VITE_MILANAPI;

const userEndpoints = {
  login: `${API}/user/login`,
  register: `${API}/user/register`,
  update: `${API}/user/update`,
  report: `${API}/user/userreport`,
};

const clubEndpoints = {
  all: `${API}/clubs`,
  login: `${API}/clubs/login`,
  register: `${API}/clubs/register`,
  bySlug: (slug) => `${API}/clubs?slug=${slug}`,
  createEvent: `${API}/club/createevent`,
};

const eventEndpoints = {
  all: `${API}/display/allevents`,
};

const authEndpoints = {
  googleLogin: (isuser) => `${API}/auth/google?isuser=${isuser}`,
  loginSuccess: `${API}/auth/login/success`,
  logout: `${API}/auth/logout`,
};

export { userEndpoints, clubEndpoints, authEndpoints, eventEndpoints };

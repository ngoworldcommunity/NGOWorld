const API = import.meta.env.VITE_MILANAPI;

const userEndpoints = {
  update: `${API}/user/update`,
  report: `${API}/user/userreport`,
};

const clubEndpoints = {
  all: `${API}/clubs`,
  bySlug: (slug) => `${API}/clubs?slug=${slug}`,
  createEvent: `${API}/club/createevent`,
};

const eventEndpoints = {
  all: `${API}/display/allevents`,
};

const authEndpoints = {
  signin: `${API}/auth/signin`,
  signup: `${API}/auth/signup`,
  googleLogin: `${API}/auth/google`,
  googleLoginSuccess: `${API}/auth/login/success`,
  logout: `${API}/auth/logout`,
};

export { userEndpoints, clubEndpoints, authEndpoints, eventEndpoints };

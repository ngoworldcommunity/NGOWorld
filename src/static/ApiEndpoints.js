const API = import.meta.env.VITE_MILANAPI;

const userEndpoints = {
  details: (userName) => `${API}/user?userName=${userName}`,
  update: `${API}/user/update`,
  report: `${API}/user/report`,
};

const clubEndpoints = {
  all: `${API}/clubs`,
  details: (userName) => `${API}/clubs?userName=${userName}`,
  createEvent: `${API}/club/createevent`,
  dashboard: `${API}/clubs/dashboard`,
};

const eventEndpoints = {
  all: `${API}/events`,
  create: `${API}/events/create`,
};

const authEndpoints = {
  signin: `${API}/auth/signin`,
  signup: `${API}/auth/signup`,
  googleLogin: `${API}/auth/google`,
  googleLoginSuccess: `${API}/auth/login/success`,
  logout: `${API}/auth/logout`,
};

export { authEndpoints, clubEndpoints, eventEndpoints, userEndpoints };

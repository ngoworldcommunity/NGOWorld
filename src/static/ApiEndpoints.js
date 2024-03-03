const API = import.meta.env.VITE_MILANAPI;

const userEndpoints = {
  details: (username) => `${API}/user?username=${username}`,
  update: `${API}/user/update`,
  report: `${API}/user/report`,
};

const clubEndpoints = {
  all: `${API}/clubs`,
  details: (username) => `${API}/clubs?username=${username}`,
  createEvent: `${API}/club/createevent`,
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

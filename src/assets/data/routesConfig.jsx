import React from "react";

import {
  Home,
  UserProfile,
  ClubProfile,
  Clubs,
  Events,
  Shop,
  Error404,
  AuthSignup,
  AuthLogin,
  ClubDetails,
} from "../../pages/route";

const routesConfig = [
  { path: "/", element: <Home /> },
  { path: "/auth/signup", element: <AuthSignup /> },
  { path: "/auth/login", element: <AuthLogin /> },
  { path: "/user/profile", element: <UserProfile /> },
  { path: "/clubs", element: <Clubs /> },
  { path: "/clubs/:slug", element: <ClubDetails /> },
  { path: "/clubs/profile", element: <ClubProfile /> },
  { path: "/events", element: <Events /> },
  { path: "/shop", element: <Shop /> },
  { path: "*", element: <Error404 /> },
];

export default routesConfig;

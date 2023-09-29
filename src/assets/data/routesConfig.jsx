import React from "react";

import {
  Home,
  UserProfile,
  Clubs,
  Events,
  Shop,
  Error404,
  AuthSignup,
  AuthLogin,
  ClubProfile,
} from "../../pages/route";

const routesConfig = [
  { path: "/", element: <Home /> },
  { path: "/auth/signup", element: <AuthSignup /> },
  { path: "/auth/login", element: <AuthLogin /> },
  { path: "/user/:slug", element: <UserProfile /> },
  { path: "/clubs", element: <Clubs /> },
  { path: "/club/:slug", element: <ClubProfile /> },
  { path: "/events", element: <Events /> },
  { path: "/shop", element: <Shop /> },
  { path: "*", element: <Error404 /> },
];

export default routesConfig;

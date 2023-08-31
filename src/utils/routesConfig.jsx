import React from "react";

import {
  Home,
  UserProfile,
  ClubProfile,
  Clubs,
  Events,
  Shop,
  Error404,
  ContactUs,
  Donate,
  AuthRegister,
  AuthLogin,
} from "../pages/route";

const routesConfig = [
  { path: "/", element: <Home /> },
  { path: "/auth/register", element: <AuthRegister /> },
  { path: "/auth/login", element: <AuthLogin /> },
  { path: "/user/profile", element: <UserProfile /> },
  { path: "/clubs", element: <Clubs /> },
  { path: "/clubs/profile", element: <ClubProfile /> },
  { path: "/events", element: <Events /> },
  { path: "/shop", element: <Shop /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/donateus", element: <Donate /> },
  { path: "*", element: <Error404 /> },
];

export default routesConfig;

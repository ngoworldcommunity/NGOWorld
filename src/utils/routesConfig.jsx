import React from "react";
import {
  ClubProfile,
  Clubs,
  Error404,
  Events,
  Home,
  Shop,
  SignIn,
  SignUp,
  UserProfile,
} from "../pages/route";

const routesConfig = [
  { path: "/", element: <Home /> },
  { path: "/auth/signup", element: <SignUp /> },
  { path: "/auth/login", element: <SignIn /> },
  { path: "/user/:slug", element: <UserProfile /> },
  { path: "/clubs", element: <Clubs /> },
  { path: "/club/:slug", element: <ClubProfile /> },
  { path: "/events", element: <Events /> },
  { path: "/shop", element: <Shop /> },
  { path: "*", element: <Error404 /> },
];

export default routesConfig;

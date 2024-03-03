import React from "react";
import {
  Clubs,
  Error404,
  Events,
  Home,
  Login,
  Profile,
  Shop,
  SignUp,
} from "../pages/route";

const routesConfig = [
  { path: "/", element: <Home /> },
  { path: "/auth/signup", element: <SignUp /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/user/:username", element: <Profile /> },
  { path: "/clubs", element: <Clubs /> },
  { path: "/club/:username", element: <Profile /> },
  { path: "/events", element: <Events /> },
  { path: "/shop", element: <Shop /> },
  { path: "*", element: <Error404 /> },
];

export default routesConfig;

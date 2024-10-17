import React from "react";
import Test from "../pages/Test";
import Trending from "../pages/Trending";
import {
  Clubs,
  Dashboard,
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
  { path: "/user/:userName", element: <Profile /> },
  { path: "/clubs", element: <Clubs /> },
  { path: "/club/:userName", element: <Profile /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/events", element: <Events /> },
  { path: "/shop", element: <Shop /> },
  { path: "/trending", element: <Trending /> },
  { path: "/test", element: <Test /> },
  { path: "*", element: <Error404 /> },
];

export default routesConfig;

import { lazy } from "react";

const AboutUs = lazy(() => import("./AboutUs"));
const ContactPage = lazy(() => import("./ContactUs"));
const Home = lazy(() => import("./Home"));
const Donate = lazy(() => import("./Donate"));
const UserLogin = lazy(() => import("./auth/user/UserLogin"));
const UserProfile = lazy(() => import("./user/UserProfile"));
const UserRegister = lazy(() => import("./auth/user/UserRegister"));
const ShopLanding = lazy(() => import("./shops/ShopLanding"));
const ClubsPage = lazy(() => import("./display/ClubsPage"));
const EventsPage = lazy(() => import("./display/EventsPage"));
const ClubRegister = lazy(() => import("./auth/clubs/ClubsRegister"));
const EventCreate = lazy(() => import("./clubs/EventCreate"));
const ClubLogin = lazy(() => import("./auth/clubs/ClubsLogin"));
const ClubProfile = lazy(() => import("./clubs/ClubProfile"));
const Error404 = lazy(() => import("./Error404"));
const ShopCategory = lazy(() => import("./shops/ShopCategory"));
const UserForgotpassword = lazy(() => import("./user/UserForgotpassword"));
const ClubDetailsCard = lazy(() => import("./clubs/ClubDetails"));
const ClubForgotpassword = lazy(() => import("./clubs/ClubForgotpassword"));

export {
  Home,
  ClubLogin,
  ClubProfile,
  ShopLanding,
  ClubRegister,
  ClubsPage,
  UserRegister,
  UserLogin,
  UserProfile,
  ContactPage,
  AboutUs,
  EventCreate,
  EventsPage,
  Donate,
  Error404,
  ShopCategory,
  UserForgotpassword,
  ClubDetailsCard,
  ClubForgotpassword,
};

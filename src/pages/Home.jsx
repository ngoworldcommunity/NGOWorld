import React, { useState } from "react";
import {
  Banner,
  Navbar,
  Footer,
  DonateBanner,
  HomeCardsContainer,
  EventsBanner,
  LoginBanner,
  ClubBanner,
} from "../components";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet-async";
import Milaninfobanner from "../components/Milaninfobanner";

const AuthState = () => {
  const [login, setLogin] = useState(
    Cookies.get("token") || Cookies.get("club"),
  );
  return login;
};
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Milan | Home</title>
        <meta
          name="description"
          content="Welcome to the homepage of Milan, a hub for Users to collaborate with NGOs, Charities and more."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      {AuthState() && <Navbar />}
      {AuthState() ? <LoginBanner /> : <Banner />}
      <Milaninfobanner />

      {/* {Cookies.get("club") ? <ClubBanner /> : <EventsBanner />} */}
      <Footer />
    </>
  );
};

export default Home;

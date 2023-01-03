import Cookies from "js-cookie";
import React, { useState } from "react";
import Banner from "../components/Banners/Banner.jsx";
import Milaninfobanner from "../components/Milaninfobanner";
import { Helmet } from "../components/SEO";

const AuthState = () => {
  const [login, setLogin] = useState(
    Cookies.get("token") || Cookies.get("club"),
  );
  return login;
};
const Home = () => {
  return (
    <>
      <Helmet title="Milan | Home" />

      <Banner />
      <Milaninfobanner />

      {/* {Cookies.get("club") ? <ClubBanner /> : <EventsBanner />} */}
    </>
  );
};

export default Home;

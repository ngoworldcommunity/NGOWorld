import React, { useState } from "react";
import Banner from "../components/Banners/Banner.jsx";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet-async";
import Milaninfobanner from "../components/Milaninfobanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

      <Banner />
      <Milaninfobanner />

      {/* {Cookies.get("club") ? <ClubBanner /> : <EventsBanner />} */}
    </>
  );
};

export default Home;

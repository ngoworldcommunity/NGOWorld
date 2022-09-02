import React, { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonateBanner from "../components/DonateBanner";
import HomeCardsContainer from "../components/HomeCardsContainer";
import EventsBanner from "../components/Events";
import LoginBanner from "../components/loginBanner";
import ClubBanner from "../components/ClubBanner";
import Cookies from "js-cookie";

const AuthState = () => {
  const [login, setLogin] = useState(Cookies.get("token") || Cookies.get("club"));
  return login;
};
const Home = () => {
  document.title = "Milan | Home";
  return (
    <>
      {/* <Navbar /> */}
      {AuthState() && <Navbar />}
      {AuthState() ? <LoginBanner /> : <Banner />}
      <HomeCardsContainer />
      <DonateBanner />
      {Cookies.get("club") ? <ClubBanner /> : <EventsBanner />}
      <Footer />
    </>
  );
};

export default Home;

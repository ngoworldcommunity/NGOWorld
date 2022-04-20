import React, { useState } from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonateBanner from "../components/DonateBanner";
import HomeCardsContainer from "../components/HomeCardsContainer";
import EventsBanner from "../components/Events";
import LoginBanner from "../components/loginBanner";
import ClubBanner from "../components/ClubBanner";

const AuthState = () => {
  const [login, setLogin] = useState(sessionStorage.getItem("token"));
  return login;
};
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      {AuthState() && <Navbar />}
      {AuthState() ? <LoginBanner /> : <Banner />}
      <HomeCardsContainer />
      <DonateBanner />
      {localStorage.getItem("club") ? <ClubBanner /> : <EventsBanner />}
      <Footer />
    </>
  );
};

export default Home;

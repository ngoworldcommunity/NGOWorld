import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonateBanner from "../components/DonateBanner";
import HomeCardsContainer from "../components/HomeCardsContainer";
import EventsBanner from "../components/Events";
import LoginBanner from "../components/loginBanner";

const Home = () => {
  if (localStorage.getItem("token") === null) {
    return (
      <>
        <Navbar />
        <Banner />
        <HomeCardsContainer />
        <DonateBanner />
        <EventsBanner />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Navbar />
        <LoginBanner />
        <HomeCardsContainer />
        <DonateBanner />
        <EventsBanner />
        <Footer />
      </>
    );
  }
};

export default Home;

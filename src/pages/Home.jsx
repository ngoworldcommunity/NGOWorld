import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DonateBanner from "../components/DonateBanner";
import HomeCardsContainer from "../components/HomeCardsContainer";
import EventsBanner from "../components/Events";

const Home = () => {
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
};

export default Home;

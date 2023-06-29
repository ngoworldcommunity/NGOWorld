import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../components/Banners/Banner.jsx";
import Milaninfobanner from "../components/Milaninfobanner";
import Navbar from "../components/Navbar.jsx";
const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
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
    </>
  );
};

export default Home;

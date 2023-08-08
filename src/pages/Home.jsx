import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Milaninfobanner from "../components/Banners/Milaninfobanner";
import Navbar from "../components/Navbar/Navbar.jsx";
import { successCallback } from "../service/MilanApi.js";
import { showErrorToast, showSuccessToast } from "../utils/Toasts.js";
import Cookies from "js-cookie";
import { ToastContainer } from "react-toastify";
import HomeBanner from "../components/Banners/HomeBanner";
import Footer from "../components/Footer/Footer";

const Home = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleToken = async () => {
      const authData = await successCallback();

      if (authData?.status === 201) {
        showSuccessToast(authData?.data?.message);
        Cookies.set("isLoggedIn", true, {
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        });
      } else {
        showErrorToast(authData?.message);
      }
    };

    if (Cookies.get("OAuthLoginInitiated")) {
      handleToken();
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Helmet>
        <title>Milan | Home</title>
        <meta
          name="description"
          content="Welcome to the homepage of Milan, a hub for Users to collaborate with NGOs, Charities and more."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <HomeBanner />
      <Milaninfobanner />
      <Footer />
    </>
  );
};

export default Home;

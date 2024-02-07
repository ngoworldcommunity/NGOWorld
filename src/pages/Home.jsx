import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { Landing, MilanInfoBanner } from "../components/private/index.js";
import { Footer, Navbar } from "../components/shared";
import { successCallback } from "../service/MilanApi.js";
import { showErrorToast, showSuccessToast } from "../utils/Toasts.js";

const Home = () => {
  const handleToken = async () => {
    const authData = await successCallback();

    if (authData?.status === 200) {
      showSuccessToast(authData?.data?.message);
    } else {
      showErrorToast(authData?.message);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (Cookies.get("OAuthLoginInitiated")) {
      handleToken();
    }
  }, []);

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

      <ToastContainer />
      <Navbar />

      <Landing />
      <MilanInfoBanner />
      <Footer />
    </>
  );
};

export default Home;

// This is the donate page where we come and select clubs to donate an amount !

import React, { useEffect, useState } from "react";
import donate_image1 from "../assets/pictures/donate_image1.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleClub from "../components/SingleClub";
import DonateUs from "../components/DonateUs";
import { GetAllClubs } from "../service/MilanApi";
import "../styles/Donate.css";

import Cookies from "js-cookie";
import Banner from "../components/Banner";

import "react-toastify/dist/ReactToastify.css";

const Donate = () => {
  document.title = "Milan | Donate the needy";

  const [clubData, setClubData] = useState([]);

  useEffect(() => {
    const fetchClubData = async () => {
      const response = await GetAllClubs();
      setClubData(response);
    };
    fetchClubData();
  }, []);

  //   Authentication state check !
  const AuthState = () => {
    const [login, setLogin] = useState(
      Cookies.get("token") || Cookies.get("club")
    );
    return login;
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <>
      {AuthState() && <Navbar />}

      {AuthState() ? <DonateUs /> : <Banner />}

      <Footer />
    </>
  );
};

export default Donate;

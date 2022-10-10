// This is the donate page where we come and select clubs to donate an amount !

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import UserLogin from "../pages/user/UserLogin";
import DonateUs from "../components/DonateUs";
import "../styles/Donate.css";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

const Donate = () => {
  document.title = "Milan | Donate the needy";

  // Authentication state check !
  const AuthState = () => {
    const [login, setLogin] = useState(
      Cookies.get("token") || Cookies.get("user")
    );
    return login;
  };

  // Assigning an Id for restricting multiple toast display
  const toastId = "loginBeforeDonating";
  if (!AuthState()) {
    toast("🌈 Please login before supporting the clubs", {
      toastId: toastId,
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
    });
  }

  return (
    <>
      <ToastContainer
        limit={1}
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />
      {AuthState() && <Navbar />}
      {AuthState() ? <DonateUs /> : <UserLogin />}
      {AuthState() && <Footer />}
    </>
  );
};

export default Donate;

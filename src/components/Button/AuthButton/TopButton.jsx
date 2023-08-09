/* eslint-disable no-unused-vars */
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { GoogleAuth } from "../../../service/MilanApi";

const TopButton = ({ GoogleButton, isGoBack }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleNavigatePages = () => {
    navigate(
      window.location.pathname.includes("register")
        ? "/user/login"
        : "/user/register",
    );
  };

  const handleGoogle = async () => {
    const response = await GoogleAuth(
      window.location.pathname.includes("user") ? true : false,
    );
    window.location.href = response;
  };

  return (
    <>
      <button
        className={`btn authpage_floatingbtn ${
          isGoBack ? "authpage_goback" : ""
        }`}
        onClick={() => {
          isGoBack ? handleGoBack() : handleNavigatePages();
        }}
      >
        {isGoBack ? (
          <div>
            <FiArrowLeft style={{ fontSize: "15px" }} /> Go back
          </div>
        ) : (
          <>
            {window.location.pathname.includes("register")
              ? "Have an account? Login"
              : "New to Milan? Register"}
          </>
        )}
      </button>

      {/* {GoogleButton && (
        <button
          className="btn authpage_googlebtn"
          onClick={() => {
            handleGoogle();
          }}
        >
          <FcGoogle style={{ fontSize: "20px", marginRight: "0.7rem" }} />
          Continue with Google
        </button>
      )} */}
    </>
  );
};

export default TopButton;

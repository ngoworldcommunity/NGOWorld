/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { GoogleAuth } from "../../../service/MilanApi";
import { modeContext } from "../../../App";

const TopButton = ({
  showgooglebutton,
  showleftGoogleButton,
  isGoBack,
  type,
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
  const dark_btn = {
    backgroundColor: "#030637",
    color: "pink",
    borderColor: "pink",
  };
  const { dark } = useContext(modeContext);

  const handleNavigatePages = () => {
    navigate(
      window.location.pathname.includes("signup")
        ? "/auth/login"
        : "/auth/signup",
    );
  };

  const handleGoogle = async () => {
    const response = await GoogleAuth();
    window.location.href = response;
  };

  return (
    <>
      <div className="authpage_floatingbtn_div" style={{ flexDirection: type }}>
        {isGoBack ? (
          <div
            className="btn authpage_floatingbtn authpage_goback"
            style={dark ? dark_btn : {}}
            onClick={() => {
              handleGoBack();
            }}
          >
            <FiArrowLeft style={{ fontSize: "15px" }} /> Go back
          </div>
        ) : (
          <button
            className="btn authpage_floatingbtn"
            onClick={() => {
              handleNavigatePages();
            }}
          >
            {window.location.pathname.includes("signup")
              ? "Have an account? Login"
              : "New to Milan? Sign up"}
          </button>
        )}

        {showgooglebutton &&
          (showleftGoogleButton ? (
            <button
              className="btn authpage_googlebtn"
              onClick={() => {
                handleGoogle();
              }}
            >
              <FcGoogle style={{ fontSize: "20px", marginRight: "0.7rem" }} />
              Continue with Google
            </button>
          ) : (
            <button
              className="btn authpage_googlebtn"
              onClick={() => {
                handleGoogle();
              }}
            >
              <FcGoogle style={{ fontSize: "20px", marginRight: "0.7rem" }} />
              Continue with Google
            </button>
          ))}
      </div>
    </>
  );
};

export default TopButton;

import React from "react";
import Button from "../GlobalButton/Button";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const AuthButton = ({ isLoading, goTo }) => {
  const navigate = useNavigate();

  const handleButtonClick = (here) => {
    navigate(`${goTo}${here}`);
  };

  return (
    <>
      <p className="authpage_mediumchangebtn">
        {window.location.pathname.includes("register") ? (
          <>
            Already have an account?{" "}
            <span
              onClick={() => {
                handleButtonClick("/login");
              }}
            >
              Login
            </span>
          </>
        ) : (
          <>
            Don&apos;t have an account?{" "}
            <span
              onClick={() => {
                handleButtonClick("/register");
              }}
            >
              Sign Up
            </span>
          </>
        )}
      </p>

      <Button type="submit" className="login-btn" disabled={isLoading}>
        {isLoading ? (
          <ClipLoader color="#000000" size={25} />
        ) : window.location.pathname.includes("register") ? (
          "Sign Up"
        ) : (
          "Login"
        )}
      </Button>
    </>
  );
};

export default AuthButton;

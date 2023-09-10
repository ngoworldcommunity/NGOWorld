import React from "react";
import Button from "../GlobalButton/Button";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const AuthButton = ({ isLoading }) => {
  const navigate = useNavigate();

  return (
    <>
      <p className="authpage_mediumchangebtn">
        {window.location.pathname.includes("signup") ? (
          <>
            Already have an account?{" "}
            <span
              onClick={() => {
                navigate("/auth/login");
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
                navigate("/auth/signup");
              }}
            >
              Sign Up
            </span>
          </>
        )}
      </p>

      <Button
        type="submit"
        className="login-btn"
        disabled={isLoading}
        cypressfield="loginbutton"
      >
        {isLoading ? (
          <ClipLoader color="#000000" size={25} />
        ) : window.location.pathname.includes("signup") ? (
          "Sign Up"
        ) : (
          "Login"
        )}
      </Button>
    </>
  );
};

export default AuthButton;

import React from "react";
import Button from "../GlobalButton/Button";
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
        isLoading={isLoading}
        disabled={isLoading}
        cypressfield="loginbutton"
      >
        {window.location.pathname.includes("signup") ? "Sign Up" : "Sign In"}
      </Button>
    </>
  );
};

export default AuthButton;

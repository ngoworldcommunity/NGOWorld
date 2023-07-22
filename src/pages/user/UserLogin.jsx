import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/UserLogin.css";
import { LoginUser, GoogleAuth, successCallback } from "../../service/MilanApi";

import Cookies from "js-cookie";
import { Helmet } from "react-helmet-async";
import { ReactComponent as AuthBanner } from "../../assets/pictures/authpages/authbannerimg.svg";
import { showErrorToast, showSuccessToast } from "../../utils/showToast";
import Button from "../../components/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useValidation from "../../hooks/useValidation";

function UserLogin() {
  const Navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function Anchor(props) {
    return (
      <div>
        <p>
          {props.para}
          <Link to={props.link}>{props.details}</Link>
        </p>
      </div>
    );
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  //* Submit to backend
  //* If alright we get a cookie with token

  const callUserLoginAPI = async () => {
    const Data = await LoginUser(credentials);

    if (Data?.status === 201) {
      Cookies.set("token", Data?.data?.token);
      showSuccessToast(Data?.data?.message);
      Navigate("/");
    } else {
      showErrorToast(Data?.data?.message);
      setCredentials({ email: "", password: "" });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    if (validator.valid) {
      const Data = LoginUser(credentials);

      Data.then((response) => {
        if (response?.data.token) {
          Cookies.set("token", response.data.token);
          showSuccessToast("Logged you in!");
          Navigate("/");
        } else {
          setCredentials({ email: "", password: "" });
        }
      }).catch(() => {
        showErrorToast("Server error, try again later !");

    const validationErrors = useValidation(credentials);
    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => {
        showErrorToast(error.message);

      });
    } else {
      callUserLoginAPI();
    }
  };


  //  Google Login

  const handleGoogleAuth = async () => {
    // Make a request to the backend to get the Google OAuth URL
    const response = await GoogleAuth();
    // console.log(response);
    // const data = await response.json();
    window.location.href = response;
  };

  useEffect(() => {
    const handleToken = async () => {
      const token = await successCallback();
      // console.log("Incoming token", token);
      if (token) {
        Cookies.set("token", token);
        showSuccessToast("Logged you in succesfully!");
        Navigate("/");
      }
    };

    handleToken();
  }, []);

  const [passwordType, setPasswordType] = useState("password");

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

  return (
    <>
      <Helmet>
        <title>Milan | User login</title>
        <meta
          name="description"
          content="Welcome to the User's login page. Login to Milan with your email and password."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="d-flex align-items-top justify-content-center h-100 gap-1 ">
            <div className="authBannerImageContainer col-lg-7 col-xl-6">
              <AuthBanner className="auth-img" />
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form
                style={{ width: "auto" }}
                onSubmit={handleSubmit}
                className="loginform"
              >
                <h1 className="mb-2">Login as an User !</h1>

                <div className="form-outline mb-4">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="desktop form-control form-control-lg"
                    id="desktopUserEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-label="email"
                    autoFocus
                  />
                </div>

                <label
                  htmlFor="exampleInputPassword1"
                  className="col-form-label col-form-label-lg regformlabels color"
                >
                  Password
                </label>
                <div className="form-outline mb-4">
                  <input
                    type={passwordType}
                    className="desktop form-control form-control-lg"
                    id="desktopUserPassword"
                    placeholder="Enter your password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    aria-label="password"
                  />
                  <div onClick={passwordToggle} className="toggle-button">
                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>

                <div className="btn-container btn-container-desktop">
                  <Button type="submit" className="login-btn">
                    Login
                  </Button>
                  <span>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/649/649686.png"
                      alt=""
                      className="divider"
                      style={{
                        height: "43px",
                        width: "30px",
                        paddingLeft: "10px",
                      }}
                    />
                  </span>

                  <div className="left-right-divider pt-2 ">
                    <p className="px-2">or</p>
                  </div>

                  <img
                    // src="https://developers.google.com/static/identity/images/btn_google_signin_light_normal_web.png"
                    src="https://developers.google.com/static/identity/images/btn_google_signin_dark_normal_web.png"
                    onClick={handleGoogleAuth}
                    className="googleLogin"
                    alt="Google Login"
                    style={{
                      padding: 10,
                      cursor: "pointer",
                    }}
                  />
                </div>

                <br></br>
                <br></br>
                <div className="anchor-container anchor-container-desktop">
                  <Anchor
                    para=""
                    details="Forgot password?"
                    link="/user/forgotpass"
                    className="text-muted"
                  />
                  <Anchor
                    para="Don't have an account? "
                    details="Register here"
                    link="/user/register"
                    className="link-info"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserLogin;

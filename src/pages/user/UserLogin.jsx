import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/UserLogin.css";
import { LoginUser } from "../../service/MilanApi";
import Cookies from "js-cookie";
import { Helmet } from "react-helmet-async";
import { ReactComponent as AuthBanner } from "../../assets/pictures/authpages/authbannerimg.svg";
import { showErrorToast, showSuccessToast } from "../../utils/showToast";
import Button from "../../components/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useValidation from "../../hooks/useValidation";

function UserLogin() {
  const Navigate = useNavigate();

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

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  //* To set the value as soon as we input
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const callUserLoginAPI = async () => {
    const Data = await LoginUser(credentials);
    if (Data?.data.token) {
      Cookies.set("token", Data.data.token);
      showSuccessToast("Logged you in !");
      Navigate("/");
    } else {
      setCredentials({ email: "", password: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = useValidation(credentials);
    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => {
        showErrorToast(error.message);
      });
    } else {
      callUserLoginAPI();
      console.log("Validation successful");
    }
  };

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

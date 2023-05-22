import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/ClubLogin.css";
import { LoginClub } from "../../service/MilanApi";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { ReactComponent as AuthBanner } from "../../assets/pictures/authpages/authbannerimg.svg";
import ClipLoader from "react-spinners/ClipLoader";
import { showErrorToast, showSuccessToast } from "../../utils/showToast";
import Button from "../../components/Button";

function ClubLogin() {
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

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (
      e.target.name === "email" &&
      e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
    )
      setIsEmailValid(true);
  };

  //* SUBMIT
  const handleSubmit = (e) => {
    toast.clearWaitingQueue();
    e.preventDefault();

    setIsLoading(true);
    const Data = LoginClub(credentials);
    setIsLoading(false);

    Data.then((response) => {
      if (response?.data.token) {
        Cookies.set("club", response.data.token);
        showSuccessToast("Logged you in !");
        Navigate("/");
      } else {
        setCredentials({
          email: "",
          password: "",
        });
      }
    }).catch(() => {
      showErrorToast("Server error, please try later !");
    });
  };

  return (
    <>
      <Helmet>
        <title>Milan | Clubs login</title>
        <meta
          name="description"
          content="Welcome to the Club's login page. Login to Milan with your email and password."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-top justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <AuthBanner className="auth-img" />
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form style={{ width: "auto" }} onSubmit={handleSubmit}>
                <h1
                  style={{
                    letterSpacing: "1px",
                    marginBottom: "25px",
                  }}
                  className="userregister_header"
                >
                  Log in with your Club!
                </h1>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="desktop form-control form-control-lg color"
                    id="desktopClubEmail"
                    aria-describedby="emailHelp"
                    placeholder=""
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    data-cy="desktop-club-email"
                    autoFocus
                  />

                  <input
                    type="email"
                    className="mobile form-control form-control-lg color"
                    id="mobileClubEmail"
                    aria-describedby="emailHelp"
                    name="email"
                    placeholder="Enter your email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="col-form-label col-form-label-lg regformlabels color"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="desktop form-control form-control-lg color"
                    id="desktopClubPassword"
                    placeholder=""
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    data-cy="desktop-club-password"
                  />

                  <input
                    type="password"
                    className="mobile form-control form-control-lg color"
                    id="mobileClubPassword"
                    name="password"
                    value={credentials.password}
                    placeholder="Enter your password"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* RememberMe Tab  */}
                <div id="rememberMe" className="form-check color-change">
                  <input
                    type="checkbox"
                    className="form-check-input color-change-input"
                    id="exampleCheck1"
                  />
                  <label
                    id="remember-me"
                    className="form-check-label"
                    htmlFor="exampleCheck1"
                  >
                    Remember me
                  </label>
                </div>
                <br />
                <div className="btn-container btn-container-desktop">
                  <Button
                    disabled={credentials.password.length <= 4 || !isEmailValid}
                    type="submit"
                    className="login-btn"
                  >
                    {isLoading ? <ClipLoader color="#e26959" /> : "LOGIN"}
                  </Button>
                </div>
                <br></br>
                <br></br>
                <div className="anchor-container anchor-container-desktop">
                  <Anchor
                    para=""
                    details="Forgot password?"
                    link="/clubs/forgotpass"
                    className="text-muted"
                  />

                  <Anchor
                    para="Don't have an account? "
                    details="Register here"
                    link="/clubs/register"
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

export default ClubLogin;

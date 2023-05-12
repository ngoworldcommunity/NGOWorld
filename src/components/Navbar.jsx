import React, { useContext, useEffect } from "react";
import "../styles/Navbar.css";
import solidarity from "../assets/pictures/solidarity.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProfilePicture from "../assets/pictures/ProfilePicture.png";
import Cookies from "js-cookie";
import MilanContext from "../context/MilanContext";
import Modal from "./Modal";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isSignUpModalOpen, toggleSignUpModal } = useContext(MilanContext);

  const handleNavigate = () => {
    if (Cookies.get("token")) {
      navigate("/user/profile");
    }

    if (Cookies.get("club")) {
      navigate("/clubs/profile");
    }
  };

  const navigateToURL = (url) => {
    toggleSignUpModal();
    navigate(url);
  };

  useEffect(() => {
    if (isSignUpModalOpen) {
      const closeEvent = (e) => {
        if (e.key === "Escape") {
          toggleSignUpModal();
        }
      };
      window.addEventListener("keydown", closeEvent);
      return () => window.removeEventListener("keydown", closeEvent);
    }
  }, [isSignUpModalOpen]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar_main ">
        <div className="container">
          <Link to={"/"}>
            <img
              src={
                solidarity ||
                "https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
              }
              alt="Milan-logo"
              className="nav_bramhin_img"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item home">
                <Link to={"/"}>Home</Link>
                <div
                  className={
                    "" + (location.pathname === "/" ? "active-link" : "")
                  }
                ></div>
              </li>

              <li className="nav-item home">
                <Link to={"/clubs"}>Clubs</Link>
                <div
                  className={
                    "" + (location.pathname === "/clubs" ? "active-link" : "")
                  }
                ></div>
              </li>

              <li className="nav-item home">
                <Link to="/events">Events</Link>
                <div
                  className={
                    "" + (location.pathname === "/events" ? "active-link" : "")
                  }
                ></div>
              </li>

              <li className="nav-item home">
                <Link to="/shop">Shop</Link>
                <div
                  className={
                    "" + (location.pathname === "/shop" ? "active-link" : "")
                  }
                ></div>
              </li>

              {Cookies.get("token") || Cookies.get("club") ? (
                <img
                  onClick={handleNavigate}
                  src={ProfilePicture}
                  alt="lol"
                  className="nav_user_img"
                />
              ) : (
                <li className="nav-item home">
                  <div onClick={toggleSignUpModal}>
                    <button className="btn nav_signup_btn">Sign up</button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {isSignUpModalOpen && (
        <Modal onClose={toggleSignUpModal}>
          <div className="signUpModalHeader">
            <h1>Sign Up!</h1>
          </div>
          <hr />
          <div>
            <div className="text-center button-wrapper">
              <button
                className="btn modal-btn"
                id="user-signup-modal-btn"
                onClick={() => navigateToURL("/user/register")}
              >
                Continue as an User
              </button>
              <button
                className="btn modal-btn"
                id="club-signup-modal-btn"
                onClick={() => navigateToURL("/clubs/register")}
              >
                Continue as a Club/NGO
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Navbar;

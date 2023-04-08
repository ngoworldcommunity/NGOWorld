import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import solidarity from "../assets/pictures/solidarity.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProfilePicture from "../assets/pictures/ProfilePicture.png";
import Cookies from "js-cookie";
import Modal from "./Modal";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signupModal, setSignupModal] = useState(false);
  const handleNavigate = () => {
    if (Cookies.get("token")) {
      navigate("/user/profile");
    }

    if (Cookies.get("club")) {
      navigate("/clubs/profile");
    }
  };

  const handleSignupModalOpen = () => {
    setSignupModal(true);
  };
  const handleSignupModalClose = () => {
    setSignupModal(false);
  };

  useEffect(() => {
    if (signupModal) {
      const closeEvent = (e) => {
        if (e.key === "Escape") {
          handleSignupModalClose();
        }
      };
      window.addEventListener("keydown", closeEvent);
      return () => window.removeEventListener("keydown", closeEvent);
    }
  }, [signupModal]);

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
                  <button
                    className="btn nav_signup_btn"
                    onClick={handleSignupModalOpen}
                  >
                    Sign up
                  </button>
                  {signupModal && (
                    <Modal onClose={handleSignupModalClose}>
                      <div className="modal_btn_wrapper">
                        <button
                          className="btn btn-warning modal_signup_btn"
                          onClick={() => {
                            setSignupModal(false);
                            navigate("/user/register");
                          }}
                        >
                          For Users
                        </button>
                        <button
                          className="btn btn-warning modal_signup_btn"
                          onClick={() => {
                            setSignupModal(false);
                            navigate("/clubs/register");
                          }}
                        >
                          For Clubs
                        </button>
                      </div>
                    </Modal>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useState, useContext } from "react";
import "./Navbar.css";
import navbarbrand from "../../assets/pictures/Navbar/MilanNavBrand.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Button from "../Button/GlobalButton/Button";
import ClickAwayListener from "../../utils/ClickAwayListener";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { modeContext } from "../../App";

const Navbar = () => {
  const { dark, setDark } = useContext(modeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const navigateToProfile = () => {
    if (Cookies.get("isLoggedIn")) {
      navigate(
        `/${
          Cookies.get("usertype") === "individual" ? "user" : "club"
        }/${Cookies.get("username")}`,
      );
    }
  };
  const toggleMode = () => {
    dark ? setDark(false) : setDark(true);
  };
  return (
    <>
      <ClickAwayListener onClickAway={() => setIsNavbarOpen(false)}>
        <nav
          className={`navbar navbar-expand-lg navbar-light sticky-top navbar_main ${
            dark ? "dark" : ""
          }`}
        >
          {window.location.href.includes("beta") && (
            <button className="navbar_betabtn">Beta</button>
          )}
          <div className="container">
            <Link
              className={`nav_brand_parent ${dark ? "dark-navBrand" : ""}`}
              to={"/"}
            >
              <img
                src={navbarbrand}
                alt="Milan-logo"
                className="nav_brand_img"
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
              onClick={() => toggleNavbar()}
            >
              {isNavbarOpen ? <IoMdClose /> : <FaBars />}
            </button>

            <div
              className={`collapse navbar-collapse ${
                isNavbarOpen ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className={`nav-item home ${dark ? "nav-item-dark" : ""}`}>
                  <Link
                    to={"/"}
                    onClick={() => setIsNavbarOpen(false)}
                    data-cy="home"
                  >
                    Home
                  </Link>
                  <div
                    className={`  ${
                      location.pathname === "/" ? "active-link" : ""
                    } ${dark ? "active-link-dark" : ""}`}
                  ></div>
                </li>

                <li className={`nav-item home ${dark ? "nav-item-dark" : ""}`}>
                  <Link to={"/clubs"} onClick={() => setIsNavbarOpen(false)}>
                    Clubs
                  </Link>
                  <div
                    className={`  ${
                      location.pathname === "/clubs" ? "active-link" : ""
                    } ${dark ? "active-link-dark" : ""}`}
                  ></div>
                </li>

                <li className={`nav-item home ${dark ? "nav-item-dark" : ""}`}>
                  <Link to="/events" onClick={() => setIsNavbarOpen(false)}>
                    Events
                  </Link>
                  <div
                    className={`  ${
                      location.pathname === "/events" ? "active-link" : ""
                    } ${dark ? "active-link-dark" : ""}`}
                  ></div>
                </li>

                <li className={`nav-item home ${dark ? "nav-item-dark" : ""}`}>
                  <Link to="/shop" onClick={() => setIsNavbarOpen(false)}>
                    Shop
                  </Link>
                  <div
                    className={`  ${
                      location.pathname === "/shop" ? "active-link" : ""
                    } ${dark ? "active-link-dark" : ""}`}
                  ></div>
                </li>
              </ul>
              <div className="nav-buttons">
                {Cookies.get("OAuthLoginInitiated") ||
                Cookies.get("isLoggedIn") ||
                Cookies.get("club") ? (
                  <img
                    onClick={() => {
                      navigateToProfile();
                    }}
                    src="https://images.ctfassets.net/lzny33ho1g45/RdyJrgaCvIKpSB5EUmwNq/319552e88aac20cb8bdffbe307cc9d92/reddit-app-tips-00-hero.png"
                    alt="user profile"
                    className="nav_user_img"
                  />
                ) : (
                  <>
                    <Button
                      className={dark ? "dark-signIN" : ""}
                      to="/auth/login"
                      fontweight="bold"
                    >
                      Sign in
                    </Button>
                    <Button
                      to="/auth/signup"
                      fontweight="bold"
                      className={dark ? "dark-signUp" : ""}
                    >
                      Sign up
                    </Button>
                    <Button
                      className={dark ? "toggle-btn-dark" : "toggle-btn"}
                      onClick={toggleMode}
                      title={dark ? "Enable Light Mode" : "Enable Dark Mode"}
                    >
                      <FontAwesomeIcon icon={faCircleHalfStroke} />
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </ClickAwayListener>
    </>
  );
};

export default Navbar;

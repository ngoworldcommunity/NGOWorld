import React from "react";
import "../styles/Navbar.css";
import solidarity from "../assets/pictures/solidarity.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ProfilePicture from "../assets/pictures/ProfilePicture.png";
import Cookies from "js-cookie";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = () => {
    if (Cookies.get("token")) {
      navigate("/user/profile");
    }

    if (Cookies.get("club")) {
      navigate("/clubs/profile");
    }
  };

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
                <Link to={"/display/clubs"}>Clubs</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/display/clubs"
                      ? "active-link"
                      : "")
                  }
                ></div>
              </li>

              <li className="nav-item home">
                <Link to="/display/events">Events</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/display/events"
                      ? "active-link"
                      : "")
                  }
                ></div>
              </li>

              <li className="nav-item home">
                <Link to="/shops/shop">Shop</Link>
                <div
                  className={
                    "" +
                    (location.pathname === "/shops/shop" ? "active-link" : "")
                  }
                ></div>
              </li>
              {/* Render Contact Us in Navabr only for Login and Register Pages */}
              {(location.pathname === "/user/login" ||
                location.pathname === "/user/register" ||
                location.pathname === "/clubs/login" ||
                location.pathname === "/clubs/register") && (
                <li className="nav-item home">
                  <Link to={"/contact"}>Contact</Link>
                  <div
                    className={
                      "" +
                      (location.pathname === "/contact" ? "active-link" : "")
                    }
                  ></div>
                </li>
              )}
              <li className="nav-item home">
                <Link to="/user/register">
                  <button className="btn nav_signup_btn">Sign up</button>
                </Link>
              </li>

              {(Cookies.get("token") || Cookies.get("club")) && (
                <img
                  onClick={handleNavigate}
                  src={ProfilePicture}
                  alt="lol"
                  className="nav_user_img"
                />
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

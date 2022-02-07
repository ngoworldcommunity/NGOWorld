import React, { useContext, useState } from "react";
import "../styles/Navbar.css";
import solidarity from "../assets/pictures/solidarity.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const Navbar = (props) => {
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("type");
    alert("Logging you out");
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/user/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          {/* //* navbar brand */}

          <img
            src={
              solidarity ||
              "https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
            }
            alt="lol"
            className="nav_bramhin_img"
          />

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
                <a href="/">Home</a>
              </li>

              <li className="nav-item home">
                <a href="/">Clubs</a>
              </li>

              <li className="nav-item home">
                <a href="/">Events</a>
              </li>

              <li className="nav-item home">
                <a href="/">About</a>
              </li>

              <li className="nav-item home">
                <a href="/contact">Contact</a>
              </li>

              <li className="nav-item home">
                <img
                  onClick={handleNavigate}
                  src={
                    props.pictureUrl ||
                    "https://www.shareicon.net/data/512x512/2016/09/15/829452_user_512x512.png"
                  }
                  alt="lol"
                  className="nav_user_img"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BannerBg from "../assets/pictures/milanBg.jpg";
import "../styles/Banner.css";

const Banner = () => {
  var nav = useNavigate();

  const handleClub = () => {
    nav("/clubs/register");
  };
  const handleUser = () => {
    nav("/user/register");
  };
  const [theme , setTheme] = useState("light-theme");
  const toggleTheam = () => {
    if (theme === "dark-theme"){
      setTheme("light-theme");
    }else{
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className="banner-container" style={{ backGround: BannerBg }}>
        <div className="dark-mode">
        <button
            type="button"
            className="darkmode" onClick={() => toggleTheam()}>
            Dark Mode
        </button>
        </div>
        <div className="banner-inner">
          <div className="banner-content">
            <h1 className="banner-header1">MILAN</h1>
            <h2 className="banner-subtitle">Where HELP meets NEED</h2>
          </div>

          <div className="banner-Buttons">
            <button
              type="button"
              className="btn btn-primary banner-Buttons_btn1"
              onClick={() => {
                handleClub();
              }}
            >
              Continue as a Club
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                handleUser();
              }}
            >
              Continue as a User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;

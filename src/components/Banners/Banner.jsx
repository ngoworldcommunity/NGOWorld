import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Banner.css";

const Banner = () => {
  var nav = useNavigate();

  const handleClub = () => {
    nav("/clubs/register");
  };
  const handleUser = () => {
    nav("/user/register");
  };

  return (
    <>
      <div className="container">
        <div className="banner_mainparent">
          <div className="banner_subparent">
            <div className="banner_textdiv">
              <h1 className="banner_header1">Welcome to </h1>
              <p className="banner_header2">MILAN</p>
              <div>
                <p className="banner_header3">
                  We are a hub, trying to connect help and need. Join us and
                  make earth a better place for all to live!
                </p>
              </div>
              <div className="banner_signup_btndiv">
                <button className="btn btn-warning banner_signup_btn">
                  Sign up now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

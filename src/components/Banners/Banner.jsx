import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Banner.css";
import Cookies from "js-cookie";
import { ImGithub } from "react-icons/im";

const Banner = () => {
  var nav = useNavigate();

  return (
    <>
      <div className="container">
        <div className="banner_mainparent">
          <div className="banner_subparent">
            <div className="banner_textdiv">
              <h1 className="banner_header1">


                Welcome to


                <br />


                MILAN{" "}
              </h1>
              {/*  <p className="banner_header2">MILAN</p> */}
              <div>
                <p className="banner_header3">
                  We are a hub, trying to connect help and need. Join us and
                  make earth a better        place for all to live!
                </p>
              </div>
              <div className="banner_signup_btndiv">
                {Cookies.get("token") || Cookies.get("club") ? (
                  <div className="banner_btn_div">
                    <button
                      className="btn btn-warning banner_signup_btn"
                      onClick={() => {
                        nav("/shop");
                      }}
                      data-cy="landingpage-club-signup"
                      id="landingpage-club-signup"
                    >
                      Explore our brand new shop !
                    </button>

                    <a
                      href="https://github.com/IAmTamal/Milan"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="btn btn-warning banner_signup_btn banner_contribute_btn ">
                        <ImGithub className="banner_contribute_logo" />
                        <p>Contribute to Milan</p>
                      </button>
                    </a>
                  </div>
                ) : (
                  <div className="banner_btn_div">
                    <button
                      className="btn btn-warning banner_signup_btn"
                      onClick={() => {
                        nav("/clubs/register");
                      }}
                      data-cy="landingpage-club-signup"
                      id="landingpage-club-signup"
                    >
                      Sign up now
                    </button>

                    <a
                      href="https://github.com/IAmTamal/Milan"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="btn btn-warning banner_signup_btn banner_contribute_btn ">
                        <ImGithub className="banner_contribute_logo" />
                        <p>Contribute to Milan</p>
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

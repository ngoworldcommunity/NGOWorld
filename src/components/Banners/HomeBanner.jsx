import React from "react";
import "./Banner.css";
import Cookies from "js-cookie";
import { ImGithub } from "react-icons/im";
import Button from "../Button/GlobalButton/Button";

const HomeBanner = () => {
  return (
    <>
      <div className="container">
        <div className="banner_mainparent">
          <div className="banner_subparent">
            <div className="banner_textdiv">
              {window.innerWidth < 800 ? (
                <>
                  <h1 className="banner_header1">Collaborate. </h1>
                  <h1 className="banner_header1">Connect.</h1>
                  <h1 className="banner_header1">Build.</h1>
                </>
              ) : (
                <h1 className="banner_header1">
                  Collaborate. <br /> Connect. <br />
                  Build.
                </h1>
              )}
              <div>
                {window.innerWidth < 800 ? (
                  <p className="banner_header3">
                    Welcome to Milan, we are a hub to <span>connect</span> NGOs,
                    Charities, and the world to <span>collaborate</span> and
                    <span>build</span> a better tommorow.
                  </p>
                ) : (
                  <p className="banner_header3">
                    Welcome to Milan, we are a hub to <span>connect</span> NGOs,
                    Charities, and the world to <span>collaborate</span> and
                    <span> build</span> a better tommorow.
                  </p>
                )}
              </div>

              <div className="banner_signup_btndiv">
                {Cookies.get("isLoggedIn") ? (
                  <div className="banner_btn_div">
                    <Button
                      className="banner_signup_btn"
                      to="https://github.com/MilanCommunity/Milan"
                      target="_blank"
                      rel="noreferrer"
                      variant="outline"
                    >
                      Visit our shop
                    </Button>

                    <Button
                      className="banner_signup_btn"
                      to="https://github.com/MilanCommunity/Milan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImGithub className="banner_contribute_logo" />
                      Git Milan
                    </Button>
                  </div>
                ) : (
                  <div className="banner_btn_div">
                    <Button
                      className="banner_signup_btn"
                      action="signup"
                      data-cy="landingpage-club-signup"
                      id="landingpage-club-signup"
                      variant="outline"
                      to="/auth/signup"
                    >
                      Sign up now
                    </Button>

                    <Button
                      className="banner_signup_btn"
                      to="https://github.com/MilanCommunity/Milan"
                      target="_blank"
                      rel="noreferrer"
                      variant="solid"
                    >
                      <ImGithub className="banner_contribute_logo" />
                      Git Milan
                    </Button>
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

export default HomeBanner;

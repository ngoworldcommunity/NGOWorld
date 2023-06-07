import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Banner.css";
import Cookies from "js-cookie";
import { ImGithub } from "react-icons/im";
import MilanContext from "../../context/MilanContext";
import Button from "../Button";

const Banner = () => {
  const nav = useNavigate();
  const { toggleSignUpModal } = useContext(MilanContext);

  return (
    <>
      <div className="container">
        <div className="banner_mainparent">
          <div className="banner_subparent">
            <div className="banner_textdiv">
              <h1 className="banner_header1">
                Welcome to
                <br />
                MILAN
              </h1>

              <div>
                <p className="banner_header3">
                  We are a hub, trying to connect help and need. Join us and
                  make earth a better place for all to live!
                </p>
              </div>
              <div className="banner_signup_btndiv">
                {Cookies.get("token") || Cookies.get("club") ? (
                  <div className="banner_btn_div">
                    <Button
                      variant="outline"
                      onClick={() => {
                        nav("/shop");
                      }}
                      data-cy="landingpage-club-signup"
                      id="landingpage-club-signup"
                    >
                      Explore our brand new shop !
                    </Button>
                    <Button
                      to="https://github.com/IAmTamal/Milan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImGithub className="banner_contribute_logo" />
                      Contribute to Milan
                    </Button>
                  </div>
                ) : (
                  <div className="banner_btn_div">
                    <Button
                      className="banner_signup_btn"
                      onClick={toggleSignUpModal}
                      data-cy="landingpage-club-signup"
                      id="landingpage-club-signup"
                    >
                      Sign up now
                    </Button>

                    <Button
                      className="banner_signup_btn banner_contribute_btn "
                      to="https://github.com/IAmTamal/Milan"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ImGithub className="banner_contribute_logo" />
                      Contribute to Milan
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

export default Banner;

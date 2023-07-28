import React, { useContext } from "react";
import "../../styles/Banner.css";
import Cookies from "js-cookie";
import { ImGithub } from "react-icons/im";
import MilanContext from "../../context/MilanContext";
import Button from "../Button";

const Banner = () => {
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
                  We are a hub which aims to connect NGOs, Charities and users
                  to collaborate and work together for a better tomorrow. We are
                  working hard, to connect HELP and NEED.
                </p>
              </div>
              <div className="banner_signup_btndiv">
                {Cookies.get("token") || Cookies.get("club") ? (
                  <div className="banner_btn_div">
                    <Button
                      className="banner_signup_btn  "
                      to="https://github.com/tamalCodes/Milan"
                      target="_blank"
                      rel="noreferrer"
                      variant="outline"
                    >
                      Explore our shop
                    </Button>

                    <Button
                      className="banner_signup_btn  "
                      to="https://github.com/tamalCodes/Milan"
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
                      variant="outline"
                    >
                      Sign up now
                    </Button>

                    <Button
                      className="banner_signup_btn  "
                      to="https://github.com/tamalCodes/Milan"
                      target="_blank"
                      rel="noreferrer"
                      variant="solid"
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

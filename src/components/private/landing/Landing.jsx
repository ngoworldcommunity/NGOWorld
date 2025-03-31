import { selectIsLoggedIn } from "@redux/slice/userSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Vector from "../../../assets/pictures/Banner/Vector.png";
import { Button, Navbar } from "../../shared";
import "./Landing.scss";
import { useTranslation } from "react-i18next";

const USERS_AMOUNT = 300;

const Landing = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="container landing_parent">
        <img src={Vector} alt="" className="Landing_bg" />

        <div className="landing_body">
          {windowWidth > 430 ? (
            <>
              <h1>{t("connect_ngo")},</h1>
              <h1>
                {t("charities_and_you")}
              </h1>
            </>
          ) : (
            <h1>
              {t("we_connect_ngo")}
            </h1>
          )}

          {windowWidth > 430 ? (
            <p>
              {t('welcome_to_ngo_world')}
            </p>
          ) : (
            <p>
              {t("platform_for_ngos")}
            </p>
          )}

          <div className="landing_ctadiv">
            {isLoggedIn ? (
              <Button to="/clubs" className="landing_signup">
                <span>{t("explore_our_clubs")}</span>
              </Button>
            ) : (
              <Button to="/auth/signup" className="landing_signup">
                <span>{t("sign_up_today")}</span>
              </Button>
            )}

            <div className="separator"></div>

            <div className="landing_ctaimgdiv">
              <div className="landing_ctaimages">
                <img
                  src="https://avatars.githubusercontent.com/u/56752104?v=4"
                  alt=""
                />
                <img
                  src="https://avatars.githubusercontent.com/u/71691473?v=4"
                  alt=""
                />
                <img
                  src="https://avatars.githubusercontent.com/u/94097778?v=4"
                  alt=""
                />
                <img
                  src="https://avatars.githubusercontent.com/u/72697074?v=4"
                  alt=""
                />
              </div>
              <span>{t("trusted_by_users", { count: USERS_AMOUNT })}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

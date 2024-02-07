import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Vector from "../../assets/pictures/Banner/Vector.png";
import Button from "../Button/GlobalButton/Button";
import "./Landing.css";

const Landing = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      <div className="container landing_parent">
        <img src={Vector} alt="" className="Landing_bg" />
        <div className="landing_promo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
          >
            <g clipPath="url(#clip0_429_89)">
              <rect
                width="17.9796"
                height="17.9796"
                transform="translate(0.238281 0.0101929)"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2178 2.26736C13.2172 1.68527 14.4713 2.4052 14.4713 3.56189V6.00337C14.7664 6.00337 15.0587 6.0615 15.3313 6.17445C15.604 6.28739 15.8518 6.45294 16.0605 6.66163C16.2692 6.87033 16.4347 7.11809 16.5477 7.39076C16.6606 7.66343 16.7187 7.95568 16.7187 8.25082C16.7187 8.54596 16.6606 8.83821 16.5477 9.11089C16.4347 9.38356 16.2692 9.63132 16.0605 9.84001C15.8518 10.0487 15.604 10.2143 15.3313 10.3272C15.0587 10.4401 14.7664 10.4983 14.4713 10.4983V12.7457C14.4713 13.9803 13.0621 14.6853 12.074 13.9444L10.5308 12.7862C9.70583 12.1677 8.74534 11.7547 7.72893 11.5815V13.7121C7.72901 14.2019 7.55205 14.6752 7.23067 15.0447C6.90929 15.4143 6.46515 15.6552 5.98013 15.7231C5.4951 15.791 5.00189 15.6812 4.5914 15.4141C4.18091 15.147 3.88082 14.7405 3.74645 14.2695L2.57028 10.1522C2.14702 9.65233 1.87158 9.04434 1.7749 8.39654C1.67822 7.74874 1.76415 7.08682 2.02302 6.48518C2.28188 5.88354 2.70344 5.36603 3.24028 4.99082C3.77713 4.61561 4.40799 4.39758 5.06196 4.36123L7.32289 4.23538C8.4291 4.17382 9.5049 3.85056 10.4618 3.2922L12.2178 2.26736ZM4.45814 11.3059L5.18706 13.8582C5.22214 13.9818 5.30074 14.0884 5.40834 14.1586C5.51594 14.2287 5.64528 14.2575 5.77247 14.2397C5.89966 14.2219 6.01612 14.1587 6.10033 14.0617C6.18454 13.9647 6.23082 13.8406 6.23063 13.7121V11.4572L5.06196 11.392C4.85858 11.3807 4.65656 11.3519 4.45814 11.3059ZM15.2204 8.25082C15.2204 8.05214 15.1415 7.86159 15.001 7.72109C14.8605 7.5806 14.67 7.50167 14.4713 7.50167V8.99997C14.67 8.99997 14.8605 8.92105 15.001 8.78055C15.1415 8.64006 15.2204 8.44951 15.2204 8.25082Z"
                fill="#FF7C5A"
              />
            </g>
            <defs>
              <clipPath id="clip0_429_89">
                <rect
                  width="17.9796"
                  height="17.9796"
                  fill="white"
                  transform="translate(0.238281 0.0101929)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>
            {" "}
            {windowWidth > 430
              ? "We are OpenSource, you can contribute too!"
              : "We are OpenSource"}{" "}
          </span>
        </div>

        <h1>
          Collaborate. Connect. <span>Build.</span>
        </h1>

        {windowWidth > 430 ? (
          <h2>
            Milan is an OpenSource platform to <span>connect</span> NGOs,
            Charities, and you to <span>collaborate</span> and{" "}
            <span>build</span> a better tomorrow.
          </h2>
        ) : (
          <h2>
            A platform to connect NGOs, charities and you to build a better
            tomorrow.
          </h2>
        )}

        <Marquee className="landing_marque">
          <div className="landing_marque_pill">
            <img
              src="https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg"
              alt=""
            />
            Sruti foundation
          </div>
          <div className="landing_marque_pill">
            <img
              src="https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg"
              alt=""
            />
            Sruti foundation
          </div>
          <div className="landing_marque_pill">
            <img
              src="https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg"
              alt=""
            />
            Sruti foundation
          </div>
          <div className="landing_marque_pill">
            <img
              src="https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg"
              alt=""
            />
            Sruti foundation
          </div>
          <div className="landing_marque_pill">
            <img
              src="https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg"
              alt=""
            />
            Sruti foundation
          </div>
          <div className="landing_marque_pill">
            <img
              src="https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg"
              alt=""
            />
            Sruti foundation
          </div>
          <div className="landing_marque_pill">
            <img
              src="https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg"
              alt=""
            />
            Sruti foundation
          </div>
          <div className="landing_marque_pill">
            <img
              src="https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg"
              alt=""
            />
            Sruti foundation
          </div>
        </Marquee>

        <Button
          to={`${Cookies.get("isLoggedIn") ? "/clubs" : "/auth/signup"}`}
          className="landing_signup"
        >
          <span>
            {Cookies.get("isLoggedIn") ? "Checkout our NGOs" : "Sign Up"}{" "}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            className="navbar_cta_arrow"
          >
            <path
              d="M22.6379 1.68188C23.2552 1.68226 23.8472 1.92766 24.2837 2.36418C24.7202 2.80069 24.9656 3.39262 24.966 4.00994L24.966 22.6784C24.9656 23.2957 24.7202 23.8877 24.2837 24.3242C23.8472 24.7607 23.2552 25.0061 22.6379 25.0065L3.96944 25.0065C3.36618 24.9848 2.7948 24.7302 2.3754 24.296C1.956 23.8619 1.72123 23.2821 1.72043 22.6784C1.72123 22.0748 1.956 21.4949 2.3754 21.0608C2.79481 20.6266 3.36618 20.372 3.96943 20.3503L17.0154 20.3503L0.675002 4.00994C0.238132 3.57307 -0.00729571 2.98055 -0.00729703 2.36273C-0.00729566 1.7449 0.238133 1.15238 0.675002 0.715508C1.11187 0.278639 1.7044 0.0332108 2.32222 0.0332088C2.94005 0.0332095 3.53257 0.278639 3.96944 0.715508L20.3098 17.0559L20.3098 4.00994C20.3102 3.39262 20.5556 2.80069 20.9921 2.36418C21.4286 1.92766 22.0206 1.68226 22.6379 1.68188Z"
              fill="white"
            />
          </svg>
        </Button>
      </div>
    </>
  );
};

export default Landing;

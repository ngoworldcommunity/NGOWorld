import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Vector from "../../../assets/pictures/Banner/Vector.png";
import { Button } from "../../shared";
import "./Landing.scss";

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

        <div className="landing_body">
          {windowWidth > 430 ? (
            <>
              <h1>We connect NGOs,</h1>
              <h1>
                Charities and <span>you.</span>
              </h1>
            </>
          ) : (
            <h1>
              We connect NGOs, charities and <span>you.</span>
            </h1>
          )}

          {windowWidth > 430 ? (
            <p>
              Welcome to <span>NGOWorld</span>, a platform to connect NGOs,
              charities and you to build a better tomorrow.
            </p>
          ) : (
            <p>
              A platform for NGOs, charities, clubs and you to collaborate, grow
              and build a better tomorrow.
            </p>
          )}

          <div className="landing_ctadiv">
            {Cookies.get("isLoggedIn") ? (
              <Button to="/auth/signup" className="landing_signup">
                <span>Explore our clubs</span>
              </Button>
            ) : (
              <Button to="/auth/signup" className="landing_signup">
                <span>Intrested? Sign Up</span>
              </Button>
            )}

            <div className="separator"></div>

            <div className="landing_ctaimgdiv">
              <div className="landing_ctaimages">
                <img
                  src="https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg"
                  alt=""
                />
                <img
                  src="https://www.thetechies.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser1.92325ddb.webp&w=640&q=75"
                  alt=""
                />
                <img
                  src="https://www.sruti.org.in/wp-content/uploads/2021/05/education-image.jpg"
                  alt=""
                />
                <img
                  src="https://www.thetechies.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser1.92325ddb.webp&w=640&q=75"
                  alt=""
                />
              </div>
              <span>Trusted by 300+ users.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

{
  /* <Marquee className="landing_marque">
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
        </Marquee> */
}

import React, { useEffect } from "react";
import "../styles/Milaninfobanner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import MilanLanding1 from "../assets/pictures/landing/MilanLanding1.png";
import MilanLanding2 from "../assets/pictures/landing/MilanLanding2.png";
import LandingMobile from "../assets/pictures/landing/LandingMobile.png";
import Button from "./Button";

const Milaninfobanner = () => {
  const nav = useNavigate();
  useEffect(() => {
    AOS.init({
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container ">
      <div className="mib_main_parent">
        <div className="mib_subparent1">
          <div
            className="mib_imgdiv"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <img
              src={MilanLanding1}
              alt="a group of people in different poses"
              width={430}
              height={430}
            />
          </div>

          <div
            className="mib_textdiv"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <p className="mib_header1">Connecting clubs, shops and you</p>

            <div>
              <p className="mib_header2">
              Milan connects over 1000 charities, NGOs, and individuals with a
                common goal - connecting help with people that needs it. You can
                donate, buy for charity, share fundraising events, and much more.
              </p>
            </div>
          </div>
        </div>
        <div className="mib_subparent2">
          <div
            className="mib_textdiv"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <p className="mib_header1">You can help people survive</p>

            <div>
              <p className="mib_header2">
                Over 80% of our funds come directly from the love and support
                you all show. We also donate directly to emergencies and natural
                disasters. Donations, small or big, can help people in need
                survive.
              </p>
            </div>
          </div>

          <div
            className="mib_imgdiv"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <img
              src={MilanLanding2}
              alt="a group of people in different poses"
              width={430}
              height={430}
            />
          </div>
        </div>
      </div>

      <div className="mib_main_parent2">
        <div className="mib_subparent3">
          <div className="mib_imgdiv">
            <img
              src={LandingMobile}
              alt="a group of people in different poses"
              width={324}
              height={324}
            />
          </div>

          <div className="mib_textdiv">
            <p className="mib_header1">More events, brand new shop</p>
            <div>
              <p className="mib_header2">
                We now have a brand new shop where we aim at putting up products
                made by orphans, folks with not good financial conditions. We
                also have an events tag where you can create or join any NGO,
                Charity based event.
              </p>
            </div>
            <div className="banner_signup_btndiv">
              <Button
                className="mib_explore_btn"
                onClick={() => {
                  nav("/shop");
                  window.scrollTo(0, 0);
                }}
              >
                Explore the shop
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milaninfobanner;

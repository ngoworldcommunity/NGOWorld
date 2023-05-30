import React, { useEffect } from "react";
import "../styles/Milaninfobanner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import MilanLanding1 from "../assets/pictures/landing/MilanLanding1.png";
import MilanLanding2 from "../assets/pictures/landing/MilanLanding2.png";
import LandingMobile from "../assets/pictures/landing/LandingMobile.png";
import Button from "./Button";
import { motion } from "framer-motion";
import { leftParaAnim } from "../animmation/Anim";
import { rightParaAnim } from "../animmation/Anim";
import { fadeIn } from "../animmation/Anim";
import { imgAnim } from "../animmation/Anim";
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
          <motion.div
            className="mib_imgdiv"
            variants={imgAnim}
            initial="hidden"
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{
              scale: [0, 1],
              opacity: 1,
            }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img
              src={MilanLanding1}
              alt="a group of people in different poses"
              width={430}
              height={430}
            />
          </motion.div>

          <div className="mib_textdiv">
            <motion.p
              className="mib_header1"
              variants={leftParaAnim}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.35, duration: 0.4 }}
              viewport={{ once: true }}
            >
              Connecting clubs, shops
              <br /> and you
            </motion.p>

            <div>
              <motion.p
                className="mib_header2"
                variants={leftParaAnim}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.4, duration: 0.4 }}
                viewport={{ once: true }}
              >
                Milan connects over 1000 charities, ngos, individuals with a
                common goal - connecting help with people that needs it. You can
                donate, buy for charity, share fundraising events and much more.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="mib_subparent2">
          <div className="mib_textdiv">
            <motion.p
              className="mib_header1"
              variants={rightParaAnim}
              viewport={{ once: true, amount: 0.3 }}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              You can help people survive
            </motion.p>

            <div>
              <motion.p
                className="mib_header2"
                variants={rightParaAnim}
                viewport={{ once: true, amount: 0.3 }}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                Over 80% of our funds comes directly from the love and support
                you all show. We also donate directly to emergencies, natural
                disasters. Donations, small or big, can help people in need
                survive.
              </motion.p>
            </div>
          </div>

          <motion.div
            className="mib_imgdiv"
            variants={imgAnim}
            initial="hidden"
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{
              scale: [0, 1],
              opacity: 1,
            }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img
              src={MilanLanding2}
              alt="a group of people in different poses"
              width={430}
              height={430}
            />
          </motion.div>
        </div>
      </div>

      <div className="mib_main_parent2">
        <div className="mib_subparent3">
          <motion.div
            variants={imgAnim}
            initial="hidden"
            viewport={{ once: true, amount: 0.25 }}
            whileInView={{
              scale: [0, 1],
              opacity: 1,
            }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img
              src={LandingMobile}
              alt="a group of people in different poses"
              width={324}
              height={324}
            />
          </motion.div>

          <div className="mib_textdiv">
            <motion.p
              className="mib_header1"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              More events, brand new shop
            </motion.p>
            <div>
              <motion.p
                className="mib_header2"
                variants={fadeIn}
                whileInView="visible"
                initial="hidden"
                transition={{ duration: 0.4, delay: 0.45 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                We now have a brand new shop where we aim at putting up products
                made by orphans, folks with not good financial conditions. We
                also have an events tag where you can create or join any NGO,
                Charity based event.
              </motion.p>
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

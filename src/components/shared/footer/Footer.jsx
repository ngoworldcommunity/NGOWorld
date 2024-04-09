import React from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import brand from "../../../assets/pictures/Navbar/MilanNavBrand.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="leftside">
          <div className="brand">
            <img src={brand} alt="" />
          </div>

          <div className="links_parent">
            <div className="product">
              <h1>QUICK STARTS</h1>
              <Link to={"/trending"}>Trending</Link>
              <Link to={"/clubs"}>Clubs</Link>
              <Link to={"/shops"}>Shops</Link>
              <Link to={"/auth/login"}>Login</Link>
              <Link to={"/events"}>Events</Link>
            </div>
            <div className="dev">
              <h1>RESOURCES</h1>
              <Link to={"/clubs"}>GitHub</Link>
              <Link to={"/clubs"}>Setup Frontend</Link>
              <Link to={"/clubs"}>Setup Backend</Link>
              <Link to={"/clubs"}>Docker resources</Link>
            </div>
            <div className="policies">
              <h1>POLICIES</h1>
              <Link to={"/clubs"}>Terms</Link>
              <Link to={"/clubs"}>Privacy</Link>
              <Link to={"/clubs"}>Cookies</Link>
            </div>
          </div>

          <div className="policies_mobile">
            <Link to={"/clubs"}>Terms</Link> |<Link to={"/clubs"}>Privacy</Link>{" "}
            |<Link to={"/clubs"}>Cookies</Link>
          </div>
        </div>

        <div className="rightside">
          <FaLinkedinIn />
          <FaXTwitter />
          <FaGithub />
          <SiGmail />
        </div>
      </footer>
    </>
  );
};

export default Footer;

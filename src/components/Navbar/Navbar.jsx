// import Cookies from "js-cookie";
// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// import ClickAwayListener from "../../utils/ClickAwayListener";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//   const toggleNavbar = () => {
//     setIsNavbarOpen(!isNavbarOpen);
//   };

//   const navigateToProfile = () => {
//     if (Cookies.get("isLoggedIn")) {
//       navigate(
//         `/${
//           Cookies.get("usertype") === "individual" ? "user" : "club"
//         }/${Cookies.get("username")}`,
//       );
//     }
//   };

//   return (
//     <>
//       <ClickAwayListener onClickAway={() => setIsNavbarOpen(false)}>
//         <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar_main ">
//           {window.location.href.includes("beta") && (
//             <button className="navbar_betabtn">Beta</button>
//           )}
//           <div className="container">
//             <Link className="nav_brand_parent" to={"/"}>
//               <img
//                 src={navbarbrand}
//                 alt="Milan-logo"
//                 className="nav_brand_img"
//               />
//             </Link>

//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//               onClick={() => toggleNavbar()}
//             >
//               {isNavbarOpen ? <IoMdClose /> : <FaBars />}
//             </button>

//             <div
//               className={`collapse navbar-collapse ${
//                 isNavbarOpen ? "show" : ""
//               }`}
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                 <li className="nav-item home">
//                   <Link
//                     to={"/"}
//                     onClick={() => setIsNavbarOpen(false)}
//                     data-cy="home"
//                   >
//                     Home
//                   </Link>
//                   <div
//                     className={
//                       "" + (location.pathname === "/" ? "active-link" : "")
//                     }
//                   ></div>
//                 </li>

//                 <li className="nav-item home">
//                   <Link to={"/clubs"} onClick={() => setIsNavbarOpen(false)}>
//                     Clubs
//                   </Link>
//                   <div
//                     className={
//                       "" + (location.pathname === "/clubs" ? "active-link" : "")
//                     }
//                   ></div>
//                 </li>

//                 <li className="nav-item home">
//                   <Link to="/events" onClick={() => setIsNavbarOpen(false)}>
//                     Events
//                   </Link>
//                   <div
//                     className={
//                       "" +
//                       (location.pathname === "/events" ? "active-link" : "")
//                     }
//                   ></div>
//                 </li>

//                 <li className="nav-item home">
//                   <Link to="/shop" onClick={() => setIsNavbarOpen(false)}>
//                     Shop
//                   </Link>
//                   <div
//                     className={
//                       "" + (location.pathname === "/shop" ? "active-link" : "")
//                     }
//                   ></div>
//                 </li>
//               </ul>
//               <div className="nav-buttons">
//                 {Cookies.get("OAuthLoginInitiated") ||
//                 Cookies.get("isLoggedIn") ||
//                 Cookies.get("club") ? (
//                   <img
//                     onClick={() => {
//                       navigateToProfile();
//                     }}
//                     src="https://images.ctfassets.net/lzny33ho1g45/RdyJrgaCvIKpSB5EUmwNq/319552e88aac20cb8bdffbe307cc9d92/reddit-app-tips-00-hero.png"
//                     alt="user profile"
//                     className="nav_user_img"
//                   />
//                 ) : (
//                   <>
//                     {/* <Button
//                       variant="Primary"
//                       to="/auth/login"
//                       fontweight="bold"
//                     >
//                       <span>
//                         Contribute to Milan
//                         <IoChevronForwardSharp style={{ marginLeft: "5px" }} />
//                       </span>
//                     </Button> */}
//                     {/* <Button
//                       to="/auth/signup"
//                       fontweight="bold"
//                       variant="rounded"
//                     >
//                       <span>
//                         Sign Up
//                         <IoChevronForwardSharp style={{ marginLeft: "5px" }} />
//                       </span>
//                     </Button> */}
//                     <button className="join_button">
//                       <span>Join Us</span>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="25"
//                         height="25"
//                         viewBox="0 0 25 25"
//                         fill="none"
//                       >
//                         <path
//                           d="M22.6379 1.68188C23.2552 1.68226 23.8472 1.92766 24.2837 2.36418C24.7202 2.80069 24.9656 3.39262 24.966 4.00994L24.966 22.6784C24.9656 23.2957 24.7202 23.8877 24.2837 24.3242C23.8472 24.7607 23.2552 25.0061 22.6379 25.0065L3.96944 25.0065C3.36618 24.9848 2.7948 24.7302 2.3754 24.296C1.956 23.8619 1.72123 23.2821 1.72043 22.6784C1.72123 22.0748 1.956 21.4949 2.3754 21.0608C2.79481 20.6266 3.36618 20.372 3.96943 20.3503L17.0154 20.3503L0.675002 4.00994C0.238132 3.57307 -0.00729571 2.98055 -0.00729703 2.36273C-0.00729566 1.7449 0.238133 1.15238 0.675002 0.715508C1.11187 0.278639 1.7044 0.0332108 2.32222 0.0332088C2.94005 0.0332095 3.53257 0.278639 3.96944 0.715508L20.3098 17.0559L20.3098 4.00994C20.3102 3.39262 20.5556 2.80069 20.9921 2.36418C21.4286 1.92766 22.0206 1.68226 22.6379 1.68188Z"
//                           fill="white"
//                         />
//                       </svg>
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </nav>
//       </ClickAwayListener>
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import githubLogo from "../../assets/pictures/Navbar/GitHubLogo.png";
import navbarbrand from "../../assets/pictures/Navbar/NavbarImg.png";
import Button from "../Button/GlobalButton/Button";
import "./Navbar.css";

const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Clubs",
    link: "/clubs",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Shop",
    link: "/shop",
  },
];

const Navbar = () => {
  const location = useLocation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

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
      <div className="navbar_parent">
        <Link className="navbar_brand" to={"/"}>
          <img src={navbarbrand} alt="Milan-logo" className="nav_brand_img" />
        </Link>

        {windowWidth > 900 && (
          <>
            <div className="navbar_links">
              {Links.map((item, index) => {
                return (
                  <div key={index}>
                    <Link key={index} className="navbar_link" to={item.link}>
                      {item.name}
                    </Link>
                    <div
                      className={
                        "" +
                        (location.pathname === item?.link ? "active-link" : "")
                      }
                    ></div>
                  </div>
                );
              })}
            </div>
            <div className="navbar_cta">
              <Button to="/auth/signup" variant="outline">
                <img src={githubLogo} alt="" />
              </Button>

              <Button to="/auth/signup">
                <span>Sign Up</span>

                <FaChevronRight />
              </Button>
            </div>
          </>
        )}

        {!isNavbarOpen && (
          <GiHamburgerMenu
            className="navbar_ham"
            onClick={() => {
              toggleNavbar();
            }}
          />
        )}

        {isNavbarOpen && (
          <div className="navbar_mobile_linksparent">
            <div className="navbar_mobile_links">
              <RxCross2
                className="navbar_mobile_close"
                onClick={() => {
                  toggleNavbar();
                }}
              />
              {Links.map((item, index) => {
                return (
                  <div key={index}>
                    <Link
                      key={index}
                      className="navbar_mobile_link"
                      to={item.link}
                    >
                      {item.name}
                    </Link>
                    <div
                      className={
                        "" +
                        (location.pathname === item?.link ? "active-link" : "")
                      }
                    ></div>
                  </div>
                );
              })}

              <Button to="/auth/signup" className="navbar_mobile_cta">
                <span>Sign Up</span>

                <FaChevronRight />
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;

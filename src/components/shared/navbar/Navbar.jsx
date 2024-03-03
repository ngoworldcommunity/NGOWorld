import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navbarbrand from "../../../assets/pictures/Navbar/NavbarImg.png";
import Button from "../buttons/globalbutton/Button";
import "./Navbar.css";
import { Logout } from "../../../service/MilanApi";
import { showErrorToast, showSuccessToast } from "../../../utils/Toasts";
import { resetUserData } from "../../../redux/slice/userSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const usertype = useSelector((state) => state.user.usertype);
  const username = useSelector((state) => state.user.username);

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

  async function handleLogout() {
    const data = await Logout();

    if (data?.status === 200) {
      showSuccessToast(data?.data?.message);
      setTimeout(() => {
        navigate("/");
        dispatch(resetUserData());
        Cookies.remove("skipProfileCompletion");
      }, 1500);
    } else {
      showErrorToast(data?.message);
    }
  }

  return (
    <nav>
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
            {Cookies.get("isLoggedIn") || isLoggedIn ? (
              <img
                src="https://www.thetechies.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser3.04b79840.webp&w=640&q=75"
                alt=""
                style={{
                  width: "33px",
                  height: "33px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => {
                  document
                    .querySelector(".nav_dropdown")
                    .classList.toggle("nav_dropdown_visible");
                }}
              />
            ) : (
              <Button to="/auth/signup" className="navbar_cta">
                <span>Sign Up</span>
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
            )}
          </>
        )}

        {!isNavbarOpen &&
          (Cookies.get("isLoggedIn") ? (
            <img
              src="https://www.thetechies.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser3.04b79840.webp&w=640&q=75"
              alt=""
              className="navbar_hamimg"
              onClick={() => {
                toggleNavbar();
              }}
            />
          ) : (
            <GiHamburgerMenu
              className="navbar_ham"
              onClick={() => {
                toggleNavbar();
              }}
            />
          ))}

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

              <Button
                to={`${
                  Cookies.get("isLoggedIn")
                    ? `/${
                        Cookies.get("usertype") === "individual"
                          ? "user"
                          : "club"
                      }/${Cookies.get("username")}`
                    : "/auth/signup"
                }`}
                className="navbar_mobile_cta"
              >
                <span>
                  {Cookies.get("isLoggedIn") ? "Your Profile" : "Sign Up"}
                </span>
                <FaChevronRight />
              </Button>
            </div>
          </div>
        )}

        <div className="nav_dropdown">
          <div className="myaccount">
            <span>Hello @{username}</span>
            <div
              role="separator"
              aria-orientation="horizontal"
              className="myaccount_separator"
            ></div>
            <Link
              to={`/${usertype === "individual" ? "user" : "club"}/${username}`}
            >
              Your Profile
              <span>⇧⌘P</span>
            </Link>
            {usertype === "club" ? (
              <Link to={"/event/create"}>
                Your Events <span>⌘E</span>
              </Link>
            ) : null}
            <Link>
              Settings <span>⌘S</span>
            </Link>
          </div>
          <div className="myaccount">
            <div
              role="separator"
              aria-orientation="horizontal"
              className="myaccount_separator"
            ></div>
            <Link>GitHub</Link>
            <Link>Support</Link>
            <Link>Api</Link>
          </div>
          <div className="myaccount">
            <div
              role="separator"
              aria-orientation="horizontal"
              className="myaccount_separator"
            ></div>
            <Link
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

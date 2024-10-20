import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import navbarbrand from "../../../assets/pictures/Navbar/MilanNavBrand.svg";
import { resetUserData } from "../../../redux/slice/userSlice";
import { Logout } from "../../../service/MilanApi";
import { showErrorToast, showSuccessToast } from "../../../utils/Toasts";
import Button from "../buttons/globalbutton/Button";
import "./Navbar.scss";

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
    name: "Trending",
    link: "/trending",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "Shops",
    link: "/shop",
  },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userType = useSelector((state) => state.user.userType);
  const userName = useSelector((state) => state.user.userName);

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
      navigate("/");
      dispatch(resetUserData());
      localStorage.clear();
      document
        .querySelector(".nav_dropdown")
        .classList.remove("nav_dropdown_visible");
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
            {Cookies.get("Token") && isLoggedIn ? (
              <img
                src="https://www.thetechies.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser3.04b79840.webp&w=640&q=75"
                alt=""
                style={{
                  width: "37px",
                  height: "37px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  cursor: "pointer",
                  zIndex: "100",
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
              </Button>
            )}
          </>
        )}

        {!isNavbarOpen &&
          (Cookies.get("Token") ? (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s"
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

              {isLoggedIn ? (
                <>
                  <div>
                    <Link className="navbar_mobile_link" to={"/dashboard"}>
                      {userType === "individual" ? "Profile" : "Dashboard"}
                    </Link>
                  </div>
                  <div>
                    <p
                      className="navbar_mobile_link"
                      onClick={() => {
                        handleLogout();
                        setIsNavbarOpen(false);
                      }}
                    >
                      Logout
                    </p>
                  </div>
                </>
              ) : (
                <Button to={"/auth/signup"} className="navbar_mobile_cta">
                  <span>Sign Up</span>
                  <FaChevronRight />
                </Button>
              )}
            </div>
          </div>
        )}

        <div className="nav_dropdown">
          <div className="myaccount">
            <span className="name">Hello @{userName}</span>
            <div
              role="separator"
              aria-orientation="horizontal"
              className="myaccount_separator"
            ></div>
            <Link
              to={
                userType === "individual" ? `/user/${userName}` : `/dashboard`
              }
            >
              {userType === "individual" ? "Your Profile" : "Dashboard"}
              <span>⇧⌘{userType === "club" ? "D" : "P"} </span>
            </Link>
            {userType === "club" ? (
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

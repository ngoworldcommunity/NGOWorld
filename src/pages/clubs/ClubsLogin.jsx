import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/ClubLogin.css";
import Pic from "../../assets/pictures/clubs-login.png";
import { LoginClub } from "../../service/MilanApi";
import { TailSpin } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

function ClubLogin() {
  document.title = "Milan | Club Login";
  const Navigate = useNavigate();

  function Anchor(props) {
    return (
      <div>
        <p>
          {props.para}
          <Link to={props.link}>{props.details}</Link>
        </p>
      </div>
    );
  }

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (
      e.target.name === "email" &&
      e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
    )
      setIsEmailValid(true);
  };

  //* SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    const Data = LoginClub(credentials);
    setIsLoading(false);

    Data.then((response) => {
      if (response.data.success === true) {
        Cookies.set("club", response.data.authToken);

        toast("🌈 Logging you in !", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
          onClose: () => {
            Navigate("/");
          },
        });
      } else if (response.data.success === false) {
        toast("🌈 Error !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
        setCredentials({
          email: "",
          password: "",
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
        id="LoginToast"
      />

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6 d-flex justify-content-center">
              <img src={Pic} className="mobile-img" alt="profile-img"></img>
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form style={{ width: "auto" }} onSubmit={handleSubmit}>
                <h1 style={{ letterSpacing: "1px", marginBottom: "20px" }}>
                  Log in
                </h1>

                {/* //* email for desktops */}

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    className="desktop form-control form-control-lg"
                    id="desktop_clubEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    autoFocus
                  />

                  {/* //* email for mobiles */}
                  <input
                    type="email"
                    className="mobile form-control form-control-lg"
                    id="mobile_clubEmail"
                    aria-describedby="emailHelp"
                    name="email"
                    placeholder="Enter your email"
                    value={credentials.email}
                    onChange={handleChange}
                    required

                  />
                </div>

                {/* //* password for desktops */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    className="desktop form-control form-control-lg"
                    id="desktop_clubPassword"
                    placeholder="Enter your password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />

                  {/* //* password for mobiles */}
                  <input
                    type="password"
                    className="mobile form-control form-control-lg"
                    id="mobile_clubPassword"
                    name="password"
                    value={credentials.password}
                    placeholder="Enter your password"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* RememberMe Tab  */}
                <div id="rememberMe" className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <br />

                <button
                  disabled={credentials.password.length <= 4 || !isEmailValid}
                  type="submit"
                  className="login-btn btn btn-lg btn-block"
                  style={{ backgroundColor: "#C996CC" }}
                >
                  {isLoading ? (
                    <TailSpin color="#FFFFFF" height={30} width={30} />
                  ) : (
                    "LOGIN"
                  )}
                </button>

                <br></br>
                <br></br>
                <Anchor
                  para=""
                  details="Forgot password?"
                  link="#"
                  className="text-muted"
                />
                <Anchor
                  para="Don't have an account? "
                  details="Register here"
                  link="/clubs/register"
                  className="link-info"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClubLogin;

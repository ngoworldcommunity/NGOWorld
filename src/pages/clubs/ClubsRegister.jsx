import React, { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import Navbar from "../../components/Navbar";
import registrationImage from "../../assets/pictures/clubRegistrationImage.png";
import { Link, useNavigate } from "react-router-dom";
import { RegisterClub } from "../../service/MilanApi";
import "../../styles/ClubsRegister.css";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClubLogin = () => {
  document.title = "Milan | Club Register";
  const navigate = useNavigate();

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
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    pincode: "",
    description: "",
    tagLine: "",
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

  //* Submitting form
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    await RegisterClub({ ...credentials });
    setIsLoading(false);

    toast("🌈 Registered your club !", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton : false,
      onClose: () => navigate("/clubs/login"),
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
      />

      <div className="mobile-sec container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src={registrationImage}
              className="img-fluid imageClub"
              alt="Club Registration"
              width="90%"
            />
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit} >
              <h1 className="mobile-txt clubregisterheading1">
                Register your club with Milan !
              </h1>

              <div className="form-outline mb-4">
                <label
                  htmlFor="club-name"
                  className="col-form-label col-form-label-lg regformlabels"
                >
                  Enter your club name
                </label>
                <input
                  type="text"
                  className="clubreg_des form-control color"
                  name="name"
                  value={credentials.name}
                  onChange={handleChange}
                  required
                  autoFocus
                  aria-label="Club name"
                  id="club-name"
                />
                <input
                  type="text"
                  className="clubreg_mob form-control color"
                  name="name"
                  value={credentials.name}
                  placeholder="Enter your club name"
                  onChange={handleChange}
                  required
                  aria-label="Club name"
                />
              </div>
              <div className="form-outline mb-4">
                <label
                  htmlFor="club-tagLine"
                  className="col-form-label col-form-label-lg regformlabels"
                >
                  Club Tagline 🏷️ (Max 50 Chars.)
                </label>
                <input
                  type="text"
                  className="clubreg_des form-control color"
                  name="tagLine"
                  value={credentials.tagLine}
                  onChange={handleChange}
                  required
                  aria-label="Club Tagline"
                  id="club-tagLine"
                  maxLength={50}
                />
                <input
                  type="text"
                  className="clubreg_mob form-control color"
                  name="tagLine"
                  value={credentials.tagLine}
                  placeholder="Enter your club Tagline (Max. 50 Characters)"
                  onChange={handleChange}
                  required
                  aria-label="Club TagLine"
                  maxLength={50}
                />
              </div>

              <div className="form-outline mb-4">
                <label
                  htmlFor="email-des"
                  className="col-form-label col-form-label-lg regformlabels"
                >
                  Email address 📨
                </label>
                <input
                  type="email"
                  className="clubreg_des form-control color"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                  aria-label="Club email"
                  id="email-des"
                />
                <input
                  type="email"
                  className="clubreg_mob form-control color"
                  name="email"
                  value={credentials.email}
                  placeholder="Enter your club email"
                  onChange={handleChange}
                  required
                  aria-label="Club email"
                  id="email-mob"
                />
              </div>

              {/* Password start */}

              <div
                className="d-flex flex-row flex-md-row"
                style={{ justifyContent: "space-between" }}
              >
                <div style={{ width: "45%" }}>
                  <label
                    htmlFor="password-des"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Password 🔑
                  </label>
                  <input
                    type="password"
                    className="clubreg_des form-control color"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    id="password-des"
                  />
                  <input
                    type="password"
                    className="clubreg_mob form-control color"
                    name="password"
                    value={credentials.password}
                    placeholder="Enter password"
                    onChange={handleChange}
                    required
                    id="password-mob"
                  />
                </div>

                <div style={{ width: "45%" }}>
                  <label
                    htmlFor="confirm-password-des"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Confirm Password 🔐
                  </label>
                  <input
                    type="password"
                    className="clubreg_des form-control color"
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    onChange={handleChange}
                    required
                    id="confirm-password-des"
                  />

                  <input
                    type="password"
                    className="clubreg_mob form-control color"
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    placeholder="Confirm password"
                    onChange={handleChange}
                    required
                    id="confirm-password-mob"
                  />
                </div>
              </div>
              {/* Password end */}

              <div className="form-outline mb-4">
                <label
                  htmlFor="address-des"
                  className="col-form-label col-form-label-lg regformlabels"
                >
                  Address 🏡
                </label>
                {/* textarea for address */}
                <textarea
                  className="clubreg_des form-control color"
                  name="address"
                  value={credentials.address}
                  onChange={handleChange}
                  required
                  aria-label="Club address"
                  id="address-des"
                />
                <textarea
                  className="clubreg_mob form-control color"
                  name="address"
                  value={credentials.address}
                  placeholder="Enter your address"
                  onChange={handleChange}
                  required
                  aria-label="Club address"
                  id="address-mob"
                />
              </div>
              <label
                htmlFor="pincode-des"
                className="col-form-label col-form-label-lg regformlabels"
              >
                Pincode 📍
              </label>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  maxLength="6"
                  className="clubreg_des form-control color"
                  name="pincode"
                  value={credentials.pincode}
                  onChange={handleChange}
                  required
                  id="pincode-des"
                />
                <input
                  type="text"
                  maxLength="6"
                  className="clubreg_mob form-control color"
                  name="pincode"
                  placeholder="Enter your pincode"
                  value={credentials.pincode}
                  onChange={handleChange}
                  required
                  id="pincode-mob"
                />
              </div>
              <label
                htmlFor="description-des"
                className="col-form-label col-form-label-lg regformlabels"
              >
                Club description 📝
              </label>
              <textarea
                type="text"
                className="clubreg_des form-control color"
                aria-describedby="textDemo"
                name="description"
                value={credentials.description}
                onChange={handleChange}
                required
                id="description-des"
              />
              <textarea
                type="text"
                className="clubreg_mob form-control color"
                aria-describedby="textDemo"
                name="description"
                placeholder="Enter club description"
                value={credentials.description}
                onChange={handleChange}
                required
                id="description-mob"
              />
              <small id="textDemo" className="form-text text-muted"></small>

              <div className="d-grid gap-2 py-4">
                <button
                  disabled={
                    credentials.description.trim().length < 20 ||
                    credentials.password.length <= 4 ||
                    !isEmailValid
                  }
                  type="submit"
                  className="registration-btn btn  py-2"
                  style={{backgroundColor: "#C996CC"}}
                >
                  {isLoading ? (
                    <TailSpin color="#FFFFFF" height={30} width={30} />
                  ) : (
                    "Register"
                  )}
                </button>
              </div>

              <Anchor
                para="Already have an account? "
                details="Login here"
                link="/clubs/login"
                className="link-info"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubLogin;

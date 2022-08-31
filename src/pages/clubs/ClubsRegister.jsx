import React, { useState } from "react";
import { Audio, Oval, TailSpin } from "react-loader-spinner";
import Navbar from "../../components/Navbar";
import registrationImage from "../../assets/pictures/clubRegistrationImage.png";
import { Link, useNavigate } from "react-router-dom";
import { RegisterClub } from "../../service/MilanApi";
import "../../styles/ClubsRegister.css";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClubLogin = () => {
  document.title = "Register your club | Milan";
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

    console.log(credentials);
    console.log("Form submitted");
    setIsLoading(true);
    await RegisterClub(credentials);
    setIsLoading(false);


    toast('🌈 Registered club !', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      onClose: () => {
        navigate("/clubs/login");
      }
    });
  };

  return (
    <>
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
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
            <form onSubmit={handleSubmit}>
              <h2 className="mobile-txt clubregisterheading1">Register your club with Milan !</h2>

              <div className="form-outline mb-4">

                <input
                  type="text"
                  className="form-control "
                  name="name"
                  value={credentials.name}
                  placeholder="Enter your club name"
                  onChange={handleChange}
                  required

                />
              </div>

              <div className="form-outline mb-4">

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email"
                  value={credentials.email}
                  onChange={handleChange}
                  required

                />
              </div>


              {/* Password start */}
              <div className="d-flex flex-row flex-md-row" style={{ justifyContent: "space-between" }}>
                <div style={{ width: "45%" }}>
                  
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={credentials.password}
                    placeholder="Enter your password"
                    onChange={handleChange}
                    required

                  />
                </div>

                <div style={{ width: "45%" }}>
                  
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={credentials.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              {/* Password end */}





              <div className="form-outline mb-4">

                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={credentials.address}
                  placeholder="Enter your address"
                  onChange={handleChange}
                  required

                />
              </div>

              <div className="form-outline mb-4">

                <input
                  type="text"
                  maxLength="6"
                  className="form-control"
                  name="pincode"
                  placeholder="Enter your pincode"
                  value={credentials.pincode}
                  onChange={handleChange}
                  required

                />
              </div>

              <textarea
                type="text"
                className="form-control"
                // id="desc"
                aria-describedby="textDemo"
                name="description"
                placeholder="Enter club description"
                value={credentials.description}
                onChange={handleChange}
                required

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
                  className="registration-btn btn btn-primary py-2"
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

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../service/MilanApi";
import { ReactComponent as AuthBanner } from "../../assets/pictures/authpages/authbannerimg.svg";
import "../../styles/UserLogin.css";
import { Helmet } from "react-helmet-async";
import { showErrorToast, showSuccessToast } from "../../utils/showToast";
import Button from "../../components/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useValidation from "../../hooks/useValidation";

const UserRegister = () => {
  const Navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    pincode: "",
  });
  const [initialState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    pincode: "",
  });
  const [passwordType, setPasswordType] = useState("password");

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

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

  const handleChange = (e) => {
    if (e.target.name === "pincode") {
      if (
        e.target.value.toString().length < 7 &&
        !e.target.value.toString().includes(".")
      ) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      }
      return;
    }
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const callUserSignupAPI = async () => {
    const Data = await RegisterUser(credentials);

    if (Data?.status === 201) {
      showSuccessToast(Data?.data?.message);
      Navigate("/user/login");
    } else {
      showErrorToast(Data?.data?.message);
      setCredentials(initialState);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = useValidation(credentials, true, false);

    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => {
        showErrorToast(error.message);
      });
    } else {
      callUserSignupAPI();
    }
  };

  return (
    <>
      <Helmet>
        <title>Milan | User Register</title>
        <meta
          name="description"
          content="Welcome to the User's registration page. Provide all the needed credentials and join us."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="min-vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-top justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <AuthBanner className="auth-img" />
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form style={{ width: "auto" }} onSubmit={handleSubmit}>
                <h1 className="userregister_header">Register as an User !</h1>
                <div className="form-outline mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="me-md-2">
                      <label
                        htmlFor="First Name"
                        className="col-form-label col-form-label-lg regformlabels"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First name"
                        name="firstname"
                        value={credentials.firstname}
                        onChange={handleChange}
                        required
                        autoFocus
                        aria-label="First name"
                      />
                    </div>
                    <div className="ms-md-2">
                      <label
                        htmlFor="Last Name"
                        className="col-form-label col-form-label-lg regformlabels"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Last name"
                        name="lastname"
                        value={credentials.lastname}
                        onChange={handleChange}
                        required
                        aria-label="Last name"
                      />
                    </div>
                  </div>
                </div>
                {/* //* Email */}
                <div className="form-outline mb-4">
                  <label
                    htmlFor="emailInput"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    aria-label="Email Address"
                    required
                  />
                </div>
                {/* //* Password */}
                <div className="form-outline mb-4">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Password
                  </label>

                  <input
                    type={passwordType}
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    aria-label="Password"
                  />
                  <div onClick={passwordToggle} className="toggle-button">
                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>
                {/* //* Address */}
                <div className="form-outline mb-4">
                  <label
                    htmlFor="address"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Address
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={credentials.address}
                    onChange={handleChange}
                    required
                    aria-label="Address"
                  />
                </div>
                {/* //* Pincode */}
                <div className="form-outline mb-4">
                  <label
                    htmlFor="pincode"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Pincode
                  </label>

                  <input
                    type="number"
                    className="form-control form-control-lg form-input remove_placeholder_desktop"
                    id="pincode"
                    name="pincode"
                    placeholder="Pin Code"
                    value={credentials.pincode}
                    onChange={handleChange}
                    required
                    aria-label="Pincode"
                  />
                </div>
                <br />
                <Button type="submit" className="login-btn">
                  Register
                </Button>
                <br></br> <br></br>
                <Anchor
                  para="Already have an account? "
                  details="Login here"
                  link="/user/login"
                  className="link-info anchor-container-desktop"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserRegister;

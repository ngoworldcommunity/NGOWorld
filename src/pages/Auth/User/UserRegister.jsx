import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../../service/MilanApi";
import "../AuthPage.css";
import { Helmet } from "react-helmet-async";
import { showErrorToast, showSuccessToast } from "../../../utils/Toasts";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useValidation from "../../../hooks/useValidation";
import { ToastContainer } from "react-toastify";
import AuthButton from "../../../components/Button/AuthButton/AuthButton";
import TopButton from "../../../components/Button/AuthButton/TopButton";

const ClubsRegister = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    pincode: "",
  });
  const [initialState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    pincode: "",
  });

  const [isLoading, setIsLoading] = useState(false);

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

      setTimeout(() => {
        setIsLoading(false);
        navigate("/user/login");
      }, 3000);
    } else {
      showErrorToast(Data?.message);
      setCredentials(initialState);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const validationErrors = useValidation(credentials, true, false);

    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => {
        showErrorToast(error.message);
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      callUserSignupAPI();
    }
  };

  const [passwordType, setPasswordType] = useState("password");

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const confirmPasswordToggle = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else setConfirmPasswordType("password");
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
      <ToastContainer />

      <div className="authpage_godparent">
        <div className="authpage_parent">
          <div className="authpage_leftdiv">
            <TopButton isGoBack={false} GoogleButton={true} />
          </div>

          <div className="authpage_rightdiv">
            <TopButton isGoBack={true} />
            <form onSubmit={handleSubmit} className="authform">
              <h1 className="">Join Milan Today</h1>

              <div className="auth_namediv">
                <div className="authform_container">
                  <label htmlFor="password-des" className="auth_label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className=" form-control "
                    name="firstname"
                    value={credentials.firstname}
                    onChange={handleChange}
                    required
                    id="password-des"
                    placeholder="Rahul"
                  />
                </div>

                <div className="authform_container">
                  <label htmlFor="confirm-password-des" className="auth_label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className=" form-control "
                    name="lastname"
                    value={credentials.lastname}
                    onChange={handleChange}
                    required
                    placeholder="Kumar"
                    id="confirm-password-des"
                  />
                </div>
              </div>

              <div className="authform_container ">
                <label htmlFor="email-des" className="auth_label">
                  Email address
                </label>
                <input
                  type="email"
                  className=" form-control "
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                  aria-label="Club email"
                  id="email-des"
                  placeholder="rahul@email.com"
                />
              </div>

              <div className="auth_passworddiv">
                <div className="authform_container">
                  <label htmlFor="password-des" className="auth_label">
                    Password
                  </label>
                  <input
                    type={passwordType}
                    className=" form-control "
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    id="password-des"
                    placeholder="Strg@Pass#122&&S"
                  />

                  <div
                    onClick={passwordToggle}
                    className="toggle-button"
                    style={{ paddingTop: 5 }}
                  >
                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>

                <div className="authform_container">
                  <label htmlFor="confirm-password-des" className="auth_label">
                    Confirm Password
                  </label>
                  <input
                    type={confirmPasswordType}
                    className=" form-control "
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    onChange={handleChange}
                    required
                    placeholder="Strg@Pass#122&&S"
                    id="confirm-password-des"
                  />

                  <div
                    onClick={confirmPasswordToggle}
                    className="toggle-button"
                    style={{ paddingTop: 5 }}
                  >
                    {confirmPasswordType === "password" ? (
                      <FiEyeOff />
                    ) : (
                      <FiEye />
                    )}
                  </div>
                </div>
              </div>

              <div className="authform_container ">
                <label htmlFor="address-des" className="auth_label">
                  Address
                </label>
                <textarea
                  className=" form-control "
                  name="address"
                  value={credentials.address}
                  onChange={handleChange}
                  required
                  aria-label="Club address"
                  id="address-des"
                  placeholder="Peepal Farm, Raipur Rani, Haryana"
                />
              </div>

              <div className="authform_container ">
                <label htmlFor="pincode-des" className="auth_label">
                  Pincode / Zipcode
                </label>
                <input
                  type="text"
                  maxLength="6"
                  className=" form-control "
                  name="pincode"
                  value={credentials.pincode}
                  onChange={handleChange}
                  required
                  id="pincode-des"
                  placeholder="134204"
                />
              </div>

              <small id="textDemo" className="form-text text-muted"></small>
              <br />

              <AuthButton isLoading={isLoading} goTo="/user" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubsRegister;

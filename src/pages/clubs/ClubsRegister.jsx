import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterClub } from "../../service/MilanApi";
import "../../styles/ClubsRegister.css";
import { ReactComponent as AuthBanner } from "../../assets/pictures/authpages/authbannerimg.svg";
import { Helmet } from "react-helmet-async";
import { showSuccessToast } from "../../utils/showToast";
import Button from "../../components/Button";
import "../../styles/UserLogin.css";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  GlobalForm,
  GlobalInput,
  GlobalTextarea,
} from "../../components/globals";
import { clubRegisterSchema } from "../../utils/validation/Validation";
import { manageUndefined } from "../../utils/common";

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

  // const [credentials, setCredentials] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   address: "",
  //   pincode: "",
  //   description: "",
  //   tagLine: "",
  // });

  // const [isEmailValid, setIsEmailValid] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  //   if (
  //     e.target.name === "email" &&
  //     e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
  //   )
  //     setIsEmailValid(true);
  // };

  // //* Submitting form
  // const handleSubmit = async (e) => {
  //   toast.clearWaitingQueue();
  //   e.preventDefault();
  //   setIsLoading(true);
  //   await RegisterClub({ ...credentials });
  //   setIsLoading(false);
  //   showSuccessToast("Registered sueccessfully, please log in !");
  //   navigate("/clubs/login");
  // };

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

  const [form, setForm] = useState({});
  const {
    register: registerSignIn,
    formState: { errors: errorSignIn },
    handleSubmit: handleSubmitSignIn,
    // reset: resetSignIn,
    // watch,
  } = useForm({
    mode: "all",
    resolver: yupResolver(clubRegisterSchema),
  });

  const handleInputChange = (event, data) => {
    setForm({ ...form, [data.name]: data.value });
  };

  const handleSubmit = async (data, e) => {
    toast.clearWaitingQueue();
    e.preventDefault();
    await RegisterClub({ ...form });
    showSuccessToast("Registered sueccessfully, please log in !");
    navigate("/clubs/login");
  };

  return (
    <>
      <Helmet>
        <title>Milan | Club Register</title>
        <meta
          name="description"
          content="Welcome to the Club's registration page. Provide all the needed credentials and join us."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="mobile-sec container py-5 h-100">
        <div className="row d-flex align-items-top justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <AuthBanner className="auth-img" />
          </div>

          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            {/* <form onSubmit={handleSubmit}> */}

            <GlobalForm
              style={{ width: "auto" }}
              id={"RegisterForm"}
              onSubmit={handleSubmitSignIn(handleSubmit)}
            >
              <h1 className="mobile-txt clubregisterheading1">
                Register your club with Milan !
              </h1>

              <div className="form-outline mb-4">
                <GlobalInput
                  label={"Enter your club name"}
                  labelClassName={
                    "col-form-label col-form-label-lg regformlabels"
                  }
                  id="name"
                  name="name"
                  type="text"
                  className="clubreg_des form-control color"
                  placeholder="Please enter club name"
                  value={form.name || ""}
                  {...registerSignIn("name")}
                  onChange={(e, data) => {
                    registerSignIn("name").onChange(e),
                      handleInputChange(e, data);
                  }}
                  errorType={manageUndefined(errorSignIn?.name)}
                  errorMessage={manageUndefined(errorSignIn?.name?.message)}
                />

                {/* <label
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
                /> */}
              </div>
              <div className="form-outline mb-4">
                <GlobalInput
                  label={"Club Tagline (Max 50 Characters)"}
                  labelClassName={
                    "col-form-label col-form-label-lg regformlabels"
                  }
                  id="tagLine"
                  name="tagLine"
                  type="text"
                  length={50}
                  className="clubreg_des form-control color"
                  placeholder="Please enter club tagline"
                  value={form.tagLine || ""}
                  {...registerSignIn("tagLine")}
                  onChange={(e, data) => {
                    registerSignIn("tagLine").onChange(e),
                      handleInputChange(e, data);
                  }}
                  errorType={manageUndefined(errorSignIn?.tagLine)}
                  errorMessage={manageUndefined(errorSignIn?.tagLine?.message)}
                />

                {/* <label
                  htmlFor="club-tagLine"
                  className="col-form-label col-form-label-lg regformlabels"
                >
                  Club Tagline (Max 50 Characters)
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
                /> */}
              </div>

              <div className="form-outline mb-4">
                <GlobalInput
                  label={"Email"}
                  labelClassName={
                    "col-form-label col-form-label-lg regformlabels"
                  }
                  id="email"
                  name="email"
                  type="email"
                  className="clubreg_des form-control color"
                  placeholder="Please enter email"
                  value={form.email || ""}
                  {...registerSignIn("email")}
                  onChange={(e, data) => {
                    registerSignIn("email").onChange(e),
                      handleInputChange(e, data);
                  }}
                  errorType={manageUndefined(errorSignIn?.email)}
                  errorMessage={manageUndefined(errorSignIn?.email?.message)}
                />
                {/* <label
                  htmlFor="email-des"
                  className="col-form-label col-form-label-lg regformlabels"
                >
                  Email address
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
                /> */}
              </div>

              {/* Password start */}

              <div
                className="d-flex flex-row flex-md-row"
                style={{ justifyContent: "space-between" }}
              >
                <div style={{ width: "45%" }}>
                  <GlobalInput
                    label={"Password"}
                    labelClassName={
                      "col-form-label col-form-label-lg regformlabels"
                    }
                    id="password"
                    name="password"
                    // type="password"
                    type={passwordType}
                    className="clubreg_des form-control color"
                    placeholder="Please enter password"
                    value={form.password || ""}
                    {...registerSignIn("password")}
                    onChange={(e, data) => {
                      registerSignIn("password").onChange(e),
                        handleInputChange(e, data);
                    }}
                    errorType={manageUndefined(errorSignIn?.password)}
                    errorMessage={manageUndefined(
                      errorSignIn?.password?.message,
                    )}
                  />

                  {/* <label
                    htmlFor="password-des"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Password
                  </label>
                  <input
                    type={passwordType}
                    className="clubreg_des form-control color"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    id="password-des"
                  />
                  <input
                    type={passwordType}
                    className="clubreg_mob form-control color"
                    name="password"
                    value={credentials.password}
                    placeholder="Enter password"
                    onChange={handleChange}
                    required
                    id="password-mob"
                  /> */}
                  <div
                    onClick={passwordToggle}
                    className="toggle-button"
                    style={{ paddingTop: 5 }}
                  >
                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>

                <div style={{ width: "45%" }}>
                  <GlobalInput
                    label={"Confirm Password"}
                    labelClassName={
                      "col-form-label col-form-label-lg regformlabels"
                    }
                    id="confirmPassword"
                    name="confirmPassword"
                    type={confirmPasswordType}
                    className="clubreg_des form-control color"
                    value={form.confirmPassword || ""}
                    {...registerSignIn("confirmPassword")}
                    onChange={(e, data) => {
                      registerSignIn("confirmPassword").onChange(e),
                        handleInputChange(e, data);
                    }}
                    errorType={manageUndefined(errorSignIn?.confirmPassword)}
                    errorMessage={manageUndefined(
                      errorSignIn?.confirmPassword?.message,
                    )}
                  />

                  {/* <label
                    htmlFor="confirm-password-des"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Confirm Password
                  </label>
                  <input
                    type={confirmPasswordType}
                    className="clubreg_des form-control color"
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    onChange={handleChange}
                    required
                    id="confirm-password-des"
                  />

                  <input
                    type={confirmPasswordType}
                    className="clubreg_mob form-control color"
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    placeholder="Confirm password"
                    onChange={handleChange}
                    required
                    id="confirm-password-mob"
                  /> */}

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
              {/* Password end */}

              <div className="form-outline mb-4">
                <GlobalTextarea
                  label={"Address"}
                  labelClassName={
                    "col-form-label col-form-label-lg regformlabels"
                  }
                  maxLength={200}
                  placeholder={"please enter address"}
                  name="address"
                  value={form?.address}
                  {...registerSignIn("address")}
                  onChange={(e, data) => {
                    registerSignIn("address").onChange(e),
                      handleInputChange(e, data);
                  }}
                  errorType={manageUndefined(errorSignIn?.address)}
                  errorMessage={manageUndefined(errorSignIn?.address?.message)}
                />
                {/* <label
                  htmlFor="address-des"
                  className="col-form-label col-form-label-lg regformlabels"
                >
                  Address
                </label>
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
                /> */}
              </div>
              <div className="form-outline mb-4">
                <GlobalInput
                  label={" Pincode / Zipcode"}
                  labelClassName={
                    "col-form-label col-form-label-lg regformlabels"
                  }
                  id="pincode"
                  name="pincode"
                  type="number"
                  className="clubreg_des form-control color"
                  placeholder="Please enter pin code"
                  value={form.pincode || ""}
                  {...registerSignIn("pincode")}
                  onChange={(e, data) => {
                    registerSignIn("pincode").onChange(e),
                      handleInputChange(e, data);
                  }}
                  errorType={manageUndefined(errorSignIn?.pincode)}
                  errorMessage={manageUndefined(errorSignIn?.pincode?.message)}
                />
                {/* <label
                htmlFor="pincode-des"
                className="col-form-label col-form-label-lg regformlabels"
              >
                Pincode / Zipcode
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
                /> */}
              </div>
              <div className="form-outline mb-4">
                <GlobalTextarea
                  label={"Club description"}
                  labelClassName={
                    "col-form-label col-form-label-lg regformlabels"
                  }
                  placeholder={"please enter club description"}
                  name="description"
                  value={form?.description}
                  {...registerSignIn("description")}
                  onChange={(e, data) => {
                    registerSignIn("description").onChange(e),
                      handleInputChange(e, data);
                  }}
                  errorType={manageUndefined(errorSignIn?.description)}
                  errorMessage={manageUndefined(
                    errorSignIn?.description?.message,
                  )}
                />

                {/* <label
                  htmlFor="description-des"
                  className="col-form-label col-form-label-lg regformlabels"
                >
                  Club description
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
                /> */}
              </div>
              <small id="textDemo" className="form-text text-muted"></small>
              <br />

              <div>
                <Button type="submit" className="login-btn">
                  Register
                </Button>
                {/* <Button
                  disabled={
                    credentials.description.trim().length < 20 ||
                    credentials.password.length <= 4 ||
                    !isEmailValid
                  }
                  type="submit"
                  className="login-btn"
                >
                  {isLoading ? <ClipLoader color="#e26959" /> : "Register"}
                </Button> */}
                <br />
                <br />
              </div>

              <Anchor
                para="Already have an account? "
                details="Login here"
                link="/clubs/login"
                className="link-info anchor-container-desktop"
              />
            </GlobalForm>
            {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubLogin;

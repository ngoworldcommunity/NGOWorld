import { useState, useRef, useEffect } from "react";
import { RegisterUser } from "../../service/MilanApi";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import TopButton from "../../components/Button/AuthButton/TopButton";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import "./AuthPage.css";
import {
  clubInitialFormState,
  individualInitialFormState,
  useFormLogic,
} from "../../hooks/useFormLogic";
import Select from "react-select";
import countries from "../../assets/data/CountryList";
import AuthButton from "../../components/Button/AuthButton/AuthButton";

const AuthSignup = () => {
  const [userType, setUserType] = useState("individual");
  const userTypeOptions = [
    { value: "individual", label: "Individual (You are a person)" },
    { value: "club", label: "Organization (You are a Charity/Club/NGO)" },
  ];

  const selectedOption = useRef(null);

  const { formState, setFormState, isLoading, handleChange, handleSubmit } =
    useFormLogic({}, handleSignupSubmit, "/auth/login", true, userType);

  useEffect(() => {
    if (userType === "individual") {
      setFormState({ ...individualInitialFormState });
    } else {
      setFormState({ ...clubInitialFormState });
    }
  }, [userType]);

  async function handleSignupSubmit(credentials) {
    const data = await RegisterUser(credentials);
    return data;
  }

  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const passwordToggle = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const confirmPasswordToggle = () => {
    setConfirmPasswordType(
      confirmPasswordType === "password" ? "text" : "password",
    );
  };

  const renderErrorMessage = (fieldName) => {
    return (
      formState?.errors?.length > 0 && (
        <div className="authpage_error-div">
          {formState.errors.map(
            (error, index) =>
              // Check if the error is related to the email field
              error.field === fieldName && (
                <div key={index} className="authpage_error-message">
                  {error.message}
                </div>
              ),
          )}
        </div>
      )
    );
  };

  return (
    <>
      <Helmet>
        <title>Milan | Signup</title>
        <meta
          name="description"
          content="Welcome to the User's sign up page. Provide all the needed credentials and join us."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <ToastContainer />

      <div className="authpage_godparent">
        <div className="authpage_parent">
          <div className="authpage_leftdiv">
            <TopButton
              isGoBack={false}
              showgooglebutton={true}
              showleftGoogleButton={false}
              type="column"
            />
          </div>

          <div className="authpage_rightdiv">
            <form
              onSubmit={(e) => {
                handleSubmit(
                  e,
                  selectedOption?.current?.state?.prevProps?.value?.label,
                );
              }}
              className="authform"
            >
              <TopButton
                isGoBack={true}
                showleftGoogleButton={window.innerWidth <= 800 ? true : false}
                showgooglebutton={window.innerWidth <= 800 ? true : false}
              />
              <h1 className="">Join Milan Today</h1>
              <h2 className="separator_header">Personal Details</h2>

              <div className="authform_container">
                <label htmlFor="userType" className="auth_label">
                  User Type
                </label>
                <div className="user-type-dropdown">
                  <select
                    id="userType"
                    name="userType"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}
                    className="form-control user-type-select"
                  >
                    {userTypeOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="user-type-options"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="dropdown-icon" />
                </div>
              </div>

              <div className="authform_container ">
                <label htmlFor="slug" className="auth_label">
                  Username
                </label>
                <input
                  type="text"
                  className=" form-control "
                  name="slug"
                  value={formState.slug}
                  onChange={handleChange}
                  required
                  id="slug"
                  placeholder={
                    userType === "individual" ? "john-doe" : "abc-club"
                  }
                />
                {renderErrorMessage("slug")}
              </div>

              {userType === "individual" ? (
                <div className="auth_namediv">
                  <div className="authform_container">
                    <label htmlFor="firstname" className="auth_label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className=" form-control "
                      name="firstname"
                      value={formState.firstname}
                      onChange={handleChange}
                      required
                      id="firstname"
                      placeholder="John"
                    />
                    {renderErrorMessage("firstname")}
                  </div>

                  <div className="authform_container">
                    <label htmlFor="lastname" className="auth_label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className=" form-control "
                      name="lastname"
                      value={formState.lastname}
                      onChange={handleChange}
                      required
                      id="lastname"
                      placeholder="Doe"
                    />
                    {renderErrorMessage("lastname")}
                  </div>
                </div>
              ) : (
                <>
                  <div className="authform_container">
                    <label htmlFor="name" className="auth_label">
                      Club Name
                    </label>
                    <input
                      type="text"
                      className=" form-control "
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      id="name"
                      placeholder="The Life corporation"
                    />
                    {renderErrorMessage("name")}
                  </div>
                  <div className="authform_container">
                    <label htmlFor="tagLine" className="auth_label">
                      Club Tagline
                    </label>
                    <input
                      type="text"
                      className=" form-control "
                      name="tagLine"
                      value={formState.tagLine}
                      onChange={handleChange}
                      required
                      id="tagLine"
                      placeholder="A crisp tagline/bio to describe your club"
                    />
                    {renderErrorMessage("tagLine")}
                  </div>
                </>
              )}

              <div className="authform_container ">
                <label htmlFor="email" className="auth_label">
                  Email address
                </label>
                <input
                  type="email"
                  className=" form-control "
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  id="email"
                  placeholder="john@example.com"
                />
                {renderErrorMessage("email")}
              </div>

              <div className="auth_passworddiv">
                <div className="authform_container">
                  <label htmlFor="password" className="auth_label">
                    Password
                  </label>
                  <input
                    type={passwordType}
                    className=" form-control "
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    required
                    id="password"
                    placeholder="StrongPassword123"
                  />
                  <div onClick={passwordToggle} className="toggle-button">
                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                  </div>
                  {renderErrorMessage("password")}
                </div>
                <div className="authform_container">
                  <label htmlFor="confirmPassword" className="auth_label">
                    Confirm Password
                  </label>
                  <input
                    type={confirmPasswordType}
                    className=" form-control "
                    name="confirmPassword"
                    value={formState.confirmPassword}
                    onChange={handleChange}
                    required
                    id="confirmPassword"
                    placeholder="StrongPassword123"
                  />
                  <div
                    onClick={confirmPasswordToggle}
                    className="toggle-button"
                  >
                    {confirmPasswordType === "password" ? (
                      <FiEyeOff />
                    ) : (
                      <FiEye />
                    )}
                  </div>
                  {renderErrorMessage("confirmPassword")}
                </div>
              </div>

              {userType === "club" && (
                <>
                  <div className="authform_container">
                    <label htmlFor="description" className="auth_label">
                      Club Description
                    </label>
                    <textarea
                      className="form-control"
                      name="description"
                      value={formState.description}
                      onChange={handleChange}
                      required
                      id="description"
                      placeholder="Tell us in details about what you are, and what you do"
                    />
                    {renderErrorMessage("description")}
                  </div>

                  <div className="authform_container">
                    <label htmlFor="website" className="auth_label">
                      Club Website
                    </label>
                    <input
                      className="form-control"
                      name="website"
                      value={formState.website}
                      onChange={handleChange}
                      id="website"
                      placeholder="Tell us your website"
                    />
                    {renderErrorMessage("website")}
                  </div>
                </>
              )}

              <br />
              <h2 className="separator_header">Location</h2>

              <div className="auth_passworddiv">
                <div className="authform_container">
                  <label htmlFor="password" className="auth_label">
                    City/Town
                  </label>
                  <input
                    type="text"
                    className=" form-control "
                    name="city"
                    value={formState.city}
                    onChange={handleChange}
                    required
                    id="city"
                    placeholder="New York"
                  />
                  {renderErrorMessage("city")}
                </div>
                <div className="authform_container">
                  <label htmlFor="confirmPassword" className="auth_label">
                    State/Province/Region
                  </label>
                  <input
                    type="text"
                    className=" form-control "
                    name="state"
                    value={formState.state}
                    onChange={handleChange}
                    required
                    id="state"
                    placeholder="Texas"
                  />
                  {renderErrorMessage("state")}
                </div>
              </div>

              <div className="authform_container ">
                <label htmlFor="address" className="auth_label">
                  Street Address
                </label>
                <textarea
                  className="form-control"
                  name="address"
                  value={formState.address}
                  onChange={handleChange}
                  required
                  id="address"
                  placeholder="22/B Baker Street"
                />
                {renderErrorMessage("address")}
              </div>

              <div className="authform_container ">
                <label htmlFor="pincode" className="auth_label">
                  Country
                </label>
                <Select options={countries} isClearable ref={selectedOption} />
                {renderErrorMessage("country")}
              </div>

              <div className="authform_container ">
                <label htmlFor="pincode" className="auth_label">
                  Pincode / Zipcode
                </label>
                <input
                  type="text
                  "
                  className=" form-control "
                  name="pincode"
                  value={formState.pincode}
                  onChange={handleChange}
                  required
                  id="pincode"
                  placeholder="123456"
                />
                {renderErrorMessage("pincode")}
              </div>

              {userType === "club" && (
                <div className="authform_container ">
                  <label htmlFor="iframe" className="auth_label">
                    Iframe code
                  </label>
                  <textarea
                    type="text
                  "
                    className=" form-control "
                    name="iframe"
                    value={formState.iframe}
                    onChange={handleChange}
                    required
                    id="iframe"
                    placeholder="Iframe code"
                  />
                  {renderErrorMessage("iframe")}
                </div>
              )}

              <AuthButton isLoading={isLoading} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthSignup;

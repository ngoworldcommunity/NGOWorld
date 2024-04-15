// Import statements
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaChevronDown, FaEye } from "react-icons/fa";
import { FaArrowLeftLong, FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import rightabstract from "../../assets/pictures/authpages/authbanner.png";
import { Button } from "../../components/shared";
import { useAuth } from "../../hooks/useAuth";
import { GoogleAuth } from "../../service/MilanApi";
import "./index.scss";

const SignUp = () => {
  // Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Auth type state
  const [activeAuthType, setActiveAuthType] = useState("individual");
  const authTypeOptions = [
    { value: "individual", label: "Individual (Person)" },
    { value: "club", label: "Organization (Charity/Club/NGO)" },
  ];

  // Auth functions
  const { authenticateUser, loading } = useAuth("signup");
  const [showPassword, setshowPassword] = useState(false);

  // Handlers
  const handleGoogle = async () => {
    const response = await GoogleAuth();
    window.location.href = response;
  };

  const handleNavigatePages = () => {
    navigate(
      window.location.pathname.includes("signup")
        ? "/auth/login"
        : "/auth/signup",
    );
  };

  const handleFormSubmit = (data) => {
    authenticateUser(data);
  };

  return (
    <>
      <Helmet>
        <title>NgoWorld | SignUp</title>
        <meta
          name="description"
          content="Welcome to the Club's registration page. Provide all the needed credentials and join us."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="signup_parent">
        <div className="signup_container">
          <div className="signup_container_left">
            <div className="header">
              <FaArrowLeftLong
                onClick={() => {
                  navigate("/");
                }}
              />
              <h1>Sign Up</h1>
            </div>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="auth_form"
            >
              <div className="auth_element">
                <div className="auth_dropdown">
                  <select
                    id="userType"
                    name="userType"
                    className="form-control auth_select"
                    {...register("userType")}
                    value={activeAuthType}
                    onChange={(e) => setActiveAuthType(e.target.value)}
                  >
                    {authTypeOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="auth_options"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <FaChevronDown className="auth_dropdownicon" />
                </div>
                {errors.userType?.message && <p>{errors.userType?.message}</p>}
              </div>

              {activeAuthType === "individual" ? (
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="auth_element">
                    <label className="auth_label">First Name</label>
                    <input
                      type="text"
                      {...register("firstName")}
                      className="auth_input"
                      placeholder="John"
                    />
                    {errors.firstName?.message && (
                      <p>{errors.firstName?.message}</p>
                    )}
                  </div>
                  <div className="auth_element">
                    <label className="auth_label">Last Name</label>
                    <input
                      type="text"
                      {...register("lastName")}
                      className="auth_input"
                      placeholder="Doe"
                    />
                    {errors.lastName?.message && (
                      <p>{errors.lastName?.message}</p>
                    )}
                  </div>
                </div>
              ) : (
                <div className="auth_element">
                  <label className="auth_label">Club Name</label>
                  <input
                    type="text"
                    {...register("name")}
                    className="auth_input"
                    placeholder="Save Tigers"
                  />
                  {errors.name?.message && <p>{errors.name?.message}</p>}
                </div>
              )}

              <div className="auth_element">
                <label className="auth_label">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="auth_input"
                  placeholder="john@gmail.com"
                />
                {errors.email?.message && <p>{errors.email?.message}</p>}
              </div>

              <div className="auth_element">
                <label className="auth_label">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="auth_input"
                  placeholder="********"
                />
                {showPassword ? (
                  <FaEye
                    onClick={() => {
                      setshowPassword(!showPassword);
                    }}
                    className="togglePassword_icon"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => {
                      setshowPassword(!showPassword);
                    }}
                    className="togglePassword_icon"
                  />
                )}
                {errors.password?.message && <p>{errors.password?.message}</p>}
              </div>

              <Button type="submit" className="auth_submit" isLoading={loading}>
                Sign Up
              </Button>

              <div className="signup_or">
                <hr />
                <span>OR</span>
                <hr />
              </div>

              {/* Additional buttons */}
              <div className="signup_topbtn">
                <button className="btn authpage_topbtn" onClick={handleGoogle}>
                  <FcGoogle
                    style={{ fontSize: "18px", marginRight: "0.7rem" }}
                  />
                  Continue with Google
                </button>

                <button
                  className="btn authpage_topbtn"
                  onClick={handleNavigatePages}
                >
                  {window.location.pathname.includes("signup")
                    ? "Have an account? Login"
                    : "No account? Sign up"}
                </button>
              </div>
            </form>
          </div>

          {/* Right abstract */}
          <div className="signup_rightabstract">
            <div className="signup_topbtn">
              <button className="btn authpage_topbtn" onClick={handleGoogle}>
                <FcGoogle style={{ fontSize: "18px", marginRight: "0.7rem" }} />
                Continue with Google
              </button>
              <button
                className="btn authpage_topbtn"
                onClick={handleNavigatePages}
              >
                {window.location.pathname.includes("signup")
                  ? "Have an account? Login"
                  : "No account? Sign up"}
              </button>
            </div>
            <img src={rightabstract} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

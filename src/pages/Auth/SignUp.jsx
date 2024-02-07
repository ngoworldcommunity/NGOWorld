import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import rightabstract from "../../assets/pictures/authpages/authbanner.png";
import { Button } from "../../components/shared";
import {
  clubSignUpSchema,
  individualSignUpSchema,
} from "../../constants/AuthSchema";
import { useAuth } from "../../hooks/useAuth";
import { toggleActiveAuthType } from "../../redux/slice/authTypeSlice";
import { GoogleAuth } from "../../service/MilanApi";
import "./index.css";

const SignUp = () => {
  const {
    register: iregister,
    handleSubmit: isubmit,
    formState: { errors: ierrors },
  } = useForm({
    resolver: zodResolver(individualSignUpSchema),
  });

  const {
    register: cregister,
    handleSubmit: csubmit,
    formState: { errors: cerrors },
  } = useForm({
    resolver: zodResolver(clubSignUpSchema),
  });

  const navigate = useNavigate();

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

  const { authenticateUser, loading } = useAuth("signup");
  const authTypeOptions = useSelector(
    (state) => state.authType.authTypeOptions,
  );

  const authTypeActive = useSelector((state) => state.authType.active);
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Milan | SignUp</title>
        <meta
          name="description"
          content="Welcome to the Club's registration page. Provide all the needed credentials and join us."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <ToastContainer />
      <div className="signup_parent">
        <div className="signup_container">
          <div className="signup_container_left">
            <h1
              onClick={() => {
                console.log(authTypeActive);
              }}
            >
              Sign Up
            </h1>

            {authTypeActive === "individual" ? (
              <form
                onSubmit={isubmit((data) => {
                  authenticateUser(data);
                })}
                className="auth_form"
              >
                <div className="auth_element">
                  <div className="auth_dropdown">
                    <select
                      id="userType"
                      name="userType"
                      className="form-control auth_select"
                      {...iregister("usertype")}
                      onChange={() => dispatch(toggleActiveAuthType())}
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
                  {ierrors.usertype?.message && (
                    <p>{ierrors.usertype?.message}</p>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <div className="auth_element">
                    <label className="auth_label">First Name</label>
                    <input
                      type="text"
                      {...iregister("firstname")}
                      className="auth_input"
                      placeholder="John"
                    />
                    {ierrors.firstname?.message && (
                      <p>{ierrors.firstname?.message}</p>
                    )}
                  </div>

                  <div className="auth_element">
                    <label className="auth_label">Last Name</label>
                    <input
                      type="text"
                      {...iregister("lastname")}
                      className="auth_input"
                      placeholder="Doe"
                    />
                    {ierrors.lastname?.message && (
                      <p>{ierrors.lastname?.message}</p>
                    )}
                  </div>
                </div>

                <div className="auth_element">
                  <label className="auth_label">Email</label>
                  <input
                    type="email"
                    {...iregister("email")}
                    className="auth_input"
                    placeholder="john@gmail.com"
                  />
                  {ierrors.email?.message && <p>{ierrors.email?.message}</p>}
                </div>

                <div className="auth_element">
                  <label className="auth_label">Password</label>
                  <input
                    type="password"
                    {...iregister("password")}
                    className="auth_input"
                    placeholder="********"
                  />
                  {ierrors.password?.message && (
                    <p>{ierrors.password?.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="auth_submit"
                  isLoading={loading}
                >
                  Sign Up
                </Button>

                <div className="signup_or">
                  <hr />
                  <span>OR</span>
                  <hr />
                </div>

                <div className="signup_topbtn">
                  <button
                    className="btn authpage_topbtn"
                    onClick={() => {
                      handleGoogle();
                    }}
                  >
                    <FcGoogle
                      style={{ fontSize: "18px", marginRight: "0.7rem" }}
                    />
                    Continue with Google
                  </button>

                  <button
                    className="btn authpage_topbtn"
                    onClick={() => {
                      handleNavigatePages();
                    }}
                    style={{
                      top: "20px",
                    }}
                  >
                    {window.location.pathname.includes("signup")
                      ? "Have an account? Login"
                      : "New to Milan? Sign up"}
                  </button>
                </div>
              </form>
            ) : (
              <form
                onSubmit={csubmit((data) => {
                  authenticateUser(data);
                })}
                className="auth_form"
              >
                <div className="auth_element">
                  <div className="auth_dropdown">
                    <select
                      id="userType"
                      name="userType"
                      className="form-control auth_select"
                      {...cregister("usertype")}
                      onChange={() => dispatch(toggleActiveAuthType())}
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
                </div>

                <div className="auth_element">
                  <label className="auth_label">Club Name</label>
                  <input
                    type="text"
                    {...cregister("name")}
                    className="auth_input"
                    placeholder="Save Tigers"
                  />
                  {cerrors.name?.message && <p>{cerrors.name?.message}</p>}
                </div>

                <div className="auth_element">
                  <label className="auth_label">Email</label>
                  <input
                    type="email"
                    {...cregister("email")}
                    className="auth_input"
                    placeholder="john@gmail.com"
                  />
                  {cerrors.email?.message && <p>{cerrors.email?.message}</p>}
                </div>

                <div className="auth_element">
                  <label className="auth_label">Password</label>
                  <input
                    type="password"
                    {...cregister("password")}
                    className="auth_input"
                    placeholder="********"
                  />
                  {cerrors.password?.message && (
                    <p>{cerrors.password?.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="auth_submit"
                  isLoading={loading}
                >
                  Sign Up
                </Button>

                <div className="signup_or">
                  <hr />
                  <span>OR</span>
                  <hr />
                </div>

                <div className="signup_topbtn">
                  <button
                    className="btn authpage_topbtn"
                    onClick={() => {
                      handleGoogle();
                    }}
                  >
                    <FcGoogle
                      style={{ fontSize: "18px", marginRight: "0.7rem" }}
                    />
                    Continue with Google
                  </button>

                  <button
                    className="btn authpage_topbtn"
                    onClick={() => {
                      handleNavigatePages();
                    }}
                    style={{
                      top: "20px",
                    }}
                  >
                    {window.location.pathname.includes("signup")
                      ? "Have an account? Login"
                      : "New to Milan? Sign up"}
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="signup_rightabstract">
            <div className="signup_topbtn">
              <button
                className="btn authpage_topbtn"
                onClick={() => {
                  handleGoogle();
                }}
              >
                <FcGoogle style={{ fontSize: "18px", marginRight: "0.7rem" }} />
                Continue with Google
              </button>

              <button
                className="btn authpage_topbtn"
                onClick={() => {
                  handleNavigatePages();
                }}
                style={{
                  top: "20px",
                }}
              >
                {window.location.pathname.includes("signup")
                  ? "Have an account? Login"
                  : "New to Milan? Sign up"}
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

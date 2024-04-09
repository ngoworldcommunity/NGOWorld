import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import rightabstract from "../../assets/pictures/authpages/authbanner.png";
import { Button } from "../../components/shared";
import { AuthSchema } from "../../constants";
import { useAuth } from "../../hooks/useAuth";
import { GoogleAuth } from "../../service/MilanApi";
import "./index.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AuthSchema.signInSchema),
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

  const { authenticateUser, loading } = useAuth("login");
  const [showPassword, setshowPassword] = useState(false);

  return (
    <>
      <Helmet>
        <title>NGOWorld | Login</title>
        <meta
          name="description"
          content="Welcome to the Club's login page. Provide all the needed credentials and join us."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="signup_parent">
        <div className="signup_container">
          <div className="signup_container_left">
            <h1>Login</h1>

            <form
              onSubmit={handleSubmit((data) => {
                authenticateUser(data);
              })}
              className="auth_form"
            >
              <div className="auth_element">
                <label className="auth_label">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="auth_input"
                  placeholder="john@gmail.com"
                  data-cy="email"
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
                  data-cy="password"
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

              <Button
                type="submit"
                className="auth_submit"
                data-cy="loginbutton"
                isLoading={loading}
              >
                Sign In
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
                    : "No account? Sign up"}
                </button>
              </div>
            </form>
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

export default Login;

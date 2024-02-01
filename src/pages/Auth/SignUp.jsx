import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { FaChevronDown } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import rightabstract from "../../assets/pictures/authpages/authbanner.png";
import Button from "../../components/Button/GlobalButton/Button";
import { userTypeOptions } from "../../constants/Auth";
import { signupSchema } from "../../constants/AuthSchema";
import { GoogleAuth } from "../../service/MilanApi";
import "./index.css";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
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

  return (
    <div className="signup_parent">
      <div className="signup_container">
        <div className="signup_container_left">
          <h1>Sign Up</h1>

          <div className="auth_element">
            <div className="auth_dropdown">
              <select
                id="userType"
                name="userType"
                className="form-control auth_select"
                {...register("userType")}
              >
                {userTypeOptions.map((option) => (
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

          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="auth_form"
          >
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
                {errors.lastName?.message && <p>{errors.lastName?.message}</p>}
              </div>
            </div>

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
                type="password"
                {...register("password")}
                className="auth_input"
                placeholder="********"
              />
              {errors.password?.message && <p>{errors.password?.message}</p>}
            </div>

            <Button type="submit" className="auth_submit">
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
                : "New to Milan? Sign up"}
            </button>
          </div>
          <img src={rightabstract} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

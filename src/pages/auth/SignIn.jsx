import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import rightabstract from "../../assets/pictures/authpages/authbanner.png";
import { Button, Navbar } from "../../components/shared";
import { useAuth } from "../../hooks/useAuth";
import { GoogleAuth } from "../../service/MilanApi";
import "./index.scss";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const { authenticateUser, loading } = useAuth("signin");
  const [showPassword, setshowPassword] = useState(false);

  const handleGoogle = async () => {
    const response = await GoogleAuth();
    window.location.href = response;
  };

  return (
    <>
      <Helmet>
        <title>NgoWorld | {t("login")}</title>
        <meta
          name="description"
          content={t("welcome_to_the_club")}
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar />

      <div className="signup_parent">
        <div className="signup_container">
          <div className="signup_container_left">
            <div className="header">
              <h1>{t("sign_in")}</h1>
            </div>

            <form
              className="auth_form"
              onSubmit={(e) => {
                e.preventDefault();
                authenticateUser(credentials, setErrors);
              }}
            >
              <div className="auth_form_body">
                <div className="auth_element">
                  <div className="auth_dropdown"></div>
                </div>

                <div className="auth_element">
                  <label className="auth_label">
                    Email <span>*</span>
                  </label>
                  <input
                    type="email"
                    value={credentials.email}
                    className="auth_input"
                    placeholder="john@gmail.com"
                    onChange={(e) => {
                      setCredentials((prev) => {
                        return {
                          ...prev,
                          email: e.target.value,
                        };
                      });
                    }}
                  />
                  <p>{errors.email}</p>
                </div>

                <div className="auth_element">
                  <label className="auth_label">
                    {t("password")} <span>*</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    className="auth_input"
                    placeholder="********"
                    value={credentials.password}
                    min={8}
                    onChange={(e) => {
                      setCredentials((prev) => {
                        return {
                          ...prev,
                          password: e.target.value,
                        };
                      });
                    }}
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
                  <p>{errors.password}</p>
                </div>
              </div>
              <div className="auth_footer">
                <Button
                  type="submit"
                  className="auth_submit"
                  isLoading={loading}
                  disabled={
                    loading || !credentials.email || !credentials.password
                  }
                >
                  {t("sign_in")}
                </Button>

                <div className="signup_or">
                  <hr />
                  <span>or</span>
                  <hr />
                </div>

                <button className="btn authpage_oauth" onClick={handleGoogle}>
                  <FcGoogle
                    style={{ fontSize: "18px", marginRight: "0.7rem" }}
                  />
                  {t("continue_with_google")}
                </button>

                <div className="auth_forgot_section">
                  <Link to={"/auth/signup"}>{t("sign_up_to_ngo_world")}</Link> <p>|</p>{" "}
                  <p>{t("forgot_password")}</p>
                </div>
              </div>
            </form>
          </div>

          <div className="signup_rightabstract">
            <img src={rightabstract} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;

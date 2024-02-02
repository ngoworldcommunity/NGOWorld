import { useContext, useState } from "react";
import { LoginUser } from "../../service/MilanApi";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import TopButton from "../../components/Button/AuthButton/TopButton";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./AuthPage.css";
import { useFormLogic } from "../../hooks/useFormLogic";
import AuthButton from "../../components/Button/AuthButton/AuthButton";
import { modeContext } from "../../App";

const AuthLogin = () => {
  const { dark } = useContext(modeContext);
  const { formState, handleChange, handleSubmit } = useFormLogic(
    { email: "", password: "" },
    handleLoginSubmit,
    "/",
    false,
  );

  async function handleLoginSubmit(credentials) {
    const data = await LoginUser(credentials);
    return data;
  }

  const [passwordType, setPasswordType] = useState("password");

  const passwordToggle = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <>
      <Helmet>
        <title>Milan | Login</title>
        <meta
          name="description"
          content="Welcome to the Club's registration page. Provide all the needed credentials and join us."
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

          <div className="authpage_rightdiv authpage_logindiv">
            <form
              className={`authform ${dark ? "authform-dark" : ""}`}
              onSubmit={handleSubmit}
            >
              <TopButton
                isGoBack={true}
                showleftGoogleButton={window.innerWidth <= 800 ? true : false}
                showgooglebutton={window.innerWidth <= 800 ? true : false}
              />
              <h1>Sign In</h1>
              <div className="authform_container mb-4">
                <label
                  htmlFor="email-des"
                  className={`auth_label ${dark ? "label_dark" : ""}`}
                >
                  Email address
                </label>
                <input
                  type="email"
                  className=" form-control "
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  aria-label="Club email"
                  id="email-des"
                  placeholder="name@email.com"
                  data-cy="email"
                />
              </div>

              <div className="authform_container">
                <label
                  htmlFor="password-des"
                  className={`auth_label ${dark ? "label_dark" : ""}`}
                >
                  Password
                </label>
                <input
                  type={passwordType}
                  className=" form-control "
                  name="password"
                  value={formState.password}
                  onChange={handleChange}
                  required
                  id="password-des"
                  placeholder="Strg@Pass#122&&S"
                  data-cy="password"
                />

                <div
                  onClick={passwordToggle}
                  className="toggle-button"
                  style={{ paddingTop: 5 }}
                >
                  {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                </div>
              </div>

              <small id="textDemo" className="form-text text-muted"></small>
              <br />
              <AuthButton />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLogin;

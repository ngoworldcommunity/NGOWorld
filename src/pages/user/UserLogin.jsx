import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/UserLogin.css";
import { LoginUser } from "../../service/MilanApi";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

// import SchemaValidator, { msgLocalise } from "../../utils/validation";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { ReactComponent as AuthBanner } from "../../assets/pictures/authpages/authbannerimg.svg";
import { showErrorToast, showSuccessToast } from "../../utils/showToast";
import Button from "../../components/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";

//Pushpendra code
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GlobalForm, GlobalInput } from "../../components/GlobalComponents";
import { loginSchema } from "../../Validation/Validation";
import { manageUndefined } from "../../common";

function UserLogin() {
  const Navigate = useNavigate();

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
  //   email: "",
  //   password: "",
  // });

  // const FormDataProto = {
  //   id: "/LoginForm",
  //   type: "object",
  //   properties: {
  //     email: { type: "string", format: "email" },
  //     password: { type: "string", minLength: 4 },
  //   },
  //   required: ["email", "password"],
  // };

  // //* To set the value as soon as we input
  // const handleChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };

  // //* Submit to backend
  // //* If alright we get a cookie with token
  // const handleSubmit = (e) => {
  //   toast.clearWaitingQueue();
  //   e.preventDefault();
  //   var validator = SchemaValidator(FormDataProto, { ...credentials });

  //   if (validator.valid) {
  //     const Data = LoginUser(credentials);

  //     Data.then((response) => {
  //       if (response?.data.token) {
  //         Cookies.set("token", response.data.token);
  //         showSuccessToast("Logged you in !");
  //         Navigate("/");
  //       } else {
  //         setCredentials({ email: "", password: "" });
  //       }
  //     }).catch(() => {
  //       showErrorToast("Server error, try again later !");
  //     });
  //   } else {
  //     validator.errors.map(function (e) {
  //       return toast(`${e.path[0]} : ${msgLocalise(e)}`, {
  //         position: "top-right",
  //         autoClose: 1000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         closeButton: false,
  //       });
  //     });
  //   }
  // };

  const [passwordType, setPasswordType] = useState("password");

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

  //Pushpendra code
  const [form, setForm] = useState({});
  const {
    register: registerSignIn,
    formState: { errors: errorSignIn },
    handleSubmit: handleSubmitSignIn,
    // reset: resetSignIn,
    // watch,
  } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
  });

  const handleInputChange = (event, data) => {
    setForm({ ...form, [data.name]: data.value });
  };

  const handleSubmit = (data, event) => {
    toast.clearWaitingQueue();
    event.preventDefault();
    const Data = LoginUser(form);

    Data.then((response) => {
      if (response?.data.token) {
        Cookies.set("token", response.data.token);
        showSuccessToast("Logged you in !");
        Navigate("/");
      } else {
        setForm({ email: "", password: "" });
      }
    }).catch(() => {
      showErrorToast("Server error, try again later !");
    });
  };
  //

  return (
    <>
      <Helmet>
        <title>Milan | User login</title>
        <meta
          name="description"
          content="Welcome to the User's login page. Login to Milan with your email and password."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="d-flex align-items-top justify-content-center h-100 gap-1 ">
            <div className="authBannerImageContainer col-lg-7 col-xl-6">
              <AuthBanner className="auth-img" />
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              {/* <form
                style={{ width: "auto" }}
                onSubmit={handleSubmit}
                className="loginform"
              > */}

              {/* Pushpendra code */}
              <GlobalForm
                style={{ width: "auto" }}
                className="loginform"
                id={"loginForm"}
                onSubmit={handleSubmitSignIn(handleSubmit)}
              >
                <h1 className="mb-2">Login as an User !</h1>
                <div className="form-outline mb-4">
                  {/* <label
                    htmlFor="exampleInputEmail1"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Email address
                  </label> */}
                  {/* <input
                    type="email"
                    className="desktop form-control form-control-lg"
                    id="desktopUserEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-label="email"
                    autoFocus
                  /> */}

                  {/* Pushpendra code */}
                  <GlobalInput
                    label={"Email address"}
                    labelClassName={
                      "col-form-label col-form-label-lg regformlabels"
                    }
                    id="email"
                    name="email"
                    type="email"
                    autoFocus
                    className="desktop form-control form-control-lg"
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
                  {/* Pushpendra code ends here*/}
                </div>

                {/* <label
                  htmlFor="exampleInputPassword1"
                  className="col-form-label col-form-label-lg regformlabels color"
                >
                  Password
                </label> */}
                <div className="form-outline mb-4">
                  {/* <input
                    type={passwordType}
                    className="desktop form-control form-control-lg"
                    id="desktopUserPassword"
                    placeholder="Enter your password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    aria-label="password"
                  />
                  <div onClick={passwordToggle} className="toggle-button">
                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                  </div> */}

                  {/* Pushpendra code */}
                  <GlobalInput
                    label={"Password"}
                    labelClassName={
                      "col-form-label col-form-label-lg regformlabels color"
                    }
                    id="password"
                    name="password"
                    // type="password"
                    type={passwordType}
                    className="desktop form-control form-control-lg"
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
                  {/* Pushpendra code ends here*/}
                  <div onClick={passwordToggle} className="toggle-button">
                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>

                {/* RememberMe Tab  */}

                {/* Login Button */}
                <div className="btn-container btn-container-desktop">
                  <Button type="submit" className="login-btn">
                    Login
                  </Button>
                </div>
                <br></br>
                <br></br>
                <div className="anchor-container anchor-container-desktop">
                  <Anchor
                    para=""
                    details="Forgot password?"
                    link="/user/forgotpass"
                    className="text-muted"
                  />
                  <Anchor
                    para="Don't have an account? "
                    details="Register here"
                    link="/user/register"
                    className="link-info"
                  />
                </div>
              </GlobalForm>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserLogin;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../service/MilanApi";
import { ReactComponent as AuthBanner } from "../../assets/pictures/authpages/authbannerimg.svg";
// import SchemaValidator, { msgLocalise } from "../../utils/validation";

//* The styles for Login and Register are essentially same
import "../../styles/UserLogin.css";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { showSuccessToast } from "../../utils/showToast";
import Button from "../../components/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { GlobalForm, GlobalInput } from "../../components/globals";
import { registerSchema } from "../../utils/validation/Validation";
import { manageUndefined } from "../../utils/common";

const UserRegister = () => {
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState("password");

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else setPasswordType("password");
  };

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
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   address: "",
  //   pincode: "",
  // });

  // const FormDataProto = {
  //   id: "/SignUpForm",
  //   type: "object",
  //   properties: {
  //     firstname: { type: "string" },
  //     lastname: { type: "string" },
  //     email: { type: "string", format: "email" },
  //     password: { type: "string", minLength: 8 },
  //     address: { type: "string" },
  //     pincode: { type: "number", pattern: "[0-9]+", minLength: 6 },
  //   },
  //   required: [
  //     "firstname",
  //     "lastname",
  //     "email",
  //     "password",
  //     "address",
  //     "pincode",
  //   ],
  // };

  // const handleChange = (e) => {
  //   setCredentials({ ...credentials, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   toast.clearWaitingQueue();
  //   e.preventDefault();
  //   var validator = SchemaValidator(FormDataProto, {
  //     ...credentials,
  //     pincode: Number(credentials.pincode),
  //   });

  //   if (validator.valid) {
  //     await RegisterUser({
  //       ...credentials,
  //       pincode: Number(credentials.pincode),
  //     });
  //     showSuccessToast("Registered successfully, please log in !");
  //     navigate("/user/login");
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

  const [form, setForm] = useState({});
  const {
    register: registerSignIn,
    formState: { errors: errorSignIn },
    handleSubmit: handleSubmitSignIn,
    // reset: resetSignIn,
    // watch,
  } = useForm({
    mode: "all",
    resolver: yupResolver(registerSchema),
  });

  const handleInputChange = (event, data) => {
    setForm({ ...form, [data.name]: data.value });
  };

  const handleSubmit = async (data, event) => {
    toast.clearWaitingQueue();
    event.preventDefault();
    await RegisterUser({
      ...form,
      pincode: Number(form.pincode),
    });
    showSuccessToast("Registered successfully, please log in !");
    navigate("/user/login");
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

      <section className="min-vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-top justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <AuthBanner className="auth-img" />
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              {/* <form style={{ width: "auto" }} onSubmit={handleSubmit}> */}

              {/*  */}
              <GlobalForm
                style={{ width: "auto" }}
                id={"RegisterForm"}
                onSubmit={handleSubmitSignIn(handleSubmit)}
              >
                <h1 className="userregister_header">Register as an User !</h1>
                <div className="form-outline mb-2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="me-md-2">
                      {/* <label
                        htmlFor="First Name"
                        className="col-form-label col-form-label-lg regformlabels"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="First name"
                        name="firstname"
                        value={credentials.firstname}
                        onChange={handleChange}
                        required
                        autoFocus
                        aria-label="First name"
                      /> */}

                     
                      <GlobalInput
                        label={"First Name"}
                        labelClassName={
                          "col-form-label col-form-label-lg regformlabels"
                        }
                        id="firstname"
                        name="firstname"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Please enter first name"
                        value={form.firstname || ""}
                        {...registerSignIn("firstname")}
                        onChange={(e, data) => {
                          registerSignIn("firstname").onChange(e),
                            handleInputChange(e, data);
                        }}
                        errorType={manageUndefined(errorSignIn?.firstname)}
                        errorMessage={manageUndefined(
                          errorSignIn?.firstname?.message,
                        )}
                      />
                    
                    </div>
                    <div className="ms-md-2">
                      {/* <label
                        htmlFor="Last Name"
                        className="col-form-label col-form-label-lg regformlabels"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Last name"
                        name="lastname"
                        value={credentials.lastname}
                        onChange={handleChange}
                        required
                        aria-label="Last name"
                      /> */}

                      <GlobalInput
                        label={"Last Name"}
                        labelClassName={
                          "col-form-label col-form-label-lg regformlabels"
                        }
                        id="lastname"
                        name="lastname"
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Please enter last name"
                        value={form.lastname || ""}
                        {...registerSignIn("lastname")}
                        onChange={(e, data) => {
                          registerSignIn("lastname").onChange(e),
                            handleInputChange(e, data);
                        }}
                        errorType={manageUndefined(errorSignIn?.lastname)}
                        errorMessage={manageUndefined(
                          errorSignIn?.lastname?.message,
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-outline mb-4">
                  {/* <label
                    htmlFor="emailInput"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    aria-label="Email Address"
                    required
                  /> */}

                  <GlobalInput
                    label={"Email"}
                    labelClassName={
                      "col-form-label col-form-label-lg regformlabels"
                    }
                    id="email"
                    name="email"
                    type="email"
                    className="form-control form-control-lg"
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
                </div>
                {/* //* Password */}
                <div className="form-outline mb-4">
                  {/* <label
                    htmlFor="exampleInputPassword1"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Password
                  </label> */}

                  {/* <input
                    type={passwordType}
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    aria-label="Password"
                  /> */}
                  {/* <div onClick={passwordToggle} className="toggle-button">
                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                  </div> */}

                  <GlobalInput
                    label={"Password"}
                    labelClassName={
                      "col-form-label col-form-label-lg regformlabels"
                    }
                    id="password"
                    name="password"
                    // type="password"
                    type={passwordType}
                    className="form-control form-control-lg"
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

                  <div onClick={passwordToggle} className="toggle-button">
                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>
                {/* //* Address */}
                <div className="form-outline mb-4">
                  {/* <label
                    htmlFor="address"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Address
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="address"
                    name="address"
                    placeholder="Address"
                    value={credentials.address}
                    onChange={handleChange}
                    required
                    aria-label="Address"
                  /> */}

                  <GlobalInput
                    label={"Address"}
                    labelClassName={
                      "col-form-label col-form-label-lg regformlabels"
                    }
                    id="address"
                    name="address"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Please enter address"
                    value={form.address || ""}
                    {...registerSignIn("address")}
                    onChange={(e, data) => {
                      registerSignIn("address").onChange(e),
                        handleInputChange(e, data);
                    }}
                    errorType={manageUndefined(errorSignIn?.address)}
                    errorMessage={manageUndefined(
                      errorSignIn?.address?.message,
                    )}
                  />
                </div>
                {/* //* Pincode */}
                <div className="form-outline mb-4">
                  {/* <label
                    htmlFor="pincode"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Pincode
                  </label>

                  <input
                    type="number"
                    className="form-control form-control-lg form-input remove_placeholder_desktop"
                    id="pincode"
                    name="pincode"
                    placeholder="Pin Code"
                    value={credentials.pincode}
                    onChange={handleChange}
                    required
                    aria-label="Pincode"
                  /> */}

                  <GlobalInput
                    label={"Pincode"}
                    labelClassName={
                      "col-form-label col-form-label-lg regformlabels"
                    }
                    id="pincode"
                    name="pincode"
                    type="number"
                    className="form-control form-control-lg"
                    placeholder="Please enter pin code"
                    value={form.pincode || ""}
                    {...registerSignIn("pincode")}
                    onChange={(e, data) => {
                      registerSignIn("pincode").onChange(e),
                        handleInputChange(e, data);
                    }}
                    errorType={manageUndefined(errorSignIn?.pincode)}
                    errorMessage={manageUndefined(
                      errorSignIn?.pincode?.message,
                    )}
                  />
                </div>
                <br />
                <Button type="submit" className="login-btn">
                  Register
                </Button>
                <br></br> <br></br>
                <Anchor
                  para="Already have an account? "
                  details="Login here"
                  link="/user/login"
                  className="link-info anchor-container-desktop"
                />
              </GlobalForm>
              {/* </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserRegister;

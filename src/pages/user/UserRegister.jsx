import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../../service/MilanApi";
import { ReactComponent as Authbanner } from "../../assets/pictures/authpages/authbannerimg.svg";
import SchemaValidator, { msgLocalise } from "../../utils/validation";

//* The styles for Login and Register are essentially same
import "../../styles/UserLogin.css";
import { Helmet } from "react-helmet-async";
import { showSuccessToast } from "../../utils/showToast";

const UserRegister = () => {
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

  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    pincode: "",
  });

  const FormDataProto = {
    id: "/SignUpForm",
    type: "object",
    properties: {
      firstname: { type: "string" },
      lastname: { type: "string" },
      email: { type: "string", format: "email" },
      password: { type: "string", minLength: 8 },
      address: { type: "string" },
      pincode: { pattern: "[0-9]+", minLength: 6 },
    },
    required: [
      "firstname",
      "lastname",
      "email",
      "password",
      "address",
      "pincode",
    ],
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    toast.clearWaitingQueue();
    e.preventDefault();
    var validator = SchemaValidator(FormDataProto, { ...credentials });

    if (validator.valid) {
      await RegisterUser(credentials);
      showSuccessToast("Registered successfully, please log in !");
      navigate("/user/login");
    } else {
      validator.errors.map(function (e, i) {
        return toast(`${e.path[0]} : ${msgLocalise(e)}`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: false,
        });
      });
    }
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
              <Authbanner className="authimg" />
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form style={{ width: "auto" }} onSubmit={handleSubmit}>
                <h1 className="userregister_header">Join us at Milan !</h1>
                <div className="form-outline mb-2">
                  <label
                    htmlFor="Full Name"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Enter your name
                  </label>
                  <div className="d-flex flex-column flex-md-row">
                    <input
                      type="text"
                      className="userreg_des_firstname form-control form-control-lg me-md-2"
                      placeholder="First name"
                      name="firstname"
                      value={credentials.firstname}
                      onChange={handleChange}
                      required
                      autoFocus
                      aria-label="First name"
                    />
                    <input
                      type="text"
                      className="userreg_mob_firstname form-control form-control-lg me-md-2"
                      placeholder="First name"
                      name="firstname"
                      value={credentials.firstname}
                      onChange={handleChange}
                      required
                      aria-label="First name"
                    />
                    <input
                      type="text"
                      className="form-control form-control-lg ms-md-2"
                      placeholder="Last name"
                      name="lastname"
                      value={credentials.lastname}
                      onChange={handleChange}
                      required
                      aria-label="Last name"
                    />
                  </div>
                </div>
                {/* //* Email */}
                <div className="form-outline mb-4">
                  <label
                    htmlFor="emailInput"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Email address 📨
                  </label>

                  <input
                    type="email"
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="email"
                    placeholder="Email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    aria-label="Email Adress"
                    required
                  />
                </div>
                {/* //* Password */}
                <div className="form-outline mb-4">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Password 🔑
                  </label>

                  <input
                    type="password"
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    aria-label="Password"
                  />
                </div>
                {/* //* Address */}
                <div className="form-outline mb-4">
                  <label
                    htmlFor="address"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Address 🏡
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
                    aria-label="Adress"
                  />
                </div>
                {/* //* Pincode */}
                <div className="form-outline mb-4">
                  <label
                    htmlFor="pincode"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Pincode 📍
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
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="login-btn btn btn-lg btn-block btn-container-desktop"
                >
                  Register
                </button>
                <br></br> <br></br>
                <Anchor
                  para="Already have an account? "
                  details="Login here"
                  link="/user/login"
                  className="link-info anchor-container-desktop"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserRegister;

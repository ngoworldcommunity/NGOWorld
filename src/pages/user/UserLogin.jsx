import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../styles/UserLogin.css";
import { LoginUser } from "../../service/MilanApi";

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

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);

  //* To set the value as soon as we input
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    if (
      e.target.name === "email" &&
      e.target.value.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")
    )
      setIsEmailValid(true);
  };

  //* Submit to backend
  //* If alright we get a session token
  const handleSubmit = (e) => {
    e.preventDefault();
    const Data = LoginUser(credentials);

    Data.then((response) => {
      if (response.data.status === true) {
        alert("Logged you in!!");
        console.log(response.data.token);
        sessionStorage.setItem("token", response.data.token);
        Navigate("/");
      } else if (response.data.status === false) {
        alert("Please input valid credentials");
        setCredentials({
          email: "",
          password: "",
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <Navbar />

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://www.getillustrations.com/packs/plastic-illustrations-scene-builder-pack/scenes/_1x/accounts%20_%20man,%20workspace,%20desk,%20laptop,%20login,%20user_md.png"
                className="img-fluid"
                alt="Phone"
              />
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form style={{ width: "auto" }} onSubmit={handleSubmit}>
                <h2 style={{ letterSpacing: "1px" }}>Log in</h2>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="email"
                    className=" col-form-label col-form-label-lg"
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="password"
                    className="col-form-label col-form-label-lg"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <br />
                <button
                  type="submit"
                  className="btn btn-lg btn-block"
                  disabled={credentials.password.length <= 4 || !isEmailValid}
                  style={{ backgroundColor: "#89b5f7" }}
                >
                  Login
                </button>
                <br></br> <br></br>
                <Anchor
                  para=""
                  details="Forgot password?"
                  link="#"
                  className="text-muted"
                />
                <Anchor
                  para="Don't have an account? "
                  details="Register here"
                  link="/user/register"
                  className="link-info"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserLogin;

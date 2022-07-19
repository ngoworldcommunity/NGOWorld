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
      if (response?.data.token) {
        alert("Logged you in!!");
        sessionStorage.setItem("token", response.data.token);
        Navigate("/");
      } else {
        setCredentials({ email: "", password: "", });
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
                <h2 style={{ letterSpacing: "1px", marginBottom: "20px" }}>Log in</h2>
                <div className="form-outline mb-4">

                  <input
                    type="email"
                    className="desktop form-control form-control-lg"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    className="mobile form-control form-control-lg"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                  
                  <input
                    type="password"
                    className="desktop form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Enter your password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="password"
                    className="mobile form-control form-control-lg"
                    id="exampleInputPassword1"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* RememberMe Tab  */}
                <div id="rememberMe" className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <br />

                {/* Login Button */}
                <button
                  disabled={credentials.password.length <= 4 || !isEmailValid}
                  type="submit"
                  className="login-btn btn btn-lg btn-block"
                  style={{ backgroundColor: "#89b5f7" }}
                >
                  Login
                </button>

                <br></br><br></br>
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

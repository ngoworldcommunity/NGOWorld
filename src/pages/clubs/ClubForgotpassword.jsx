import React from "react";
import forgotpassword from "../../assets/pictures/forgotpassworduser.svg";
import "react-toastify/dist/ReactToastify.css";

const ClubForgotpassword = () => {
  document.title = "Milan | Reset Password";

  return (
    <>
      <section className="vh-80">
        <div className="container  h-80">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6 d-flex justify-content-center">
              <img
                src={forgotpassword}
                className="mobile-img"
                alt="man standing next to a large locker"
              ></img>
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form style={{ width: "auto" }}>
                <h1 className="userregister_header">Reset Your Password!</h1>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="col-form-label col-form-label-lg regformlabels"
                  >
                    Email address 📨
                  </label>
                  <input
                    type="email"
                    className="desktop form-control form-control-lg color p-1"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />

                  <input
                    type="email"
                    className="mobile form-control form-control-lg color"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button className="login-btn btn btn-lg btn-block">
                  Forgot Password
                </button>

                <br></br>
                <br></br>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClubForgotpassword;

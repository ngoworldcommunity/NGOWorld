import React from "react";
import forgotpassworduser from "../../assets/pictures/forgotpassworduser.svg";
import Navbar from "../../components/Navbar";
// import { Link, useNavigate } from "react-router-dom";
//import "../../styles/ClubLogin.css";
import "react-toastify/dist/ReactToastify.css";

const UserForgotpassword = () => {

    document.title = "Milan | Reset Password";

    return (
        <>
            <Navbar />
            <section className="vh-80">
                <div className="container  h-80">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6 d-flex justify-content-center">
                            <img src={forgotpassworduser} className="mobile-img" alt="profile-img"></img>
                        </div>

                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form style={{ width: "auto" }} >
                                <h1 style={{ letterSpacing: "1px", marginBottom: "30px" }}>
                                    Reset Your Password!
                                </h1>
                                <div className="form-outline mb-4">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="col-form-label col-form-label-lg regformlabels"
                                    >
                                        Email address 📨
                                    </label>
                                    <input
                                        type="email"
                                        className="desktop form-control form-control-lg"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter your email"
                                        name="email"
                                        required
                                        aria-required="true"
                                        aria-label="email"
                                        autoFocus
                                    />

                                    <input
                                        type="email"
                                        className="mobile form-control form-control-lg"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        aria-required="true"
                                        aria-label="email"

                                    />
                                </div>


                                <button
                                    className="login-btn btn btn-lg btn-block"
                                    style={{ backgroundColor: "#89b5f7", color: "white", opacity: 1 }}
                                > Reset
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
}

export default UserForgotpassword;

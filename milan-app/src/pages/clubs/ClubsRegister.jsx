import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import registrationImage from '../../assets/pictures/clubRegistrationImage.png';
import { Link } from 'react-router-dom';
import "../../styles/ClubsRegister.css";

const ClubLogin = () => {
    document.title = "Club Register | Milan";

    return (
        <>
            <Navbar />
            <div className="mobile-sec container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">

                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src={registrationImage} className="img-fluid desktop-img" alt="Club Registration" />
                    </div>

                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form >
                            <h2 className="mobile-txt">Club Register</h2>
                            <p className="gray-400 fw-bold mobile-txt">
                                <strong className="highlighted-registration">Clubs</strong> can <strong className="highlighted-registration">Register</strong> from here.
                                </p>

                            <div className="form-outline mb-2">
                                <label className=" col-form-label col-form-label-lg">Club Name</label>
                                <input type="email" className="form-control form-control-lg" placeholder="Enter your club name" />
                            </div>

                            <div className="form-outline mb-2">
                                <label className=" col-form-label col-form-label-lg">Club Email</label>
                                <input type="email" className="form-control form-control-lg" placeholder="Enter your email address" />
                            </div>

                            <div className="form-outline mb-2">
                                <label className="col-form-label col-form-label-lg">Password</label>
                                <input type="password" className="form-control form-control-lg" placeholder="Enter your password" />
                            </div>

                            <div className="form-outline mb-2">
                                <label className="col-form-label col-form-label-lg">Confirm your Password</label>
                                <input type="password" className="form-control form-control-lg" placeholder="Confirm your password" />
                            </div>

                            <div className="form-outline mb-2">
                                <label className="col-form-label col-form-label-lg">Address</label>
                                <input type="text" className="form-control form-control-lg" placeholder="Enter your club address" />
                            </div>

                            <div className="form-outline mb-2">
                                <label className="col-form-label col-form-label-lg">Pincode</label>
                                <input type="text" maxLength="6" className="form-control form-control-lg" placeholder="Enter your pincode" />
                            </div>

                            <div className="d-grid gap-2 py-4">
                                <button type="button" className="registration-btn btn btn-primary py-2">Register</button>
                            </div>


                            <span>Already have an account?
                                <Link to="/clubs/login" className="registration-link old-acc"> Login</Link>
                            </span>
                        </form>
                    </div>
                </div>


            </div>

        </>

    );

}

export default ClubLogin;
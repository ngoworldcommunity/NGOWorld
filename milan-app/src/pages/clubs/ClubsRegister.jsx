import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import registrationImage from '../../assets/pictures/clubRegistrationImage.png';
import { Link } from 'react-router-dom';
import "../../styles/ClubsRegister.css";

const ClubLogin = () => {
    document.title = "Club Register | Milan";

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

    const [credentials, setCredentials] = useState(
        {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            address: "",
            pincode: "",
            desc:"",
        });

    //* Submitting form
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(credentials);
        console.log("Form submitted");
    };
    return (
        <>
            <Navbar />
            <div className="mobile-sec container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">

                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src={registrationImage} className="img-fluid" alt="Club Registration" width="90%" />
                    </div>

                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form onSubmit={handleSubmit}>
                            <h2 className="mobile-txt">Club Register</h2>


                            <div className="form-outline mb-4">
                                <label className=" col-form-label col-form-label-lg mobile-label">Club Name</label>
                                <input type="email" className="form-control form-control-lg" placeholder="Enter your club name" value={credentials.name}
                                    onChange={(e) => setCredentials({ ...credentials, name: e.target.value })} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className=" col-form-label col-form-label-lg mobile-label">Club Email</label>
                                <input type="email" className="form-control form-control-lg" placeholder="Enter your email address" value={credentials.email}
                                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="col-form-label col-form-label-lg mobile-label">Password</label>
                                <input type="password" className="form-control form-control-lg" placeholder="Enter your password" value={credentials.password}
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="col-form-label col-form-label-lg mobile-label">Confirm your Password</label>
                                <input type="password" className="form-control form-control-lg" placeholder="Confirm your password" value={credentials.confirmPassword}
                                    onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="col-form-label col-form-label-lg mobile-label">Address</label>
                                <input type="text" className="form-control form-control-lg" placeholder="Enter your club address" value={credentials.address}
                                    onChange={(e) => setCredentials({ ...credentials, address: e.target.value })} />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="col-form-label col-form-label-lg mobile-label">Pincode</label>
                                <input type="text" maxLength="6" className="form-control form-control-lg" placeholder="Enter your pincode" value={credentials.pincode}
                                    onChange={(e) => setCredentials({ ...credentials, pincode: e.target.value })} />
                            </div>
                            <label for="exampleInputEmail1" className="col-form-label col-form-label-lg mobile-label">Description</label>
              <textarea
                type="text"
                class="form-control"
                id="exampleInputText"
                aria-describedby="textDemo"
                placeholder='Describe your club in at least 20 characters'
                value={credentials.desc}
                onChange={(e) => {
               
                  setCredentials({ ...credentials, desc: e.target.value })
                }}
              />
              <small id="textDemo" class="form-text text-muted">
               
              </small>

                            <div className="d-grid gap-2 py-4">
                                <button disabled={credentials.desc.trim().length < 20} type="button" className="registration-btn btn btn-primary py-2"  >Register</button>
                            </div>


                            <Anchor
                                para="Already have an account? "
                                details="Login here"
                                link="/user/login"
                                className="link-info"
                            />
                        </form>
                    </div>
                </div>


            </div>

        </>

    );

}

export default ClubLogin;
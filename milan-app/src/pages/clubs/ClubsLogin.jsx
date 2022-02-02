import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import loginImg from '../../assets/pictures/login-img.png';
import mobileLoginImg from '../../assets/pictures/login-img-mobile.png';
import { Link } from 'react-router-dom';
import "../../styles/ClubLogin.css";

const ClubLogin = () =>{    
    document.title = "Club Login | Milan";
       
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    return (
        <>
        <Navbar />
        <div className="mobile-sec container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    <img src={loginImg}  className="img-fluid desktop-img" alt="Login" />
                    <img src={mobileLoginImg}  className="img-fluid mobile-img" alt="Another Login" />
                </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form >
                    <h2 className="mobile-txt">LOGIN</h2>
                    <p className="gray-400 fw-bold mobile-txt">
                    <strong className="highlighted">Clubs</strong> can <strong className="highlighted">Login</strong> from here.</p>
                    <div className="form-outline mb-2">
                        <label className=" col-form-label col-form-label-lg">Email address</label>
                        <input type="email" className="form-control form-control-lg" placeholder="Enter your email address"  value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="form-outline mb-2">
                        <label className="col-form-label col-form-label-lg">Password</label>
                        <input type="password" className="form-control form-control-lg" placeholder="Enter your password" value={password} 
                        onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className="form-check mt-4 d-flex">

                      <div className="col-6">
                        <input type="checkbox" className="form-check-input" />
                        <label className="form-check-label">Remember me</label>
                      </div>

                      <div className="col-6 d-flex justify-content-end">
                            <Link className="login-link" to="#" >Forgot password?</Link>
                      </div>
                        
                      </div>
                      <div className="d-grid gap-2 py-4">
                        <button type="button" className="login-btn btn btn-primary py-2"  onClick={()=>{
                            console.log("Email ID= " + email);
                            console.log("Password= " + password);
                        }}>Login</button>
                      </div>
                    
                   
                     <span>Don't have an account? 
                        <Link to="/user/register" className="login-link new-acc"> Create New</Link>
                     </span>
                </form>
            </div>
            </div>


        </div>

        </>
        
    );

}

export default ClubLogin;
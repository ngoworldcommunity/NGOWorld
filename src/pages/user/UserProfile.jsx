import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useNavigate } from "react-router-dom";


export default function UserProfile() {

    const Navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem("token");
        Navigate("/");
    }

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
              <form style={{ width: "auto" }}>
                <h2 style={{ letterSpacing: "1px" }}>Profile</h2>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="email"
                    className=" col-form-label col-form-label-lg"
                  >
                    Update Email address
                  </label>

                  
                </div>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="password"
                    className="col-form-label col-form-label-lg"
                  >
                    Update Password
                  </label>

                </div>
                <br />
                <button
                  onClick={handleLogout}
                  className="btn btn-lg btn-block"                  
                  style={{ backgroundColor: "#89b5f7" }}
                >
                  Logout
                </button>
                <br></br> <br></br>
                
              </form>
            </div>
          </div>
        </div>
      </section>

        </>
    )
}

import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { RegisterUser } from "../../service/MilanApi";

import SchemaValidator ,{ msgLocalise} from "../../utils/validation";

//* The styles for Login and Register are essentially same
import "../../styles/UserLogin.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRegister = () => {
  document.title = "Milan | User Register"
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
      firstname: {type:"string" },
      lastname: {type:"string" },
      email: {type:"string" , format:"email"},
      password: {type:"string" , minLength:8 },
      address: {type:"string" },
      pincode: {pattern:"[0-9]+", minLength:6 },
    },
    required:["firstname", "lastname","email", "password", "address", "pincode"]
  }

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleValidate = (e) => {
    
    var validator = SchemaValidator(FormDataProto.properties[e.target.name], e.target.value)
    
    if(!validator.valid)
    {
      console.log(validator.errors[0])
      toast(`${e.target.name} : ${msgLocalise(validator.errors[0])}`, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton:false
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    var validator = SchemaValidator(FormDataProto,{ ...credentials })
        
    if(validator.valid)
    { 
      await RegisterUser(credentials);

      toast('🦄 Registered your account !', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
        onClose: () => {
          navigate("/user/login");
        }
      });
    }
    else {
      validator.errors.map(
        function (e , i){
        return  toast(`${e.path[0]} : ${msgLocalise(e)}`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            closeButton: false,
            
          });
        }
      )
    }


  };

  return (
    <>
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://www.getillustrations.com/packs/plastic-illustrations-scene-builder-pack/scenes/_1x/accounts%20_%20man,%20workspace,%20desk,%20laptop,%20login,%20user_md.png"
                className="img-fluid userregister_sideimg"
                alt="Phone"
              />
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 form">
              <form style={{ width: "auto" }} onSubmit={handleSubmit}>
                <h1 className="userregister_header">Join us at Milan !!</h1>

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
                      onBlur={handleValidate}
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
                      onBlur={handleValidate}
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
                      onBlur={handleValidate}
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
                    onBlur={handleValidate}
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
                    onBlur={handleValidate}
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
                    onBlur={handleValidate}
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
                    onBlur={handleValidate}
                    value={credentials.pincode}
                    onChange={handleChange}
                    required
                    aria-label="Pincode"
                  />
                </div>

                <br />
                <button
                  type="submit"
                  className="btn btn-lg btn-block"
                  style={{ backgroundColor: "#89b5f7" }}
                >
                  Register
                </button>
                <br></br> <br></br>
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
      </section>
    </>
  );
}

export default UserRegister;

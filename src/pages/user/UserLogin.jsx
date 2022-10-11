import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../styles/UserLogin.css";
import { LoginUser } from "../../service/MilanApi";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";

import SchemaValidator ,{ msgLocalise} from "../../utils/validation";
import "react-toastify/dist/ReactToastify.css";

function UserLogin() {
    document.title = "Milan | User Login";
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

    const FormDataProto = {
        id: "/LoginForm",
        type: "object",
        properties: {
            email:{type:"string" , format:"email"},
            password:{type:"string" , minLength:4 },
        },
        required:["email" , "password"]
    }
    
    //* To set the value as soon as we input
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleValidate = (e) => {
    
        var validator = SchemaValidator(FormDataProto.properties[e.target.name], e.target.value)
        
        if(!validator.valid)
        {
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

    //* Submit to backend
    //* If alright we get a cookie with token
    const handleSubmit = (e) => {
        e.preventDefault();
        var validator = SchemaValidator(FormDataProto,{ ...credentials })
        
        if(validator.valid)
        { 
            const Data = LoginUser(credentials);

            Data.then((response) => {
                if (response?.data.token) {
                    Cookies.set("token", response.data.token);

                    toast("🦄 Logging you in !", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        closeButton: false,
                        onClose: () => {
                            Navigate("/");
                        },
                    });
                } else {

                    setCredentials({ email: "", password: "" });
                }
            }).catch((err) => {
                console.log(err);
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
                })
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
                                className="img-fluid"
                                alt="Phone"
                            />
                        </div>

                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <form style={{ width: "auto" }} onSubmit={handleSubmit}>
                                <h1 style={{ letterSpacing: "1px", marginBottom: "20px", textAlign: "center" }}>
                                    Log in
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
                                        id="desktopUserEmail"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter your email"
                                        name="email"
                                        onBlur={handleValidate}
                                        value={credentials.email}
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        aria-label="email"
                                        autoFocus
                                    />

                                    <input
                                        type="email"
                                        className="mobile form-control form-control-lg"
                                        id="mobileUserEmail"
                                        aria-describedby="emailHelp"
                                        name="email"
                                        onBlur={handleValidate}
                                        value={credentials.email}
                                        placeholder="Enter your email"
                                        onChange={handleChange}
                                        required
                                        aria-required="true"
                                        aria-label="email"

                                    />
                                </div>

                                <label
                                    htmlFor="exampleInputPassword1"
                                    className="col-form-label col-form-label-lg regformlabels color"
                                >
                                    Password 🔑
                                </label>
                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        className="desktop form-control form-control-lg"
                                        id="desktopUserPassword"
                                        placeholder="Enter your password"
                                        name="password"
                                        onBlur={handleValidate}
                                        value={credentials.password}
                                        onChange={handleChange}
                                        required
                                        aria-label="password"
                                    />

                                    <input
                                        type="password"
                                        className="mobile form-control form-control-lg"
                                        id="mobileUserPassword"
                                        name="password"
                                        onBlur={handleValidate}
                                        value={credentials.password}
                                        onChange={handleChange}
                                        placeholder="Enter your password"
                                        required
                                        aria-label="password"
                                    />
                                </div>

                                {/* RememberMe Tab  */}
                                <div id="rememberMe" className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="exampleCheck1"
                                    />
                                    <label id="remember-me" className="form-check-label" htmlFor="exampleCheck1">
                                        Remember me
                                    </label>
                                </div>
                                <br />

                                {/* Login Button */}
                                <div className="btn-container">
                                    <button
                                        type="submit"
                                        className="login-btn btn btn-lg btn-block"
                                        style={{ backgroundColor: "#89b5f7" }}
                                    >
                                        Login
                                    </button>
                                </div>
                                <br></br>
                                <br></br>
                                <div className="anchor-container">
                                    <Anchor
                                        para=""
                                        details="Forgot password?"
                                        link="/user/forgotpass"
                                        className="text-muted"
                                    />
                                    <Anchor
                                        para="Don't have an account? "
                                        details="Register here"
                                        link="/user/register"
                                        className="link-info"
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserLogin;

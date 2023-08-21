import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import { showErrorToast, showSuccessToast } from "../../utils/Toasts";
import { RegisterClub, RegisterUser } from "../../service/MilanApi";
import { Helmet } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import AuthButton from "../../components/Button/AuthButton/AuthButton";
import TopButton from "../../components/Button/AuthButton/TopButton";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import "./AuthPage.css";

const AuthRegister = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState("individual");

  const [credentials, setCredentials] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    pincode: "",

    name: "",
    description: "",
    tagLine: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "pincode") {
      if (
        e.target.value.toString().length < 7 &&
        !e.target.value.toString().includes(".")
      ) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      }
      return;
    }
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setCredentials({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      pincode: "",
      name: "",
      description: "",
      tagLine: "",
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const validationErrors = useValidation(
      credentials,
      userType === "individual",
      userType === "club",
    );

    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => {
        showErrorToast(error.message);
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      if (userType === "individual") {
        const data = await RegisterUser(credentials);
        handleApiResponse(data);
      } else if (userType === "club") {
        const data = await RegisterClub(credentials);
        handleApiResponse(data);
      }
    }
  };

  const handleApiResponse = (response) => {
    if (response?.status === 201) {
      showSuccessToast(response?.data?.message);

      setTimeout(() => {
        setIsLoading(false);
        navigate("/auth/login");
      }, 3000);
    } else {
      showErrorToast(response?.message);
      setCredentials({ ...credentials });

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  const [passwordType, setPasswordType] = useState("password");

  const passwordToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const confirmPasswordToggle = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
    } else setConfirmPasswordType("password");
  };

  return (
    <>
      <Helmet>
        <title>Milan | Registration</title>
        <meta
          name="description"
          content="Welcome to the User's registration page. Provide all the needed credentials and join us."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <ToastContainer />

      <div className="authpage_godparent">
        <div className="authpage_parent">
          <div className="authpage_leftdiv">
            <TopButton isGoBack={false} GoogleButton={true} />
          </div>

          <div className="authpage_rightdiv">
            <TopButton isGoBack={true} />
            <form onSubmit={handleSubmit} className="authform">
              <h1 className="">Join Milan Today</h1>

              <div className="authform_container">
                <label htmlFor="userType" className="auth_label">
                  User Type
                </label>
                <div className="user-type-dropdown">
                  <select
                    id="userType"
                    name="userType"
                    value={userType}
                    onChange={handleUserTypeChange}
                    className="form-control user-type-select"
                  >
                    <option value="individual">Individual</option>
                    <option value="club">Charity/Club/NGO</option>
                  </select>
                  <FaChevronDown className="dropdown-icon" />
                </div>
              </div>
              <div className="auth_namediv">
                {userType === "individual" && (
                  <>
                    <div className="authform_container">
                      <label htmlFor="firstname" className="auth_label">
                        First Name
                      </label>
                      <input
                        type="text"
                        className=" form-control "
                        name="firstname"
                        value={credentials.firstname}
                        onChange={handleChange}
                        required
                        id="firstname"
                        placeholder="John"
                      />
                    </div>

                    <div className="authform_container">
                      <label htmlFor="lastname" className="auth_label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className=" form-control "
                        name="lastname"
                        value={credentials.lastname}
                        onChange={handleChange}
                        required
                        id="lastname"
                        placeholder="Doe"
                      />
                    </div>
                  </>
                )}
                {userType === "club" && (
                  <div className="authform_container" style={{ width: "100%" }}>
                    <label htmlFor="name" className="auth_label">
                      Club Name
                    </label>
                    <input
                      type="text"
                      className=" form-control "
                      name="name"
                      value={credentials.name}
                      onChange={handleChange}
                      required
                      id="name"
                      placeholder="ABC Club"
                    />
                  </div>
                )}
              </div>

              <div className="authform_container ">
                <label htmlFor="email" className="auth_label">
                  Email address
                </label>
                <input
                  type="email"
                  className=" form-control "
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                  id="email"
                  placeholder="john@example.com"
                />
              </div>
              <div className="auth_passworddiv">
                <div className="authform_container">
                  <label htmlFor="password" className="auth_label">
                    Password
                  </label>
                  <input
                    type={passwordType}
                    className=" form-control "
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                    id="password"
                    placeholder="StrongPassword123"
                  />
                  <div onClick={passwordToggle} className="toggle-button">
                    {passwordType === "password" ? <FiEyeOff /> : <FiEye />}
                  </div>
                </div>
                <div className="authform_container">
                  <label htmlFor="confirmPassword" className="auth_label">
                    Confirm Password
                  </label>
                  <input
                    type={confirmPasswordType}
                    className=" form-control "
                    name="confirmPassword"
                    value={credentials.confirmPassword}
                    onChange={handleChange}
                    required
                    id="confirmPassword"
                    placeholder="StrongPassword123"
                  />
                  <div
                    onClick={confirmPasswordToggle}
                    className="toggle-button"
                  >
                    {confirmPasswordType === "password" ? (
                      <FiEyeOff />
                    ) : (
                      <FiEye />
                    )}
                  </div>
                </div>
              </div>

              {userType === "club" && (
                <div className="authform_container">
                  <label htmlFor="tagLine" className="auth_label">
                    Club Tagline
                  </label>
                  <input
                    type="text"
                    className=" form-control "
                    name="tagLine"
                    value={credentials.tagLine}
                    onChange={handleChange}
                    required
                    id="tagLine"
                    placeholder="Join us and make a difference!"
                  />
                </div>
              )}

              {userType === "club" && (
                <div className="authform_container">
                  <label htmlFor="description" className="auth_label">
                    Club Description
                  </label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={credentials.description}
                    onChange={handleChange}
                    required
                    id="description"
                    placeholder="Tell us about your club and its mission..."
                  />
                </div>
              )}

              <div className="authform_container ">
                <label htmlFor="address" className="auth_label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  name="address"
                  value={credentials.address}
                  onChange={handleChange}
                  required
                  id="address"
                  placeholder="123 Main St, City, Country"
                />
              </div>

              <div className="authform_container ">
                <label htmlFor="pincode" className="auth_label">
                  Pincode / Zipcode
                </label>
                <input
                  type="text
                  "
                  className=" form-control "
                  name="pincode"
                  value={credentials.pincode}
                  onChange={handleChange}
                  required
                  id="pincode"
                  placeholder="123456"
                />
              </div>

              <AuthButton isLoading={isLoading} buttonText="Register" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthRegister;

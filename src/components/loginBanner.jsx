import "../styles/LoginBanner.css";
import picture from "../assets/pictures/loginBanner.svg";

const LoginBanner = () => {
  return (
    <div id="login-banner">
      <img src={picture} alt="login-img" />

      <br />
      <div className="loginb-content">
        <h1>Welcome to Milan, a place where help meets need !!</h1>
        <br />

        <p className="inner">Explore more about us !!</p>

        <br />
        <p>
          Join us at the awesome events, help us by sharing some love or explore
          more with the hardworking clubs !!!
        </p>
        <br />
        <p>Also fell free to Contact us, or report any problem !!</p>
      </div>
    </div>
  );
};

export default LoginBanner;

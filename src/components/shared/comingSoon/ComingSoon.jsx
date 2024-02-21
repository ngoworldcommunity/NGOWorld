import ComingSoonLogo from "../../../assets/pictures/comingsoon.svg";
import Button from "../buttons/globalbutton/Button";
import "./ComingSoon.css";
import { useSelector } from "react-redux";

const ComingSoon = ({ launchitem }) => {
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  return (
    <>
      <div className="comingsoon_parent">
        <img src={ComingSoonLogo} alt="" />
        <h1>Launching Soon !</h1>
        <p>
          We will let you know whenever we launch our{" "}
          {launchitem ? launchitem : "page"}.
        </p>

        {isLoggedIn ? (
          <div className="notification-div">You will be Notified</div>
        ) : (
          <Button to="/auth/signup">Sign up to get notified</Button>
        )}
      </div>
    </>
  );
};

export default ComingSoon;

import { useEffect, useState } from "react";
import ComingSoonLogo from "../../../assets/pictures/comingsoon.svg";
import Button from "../buttons/globalbutton/Button";
import "./ComingSoon.css";

const ComingSoon = ({ launchitem }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    // Check if the user object exists in localStorage
    const userJSON = localStorage.getItem("persist:root");

    if (userJSON) {
      // Parse the JSON string to get the JavaScript object
      const { user } = JSON.parse(userJSON);
      const { isLoggedIn } = JSON.parse(user);

      // Access the isLoggedIn property and set the state
      setIsLoggedIn(isLoggedIn);
    }
  }, []);
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

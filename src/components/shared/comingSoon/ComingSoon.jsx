import React from "react";
import ComingSoonLogo from "../../../assets/pictures/comingsoon.svg";
import Button from "../buttons/globalbutton/Button";
import "./ComingSoon.css";

const ComingSoon = ({ launchitem }) => {
  return (
    <>
      <div className="comingsoon_parent">
        <img src={ComingSoonLogo} alt="" />
        <h1>Launching Soon !</h1>
        <p>
          We will let you know whenever we launch our{" "}
          {launchitem ? launchitem : "page"}.
        </p>
        <Button to="/auth/signup">Sign up to get notified</Button>{" "}
      </div>
    </>
  );
};

export default ComingSoon;

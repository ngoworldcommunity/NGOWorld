import React, { useContext } from "react";
import Button from "../../Button/GlobalButton/Button";
import ComingSoonLogo from "../../../assets/pictures/comingsoon.svg";
import "./ComingSoon.css";
import { modeContext } from "../../../App";

const ComingSoon = ({ launchitem }) => {
  const { dark } = useContext(modeContext);
  return (
    <>
      <div
        className={`comingsoon_parent ${dark ? "comingsoon_parent_dark" : ""}`}
      >
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

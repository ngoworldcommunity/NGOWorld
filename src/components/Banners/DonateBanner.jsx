import React from "react";
import "../../styles/DonateBanner.css";
import donateImg from "../../assets/pictures/donate-banner.png";
import { useNavigate } from "react-router-dom";

const DonateBanner = () => {
  var nav = useNavigate();
  const handleDonate = () => {
    nav("/donateus");
  };
  return (
    <div id="donate-banner" className="d-flex justify-content-evenly">
      <div
        id="donateCol1"
        className="d-flex flex-column justify-content-center align-items-start me-5"
      >
        <h1 className="mb-4">You can help us too !!</h1>
        <p className="donate-details">
          Happiness increases when you share your love.
        </p>
        <p>So why not help millions by sharing your love ?</p>
        <button
          type="button"
          className="mt-4 button_animation btn"
          onClick={() => {
            handleDonate();
          }}
        >
          {" "}
          Share your love ❤️
        </button>
      </div>
      <div id="donateCol2">
        <img src={donateImg} alt="" className="donateImg" />
      </div>
    </div>
  );
};

export default DonateBanner;

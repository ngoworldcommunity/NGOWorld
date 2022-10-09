import React from "react";
import "../../styles/Loading.css";

const Loading = () => {
  return (
    <div id="spinner-wrapper" className="w-100 text-center">
      <div
        id="spinner"
        className="spinner-border text-primary m-5"
        role="status"
      ></div>
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Loading;

import React, { useContext } from "react";
import "../../styles/Loading.css";
import modeContext from "./App";

const Loading = () => {
  const { dark } = useContext(modeContext);
  return (
    <div id="spinner-wrapper" className="text-center">
      <div
        id="spinner"
        className="spinner-border text-primary m-5"
        role="status"
      ></div>
      <span
        className="visually-hidden"
        style={dark ? { color: "#720455" } : {}}
      >
        Loading...
      </span>
    </div>
  );
};

export default Loading;

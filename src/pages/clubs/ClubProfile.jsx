import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import comingsoon from "../../assets/pictures/comingsoon.svg";

const ClubProfile = () => {
  const Navigate = useNavigate();

  const handleLogout = () => {
    window.alert("Logout successful !");
    Cookies.remove("club");
    Navigate("/clubs/login");
  };

  return (
    <>
      <Helmet title="Milan | Club Profile" />
      <div
        className="container"
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        <img src={comingsoon} alt="" style={{ width: "60%" }} />
        <h1 style={{ marginTop: "1rem" }}>Coming Soon 🚀</h1>

        <button
          onClick={handleLogout}
          className="btn btn-lg btn-block"
          style={{ backgroundColor: "#89b5f7", marginTop: "1.5rem" }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default ClubProfile;

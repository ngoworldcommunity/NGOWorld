import React from "react";
import ComingSoon from "../../../components/Cards/ComingSoon/ComingSoon";
import Navbar from "../../../components/Navbar/Navbar";

const ClubProfile = () => {
  document.title = "Milan | Club Profile";

  return (
    <>
      <Navbar />
      <ComingSoon />
    </>
  );
};

export default ClubProfile;

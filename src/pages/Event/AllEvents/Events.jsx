import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import ComingSoon from "../../../components/Cards/ComingSoon/ComingSoon";
import ComponentHelmet from "../../../utils/ComponentHelmet";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ComponentHelmet type="Events" />
      <Navbar />
      <ComingSoon launchitem={`event's page.`} />
    </>
  );
};

export default Events;

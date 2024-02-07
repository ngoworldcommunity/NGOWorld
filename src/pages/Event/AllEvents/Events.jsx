import React, { useEffect } from "react";
import { ComingSoon, Navbar } from "../../../components/shared";
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

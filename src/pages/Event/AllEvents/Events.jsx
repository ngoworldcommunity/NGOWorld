import React, { useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
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
      <Footer />
    </>
  );
};

export default Events;

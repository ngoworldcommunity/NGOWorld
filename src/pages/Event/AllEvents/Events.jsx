import React, { useEffect } from "react";
import Loading from "../../../components/Loading";
import SingleClubEvent from "../../../components/Cards/SingleClubEvent/SingleClubEvent";
import useSWR from "swr";
import fetcher from "../../../utils/Fetcher";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import ComingSoon from "../../../components/Cards/ComingSoon/ComingSoon";
import { eventEndpoints } from "../../../assets/data/ApiEndpoints";
import ComponentHelmet from "../../../utils/ComponentHelmet";

const Events = () => {
  const { data: events, isLoading } = useSWR(eventEndpoints.all, fetcher);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ComponentHelmet type="Events" />
      <Navbar />
      <div className="container">
        <ComingSoon launchitem={`event's page.`} />
        <div className="clubspage_main_parent">
          <div className="clubspage_cardsdiv">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {events?.map((event) => (
                  <SingleClubEvent
                    key={event?._id}
                    item={event}
                    type="events"
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;

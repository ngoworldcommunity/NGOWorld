/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../../components/Loading";
import SingleClubEvent from "../../../components/Cards/SingleClubEvent/SingleClubEvent";
import useSWR from "swr";
import { defaultfetcher } from "../../../utils/Fetcher";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import ComingSoon from "../../../components/Cards/ComingSoon/ComingSoon";
import { eventEndpoints } from "../../../assets/data/ApiEndpoints";

const Events = () => {
  const { data: events, isLoading } = useSWR(
    eventEndpoints.all,
    defaultfetcher,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Milan | Events </title>
        <meta
          name="description"
          content="This is the events page of Milan, where you can find all the events happening in the community."
        />
        <link rel="canonical" href="/" />
      </Helmet>
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

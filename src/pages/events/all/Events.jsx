import React, { useEffect } from "react";
// import { FaPlus } from "react-icons/fa";
import { ComingSoon, Navbar } from "../../../components/shared";
import ComponentHelmet from "../../../utils/ComponentHelmet";
import "./Events.scss";

const Events = () => {
  // const { data: events } = useSWR(eventEndpoints.all, fetcher);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const toggleCreateEventModal = () => {
  //   history.pushState({ path: "/events" }, "", "/events/create");
  // };

  return (
    <>
      <ComponentHelmet type="Events" />
      <Navbar />

      {/* <main className="container">
        <div className="clubspage_main_parent">
          <div className="events_now_header">
            <p>Happening now</p>
            <div
              role="separator"
              aria-orientation="horizontal"
              className="separator"
            ></div>
            <Button onClickfunction={toggleCreateEventModal}>
              <FaPlus /> Create an event
            </Button>
          </div>
          <div className="events_div">
            {events?.map((event, id) => (
              <EventsCard event={event} key={id} />
            ))}
          </div>
        </div>
      </main>

      <Footer /> */}
      <ComingSoon launchitem={`event's page.`} />
    </>
  );
};

export default Events;

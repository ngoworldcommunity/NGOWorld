import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import useSWR from "swr";
import { EventsCard } from "../../../components/private";
import CreateEvents from "../../../components/private/events/create/CreateEvents";
import { Button, Footer, Navbar } from "../../../components/shared";
import { eventEndpoints } from "../../../static/ApiEndpoints";
import ComponentHelmet from "../../../utils/ComponentHelmet";
import fetcher from "../../../utils/Fetcher";
import "./Events.scss";

const Events = () => {
  const { data: events } = useSWR(eventEndpoints.all, fetcher);
  const [showCreateModal, setshowCreateModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCreateEventModal = () => {
    setshowCreateModal(true);
  };

  return (
    <>
      <ComponentHelmet type="Events" />
      <Navbar />

      {showCreateModal && (
        <CreateEvents setshowCreateModal={setshowCreateModal} />
      )}

      <main className="container">
        <div className="clubspage_main_parent">
          <div className="events_now_header">
            <p>Happening now</p>

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

      <Footer />
    </>
  );
};

export default Events;

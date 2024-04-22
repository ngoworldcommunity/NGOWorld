import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { EventsCard } from "../../../components/private";
import CreateEvents from "../../../components/private/events/create/CreateEvents";
import { Button, Footer, Loading, Navbar } from "../../../components/shared";
import { getEvents } from "../../../integrations/Events";
import ComponentHelmet from "../../../utils/ComponentHelmet";
import "./Events.scss";

const Events = () => {
  const { data: allEvents, isLoading } = useQuery({
    queryKey: ["eventsData"],
    queryFn: getEvents,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    retry: 2,
  });

  const [showCreateModal, setshowCreateModal] = useState(false);
  const userType = useSelector((state) => state.user.userType);

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

            <hr className="separator" />

            {userType === "club" && (
              <Button
                onClickfunction={toggleCreateEventModal}
                className="createevent"
              >
                <FaPlus /> Create an event
              </Button>
            )}
          </div>
          <div className="events_div">
            {isLoading ? (
              <Loading />
            ) : (
              allEvents?.map((event, id) => (
                <EventsCard event={event} key={id} />
              ))
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Events;

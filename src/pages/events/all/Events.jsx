import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import useSWR from "swr";
import { EventsCard } from "../../../components/private";
import CreateEvents from "../../../components/private/events/create/CreateEvents";
import {
  Button,
  Footer,
  Navbar,
  SkeletonCard,
} from "../../../components/shared";
import { eventEndpoints } from "../../../static/ApiEndpoints";
import ComponentHelmet from "../../../utils/ComponentHelmet";
import fetcher from "../../../utils/Fetcher";
import "./Events.scss";

const Events = () => {
  const { data: events } = useSWR(eventEndpoints.all, fetcher);
  const [showCreateModal, setshowCreateModal] = useState(false);
  const userType = useSelector((state) => state.user.userType);

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
            {/* <SkeletonCard/> */}
            {/* loading? <SkeletonCard/> : */}
            {loading ? (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                {" "}
                <SkeletonCard /> <SkeletonCard /> <SkeletonCard />{" "}
                <SkeletonCard />{" "}
              </div>
            ) : (
              events?.map((event, id) => <EventsCard event={event} key={id} />)
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Events;

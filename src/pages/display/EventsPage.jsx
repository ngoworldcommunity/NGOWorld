import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";
import SingleClubEvent from "../../components/SingleClubEvent";
import { GetAllClubs, GetAllEvents } from "../../service/MilanApi";

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetcheventsData = async () => {
    setLoading(true);
    const response = await GetAllEvents();
    setEventsData(response);
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    fetcheventsData();
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

      <div className="container">
        <div className="cp_main_parent">
          <div className="cp_subparent">
            <div className="cp_textdiv">
              <p className="cp_header1">Events happening now !</p>
              <p className="cp_header2">
                {" "}
                All our partnered NGOs , hosts various events be it educational,
                cleaning mother earth, funding events, health camps and many
                more !
              </p>
            </div>
          </div>

          <div className="cp_cardsdiv">
            {loading ? (
              <Loading />
            ) : (
              <>
                {eventsData.map((event) => {
                  return (
                    <SingleClubEvent
                      key={event._id}
                      event={event}
                      type="events"
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;

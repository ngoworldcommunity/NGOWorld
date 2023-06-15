import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";
import SingleClubEvent from "../../components/SingleClubEvent";
import useSWR from "swr";
import { defaultfetcher } from "../../utils/fetcher";
import { sortEventsByPlaces } from "../../helper";
import states from "./StatesData";

const EventsPage = () => {
  const { data: eventsData, isLoading } = useSWR(
    `${import.meta.env.VITE_MILANAPI}/display/allevents`,
    defaultfetcher,
  );

  const [chosenFilter, setChosenFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [chosenData, setChosenData] = useState({});
  const [searchLoading, setSearchLoading] = useState(false);

  const handleStateEvents = (state) => {
    if (chosenData && chosenData.data === state) {
      setChosenData({});
    } else {
      setChosenData({ data: state });
    }
    setChosenFilter("place");
  };

  const handleChooseFilter = (type) => {
    if (type === "place") {
      setShowFilter(!showFilter);
    }
    if (type === "location") {
      if (chosenFilter === "location") {
        setChosenFilter("");
      } else {
        getPositionFilter();
        setChosenFilter("location");
      }
    }
  };
  const getPositionFilter = async () => {
    const position = await getPosition();
    setChosenData({
      data: { lat: position.coords.latitude, lon: position.coords.longitude },
    });
    setSearchLoading(false);
  };

  const getPosition = async () => {
    setSearchLoading(true);
    // naviagtor
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        },
      );
    });
  };
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

      <div className="container">
        <div className="cp_main_parent">
          <div className="cp_subparent">
            <div className="cp_textdiv">
              <p className="cp_header1">Events happening now !</p>
              <p className="cp_header2">
                All our partnered NGOs , hosts various events be it educational,
                cleaning mother earth, funding events, health camps and many
                more !
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              className="cursor-pointer  border border-gray-400  py-2 px-4 m-2 shadow  "
              onClick={() => handleChooseFilter("location")}
              style={{
                background: chosenFilter === "location" ? "#e26959" : "",
              }}
            >
              {" "}
              <h3>Find Events near You</h3>{" "}
            </button>
            <button
              className={`cursor-pointer rounded-xl border border-gray-400  py-2 px-4 m-2  shadow `}
              style={{ background: showFilter ? "#e26959" : "" }}
              onClick={() => handleChooseFilter("place")}
            >
              {" "}
              <h3>Find Events by States</h3>{" "}
            </button>
          </div>
          <div className="filter-option">
            {showFilter &&
              !isLoading &&
              states.map((state, index) => (
                <div
                  key={index}
                  onClick={() => handleStateEvents(state)}
                  className="filter-options-tabs"
                  style={
                    chosenData && chosenData.data === state
                      ? { background: "#e26959", color: "white" }
                      : { background: "", color: "" }
                  }
                >
                  <p>{state}</p>
                </div>
              ))}
          </div>

          <div className="cp_cardsdiv">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {searchLoading && <Loading />}
                {!searchLoading &&
                  sortEventsByPlaces(
                    eventsData,
                    chosenFilter,
                    chosenData,
                    "Eventlocation",
                  ).map((event) => {
                    return (
                      <SingleClubEvent
                        key={event?._id}
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

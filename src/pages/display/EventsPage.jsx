import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";
import SingleClubEvent from "../../components/SingleClubEvent";
import useSWR from "swr";
import { defaultfetcher } from "../../utils/fetcher";
import { filter } from "../../utils/filter";
import states from "./StatesData";
import Button from "../../components/Button";
import { showErrorToast } from "../../utils/showToast";

const EventsPage = () => {
  const { data: eventsData, isLoading } = useSWR(
    `${import.meta.env.VITE_MILANAPI}/display/allevents`,
    defaultfetcher,
  );

  const [filterState, setFilterState] = useState({
    chosenFilter: "",
    showFilter: false,
    chosenData: {},
    searchLoading: false,
  });

  const { chosenFilter, showFilter, chosenData, searchLoading } = filterState;

  const handleStateEvents = (state) => {
    if (chosenData && chosenData.data === state) {
      setFilterState((prevState) => ({
        ...prevState,
        chosenData: {},
        chosenFilter: "place",
      }));
    } else {
      setFilterState((prevState) => ({
        ...prevState,
        chosenData: { data: state },
        chosenFilter: "place",
      }));
    }
  };

  const handleChooseFilter = (type) => {
    if (type === "place") {
      setFilterState((prevState) => ({
        ...prevState,
        chosenFilter: "",
        showFilter: !prevState.showFilter,
      }));
    }
    if (type === "location") {
      if (chosenFilter === "location") {
        setFilterState((prevState) => ({
          ...prevState,
          chosenFilter: "",
          showFilter: false,
        }));
      } else {
        getPositionFilter();
        setFilterState((prevState) => ({
          ...prevState,
          chosenFilter: "location",
          showFilter: false,
        }));
      }
    }
  };

  const getPositionFilter = async () => {
    try {
      setFilterState((prevState) => ({
        ...prevState,
        searchLoading: true,
      }));

      const permissionStatus = await navigator.permissions.query({
        name: "geolocation",
      });

      if (permissionStatus.state === "denied") {
        setFilterState((prevState) => ({
          ...prevState,
          chosenData: {
            data: {
              lat: 0,
              lon: 0,
            },
          },
        }));
      }

      const position = await getPosition();

      setFilterState((prevState) => ({
        ...prevState,
        chosenData: {
          data: {
            lat: position?.coords.latitude,
            lon: position?.coords.longitude,
          },
        },
      }));
    } catch (error) {
      showErrorToast("Error getting location");
    } finally {
      setFilterState((prevState) => ({
        ...prevState,
        searchLoading: false,
      }));
    }
  };

  const getPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
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
              <p className="cp_header1">Events happening now!</p>
              <p className="cp_header2">
                All our partnered NGOs host various events, be it educational,
                cleaning mother earth, funding events, health camps, and many
                more!
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
            <Button
              variant="outline"
              className="cursor-pointer border py-2 px-4 m-2 font-semibold shadow"
              onClick={() => handleChooseFilter("location")}
              style={
                chosenFilter === "location"
                  ? { background: "#e26959", color: "white" }
                  : { background: "white", color: "#e26959" }
              }
            >
              <h3>Find Events near You</h3>
            </Button>
            <Button
              variant="outline"
              className="cursor-pointer border  py-2 px-4 m-2 font-semibold shadow"
              style={
                showFilter
                  ? { background: "#e26959", color: "white" }
                  : { background: "white", color: "#e26959" }
              }
              onClick={() => handleChooseFilter("place")}
            >
              <h3>Find Events by States</h3>
            </Button>
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
                  filter(
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

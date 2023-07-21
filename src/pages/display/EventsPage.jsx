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
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

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
    setFilterState((prevState) => ({
      ...prevState,
      chosenData: prevState.chosenData.data === state ? {} : { data: state },
      chosenFilter: "place",
    }));
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

      if (permissionStatus.state !== "granted") {
        setFilterState((prevState) => ({
          ...prevState,
          chosenData: {},
          searchLoading: true,
        }));
      }

      const position = await getPosition();

      setFilterState((prevState) => ({
        ...prevState,
        chosenData: {
          data: {
            lat: position?.coords?.latitude,
            lon: position.coords.longitude,
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
      <Navbar />
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
              variant="outlined"
              className="mx-2 nav_signin_btn"
              style={{
                background: chosenFilter === "location" ? "#e26959" : "",
              }}
              onClick={() => handleChooseFilter("location")}
            >
              <h4>Find Events near You</h4>
            </Button>
            <Button
              variant="outlined"
              className="mx-2 nav_signin_btn"
              style={{ background: showFilter ? "#e26959" : "" }}
              onClick={() => handleChooseFilter("place")}
            >
              <h4>Find Events by States</h4>
            </Button>
          </div>
          <div className="filter-option">
            {showFilter &&
              !isLoading &&
              states.map((state, index) => (
                <Button
                  variant="outlined"
                  className="nav_signin_btn"
                  style={{
                    background:
                      chosenData && chosenData.data === state ? "#e26959" : "",
                  }}
                  key={index}
                  onClick={() => handleStateEvents(state)}
                >
                  {state}
                </Button>
              ))}
          </div>

          <div className="cp_cardsdiv">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {searchLoading && <Loading />}
                {!searchLoading &&
                  (() => {
                    const filteredEvents = filter(
                      eventsData,
                      chosenFilter,
                      chosenData,
                      "Eventlocation",
                    );
                    if (filteredEvents.length === 0) {
                      return <p className="cp_header2">No Events Found</p>;
                    } else {
                      return filteredEvents.map((event) => (
                        <SingleClubEvent
                          key={event?._id}
                          event={event}
                          type="events"
                        />
                      ));
                    }
                  })()}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsPage;

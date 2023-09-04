/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../../components/Loading";
import SingleClubEvent from "../../../components/Cards/SingleClubEvent/SingleClubEvent";
import useSWR from "swr";
import { defaultfetcher } from "../../../utils/Fetcher";
import { filter } from "../../../utils/Filter";
// import states from "./StatesData";
import { showErrorToast } from "../../../utils/Toasts";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import ComingSoon from "../../../components/Cards/ComingSoon/ComingSoon";
import Header from "../../../components/PageHeader/Header";
import { eventEndpoints } from "../../../assets/data/ApiEndpoints";

const Events = () => {
  const { data: eventsData, isLoading } = useSWR(
    eventEndpoints.all,
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
        <ComingSoon launchitem={`event's page.`} />
        <div className="clubspage_main_parent">
          {/* <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="outline"
              className="mx-2 "
              style={{
                background: chosenFilter === "location" ? "#e26959" : "",
              }}
              onClick={() => handleChooseFilter("location")}
            >
              <h4>Find Events near You</h4>
            </Button>
            <Button
              variant="outline"
              className="mx-2 "
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
                  variant="outline"
                  className=""
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
          </div> */}

          <div className="clubspage_cardsdiv">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {/* {searchLoading && <Loading />}
                {!searchLoading &&
                  (() => {
                    const filteredEvents = filter(
                      eventsData,
                      chosenFilter,
                      chosenData,
                      "Eventlocation",
                    );
                    if (filteredEvents?.length === 0) {
                      return (
                        <p className="clubspage_header2">No Events Found</p>
                      );
                    } else {
                      return filteredEvents?.map((event) => (
                        <SingleClubEvent
                          key={event?._id}
                          item={event}
                          type="events"
                        />
                      ));
                    }
                  })()} */}
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

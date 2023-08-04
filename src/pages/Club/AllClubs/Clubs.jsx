/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useSWR from "swr";
import { defaultfetcher } from "../../../utils/fetcher";
import Navbar from "../../../components/Navbar/Navbar";
import Loading from "../../../components/Loading";
import SingleClubEvent from "../../../components/Cards/SingleClubEvent/SingleClubEvent";
import Footer from "../../../components/Footer/Footer";
import { filter } from "../../../utils/filter";
import { showErrorToast } from "../../../utils/Toasts";
import "./Clubs.css";

const Clubs = () => {
  const { data: clubData, isLoading } = useSWR(
    `${import.meta.env.VITE_MILANAPI}/display/clubs`,
    defaultfetcher,
  );

  const [filterState, setFilterState] = useState({
    chosenFilter: "",
    showFilter: false,
    chosenData: {},
    searchLoading: false,
  });

  const { chosenFilter, showFilter, chosenData, searchLoading } = filterState;

  const handleStateClubs = (state) => {
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
        <title>Milan | Clubs</title>
        <meta
          name="description"
          content="These are the clubs and communities you can follow. You can attend charity/club events and even get notified about them once you subscribe!"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <Navbar />

      <div className="container">
        <div className="clubspage_main_parent">
          <div className="clubspage_subparent">
            <div className="clubspage_textdiv">
              <h1 className="clubspage_header1">
                Caring Hands, Changing Futures.
              </h1>
              {window.innerWidth < 800 ? (
                <p className="clubspage_header2">
                  Discover and follow Charities, NGOs, and Organizations to
                  attend events and get notified after subscribing.
                </p>
              ) : (
                <p className="clubspage_header2">
                  Here are some of the Charities, NGOs and Organizations you can
                  follow. You can attend charity/club events and even get
                  notified about them once you subscribe to them!
                </p>
              )}
            </div>
          </div>
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
                  <h4>Find Clubs near You</h4>
                </Button>
                <Button
                  variant="outline"
                  className="mx-2 "
                  style={{ background: showFilter ? "#e26959" : "" }}
                  onClick={() => handleChooseFilter("place")}
                >
                  <h4>Find Clubs by States</h4>
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
                      onClick={() => handleStateClubs(state)}
                    >
                      {state}
                    </Button>
                  ))}
              </div>
    
              <div className="clubspage_cardsdiv">
                {isLoading ? (
                  <Loading />
                ) : (
                  <>
                    {searchLoading && <Loading />}
                    {!searchLoading &&
                      (() => {
                        const filteredClubs = filter(
                          clubData,
                          chosenFilter,
                          chosenData,
                          "address",
                        );
                        if (filteredClubs.length === 0) {
                          return <p className="clubspage_header2">No Clubs Found</p>;
                        } else {
                          return filteredClubs.map((club) => (
                            <SingleClubEvent key={club?._id} club={club} />
                          ));
                        }
                      })()}
                  </>
                )}
              </div> */}

          <div className="clubspage_cardsdiv">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {searchLoading && <Loading />}
                {!searchLoading &&
                  (() => {
                    const filteredClubs = filter(
                      clubData,
                      chosenFilter,
                      chosenData,
                      "address",
                    );
                    if (filteredClubs.length === 0) {
                      return (
                        <p className="clubspage_header2">No Clubs Found</p>
                      );
                    } else {
                      return filteredClubs.map((club) => (
                        <SingleClubEvent key={club?._id} club={club} />
                      ));
                    }
                  })()}
              </>
            )}
          </div>

          {/* <div className="clubspage_cardsdiv">
            <SingleClubEvent />
            <SingleClubEvent />
            <SingleClubEvent />
            <SingleClubEvent />
            <SingleClubEvent />
            <SingleClubEvent />
            <SingleClubEvent />
            <SingleClubEvent />
          </div> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Clubs;

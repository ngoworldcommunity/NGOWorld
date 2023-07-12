import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";
import SingleClubEvent from "../../components/SingleClubEvent";
import useSWR from "swr";
import { defaultfetcher } from "../../utils/fetcher";
import { filter } from "../../utils/filter";
import states from "./StatesData";
import Button from "../../components/Button";
import { showErrorToast } from "../../utils/showToast";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


const ClubsPage = () => {
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
        <div className="cp_main_parent">
          <div className="cp_subparent">
            <div className="cp_textdiv">
              <p className="cp_header1">Clubs and communities!</p>
              <p className="cp_header2">
                Here are some clubs you can follow. You can attend charity/club
                events and even get notified about them once you subscribe!
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
              onClick={() => handleChooseFilter("location")}
              style={
                chosenFilter === "location"
                  ? { background: "#e26959", color: "white" }
                  : { background: "white", color: "#e26959" }
              }
              className="mx-2"
              id="landingpage-club-signup"
            >
              <h4>Find Clubs near You</h4>
            </Button>
            <Button
              variant="outline"
              id="landingpage-club-signup"
              className="mx-2"
              onClick={() => handleChooseFilter("place")}
              style={
                showFilter
                  ? { background: "#e26959", color: "white" }
                  : { background: "white", color: "#e26959" }
              }
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
                  id="landingpage-club-signup"
                  key={index}
                  onClick={() => handleStateClubs(state)}
                  style={
                    chosenData && chosenData.data === state
                      ? { background: "#e26959", color: "white" }
                      : { background: "white", color: "#e26959" }
                  }
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
                  filter(clubData, chosenFilter, chosenData, "address").map(
                    (club) => <SingleClubEvent key={club?._id} club={club} />,
                  )}
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ClubsPage;

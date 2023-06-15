import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";
import SingleClubEvent from "../../components/SingleClubEvent";
import useSWR from "swr";
import { defaultfetcher } from "../../utils/fetcher";
import { sortEventsByPlaces } from "../../helper";
import states from "./StatesData";

const ClubsPage = () => {
  const { data: clubData, isLoading } = useSWR(
    `${import.meta.env.VITE_MILANAPI}/display/clubs`,
    defaultfetcher,
  );

  const [chosenFilter, setChosenFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [chosenData, setChosenData] = useState({});
  const [searchLoading, setSearchLoading] = useState(false);

  const handleStateClubs = (state) => {
    //if a state is already chosen then it will be deselected
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
    // navigator.geolocation.getCurrentPosition is asynchronous function
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
        <title>Milan | Clubs </title>
        <meta
          name="description"
          content="These are the clubs and communities you can follow, you can attend charity/club events and even get notified about it once you subscribe !"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className="container">
        <div className="cp_main_parent">
          <div className="cp_subparent">
            <div className="cp_textdiv">
              <p className="cp_header1">Clubs and communities !</p>
              <p className="cp_header2">
                Here are some clubs you can follow, you can attend charity/club
                events and even get notified about it once you subscribe !
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
              className="cursor-pointer border border-gray-400  py-2 px-4 m-2 font-semibold shadow"
              onClick={() => handleChooseFilter("location")}
              style={{
                background: chosenFilter === "location" ? "#e26959" : "",
              }}
            >
              {" "}
              <h3>Find Clubs near You</h3>{" "}
            </button>
            <button
              className={`cursor-pointer  border border-gray-400  py-2 px-4 m-2 font-semibold shadow `}
              style={{ background: showFilter ? "#e26959" : "" }}
              onClick={() => handleChooseFilter("place")}
            >
              {" "}
              <h3>Find Clubs by States</h3>{" "}
            </button>
          </div>
          <div className="filter-option">
            {showFilter &&
              !isLoading &&
              states.map((state, index) => (
                <div
                  key={index}
                  onClick={() => handleStateClubs(state)}
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
                    clubData,
                    chosenFilter,
                    chosenData,
                    "address",
                  ).map((club) => {
                    return <SingleClubEvent key={club?._id} club={club} />;
                  })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubsPage;

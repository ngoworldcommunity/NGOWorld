import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";
import SingleClubEvent from "../../components/SingleClubEvent";
import useSWR from "swr";
import { defaultfetcher } from "../../utils/fetcher";
import { sortEventsByCity } from "../../helper";

const cities = [
  "Kolkata",
  "New Delhi",
  "Goa",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
];

const ClubsPage = () => {
  const { data: clubData, isLoading } = useSWR(
    `https://milan-server.vercel.app/display/clubs`,
    defaultfetcher,
  );
  const [chosenCity, setChosenCity] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  // let city_arr = [];
  // console.log(clubData);
  // for (let club in clubData) {
  //   console.log(club);
  //   city_arr.push(clubData[club].address);
  // }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCityEvents = (city) => {
    console.log(city);
    chosenCity.push(city);
    setChosenCity([...chosenCity]);
    // setChosenCity(city);
    // setShowFilter(false);
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

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
          <div>
            <button
              className="bg-black-500 cursor-pointer border  py-2 px-4 font-semibold text-gray-800 shadow "
              onClick={() => handleShowFilter()}
            >
              {" "}
              <h3>Filter</h3>{" "}
              <span className="pt-3 pl-4">{/* <BsFillFunnelFill /> */}</span>
            </button>

            <div className="filter-option">
              {showFilter &&
                !isLoading &&
                cities.map((city, index) => (
                  <div
                    key={index}
                    onClick={() => handleCityEvents(city)}
                    className="filter-options-tabs"
                  >
                    <p>{city}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="cp_cardsdiv">
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {clubData.length > 0 &&
                sortEventsByCity(clubData, chosenCity, "clubs").length > 0
                  ? sortEventsByCity(clubData, chosenCity, "clubs").map(
                      (club) => {
                        return <SingleClubEvent key={club?._id} club={club} />;
                      },
                    )
                  : "No data"}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubsPage;

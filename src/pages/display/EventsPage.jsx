import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Loading from "../../components/Loading";
import SingleClubEvent from "../../components/SingleClubEvent";
import useSWR from "swr";
import { defaultfetcher } from "../../utils/fetcher";
import { sortEventsByCity } from "../../helper";

const cities = [
  "Saltlake Stadium",
  "New Delhi",
  "Goa",
  "Wankahde",
  "Bangalore",
  "Hyderabad",
  "Chennai",
];
const EventsPage = () => {
  const { data: eventsData, isLoading } = useSWR(
    `https://milan-server.vercel.app/display/allevents`,
    defaultfetcher,
  );

  const [chosenCity, setChosenCity] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  // const [cities, setCities] = useState([]);
  // let city_arr = [];
  // console.log(eventsData);
  // for (let event in eventsData) {
  //   console.log(event);
  //   city_arr.push(eventsData[event].Eventlocation);
  // }
  // useEffect(() => {
  //   console.log(eventsData);
  //   if (!isLoading) {
  //     let city_arr = [];
  //     for (let event in eventsData) {
  //       console.log(event);
  //       city_arr.push(event.Eventlocation);
  //     }
  //     console.log(city_arr);

  //     setCities(city_arr);
  //   }
  // }, [isLoading]);

  const handleCityEvents = (city) => {
    chosenCity.push(city);
    console.log(chosenCity);
    setChosenCity([...chosenCity]);
    // setChosenCity(city);
    // setShowFilter(false);
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
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
          <div>
            <button
              className="bg-black-500 flex cursor-pointer items-stretch rounded-xl border border-gray-400 bg-gray-100 py-2 px-4 font-semibold text-gray-800 shadow "
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
                {eventsData &&
                  sortEventsByCity(eventsData, chosenCity, "events").map(
                    (event) => {
                      return (
                        <SingleClubEvent
                          key={event?._id}
                          event={event}
                          type="events"
                        />
                      );
                    },
                  )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsPage;

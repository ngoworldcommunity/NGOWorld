// import React, { useEffect, useState } from "react";
// import "../../styles/ClubsPage.css";
// // import { Navbar, Footer, SingleEvent } from "../../components";
// import SingleEvent from "../../components/SingleEvent";
// import { GetAllEvents } from "../../service/MilanApi";
// import Eventspic from "../../assets/pictures/EventsPagefloating.svg";
// import "../../styles/EventsPage.css";
// import Loading from "../../components/Loading";

// const EventsPage = () => {
//   document.title = "Milan | Events";
//   const [eventsData, setEventsData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const fetcheventsData = async () => {
//       setLoading(true);
//       const response = await GetAllEvents();
//       setEventsData(response);
//       setLoading(false);
//     };
//     fetcheventsData();
//   }, []);

//   return (
//     <>

//       <div
//         id="event_banner"
//         className="container d-flex flex-column flex-lg-row text-center text-lg-start"
//       >
//         <div id="eventCol_2" className="d-none d-sm-block">
//           <img src={Eventspic} alt="" className="event_image" />
//         </div>

//         <div
//           id="eventCol_1"
//           className="d-flex flex-column justify-content-center me-lg-5 ms-lg-3"
//         >
//           <h1 className="mb-4">Welcome to the events page !!</h1>
//           <p>
//             All our partnered NGOs , hosts various events be it educational,
//             cleaning mother earth, funding events, health camps and many more !!
//           </p>
//           <p>Join us at the events, and help the community !</p>
//         </div>
//       </div>

//       <hr className="container" />

//       <div className="container main-card-container">
//         <div className="cards">
//           {loading ? (
//             <Loading />
//           ) : (
//             <>
//               {" "}
//               {eventsData.map((club) => {
//                 return <SingleEvent key={club._id} club={club} />;
//               })}
//             </>
//           )}
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default EventsPage;

import React, { useEffect, useState } from "react";
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

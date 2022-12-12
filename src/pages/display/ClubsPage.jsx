// import React, { useEffect, useState } from 'react';
// import SingleClub from '../../components/SingleClub';
// import '../../styles/ClubsPage.css';
// import clubs_banner from '../../assets/pictures/clubs-banner.svg';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
// import { GetAllClubs } from '../../service/MilanApi';
// import Loading from '../../components/Loading';

// const ClubsPage = () => {
//   document.title = 'Milan | Clubs';
//   const [clubData, setClubData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchClubData = async () => {
//       setLoading(true);
//       const response = await GetAllClubs();
//       setClubData(response);
//       setLoading(false);
//     };
//     fetchClubData();
//   }, []);

//   return (
//     <>

//       <div id="clubs_banner" className="container">
//         <div id="clubsCol2">
//           <img src={clubs_banner} alt="clubs banner" className="clubs_img" />
//         </div>

//         <div
//           id="clubscol_1"
//           className="d-flex flex-column justify-content-center align-items-start"
//         >
//           <h1 className="mb-2">Clubs and communities !</h1>
//           <p>
//             Here are some clubs you can follow, you can attend club events and
//             even get notified about it once you subscribe !
//           </p>
//         </div>
//       </div>

//       <hr className="container" />

//       <div className="container main-card-container">
//         <div className="cards">
//           {loading ? (
//             <Loading />
//           ) : (
//             <>
//               {clubData.map((club) => {
//                 return <SingleClub key={club._id} club={club} />;
//               })}
//             </>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ClubsPage;

import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import SingleClubEvent from "../../components/SingleClubEvent";
import { GetAllClubs } from "../../service/MilanApi";

const ClubsPage = () => {
  const [clubData, setClubData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchClubData = async () => {
    setLoading(true);
    const response = await GetAllClubs();
    setClubData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchClubData();
  }, []);

  return (
    <>
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

          <div className="cp_cardsdiv">
            {loading ? (
              <Loading />
            ) : (
              <>
                {clubData.map((club) => {
                  return <SingleClubEvent key={club._id} club={club} />;
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

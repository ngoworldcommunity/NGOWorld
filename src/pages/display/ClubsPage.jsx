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

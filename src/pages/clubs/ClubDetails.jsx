import React, { useEffect, useState } from "react";
import club_details_img from "../../assets/pictures/clubpage-group-discussion.svg";
import "../../styles/ClubDetails.css";
import { useParams } from "react-router-dom";
import { getClubDetails } from "../../service/MilanApi";

function ClubDetailsCard() {
  const params = useParams();
  const [clubdetails, setclubdetails] = useState();

  const getclubdetails = async () => {
    const data = await getClubDetails(params.id);
    setclubdetails(data);
  }

  useEffect(() => {
    getclubdetails()

  }, []);

  return (
    <div className="club_details">
      <div className="club_details_img">
        <img src={club_details_img} />
      </div>
      <div className="club_details_card">
        <div>
          <h1>Welcome to {clubdetails?.name}</h1>
          <h2> {clubdetails?.tagLine} </h2>
          <h6>
            <span>📌</span> {clubdetails?.address}
          </h6>
          <p>
            {clubdetails?.description}
          </p>

          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default ClubDetailsCard;

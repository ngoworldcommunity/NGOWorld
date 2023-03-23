import * as React from "react";
import ClubUpperImage from "../assets/pictures/ClubUpperImage.svg";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "../styles/ClubsPage.css";
import displayRazorpay from "../service/PaymentGateway";

export default function SingleClubEvent({ club, type, event }) {
  const [money, setmoney] = React.useState({ donatedmoney: 0 });

  const location = useLocation();
  const nav = useNavigate();

  const cardButtonHandler = () => {
    nav(`/clubs/${club._id}`);
  };
  const expand = () => {
    document.getElementById(`less${club._id}`).classList.add("hidden");
    document.getElementById(`more${club._id}`).classList.remove("hidden");
  };

  const contract = () => {
    document.getElementById(`more${club._id}`).classList.add("hidden");
    document.getElementById(`less${club._id}`).classList.remove("hidden");
  };

  const handleChange = (e) => {
    setmoney({ ...money, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    displayRazorpay(money);
  };

  return (
    <>
      <div className="cp_card" onClick={cardButtonHandler}>
        <div className="cp_card_imgdiv">
          <img src={ClubUpperImage} alt="" />
        </div>
        <div className="cp_card_textdiv">
          <p className="cp_card_name">
            {type === "events" ? event.Eventname : club.name}
          </p>
          <p className="cp_card_tag">
            {type === "events" ? event.Eventdate : club.tagLine}
          </p>
          <p className="cp_card_address">
            {type === "events" ? event.Eventlocation : null}
          </p>
          {/* <p className='cp_card_tag' >{type === "events" ? event.Eventdescription : club.tagLine}</p> */}
          <button className="cp_card_button">View</button>
        </div>
      </div>
    </>
  );
}

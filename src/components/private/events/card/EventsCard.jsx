/* eslint-disable no-unused-vars */
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { Button } from "../../../shared";
import "./EventsCard.scss";

const EventsCard = ({ event }) => {
  return (
    <div className="eventcard_container">
      <div className="eventcard_parent">
        <img
          src="https://earth5r.org/wp-content/uploads/2020/07/World-Environment-Day-Mumbai-India-Environmental-NGO-CSR-Earth5R-1230x767.jpg"
          alt=""
        />

        <div className="eventcard_body">
          <p>Heritage & Haunted places - whole night city tour</p>

          <div className="eventcard_datetime">
            <span>
              <CiLocationOn
                style={{
                  opacity: "1",
                }}
              />{" "}
              Kolkata Police Head Quarter Lalbazar
            </span>
            <span>
              <CiCalendar /> 12th Feb
            </span>
            <span>
              <CiClock2 /> 07:45 PM
            </span>
          </div>

          <div className="eventcard_datetime_mobile">
            <div>
              <span>
                <CiLocationOn
                  style={{
                    opacity: "1",
                  }}
                />{" "}
                Kolkata Police Head Quarter Lalbazar
              </span>
            </div>

            <div>
              <CiCalendar />
              <span>Tues, 12th Feb at 07:45 PM</span>
            </div>
          </div>

          <div className="eventcard_ctadiv">
            <Button>Attend</Button>
            <div className="eventcard_sharebutton">
              <IoShareSocialOutline />
            </div>
          </div>
        </div>
      </div>

      <div className="eventcard_ctadiv_mobile">
        <Button>Attend</Button>
        <div className="eventcard_sharebutton">
          <IoShareSocialOutline />
        </div>
      </div>
    </div>
  );
};

export default EventsCard;

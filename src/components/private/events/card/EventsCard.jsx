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
          src="https://scontent.fccu31-2.fna.fbcdn.net/v/t39.30808-6/428497334_811916017617587_2791842027431671034_n.jpg?stp=c0.5.315.150a_dst-jpg_p235x165&_nc_cat=108&ccb=1-7&_nc_sid=d8d9c5&_nc_ohc=1jlXjOYvChsAX8flJoP&_nc_ht=scontent.fccu31-2.fna&oh=00_AfDpTe8iH6_GTEVKTfaAvf2bphy2dLl3moHqWH2344IOww&oe=65DF8F92"
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

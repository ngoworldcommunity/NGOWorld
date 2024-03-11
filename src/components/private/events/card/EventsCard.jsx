/* eslint-disable no-unused-vars */
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showErrorToast } from "../../../../utils/Toasts";
import getFormattedDate from "../../../../utils/getFormattedDate";
import { Button } from "../../../shared";
import "./EventsCard.scss";

const EventsCard = ({ event }) => {
  console.log("🚀 ~ EventsCard ~ event:", event?.startTime);
  const userType = useSelector((state) => state.user.userType);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const eventStartTime = new Date(event?.startTime);
  const formattedStartTime = eventStartTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formatttedStartDate = getFormattedDate(event?.startDate);

  const attendHandler = () => {
    if (isLoggedIn) {
      navigate("/events/attend");
    } else {
      showErrorToast("Please login to attend the event");
      setTimeout(() => {
        navigate("/auth/login");
      }, 1600);
    }
  };

  return (
    <>
      <div className="eventcard_container">
        <div className="eventcard_parent">
          <img
            src="https://earth5r.org/wp-content/uploads/2020/07/World-Environment-Day-Mumbai-India-Environmental-NGO-CSR-Earth5R-1230x767.jpg"
            alt=""
          />

          <div className="eventcard_body">
            <p>{event?.name}</p>

            <div className="eventcard_datetime">
              <span>
                <CiLocationOn
                  style={{
                    opacity: "1",
                  }}
                />{" "}
                {event?.address}
              </span>
              <span>
                <CiCalendar /> {formatttedStartDate}
              </span>
              <span>
                <CiClock2 /> {formattedStartTime}
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
                <span>
                  {formatttedStartDate} at {formattedStartTime}
                </span>
              </div>
            </div>

            <div className="eventcard_ctadiv">
              <Button onClickfunction={attendHandler}>Attend</Button>
              <div className="eventcard_sharebutton">
                <IoShareSocialOutline />
              </div>
            </div>
          </div>
        </div>

        <div className="eventcard_ctadiv_mobile">
          <Button onClickfunction={attendHandler}>Attend</Button>
          <div className="eventcard_sharebutton">
            <IoShareSocialOutline />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsCard;

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
          <img src={event?.coverImage} alt="" />

          <div className="eventcard_body">
            <p>{event?.name}</p>

            <div className="eventcard_datetime">
              {event?.mode === "Offline" ? (
                <span>
                  <CiLocationOn
                    style={{
                      opacity: "1",
                    }}
                  />{" "}
                  {event?.address}
                </span>
              ) : (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={
                      event?.platform === "Zoom"
                        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxhRNvMDVHn8fw7gbZLmN9sM_ppNEb3AnAsBrlGFyK_13ofG6ofodBfnCXuUEwje-MpA"
                        : event?.platform === "Google Meet"
                          ? "https://img.icons8.com/color/48/000000/google-meet.png"
                          : event?.platform === "Microsoft Teams"
                            ? "https://img.icons8.com/color/48/000000/microsoft-teams.png"
                            : "https://img.icons8.com/color/48/000000/other.png"
                    }
                    alt=""
                    style={{
                      width: "15px",
                      height: "15px",
                      minHeight: "15px",
                    }}
                  />
                  {event.platform}
                </span>
              )}

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
                  {event?.address}
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

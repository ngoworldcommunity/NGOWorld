/* eslint-disable no-unused-vars */
import { CiCalendar, CiLocationOn } from "react-icons/ci";
import { PiBellRingingBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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

  const formattedStartDate = getFormattedDate(event?.startDate);

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
      <div className="eventcard_parent">
        <div className="eventcard_top">
          <img src={event?.coverImage} alt="" />
          <div className="eventcard_text">
            <h1>{event?.name}</h1>

            <div className="eventcard_datetime">
              {event?.mode === "Offline" ? (
                <span>
                  <CiLocationOn /> {event?.address}
                </span>
              ) : (
                <span>
                  <img
                    src={
                      event?.platform === "Zoom Meeting"
                        ? "https://image.similarpng.com/very-thumbnail/2021/10/Zoom-icon-design-on-transparent-background-PNG.png"
                        : event?.platform === "Google Meet"
                          ? "https://img.icons8.com/color/48/000000/google-meet.png"
                          : event?.platform === "Microsoft Teams"
                            ? "https://img.icons8.com/color/48/000000/microsoft-teams.png"
                            : "https://img.icons8.com/color/48/000000/other.png"
                    }
                    alt=""
                    style={{
                      position: "relative",
                      top: "1px",
                    }}
                  />
                  {event.platform}
                </span>
              )}

              <span>
                <CiCalendar />{" "}
                {window?.innerWidth > 500
                  ? formattedStartDate + " from " + formattedStartTime
                  : formattedStartDate.split(" ")[0] +
                    " " +
                    formattedStartDate.split(" ")[1].substring(0, 3) +
                    "," +
                    " " +
                    formattedStartTime}
              </span>
            </div>
          </div>
        </div>

        <div className="eventcard_ctadiv">
          <div className="cta_membersdiv">
            <div className="cta_members">
              <img
                src="https://www.thetechies.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser3.04b79840.webp&w=640&q=75"
                alt=""
              />
              <img
                src="https://www.thetechies.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser3.04b79840.webp&w=640&q=75"
                alt=""
              />
              <img
                src="https://www.thetechies.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fuser3.04b79840.webp&w=640&q=75"
                alt=""
              />
            </div>
            <p>200+ Going</p>
          </div>

          {window.innerWidth > 500 ? (
            <Button
              variant="solid"
              to={`/club/${event?.userName}`}
              className="eventcard_readmore"
            >
              Attend <PiBellRingingBold />
            </Button>
          ) : (
            <Link to={`/club/${event?.userName}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 29 29"
                fill="none"
                className="eventcard_cta_arrow"
              >
                <path
                  d="M22.6379 1.68188C23.2552 1.68226 23.8472 1.92766 24.2837 2.36418C24.7202 2.80069 24.9656 3.39262 24.966 4.00994L24.966 22.6784C24.9656 23.2957 24.7202 23.8877 24.2837 24.3242C23.8472 24.7607 23.2552 25.0061 22.6379 25.0065L3.96944 25.0065C3.36618 24.9848 2.7948 24.7302 2.3754 24.296C1.956 23.8619 1.72123 23.2821 1.72043 22.6784C1.72123 22.0748 1.956 21.4949 2.3754 21.0608C2.79481 20.6266 3.36618 20.372 3.96943 20.3503L17.0154 20.3503L0.675002 4.00994C0.238132 3.57307 -0.00729571 2.98055 -0.00729703 2.36273C-0.00729566 1.7449 0.238133 1.15238 0.675002 0.715508C1.11187 0.278639 1.7044 0.0332108 2.32222 0.0332088C2.94005 0.0332095 3.53257 0.278639 3.96944 0.715508L20.3098 17.0559L20.3098 4.00994C20.3102 3.39262 20.5556 2.80069 20.9921 2.36418C21.4286 1.92766 22.0206 1.68226 22.6379 1.68188Z"
                  fill="white"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default EventsCard;

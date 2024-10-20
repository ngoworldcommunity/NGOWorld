import { selectUser } from "@redux/slice/userSlice";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useSWR from "swr";
import EventsMarqueeCards from "../../components/private/events/marquee/EventsMarqueeCards";
import { Button, Navbar, ProfileCompletion } from "../../components/shared";
import { eventEndpoints } from "../../integrations/ApiEndpoints";
import { fetchDashboard } from "../../service/MilanApi";
import { defaults } from "../../static/Constants";
import fetcher from "../../utils/Fetcher";
import convertToBase64 from "../../utils/convertToBase64";
import "./Dashboard.scss";

const Dashboard = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [coverImage, setCoverImage] = useState("");
  const [logo, setLogo] = useState("");
  const user = useSelector(selectUser);
  const { data } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboard,
    refetchOnMount: false,
    retry: 2,
  });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    const content = document.getElementsByClassName("about_content_text")[0];

    if (isExpanded) {
      content.style.display = "";
      content.style.webkitLineClamp = "";
      content.style.webkitBoxOrient = "";
      content.style.overflow = "";
    } else {
      content.style.display = "-webkit-box";
      content.style.webkitLineClamp = "3";
      content.style.webkitBoxOrient = "vertical";
      content.style.overflow = "hidden";
    }
  };

  const { data: events } = useSWR(eventEndpoints.all, fetcher);

  const handleUpdateProfile = () => {
    console.log("Update Profile");
  };

  const handleCreateDashboardImage = useCallback(async (e) => {
    if (!e || !e.target || !e.target.files[0]) return;
    const base64 = await convertToBase64(e);
    setCoverImage(base64);
    e.target.value = "";
  }, []);

  const handleCreateLogoImage = useCallback(async (e) => {
    if (!e || !e.target || !e.target.files[0]) return;
    const base64 = await convertToBase64(e);
    setLogo(base64);
    e.target.value = "";
  }, []);

  return (
    <>
      <Navbar />

      {user?.userType === "club" && !user?.tagLine && <ProfileCompletion />}

      <div className="dashboard_container">
        <div className="dashboard_parent">
          <div className="dashboard_header">
            <img
              src={coverImage || defaults.coverImage}
              className="coverimage"
              alt=""
            />
            {/* <input
              type="file"
              id="coverimage-input"
              className="coverimage_input"
              name="coverImage"
              onChange={handleCreateDashboardImage}
            /> */}

            {/* <label htmlFor="coverimage-input">
              <MdOutlineEdit className="edit_icon" />
            </label> */}

            <div className="details">
              <div className="logo_div">
                <img src={logo || defaults.logo} alt="" className="logo" />
                {/* <input
                  type="file"
                  id="logo-input"
                  className="coverimage_input"
                  name="coverImage"
                  onChange={handleCreateLogoImage}
                />
                <label htmlFor="logo-input">
                  <MdOutlineEdit className="edit_icon logo_edit_icon" />
                </label>{" "} */}
              </div>

              <div className="header">
                <div className="name">
                  <h1 className="profile_header_name dashboard_heading">
                    {data?.name}{" "}
                  </h1>
                  {data?.tagline ? (
                    <h2 className="profile_header_tagline">{data?.tagline}</h2>
                  ) : (
                    <h2
                      className="profile_header_tagline"
                      style={{ opacity: 0 }}
                    >
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit cum laudantium
                    </h2>
                  )}
                </div>
                <Button
                  variant="solid"
                  className="cta"
                  onClickfunction={handleUpdateProfile}
                >
                  {coverImage !== "" || logo !== "" ? (
                    <>
                      <AiOutlineSave />
                      Save Changes
                    </>
                  ) : (
                    <>
                      <MdOutlineEdit />
                      Edit profile
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          <div className="header_mobile">
            <div className="name">
              <h1 className="profile_header_name">{data?.name} </h1>
              {data?.tagline ? (
                <h2 className="profile_header_tagline">{data?.tagline}</h2>
              ) : (
                <h2 className="profile_header_tagline" style={{ opacity: 0 }}>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit cum laudantium
                </h2>
              )}
            </div>
            <Button
              variant="solid"
              className="cta"
              onClickfunction={handleUpdateProfile}
            >
              <FiEdit3 />
              Edit profile
            </Button>
          </div>

          <div className="dashboard_body">
            {data?.description && (
              <div className="about">
                <h1 className="dashboard_heading">About Us</h1>
                <div className="about_content">
                  <p
                    className={`about_content_text ${
                      isExpanded ? "expanded" : ""
                    }`}
                  >
                    {data?.description}
                  </p>
                  <div className="readmore_div">
                    {!isExpanded && (
                      <span
                        onClick={toggleExpand}
                        className="readmore_div_span"
                      >
                        . . . Read More
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {data?.events && (
              <div className="events">
                <h1 className="dashboard_heading">Events Hosted</h1>

                <div className="events_grid">
                  {events?.map((event, id) => (
                    <EventsMarqueeCards event={event} key={id} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

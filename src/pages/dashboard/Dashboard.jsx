import TrackSection from "@components/private/dashboard/TrackSection";
import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navbar } from "../../components/shared";
import { fetchDashboard } from "../../service/MilanApi";
import "./Dashboard.scss";

const Dashboard = () => {
  const { data: dashboardData } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    retry: 0,
  });

  return (
    <>
      <Navbar />

      <div className="dashboard_parent">
        <div className="profileSection_container">
          <img
            src="https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?cs=srgb&dl=pexels-codioful-7130555.jpg&fm=jpg"
            alt=""
            srcSet=""
            className="profile_Coverpicture"
          />

          <img
            src="https://t3.ftcdn.net/jpg/04/56/00/16/360_F_456001627_vYt7ZFjxEQ1sshme67JAXorKRPo8gsfN.jpg"
            alt=""
            className="profile_picture"
          />

          <div className="profile_numbers">
            <p className="counts followersCount">
              <span>1.25k</span> Followers
            </p>

            <p className="counts EventsCount">
              <span>231</span> Hosted Events
            </p>
          </div>

          <button>Edit Profile</button>
        </div>

        <div>
          <TrackSection />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

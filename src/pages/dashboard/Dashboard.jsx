import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, Navbar, ProfileCompletion } from "../../components/shared";
import { fetchDashboard } from "../../service/MilanApi";
import { checkMissingFields } from "../../utils/checkMissingFields";
import "./Dashboard.scss";

const Dashboard = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [editProfile, seteditProfile] = useState(false);

  const { data } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboard,
    refetchOnMount: false,
    retry: 2,
  });

  useEffect(() => {
    if (!Cookies.get("skipProfileCompletion") && checkMissingFields(data)) {
      setShowProfileModal(true);
    }
  }, []);

  const toggleProfileModal = () => {
    setShowProfileModal(!showProfileModal);
    seteditProfile(true);
  };

  return (
    <>
      <Navbar />

      {showProfileModal && (
        <ProfileCompletion
          setShowProfileModal={setShowProfileModal}
          editProfile={editProfile}
          seteditProfile={seteditProfile}
        />
      )}

      <div className="dashboard_container">
        <div className="dashboard_parent">
          <div className="dashboard_header">
            <img
              src="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;"
              className="coverimage"
              alt=""
            />

            <div className="details">
              <img
                src="https://api.freelogodesign.org/assets/thumb/logo/bdd55f703a074abb8bf50c0d3891c0a9_400.png?t=638314396148720000"
                alt=""
                className="logo"
              />

              <div className="header">
                <div>
                  <h1 className="profile_header_name">{data?.name} </h1>
                  <h2 className="profile_header_tagline">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Impedit cum laudantium
                  </h2>
                </div>
                <Button
                  variant="solid"
                  className="cta"
                  onClickfunction={toggleProfileModal}
                >
                  <FiEdit3 />
                  Edit profile
                </Button>
              </div>
            </div>
          </div>

          <div className="dashboard_body">
            <div className="about">
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis pariatur fugit maiores eligendi, perspiciatis,
                assumenda similique deserunt omnis exercitationem voluptate
                porro iste velit, debitis nobis? Hic, rerum! Officiis rerum
                reiciendis impedit numquam harum, omnis quasi qui cupiditate,
                accusamus sed ad ipsam aspernatur cumque adipisci molestias
                aperiam molestiae, nulla doloribus minus! Fugiat, quas nisi. Eum
                corrupti dolore quas tenetur veritatis nam, quae dolores
                nesciunt ducimus maiores consectetur minus harum iusto eaque
                cupiditate doloremque, laudantium facere dolorum sequi, sit
                distinctio! Animi eligendi cum tempora distinctio nam dolor
                facere sapiente culpa sed ullam eveniet aliquam, praesentium
                quidem accusantium, nostrum assumenda esse et quasi.
              </p>
            </div>

            <div className="events">
              <h1>Events Hosted</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

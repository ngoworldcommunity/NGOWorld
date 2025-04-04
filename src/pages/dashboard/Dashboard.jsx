import { userEndpoints } from "@/integrations/ApiEndpoints";
import TrackSection from "@components/private/dashboard/TrackSection";
import ProfileUpdate from "@components/shared/profileUpdate/ProfileUpdate";
import useProfileCompletion from "@hooks/useProfileCompletion";
import { updateUserData } from "@redux/slice/userSlice";
import fetcher from "@utils/Fetcher";
import { showErrorToast } from "@utils/Toasts";
import { useState } from "react";
import { useDispatch } from "react-redux";
import useSWR from "swr";
import { Navbar, ProfileCompletion } from "../../components/shared";
import "./Dashboard.scss";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { data: profileData, mutate: refreshProfileData } = useSWR(
    userEndpoints.profile,
    fetcher,
    {
      onSuccess: (data) => {
        dispatch(updateUserData(data?.user));
      },
      onError: (error) => {
        showErrorToast(error?.response?.data?.message);
      },
    },
  );

  const { handleSetDefaultValues } = useProfileCompletion();

  return (
    <>
      <Navbar />
      <div className="dashboard_parent">
        <div className="profile_header">
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
                <span>1.25k</span> {t("followers")}
              </p>

              <p className="counts EventsCount">
                <span>231</span> {t("hosted_events")}
              </p>
            </div>

            <button
              onClick={() => {
                setOpenModal(true);
                handleSetDefaultValues(profileData?.user);
                console.log(profileData?.user);
              }}
            >
              {t("edit_profile")}
            </button>

            <div className="profile_details">
              <h2>{profileData?.user?.name}</h2>
              <p>{profileData?.user?.description}</p>
            </div>
          </div>

          <div className="dashboard_track">
            <p className="dashboard_track_p">
              <span> {t("real_time_analytics")}</span> <br />
              <span>{t("coming_soon")}</span>
            </p>
            <TrackSection />
          </div>
        </div>
      </div>

      {profileData?.user?.config?.hasCompletedProfile === false && (
        <ProfileCompletion
          edit={openModal}
          setOpenModal={setOpenModal}
          refreshProfileData={refreshProfileData}
        />
      )}

      {openModal === true && (
        <ProfileUpdate
          setOpenModal={setOpenModal}
          refreshProfileData={refreshProfileData}
          profileData={profileData?.user}
        />
      )}
    </>
  );
};

export default Dashboard;

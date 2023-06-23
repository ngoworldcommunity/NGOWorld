import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { GetUserData } from "../../service/MilanApi";
import Cookies from "js-cookie";
import "../../styles/UserProfile.css";
import ProfilePicture from "../../assets/pictures/ProfilePicture.png";
import { FiEdit2 } from "react-icons/fi";
import Button from "../../components/Button";

//tab items
const tabItems = [
  { label: "Clubs", content: "", link: "/clubs" },
  { label: "Events", content: "", link: "/events" },
];

export default function UserProfile() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [initialLoading, setInitialLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  useEffect(() => {
    //get token
    const token = Cookies.get("token");
    getData(token);
  }, []);

  //get user info
  const getData = async (token) => {
    setInitialLoading(true);
    const res = await GetUserData(token);

    if (res.data.success) {
      setData(res.data.data);
      setInitialLoading(false);
    }
  };

  return (
    <>
      {!initialLoading ? (
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="card p-3 py-4">
                <div
                  className="d-flex justify-content-end"
                  onClick={() => navigate("/user/profile/update")}
                >
                  <FiEdit2 />
                </div>
                <div className="text-center">
                  <img
                    src={ProfilePicture}
                    width="100"
                    className="rounded-circle"
                  />
                </div>

                <div className="text-center mt-3">
                  <h2 className="name">
                    {data.firstname + " " + data.lastname}
                  </h2>
                  <p className="pt-2 text-sm text-gray-900">{data.email}</p>
                  <p className="pt-2 text-sm text-gray-900">{data.address}</p>
                  <div className="tab-container">
                    <div className="tab-navigation">
                      {tabItems.map((tab, index) => (
                        <div
                          key={index}
                          className={`tab-item ${
                            activeTab === index ? "active" : ""
                          }`}
                          onClick={() => handleTabClick(index)}
                        >
                          <span>{tab.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="tab-content-container">
                      {tabItems.map((tab, index) => (
                        <div
                          key={index}
                          className={`tab-content ${
                            activeTab === index ? "active" : ""
                          }`}
                        >
                          <p>
                            {tab.content.length > 0 ? (
                              tab.content
                            ) : (
                              <div>
                                <p className="pt-2 text-sm text-gray-900">
                                  No Saved Item
                                </p>
                                <Button onClick={() => navigate(tab.link)}>
                                  Go to {tab.label}
                                </Button>
                              </div>
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

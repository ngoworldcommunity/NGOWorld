import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../../../utils/Fetcher";
import { clubEndpoints } from "../../../assets/data/ApiEndpoints";
import "./ClubDetails.css";
import { BiLinkExternal } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Footer from "../../../components/Footer/Footer";

function ClubDetailsCard() {
  const params = useParams();
  const { data: clubdetails } = useSWR(
    clubEndpoints.bySlug(params.slug),
    fetcher,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <div className="clubdetails_parent">
        <div className="clubdetails_main">
          <div className="clubdetails_header">
            <img
              src="https://marketplace.canva.com/EAE91Kz0wsI/1/0/1600w/canva-blue-yellow-retro-quotes-twitter-header-xTB_BZnqeew.jpg"
              alt=""
              className="clubdetails_header_img"
            />
            <img
              src="https://pbs.twimg.com/media/D_eP7UDWwAA2mA8.png"
              alt=""
              className="clubdetails_header_pfp"
            />
          </div>

          <div className="clubdetails_subscribe">
            <button>
              <MdOutlineAttachMoney className="money_icon" /> Sponsor Us
            </button>
          </div>

          <div className="clubdetails_body">
            <h1>{clubdetails?.name}</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
              qui quod nihil, facere corporis
            </p>
            <div className="clubdetails_address">
              <p>{clubdetails?.address} </p>
              <p>
                {clubdetails?.city}, {clubdetails?.state},{" "}
                {clubdetails?.country}
              </p>
            </div>

            <div className="clubdetails_contact">
              <a href="">Contact info</a>
              <BsDot className="clubdetails_contact_dot" />
              <a href={clubdetails?.website}>
                Website <BiLinkExternal />
              </a>
            </div>

            <div className="clubdetails_about">
              <h1>About us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five cent
                <br />
                <br />
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
            </div>

            <div className="clubdetails_events">
              <h1>Past Events</h1>
              {window.innerWidth > 1200 ? (
                <Swiper
                  slidesPerView={3}
                  spaceBetween={20}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  navigation={false}
                  modules={[Pagination, Autoplay, Navigation]}
                  className="mySwiper carousel"
                >
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              ) : (
                <Swiper
                  slidesPerView={1}
                  spaceBetween={40}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  navigation={false}
                  modules={[Pagination, Autoplay, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clubdetails_eventcard">
                      <img
                        src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2018/11/data-analysis-ngo.jpg"
                        alt=""
                      />

                      <div className="clubdetails_eventcard_body">
                        <h1>ISB Alumni Social Impact SIG Initiative</h1>
                        <div className="clubdetails_eventcard_body_date">
                          <p>01</p>
                          <p>OCT</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              )}
            </div>

            <div className="clubdetails_map">
              <h1>Find us at</h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14741.482534684159!2d88.35842639207846!3d22.527784753774615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276d0a2583ccf%3A0xf1efff5c088752e2!2s6%20Ballygunge%20Place!5e0!3m2!1sen!2sin!4v1695572606793!5m2!1sen!2sin"
                style={{
                  border: 0,
                  width: "100%",
                  height: "500px",
                  borderRadius: "10px",
                }}
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ClubDetailsCard;

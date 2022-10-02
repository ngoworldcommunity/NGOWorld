import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "../../styles/EventCreate.css";
import Events from "../../assets/pictures/CreateEventsPic.svg";
import { CreateEvent } from "../../service/MilanApi";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EventCreate() {
  const [eventdetails, seteventdetails] = useState({
    eventname: "",
    eventdate: "",
    eventlocation: "",
    eventdescription: "",
  });

  const handleChange = (e) => {
    seteventdetails({ ...eventdetails, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const eventresponse = await CreateEvent(eventdetails);

    if (eventresponse.status === 200) {
      toast("🌈 Event added !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => {
          seteventdetails({
            eventname: "",
            eventdate: "",
            eventlocation: "",
            eventdescription: "",
          });
        },
      });
    }
  };

  return (
    <>
      <Navbar />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src={Events} width="90%" alt="profile-img"></img>
            </div>

            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form style={{ width: "auto" }}>
                <h1 className="eventCreateWelcome">
                  Create an event for your club
                </h1>
                <div class="form-outline">
                  <input
                    type="text"
                    class="eventCreateFormInput form-control "
                    id="eventName"
                    name="eventname"
                    required
                    placeholder="What's your event called?"
                    value={eventdetails.eventname}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-outline">
                  <input
                    type="text"
                    class="eventCreateFormInput form-control form-control-md"
                    id="eventTime"
                    name="eventdate"
                    required
                    placeholder="When will it take place?"
                    value={eventdetails.eventdate}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-outline">
                  <input
                    type="text"
                    class="eventCreateFormInput form-control form-control-md"
                    id="eventlocation"
                    name="eventlocation"
                    required
                    placeholder="Where will the event take place?"
                    value={eventdetails.eventlocation}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-outline">
                  <textarea
                    type="text"
                    class="eventCreateFormInput form-control form-control-lg"
                    id="eventTime"
                    name="eventdescription"
                    placeholder="Tell us something more about the event"
                    value={eventdetails.eventdescription}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn  eventCreateSubmit"
                  onClick={(e) => {
                    handleClick(e);
                  }}
                >
                  Create
                </button>
                <br></br> <br></br>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

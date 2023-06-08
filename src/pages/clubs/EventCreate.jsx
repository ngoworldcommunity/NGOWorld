/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../styles/EventCreate.css";
import Events from "../../assets/pictures/CreateEventsPic.svg";
import { CreateEvent } from "../../service/MilanApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

export default function EventCreate() {
  const [eventdetails, seteventdetails] = useState({
    eventname: "",
    eventdate: "",
    eventtime: "",
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
      toast("🌈 Adding your Event !", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
        onClose: () => {
          seteventdetails({
            eventname: "",
            eventdate: "",
            eventtime: "",
            eventlocation: "",
            eventdescription: "",
          });
        },
      });
    }
  };

  const handleEventLocation = (e) => {
    eventdetails.eventlocation = JSON.stringify({ data: e });
    seteventdetails({ ...eventdetails });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />

      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center ">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src={Events} width="90%" alt="profile-img" />
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 className="eventCreateWelcome  mr-10 mb-15">
                Create event for your club
              </h1>
              <form style={{ width: "auto" }}>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="name"
                    className="col-form-label col-form-label-lg"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    What's your event called?
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="eventName"
                    name="eventname"
                    required
                    placeholder="What's your event called?"
                    value={eventdetails.eventname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="date"
                    className="col-form-label col-form-label-lg"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    Date of the event?
                  </label>
                  <input
                    type="date"
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="eventdate"
                    name="eventdate"
                    required
                    placeholder="Date of the event?"
                    value={eventdetails.eventdate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="email"
                    className="col-form-label col-form-label-lg"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    Time of the event?
                  </label>
                  <input
                    type="time"
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="eventtime"
                    name="eventtime"
                    required
                    placeholder="Time of the event? (24 Hours format, IST)"
                    value={eventdetails.eventtime}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="email"
                    className="col-form-label col-form-label-lg"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    Where will the event take place?
                  </label>

                  <GeoapifyContext
                    apiKey={`${import.meta.env.VITE_GEOAPIFY_API_KEY}`}
                  >
                    <GeoapifyGeocoderAutocomplete
                      name="eventlocation"
                      id="form-control form-control-lg remove_placeholder_desktop"
                      placeSelect={(e) => handleEventLocation(e)}
                    />
                  </GeoapifyContext>
                </div>
                <div className="form-outline mb-4">
                  <label
                    htmlFor="email"
                    className="col-form-label col-form-label-lg"
                    style={{ fontFamily: "Open Sans, sans-serif" }}
                  >
                    Tell us something more about the event
                  </label>
                  <textarea
                    type="text"
                    className="form-control form-control-lg remove_placeholder_desktop"
                    id="eventTime"
                    name="eventdescription"
                    placeholder="Tell us something more about the event"
                    value={eventdetails.eventdescription}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-lg eventCreateSubmit"
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

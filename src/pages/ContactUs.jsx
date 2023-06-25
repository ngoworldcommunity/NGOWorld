/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../styles/ContactUs.css";
import contactImage from "../assets/pictures/contactUs.svg";
import { Contact } from "../service/MilanApi";
import { toast } from "react-toastify";
import { showErrorToast, showSuccessToast } from "../utils/showToast";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const initialState = { firstName: "", lastName: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const isEmailValid = (email) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email)) {
      return true;
    }
    return false;
  };

  const handleSubmit = async () => {
    // validation
    if (!formData.firstName || !formData.lastName || !formData.message) {
      toast.warn("Please fill out all the fields.");
    } else if (!isEmailValid(formData.email)) {
      // Email Validation
      toast.warn("Please provide a correct email.");
    } else {
      const response = await Contact(formData);
      if (response.status === 201) {
        showSuccessToast(response.data.message);
      } else {
        showErrorToast(response.message);
      }
      setFormData(initialState);
    }
  };

  return (
    <>
      <Helmet>
        <title>Milan | Contact Us</title>
        <meta
          name="description"
          content="Welcome to the contact us page, feel free to reach out to us for collaborations and more."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <section>
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="contact-us-img col-md-8 col-lg-7 col-xl-6 d-none d-lg-block">
              <img src={contactImage} className="img-fluid" alt="Contact-Us" />
            </div>
            <div className="col-md-8 col-lg-5 col-xl-5 offset-xl-1">
              <h1 className="contact-us-header">
                Have something to say? <br /> Reach out to us !
              </h1>
              <div className="inputs">
                <div className="d-flex flex-column flex-md-row">
                  <div className="me-md-2">
                    <label
                      htmlFor="firstName"
                      className="col-form-label col-form-label-lg contact-us-label"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      id="firstName"
                      value={formData.firstName}
                      className="userreg_des_firstname form-control form-control-lg"
                      onChange={handleChange}
                      autoFocus
                    />
                  </div>
                  <div className="ms-md-2">
                    <label
                      htmlFor="lastName"
                      className="col-form-label col-form-label-lg contact-us-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last name"
                      id="lastName"
                      value={formData.lastName}
                      className="form-control form-control-lg"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label
                  htmlFor="email"
                  className="col-form-label col-form-label-lg contact-us-label"
                >
                  Email address
                </label>
                <input
                  autoComplete="on"
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                />
                <label
                  htmlFor="message"
                  className="col-form-label col-form-label-lg contact-us-label"
                >
                  Enter your message
                </label>
                <textarea
                  type="text"
                  placeholder="Message"
                  id="message"
                  rows="4"
                  cols="50"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                />
                <br />
                <button
                  type="submit"
                  className="btn _btn_1987m_1 login-btn _solid_1987m_26 "
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

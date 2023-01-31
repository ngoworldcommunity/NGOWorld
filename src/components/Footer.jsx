import { useState, useEffect } from "react";
import { ReportProblem } from "../service/MilanApi";
import "../styles/Footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Footer = () => {
  const [reportModal, setReportModal] = useState(false);
  const [reportEmail, setReportEmail] = useState("");
  const [reportFirstName, setReportFirstName] = useState("");
  const [reportLastName, setReportLastName] = useState("");
  const [reportIssue, setReportIssue] = useState("");
  const [logged, setLogged] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleReportModalOpen = () => {
    document.previousTitle = document.title;
    document.title = "Milan | Report an issue";
    setReportModal(true);
  };
  const handleReportModalClose = () => {
    document.title = document.previousTitle;
    document.previousTitle = undefined;
    setReportEmail("");
    setReportFirstName("");
    setReportLastName("");
    setReportIssue("");
    setReportModal(false);
  };

  useEffect(() => {
    if (Cookies.get("token")) setLogged(true);
  }, []);

  useEffect(() => {
    if (reportModal) {
      const closeEvent = (e) => {
        if (e.key === "Escape") {
          handleReportModalClose();
        }
      };
      window.addEventListener("keydown", closeEvent);
      return () => window.removeEventListener("keydown", closeEvent);
    }
  }, [reportModal]);

  const handleReportSubmit = async (e) => {
    e.preventDefault();

    if (!Cookies.get("token")) {
      toast.error("You must be logged in to report an issue");
      return;
    }
    if (
      reportFirstName === "" ||
      reportLastName === "" ||
      reportEmail === "" ||
      reportIssue === ""
    ) {
      toast.error("Please fill out all fields");
      return;
    }
    const success = await ReportProblem({
      firstname: reportFirstName,
      lastname: reportLastName,
      email: reportEmail,
      reportmessage: reportIssue,
    });

    if (success === true) {
      toast.success("Report submitted successfully");
    } else if (success === "tryagain") {
      toast.error("You can only submit once in 2 hours");
    } else {
      toast.error("Some error occured");
    }
    setTimeout(() => {
      handleReportModalClose();
    }, 2000);
  };

  useEffect(() => {
    reportModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [reportModal]);

  useEffect(() => {
    if (window.innerWidth > 767) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }

    const updateMedia = () => {
      if (window.innerWidth > 767) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <footer className="bg-white m-0 main-font">
      <ToastContainer />

      {/* Report modal starts here  */}

      {reportModal && (
        <div className="reportModal">
          <div className="reportModalContent">
            <div className="reportModalHeader">
              <h1>REPORT A PROBLEM</h1>

              <button
                type="button"
                className="btn-close crossButton"
                aria-label="Close"
                onClick={handleReportModalClose}
              ></button>
            </div>

            <h2>
              We are trying our best. We give in the best shot and hope for the
              best.
            </h2>
            <br />

            {/* Report form  */}

            <form id="reportForm">
              <div className="form-group">
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email*"
                  value={reportEmail}
                  onChange={(e) => setReportEmail(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="form-group d-flex">
                <input
                  required
                  type="text"
                  className="form-control "
                  placeholder="First Name*"
                  value={reportFirstName}
                  onChange={(e) => setReportFirstName(e.target.value)}
                />
                <input
                  required
                  type="text"
                  className="form-control ml-1"
                  placeholder="Last Name*"
                  value={reportLastName}
                  onChange={(e) => setReportLastName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <textarea
                  required
                  type="text"
                  className="form-control"
                  placeholder="Brief the issue that you are facing*"
                  rows={6}
                  value={reportIssue}
                  onChange={(e) => setReportIssue(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button className="btn-hover" onClick={handleReportSubmit}>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div
        className="px-5 py-2 main-footer"
        style={{ backgroundColor: "#424141" }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6 mb-4 mb-lg-0 px-5">
            <img src="img/logo.png" alt="" width="180" className="mb-3" />
            {/* <p className="font-italic text-light text-center"> */}
            {isMobile ? (
              <h1 class="h6 join-us text-uppercase text-light font-weight-bold mb-4">
                Check out our socials
              </h1>
            ) : (
              <p className="footer-text font-italic text-light text-left mt-4 headings">
                Want to join Team Milan ?<br /><span className=""> Contribute </span> <a href="https://github.com/IAmTamal/Milan" target='_blank'>here</a>!
              </p>
            )}
            
          </div>

          <div className="join-us col-lg-2 col-md-6 mb-4 mb-lg-0 px-5">
            <div className="join">
              <h1 className="h6 join-us text-uppercase text-light font-weight-bold mb-4 headings">
                {logged ? "Explore!" : "Join Us!"}
              </h1>
              <ul className="join-us-list list-unstyled mb-0">
                <li className="mb-2">
                  {logged ? (
                    <Link
                      to="/display/events"
                      className="text-decoration-none footer_auth_text"
                    >
                      Events
                    </Link>
                  ) : (
                    <Link
                      to="/user/login"
                      className="text-decoration-none footer_auth_text"
                    >
                      Login
                    </Link>
                  )}
                </li>
                <li className="mb-2">
                  {logged ? (
                    <Link
                      to="/shops/shop"
                      className="text-decoration-none footer_auth_text"
                    >
                      Shop
                    </Link>
                  ) : (
                    <Link
                      to="/user/register"
                      className="text-decoration-none footer_auth_text"
                    >
                      Register
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className="rep col-lg-4 col-md-6 mb-lg-0">
            <h1 className="h6 headings text-uppercase text-light font-weight-bold mb-2 text-center">
              Got something to report ?
            </h1>
            <p className="text-light text-center mb-4">
              You can submit a report to us by filling a form below !
            </p>
            <div className="d-flex justify-content-center rounded mx-auto">
              <button
                onClick={handleReportModalOpen}
                className=" btn-report d-flex align-items-center text-black"
              >
                <span>
                  Report! <i className="fa-solid fa-bug"></i>
                </span>
              </button>
            </div>
          </div>
          
        </div>
        <div className="socials justify-content-center">
              <div className="twitter social-btn">
                <a
                  href="https://twitter.com/mrTamall"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
              <div className="github social-btn">
                <a
                  href="https://github.com/IAmTamal/Milan"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
              <div className="cont social-btn">
                <a href="https://milaan.vercel.app/contact">
                  <i className="cont-icon fa-solid fa-message"></i>
                </a>
              </div>
             
            </div>
            <p className="text-light text-center">Developed by team Milan © 2023</p>
      </div>
    </footer>
  );
};

export default Footer;

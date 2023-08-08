import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import solidarity from "../../assets/pictures/solidarity.png";
import { ReportProblem } from "../../service/MilanApi";
import Button from "../Button/GlobalButton/Button";
import Modal from "../Modal/Modal";
import "./Footer.css";

const Footer = () => {
  const [reportModal, setReportModal] = useState(false);
  const [reportEmail, setReportEmail] = useState("");
  const [reportFirstName, setReportFirstName] = useState("");
  const [reportLastName, setReportLastName] = useState("");
  const [reportIssue, setReportIssue] = useState("");
  const [logged, setLogged] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const clickMilan = () => {
    window.open("https://milaan.vercel.app/");
  };

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
      toast.error("Some error occurred");
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
        <Modal onClose={handleReportModalClose} className="reportModal">
          <div className="reportModalHeader">
            <h1>REPORT A PROBLEM</h1>
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
                aria-label="Enter your Email"
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
                className="form-control"
                aria-label="Enter your First Name"
                placeholder="First Name*"
                value={reportFirstName}
                onChange={(e) => setReportFirstName(e.target.value)}
              />
              <input
                required
                type="text"
                className="form-control ml-1"
                aria-label="Enter your Second Name"
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
                aria-label="Please briefly describe the issue that you are currently facing"
                placeholder="Brief the issue that you are facing*"
                rows={6}
                value={reportIssue}
                onChange={(e) => setReportIssue(e.target.value)}
              />
            </div>
            <div className="text-center">
              <Button
                className="btn-hover"
                role="button"
                onClick={handleReportSubmit}
              >
                Submit
              </Button>
            </div>
          </form>
        </Modal>
      )}

      <div
        className="px-5 py-2 main-footer"
        style={{ backgroundColor: "#272626" }}
      >
        <div className="row">
          <div className="col-lg-5 col-md-5 mb-lg-0 px-5">
            <div className="col-sm-3 col-6  col-lg-3 mx-auto mx-lg-0">
              <img
                src={solidarity}
                alt="milan logo"
                className="mt-4 mx-auto img-fluid"
              />
            </div>
            {isMobile ? (
              <h1 className="h6 join-us text-uppercase text-light font-weight-bold mb-4 mt-2">
                Check out our socials
              </h1>
            ) : (
              <p className="footer-text font-italic text-light text-left mt-4 headings">
                Want to make Milan better ?<br />
                <span className=""> Contribute </span>
                <a
                  href="https://github.com/tamalCodes/Milan"
                  target="_blank"
                  rel="noreferrer"
                  className="underline-animation"
                >
                  here
                </a>
              </p>
            )}
          </div>
          <div className="join-us col-lg-4 col-md-3 mx-auto mb-lg-0 px-5">
            <div className="join">
              <h1 className="h6 join-us text-uppercase text-light font-weight-bold mb-lg-2 mb-3 headings">
                {logged ? "Explore!" : "Join Us"}
              </h1>
              <ul className="join-us-list list-unstyled mb-0">
                <li className="mb-2">
                  {logged ? (
                    <Link
                      to="/events"
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
                      to="/shop"
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
          <div className="join-us col-lg-4 col-md-3 mx-auto mb-lg-0 px-5 ">
            <div className="join">
              <h1 className="h6 join-us text-uppercase text-light font-weight-bold mb-lg-2 mb-3 headings">
                Socials
              </h1>
              <ul className="join-us-list list-unstyled mb-0">
                <li className="mb-2">
                  <a
                    href="https://twitter.com/tamalCodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none footer_auth_text"
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://github.com/tamalCodes/Milan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none footer_auth_text"
                  >
                    GitHub
                  </a>
                </li>
                <li className="mb-2">
                  <Link
                    to="/contact"
                    className="text-decoration-none footer_auth_text"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4 col-lg-4 col-md-6 mb-lg-0 mx-auto">
            <h1 className="h6 headings text-uppercase text-light font-weight-bold mb-2 text-center">
              Got something to report ?
            </h1>
            <p className="text-center mb-lg-4" style={{ color: "#d8d7d7" }}>
              You can submit a report to us by filling the form below !
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
              href="https://twitter.com/tamalCodes"
              rel="noopener noreferrer"
              aria-label="Follow me on Twitter"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
          <div className="github social-btn">
            <a
              href="https://github.com/tamalCodes/Milan"
              rel="noopener noreferrer"
              aria-label="Follow me on Github"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
          <div className="cont social-btn">
            <Link to={"/contact"} aria-label="Contact Us">
              <i className="cont-icon fa-solid fa-message"></i>
            </Link>
          </div>
        </div>
        <p className="text-light text-center" role="contentinfo">
          Developed by team{" "}
          <span
            onClick={clickMilan}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
            onMouseOver={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.color = "pink"; // Change to the desired color on hover
            }}
            onMouseOut={(e) => {
              e.target.style.textDecoration = "none";
              e.target.style.color = "inherit"; // Reset the color on hover out
            }}
          >
            Milan
          </span>{" "}
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { ReportProblem } from "../service/MilanApi";
import "../styles/Footer.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [reportModal, setReportModal] = React.useState(false);
  const [reportEmail, setReportEmail] = React.useState("");
  const [reportFirstName, setReportFirstName] = React.useState("");
  const [reportLastName, setReportLastName] = React.useState("");
  const [reportIssue, setReportIssue] = React.useState("");

  const handleReportModalOpen = () => {
    setReportModal(true);
  };
  const handleReportModalClose = () => {
    setReportModal(false);
  };

  const handleReportSubmit = async (e) => {
    e.preventDefault();

    if (sessionStorage.getItem("token") === null) {
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

  React.useEffect(() => {
    reportModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [reportModal]);

  return (
    <footer className="page-footer font-small blue">
      <ToastContainer />
      {reportModal && (
        <div className="reportModal">
          <div className="reportModalContent">
            <div className="reportModalHeader">
              <h4>REPORT A PROBLEM</h4>
              <button className="btn" onClick={handleReportModalClose}>
                X
              </button>
            </div>

            <h6>
              We are trying our best. We give in the best shot and hope for the
              best.
            </h6>
            <br />
            <form id="reportForm">
              <div className="form-group">
                <input
                  required
                  type="email"
                  className="form-control"
                  placeholder="Enter your Email*"
                  value={reportEmail}
                  onChange={(e) => setReportEmail(e.target.value)}
                />
              </div>

              <div className="form-group d-flex">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="First Name*"
                  value={reportFirstName}
                  onChange={(e) => setReportFirstName(e.target.value)}
                />
                <input
                  required
                  type="text"
                  className="form-control"
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

              <button className="btn btn-danger" onClick={handleReportSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="container-fluid text-center">
        <div className="footer-content row justify-content-around">
          <div className="col1 col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p className="footer-text">
              {" "}
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>

            <div className="text-center py-3 ">
              <ul className="list-unstyled list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="mb-1">Register for free</h5>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-rounded button" href="/user/register">
                    Sign up!
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm btn-fb mx-1" href="/">
                    <i className="fa fa-facebook"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm btn-tw mx-1" href="/">
                    <i className="fa fa-twitter"> </i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm btn-li mx-1" href="/">
                    <i className="fa fa-linkedin"> </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col2 col-md-6 mt-md-0 mt-3">
            <div className="row1 d-flex justify-content-evenly">
              <div className="footer-links">
                <h5 className="text-uppercase">Link</h5>
                <ul className="list-unstyled">
                  <li>
                    <a className="links" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="links" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="links" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="links" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-links">
                <h5 className="text-uppercase">Link</h5>
                <ul className="list-unstyled">
                  <li>
                    <a className="links" href="#!">
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a className="links" href="#!">
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a className="links" href="#!">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a className="links" href="#!">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row2 mt-5 d-flex justify-content-center">
              <button className="report" onClick={handleReportModalOpen}>
                <img
                  className="top-img"
                  src={require("../assets/pictures/footer-icon-top.png")}
                  alt="isd"
                ></img>
                <img
                  className="bottom-img"
                  src={require("../assets/pictures/footer-icon.png")}
                  alt="isd"
                ></img>
                Report a problem
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="clearfix w-100 d-md-none pb-0" />

      <div className="footer-copyright text-center">
        Copyright {new Date().getFullYear()}:{" "}
        <a className="copyright" href="/">
          {" "}
          Milan{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;

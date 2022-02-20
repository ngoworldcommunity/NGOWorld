import React from "react";
import "../styles/Footer.css";



const Footer = () => {
  return (
    <footer className="page-footer font-small blue ">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
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
                  <a className="btn btn-rounded button" href="/">
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

          <div className="col-md-3 mb-md-0 mb-3 footer-links ls">
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

          <div className="col-md-3 mb-md-0 mb-3">
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

            <div className="row">
              <div className="col col-md-6">
                <button className="report">
                  <img className="top-img"
                    src={require("../assets/pictures/footer-icon-top.png")}
                    alt="isd" ></img>
                  <img className="bottom-img"
                    src={require("../assets/pictures/footer-icon.png")}
                    alt="isd" ></img>
                  Report a problem
                </button>
              </div>
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />
        </div>
      </div>

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

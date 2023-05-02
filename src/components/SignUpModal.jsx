import React, { useEffect } from "react";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import "../styles/SignUpModal.css";

const SignUpModal = ({ onClose }) => {
  const navigate = useNavigate();

  const navigateToURL = (url) => {
    onClose();
    navigate(url);
  };

  useEffect(() => {
    const closeEvent = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", closeEvent);
    return () => window.removeEventListener("keydown", closeEvent);
  }, []);

  return (
    <Modal onClose={onClose}>
      <div className="signUpModalHeader">
        <h1>Sign Up!</h1>
      </div>
      <hr />
      <div>
        <div className="text-center button-wrapper">
          <button
            className="btn btn-hover"
            onClick={() => navigateToURL("/user/register")}
          >
            Sign Up as an Individual - <i className="fa-solid fa-user"></i>
          </button>
          <hr className="divider" />
          <button
            className="btn btn-hover"
            onClick={() => navigateToURL("/clubs/register")}
          >
            Sign Up as a Club - <i className="fa-solid fa-users"></i>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SignUpModal;

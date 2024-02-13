import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import checkInternetConnection from "./CheckInternetConnection";

/**
 * Displays a success toast message using React Toastify.
 *
 * @param {string} message - The message to be displayed in the success toast.
 * @returns {void}
 */
export const showSuccessToast = (message) => {
  if (!checkInternetConnection()) {
    return;
  }

  toast.success(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    closeButton: false,
  });
};

/**
 * Displays an error toast message using React Toastify.
 *
 * @param {string} message - The message to be displayed in the error toast.
 * @returns {void}
 */
export const showErrorToast = (message) => {
  if (!checkInternetConnection()) {
    return;
  }

  toast.error(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    closeButton: false,
  });
};

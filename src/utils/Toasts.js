import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import checkInternetConnection from "./CheckInternetConnection";

export const showSuccessToast = (message) => {
  if (!checkInternetConnection()) {
    return;
  }

  toast.success(message, {
    position: "top-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    closeButton: false,
  });
};
export const showErrorToast = (message) => {
  if (!checkInternetConnection()) {
    return;
  }

  toast.error(message, {
    position: "top-right",
    autoClose: 1200,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    closeButton: false,
  });
};

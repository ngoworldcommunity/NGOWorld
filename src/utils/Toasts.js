import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showSuccessToast = (message) => {
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

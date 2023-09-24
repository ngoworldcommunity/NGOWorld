import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function checkInternetConnection() {
  if (navigator.onLine === false) {
    toast.error("Please check your internet connection", {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      closeButton: false,
    });
    return false;
  }

  return true;
}

export default checkInternetConnection;

//* All the AXIOS API calls will be made from here to the backend
//* These functions will be exported and then imported wherever needed

import Axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import {
  userEndpoints,
  authEndpoints,
  clubEndpoints,
} from "../assets/data/ApiEndpoints";

//* LOGIN USER
export const LoginUser = async (credentials) => {
  try {
    const User = await Axios.post(authEndpoints.login, credentials, {
      withCredentials: true,
    });
    return User;
  } catch (error) {
    return error.response.data;
  }
};

//* REGISTER USER
export const RegisterUser = async (credentials) => {
  try {
    console.log(credentials);
    const User = await Axios.post(authEndpoints.signup, credentials);
    return User;
  } catch (error) {
    return error.response.data;
  }
};

// get all clubs
export const GetAllClubs = async () => {
  try {
    const clubs = await Axios.get(clubEndpoints.all);
    return clubs;
  } catch (error) {
    return error.response.data;
  }
};

//* REPORT PROBLEMS
export const ReportProblem = async (credentials) => {
  try {
    const response = await Axios.post(userEndpoints.report, credentials);
    if (response.data.success === true) {
      return true;
    } else if (response.data.message === "tryagain") {
      return "tryagain";
    } else {
      return false;
    }
  } catch (error) {
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* UPDATE USER
export const UpdateUser = async (credentials) => {
  try {
    const response = await Axios.post(userEndpoints.update, credentials);
    const success_message = response.data.message;
    if (success_message) {
      alert(success_message);
      return response;
    }
  } catch (error) {
    alert(error.response.data.message);
  }
};

//* Google Auth screen
export const GoogleAuth = async () => {
  try {
    const response = await Axios.get(authEndpoints.googleLogin, {
      withCredentials: true,
    });
    return response.data.url;
  } catch (error) {
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* Google Auth callback
export const successCallback = async () => {
  try {
    const response = await Axios.get(authEndpoints.googleLoginSuccess, {
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response;
  } catch (err) {
    return err;
  }
};

//* Google logout
export const Logout = async () => {
  try {
    const response = await Axios.get(authEndpoints.logout, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error;
  }
};

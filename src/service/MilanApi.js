//* All the AXIOS API calls will be made from here to the backend
//* These functions will be exported and then imported wherever needed

import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  userEndpoints,
  clubEndpoints,
  authEndpoints,
  eventEndpoints,
} from "../assets/data/ApiEndpoints";

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

//* LOGIN USER
export const LoginUser = async (credentials) => {
  try {
    const User = await Axios.post(userEndpoints.login, credentials, {
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
    const User = await Axios.post(userEndpoints.register, credentials);
    return User;
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

//* LOGIN CLUB
export const LoginClub = async (credentials) => {
  try {
    const Club = await Axios.post(clubEndpoints.login, credentials, {
      withCredentials: true,
    });
    return Club;
  } catch (error) {
    return error.response.data;
  }
};

//* REGISTER CLUB
export const RegisterClub = async (credentials) => {
  try {
    const Data = await Axios.post(clubEndpoints.register, credentials);
    return Data;
  } catch (error) {
    return error.response.data;
  }
};

//* GET ALL CLUBS
// export const GetAllClubs = async () => {
//   try {
//     console.log(All_Clubs);
//     const response = await Axios.get(All_Clubs);
//     return response.data;
//   } catch (error) {
//     alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
//   }
// };

//* Get single club details

export const getClubDetails = async (id) => {
  try {
    const response = await Axios.get(clubEndpoints.bySlug(id));
    return response.data;
  } catch (error) {
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* CREATE EVENT

export const CreateEvent = async (eventdata) => {
  try {
    const response = await Axios.post(clubEndpoints.createEvent, eventdata);
    return response;
  } catch (error) {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

//* GET ALL EVENTS
export const GetAllEvents = async () => {
  try {
    const response = await Axios.get(eventEndpoints.all);
    return response.data;
  } catch (error) {
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* CONTACT
// export const Contact = async (formData) => {
//   try {
//     const response = await Axios.post(Contact_Us, formData);
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

//* Google Auth screen

export const GoogleAuth = async (isuser) => {
  try {
    const response = await Axios.get(authEndpoints.googleLogin(isuser), {
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
    const response = await Axios.get(authEndpoints.loginSuccess, {
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

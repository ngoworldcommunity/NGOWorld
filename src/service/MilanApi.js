//* All the AXIOS API calls will be made from here to the backend
//* These functions will be exported and then imported wherever needed

import Axios from "axios";

const User_Log = "https://milan-jwoc.herokuapp.com/user/login";
const User_Reg = "https://milan-jwoc.herokuapp.com/user/register";
const Club_Log = "https://milan-jwoc.herokuapp.com/club/login";
const Club_Reg = "https://milan-jwoc.herokuapp.com/club/register";
const All_Clubs = "https://milan-jwoc.herokuapp.com/display/allClubs";
const Report_Log = "https://milan-jwoc.herokuapp.com/user/userreport";
//^ `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//* Axios call to login a User
//* IF sucess we alert user made else we alert user failed
//* we get the credentials from the Awb.jsx

//* LOGIN USER
export const LoginUser = async (credentials) => {
  try {
    const Post = await Axios.post(`${User_Log}`, credentials);
    return Post;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* REGISTER USER
export const RegisterUser = async (credentials) => {
  try {
    const response = await Axios.post(`${User_Reg}`, credentials);
    console.log(response);

    if (response.data.exists === true) {
      alert("User already present, please login");
    }

    if (response.data.success === true) {
      alert("Registration successful, please login");
    }
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* LOGIN CLUB
export const LoginClub = async (credentials) => {
  try {
    const Post = await Axios.post(`${Club_Log}`, credentials);
    return Post;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* REGISTER CLUB
export const RegisterClub = async (credentials) => {
  try {
    const response = await Axios.post(`${Club_Reg}`, credentials);
    console.log(response);

    if (response.data.exists === true) {
      alert("Club already present, please login");
    }

    if (response.data.success === true) {
      alert("Registration successful, please login");
    }
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* GET ALL CLUBS
export const GetAllClubs = async () => {
  try {
    const response = await Axios.get(`${All_Clubs}`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* REPORT PROBLEMS
export const ReportProblem = async (credentials) => {
  try {
    const response = await Axios.post(
      "http://localhost:5000/user/userreport",
      credentials
    );
    // "http://localhost:5000/user/userreport"
    // `${Report_Log}`
    if (response.data.success === true) {
      return true;
    } else if (response.data.message === "tryagain") {
      return "tryagain";
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* GET ALL EVENTS
export const GetAllEvents = async () => {
  try {
    const response = await Axios.get(`http://localhost:5000/display/allevents`);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

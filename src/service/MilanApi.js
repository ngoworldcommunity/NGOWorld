//* All the AXIOS API calls will be made from here to the backend
//* These functions will be exported and then imported wherever needed

import Axios from "axios";

const apiURL = ["https://milan-jwoc.herokuapp.com", "http://localhost:5000"];
const API = apiURL[0]; // Change this to 0 after pushing changes in Heroku Server

const User_Log = `${API}/user/login`;
const User_Reg = `${API}/user/register`;
const User_Updt = `${API}/user/update`;
const Club_Log = `${API}/club/login`;
const Club_Reg = `${API}/club/register`;
const All_Clubs = `${API}/display/allClubs`;
const Report_Log = `${API}/user/userreport`;
const All_Events = `${API}/display/allevents`;
//^ `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//* Axios call to login a User
//* IF sucess we alert user made else we alert user failed
//* we get the credentials from the Awb.jsx

//* UPDATE USER
export const UpdateUser = async (credentials) => {
  try {
    const response = await Axios.post(User_Updt, credentials);
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
    const User = await Axios.post(User_Log, credentials);
    return User;
  } catch (error) {
    alert(error.response.data.message);
  }
};

//* REGISTER USER
export const RegisterUser = async (credentials) => {
  try {
    const response = await Axios.post(User_Reg, credentials);
    alert(response.data.message);
  } catch (error) {
    alert(error.response.data.message);
  }
};

//* LOGIN CLUB
export const LoginClub = async (credentials) => {
  try {
    const Post = await Axios.post(Club_Log, credentials);
    return Post;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* REGISTER CLUB
export const RegisterClub = async (credentials) => {
  try {
    const response = await Axios.post(Club_Reg, credentials);
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
    const response = await Axios.get(All_Clubs);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//* REPORT PROBLEMS
export const ReportProblem = async (credentials) => {
  try {
    const response = await Axios.post(Report_Log, credentials);
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
    const response = await Axios.get(All_Events);
    return response.data;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

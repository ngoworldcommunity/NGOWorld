//* All the AXIOS API calls will be made from here to the backend
//* These functions will be exported and then imported wherever needed

import Axios from "axios";

const User_Log = "https://reimaginedworship.herokuapp.com/user/login";

//^ `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//* Axios call to login a User
//* IF sucess we alert user made else we alert user failed
//* we get the credentials from the Awb.jsx

export const LoginUser = async (credentials) => {
  try {
    const Post = await Axios.post(` ${User_Log}`, credentials);
    return Post;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

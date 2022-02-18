//* All the AXIOS API calls will be made from here to the backend
//* These functions will be exported and then imported wherever needed

import Axios from "axios";

const User_Log = "https://reimaginedworship.herokuapp.com/user/login";
const User_Reg = "http://localhost:5000/user/register";

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

export const RegisterUser = async (credentials) => {
    try {
        const response = await Axios.post(`${User_Reg}`, credentials);
        console.log(response);

        if (response.data.exists === true) {
            alert("User already present, please login")
        }

        if (response.data.success === true) {
            alert("Registration successful, please login")
        }
    } catch (error) {
        console.log(error);
        alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
    }
}
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUserData } from "../redux/slice/userSlice";
import { LoginUser, RegisterUser } from "../service/MilanApi";
import checkInternetConnection from "../utils/CheckInternetConnection";
import { showErrorToast, showSuccessToast } from "../utils/Toasts";

export function useAuth(authType) {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;

  async function authenticateUser(credentials, setErrors) {
    if (!checkInternetConnection()) {
      return;
    }

    if (emailRegex.test(credentials.email) === false) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
      return;
    }

    // Passwords needs to be minimum 8 characters long with atleast 1 number, 1 uppercase and 1 lowercase letter
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (passwordRegex.test(credentials.password) === false) {
      setErrors((prev) => ({
        ...prev,
        password:
          "Password must be minimum 8 characters long with atleast 1 number, 1 uppercase and 1 lowercase letter",
      }));
      return;
    }

    setloading(true);

    const response = await (authType === "login"
      ? LoginUser(credentials)
      : RegisterUser({
          ...credentials,
          userType: credentials.userType.value,
        }));

    if (response?.status === 201 || response?.status === 200) {
      showSuccessToast(response?.data?.message);
      dispatch(updateUserData(response.data.user));

      setTimeout(() => {
        navigate("/");
        setloading(false);
      }, 1000);
    } else {
      showErrorToast(response?.data?.message);
      setloading(false);
    }
  }

  return {
    authenticateUser,
    loading,
  };
}

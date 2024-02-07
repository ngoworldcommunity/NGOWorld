import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser, RegisterUser } from "../service/MilanApi";
import checkInternetConnection from "../utils/CheckInternetConnection";
import { showErrorToast, showSuccessToast } from "../utils/Toasts";

export function useAuth(authType) {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  async function authenticateUser(credentials) {
    if (!checkInternetConnection()) {
      return;
    }

    setloading(true);

    const response = await (authType === "login"
      ? LoginUser(credentials)
      : RegisterUser(credentials));

    if (response?.status === 201 || response?.status === 200) {
      showSuccessToast(response?.data?.message);
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

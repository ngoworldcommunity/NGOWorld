import { useState } from "react";
import useValidation from "../../hooks/useValidation";
import { showErrorToast, showSuccessToast } from "../../utils/Toasts";
import { useNavigate } from "react-router-dom";
import checkInternetConnection from "../../utils/CheckInternetConnection";

export function useFormLogic(
  initialState,
  submitCallback,
  redirectPath,
  isSignup,
  userType,
) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e, country) => {
    e.preventDefault();

    if (!checkInternetConnection()) {
      return;
    }

    setIsLoading(true);

    formState.country = country;

    const validationErrors = isSignup
      ? userType === "individual"
        ? useValidation(formState, true, false)
        : useValidation(formState, false, true)
      : [];

    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => {
        showErrorToast(error.message);
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      const data = await submitCallback(formState);
      handleApiResponse(data);
    }
  };

  const handleApiResponse = (response) => {
    setIsLoading(false);

    if (response?.status === 201 || response?.status === 200) {
      showSuccessToast(response?.data?.message);
      setTimeout(() => {
        setIsLoading(false);
        navigate(redirectPath);
      }, 2000);
    } else {
      showErrorToast(response?.message);
      setFormState({ ...formState });
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return {
    formState,
    setFormState,
    isLoading,
    handleChange,
    handleSubmit,
  };
}

export const individualInitialFormState = {
  usertype: "individual",
  slug: "",
  email: "",
  password: "",
  confirmPassword: "",
  city: "",
  state: "",
  address: "",
  country: "",
  pincode: "",
  firstname: "",
  lastname: "",
};

export const clubInitialFormState = {
  usertype: "club",
  slug: "",
  email: "",
  password: "",
  name: "",
  confirmPassword: "",
  tagLine: "",
  description: "",
  city: "",
  state: "",
  address: "",
  country: "",
  pincode: "",
};

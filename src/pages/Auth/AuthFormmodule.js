import { useState } from "react";
import useValidation from "../../hooks/useValidation";
import { showErrorToast, showSuccessToast } from "../../utils/Toasts";
import { useNavigate } from "react-router-dom";
import { SetAuthCookies } from "../../utils/Cookies";
import useStore from "../../store";

export function useFormLogic(initialState, submitCallback, redirectPath) {
  const navigate = useNavigate();
  const [formState, setFormState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const userNeedsLogin = useStore((state) => state.userNeedsLogin);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const validationErrors = useValidation(formState);

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
      SetAuthCookies(data);
    }
  };

  const handleApiResponse = (response) => {
    setIsLoading(false);

    if (response?.status === 201) {
      showSuccessToast(response?.data?.message);

      console.log(userNeedsLogin);

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
    isLoading,
    handleChange,
    handleSubmit,
  };
}

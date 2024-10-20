/* eslint-disable no-unused-vars */
import { selectUser } from "@redux/slice/userSlice";
import { UpdateUser } from "@service/MilanApi";
import { useMutation } from "@tanstack/react-query";
import getProfileFields from "@utils/getProfileFields";
import { showErrorToast, showSuccessToast } from "@utils/Toasts";
import _ from "lodash";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "..";
import "./ProfileCompletion.scss";

const ProfileCompletion = () => {
  const [credentials, setCredentials] = useState({});
  const [errors, setErrors] = useState({});
  const user = useSelector(selectUser);
  const fields = getProfileFields(user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate: mutate_UpdateDetails } = useMutation({
    mutationFn: UpdateUser,
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(error?.message);
    },
  });

  const handleUpdateDetails = () => {
    const newErrors = {};

    if (
      credentials?.tagLine?.length < 20 ||
      credentials?.tagLine?.length > 100
    ) {
      newErrors.tagLine = "Tagline must be between 20 and 100 characters";
    }

    if (
      credentials?.description?.length < 100 ||
      credentials?.description?.length > 500
    ) {
      newErrors.description =
        "Description must be between 100 and 500 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Clear errors if there are none
      setErrors({});
      mutate_UpdateDetails({
        credentials: credentials,
      });
    }
  };

  return (
    <div className="profilecompletion_overlay">
      <div className="profilecompletion_modal">
        <div className="profilecompletion_header">
          <h1> We&apos;re almost done </h1>

          <p>
            To make your Organization visible to others, please complete your
            profile.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateDetails({ credentials: credentials });
          }}
        >
          {fields.map((field) => (
            <div className="profilecompletion_element" key={field}>
              <label>{_.startCase(field)}</label>
              {field === "description" ? (
                <textarea
                  name={field}
                  value={credentials[field] || ""}
                  onChange={handleChange}
                  className="auth_input"
                  placeholder={`Enter your ${field}`}
                />
              ) : (
                <input
                  type="text"
                  name={field}
                  value={credentials[field] || ""}
                  onChange={handleChange}
                  className="auth_input"
                  placeholder={`Enter your ${field}`}
                />
              )}
              {errors[field] && (
                <span className="profilecompletion_error">{errors[field]}</span>
              )}
            </div>
          ))}

          <div className="profilecompletion_btndiv">
            <Button
              type="submit"
              disabled={
                Object.keys(credentials)?.length < 2 ||
                credentials?.description === "" ||
                credentials?.tagLine === ""
              }
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileCompletion;

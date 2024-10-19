/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUser, updateUserData } from "@redux/slice/userSlice";
import { UpdateUser } from "@service/MilanApi";
import { useMutation } from "@tanstack/react-query";
import { showErrorToast, showSuccessToast } from "@utils/Toasts";
import _ from "lodash";
import { Button } from "..";
import getProfileFields from "../../../utils/getProfileFields";
import "./ProfileCompletion.scss";

const ProfileCompletion = () => {
  const [credentials, setCredentials] = useState({});
  const user = useSelector(selectUser);
  const fields = getProfileFields(user);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const { mutate: handleUpdateDetails } = useMutation({
    mutationFn: UpdateUser,
    onSuccess: (data) => {
      dispatch(updateUserData(credentials));
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(error?.message);
    },
  });

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

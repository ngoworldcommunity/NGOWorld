/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector } from "react-redux";

import getProfileFields from "../../../utils/getProfileFields";
import "./ProfileCompletion.scss";

const ProfileCompletion = () => {
  const [credentials, setCredentials] = useState({});
  const user = useSelector((state) => state.user);

  const fields = getProfileFields(user);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="profilecompletion_overlay">
      <div className="profilecompletion_modal">
        <div className="profilecompletion_header">
          <h1> We&apos;re almost done </h1>

          <p>
            Please complete your profile to enjoy the full benefits of the
            platform.
          </p>
        </div>

        <form>
          {fields.map((field) => (
            <div className="profilecompletion_element" key={field}>
              <label>{field}</label>
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
                  type="text" // Assuming the default type for other fields is text
                  name={field}
                  value={credentials[field] || ""}
                  onChange={handleChange}
                  className="auth_input"
                  placeholder={`Enter your ${field}`}
                />
              )}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default ProfileCompletion;

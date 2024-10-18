/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import getProfileFields from "../../../utils/getProfileFields";
import Button from "../buttons/globalbutton/Button";
import "./ProfileCompletion.scss";

const ProfileCompletion = ({ editProfile }) => {
  const [part, setPart] = useState(editProfile ? 2 : 1);
  const [currentStep, setcurrentStep] = useState(2);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (editProfile) {
      setFormData(user);
    }
  }, [editProfile]);

  const fields = getProfileFields(user, editProfile);

  const totalfields = fields.length;

  const handleIncrementStep = () => {
    if (currentStep + 2 <= totalfields) {
      setcurrentIndex(currentIndex + 2);
      setcurrentStep(currentStep + 2);
    }
  };

  const handleDecrementStep = () => {
    if (currentStep - 2 >= 2) {
      setcurrentIndex(currentIndex - 2);
      setcurrentStep(currentStep - 2);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  formData is an object
    // lenght of an object

    // const response = await UpdateUser(formData);
    // if (response?.status !== 200) {
    //   showErrorToast(response?.data?.message);
    // } else {
    //   dispatch(updateUserData(formData));
    //   setFormData({});
    //   setShowProfileModal(false);
    //   seteditProfile(false);
    //   showSuccessToast(response?.data?.message);
    //   mutate(clubEndpoints.details(user?.userName));
    // }
  };

  return (
    <div className="profilecompletion_overlay">
      <div className="profilecompletion_modal">
        <div className="profilecompletion_header">
          {part === 1 ? (
            <h1> Choose Account Type </h1>
          ) : (
            <h1> {editProfile ? "Edit Profile" : `We're almost done`} </h1>
          )}

          {part === 1 ? (
            <p>Your Account Type is permanent and cannot be changed later.</p>
          ) : !editProfile ? (
            <p>
              Please complete your profile to enjoy the full benefits of the
              platform.
            </p>
          ) : null}
        </div>

        {/* <form>
          {fields.slice(currentIndex, currentIndex + 2).map((elId) => {
            const formElement = ProfileElements.find(
              (element) => element.id === elId,
            );

            return (
              <div className="profilecompletion_element" key={formElement.id}>
                <label>{formElement?.label}</label>
                {formElement?.id === "description" ? (
                  <textarea
                    type={formElement?.type}
                    name={formElement?.id}
                    value={formData[formElement?.id] || ""}
                    onChange={handleChange}
                    className="auth_input"
                    placeholder={formElement?.placeholder}
                  />
                ) : (
                  <input
                    type={formElement?.type}
                    name={formElement?.id}
                    value={formData[formElement?.id] || ""}
                    onChange={handleChange}
                    className="auth_input"
                    placeholder={formElement?.placeholder}
                  />
                )}
              </div>
            );
          })}
        </form> */}

        <div className="profilecompletion_btndiv">
          <Button
            variant="solid"
            disabled={currentStep === 2}
            onClickfunction={handleDecrementStep}
          >
            Previous
          </Button>
          {currentStep == totalfields ? (
            <Button
              variant="solid"
              onClickfunction={handleSubmit}
              disabled={Object.keys(formData).length === 0}
            >
              Finish
            </Button>
          ) : (
            <Button variant="solid" onClickfunction={handleIncrementStep}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCompletion;

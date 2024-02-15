import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { ProfileCompletionDetails } from "../../../constants";
import { updateUserData } from "../../../redux/slice/userSlice";
import { UpdateUser } from "../../../service/MilanApi";
import { showErrorToast, showSuccessToast } from "../../../utils/Toasts";
import Button from "../buttons/globalbutton/Button";
import "./ProfileCompletion.scss";

const ProfileCompletion = ({
  setShowProfileModal,
  editProfile,
  seteditProfile,
}) => {
  const [missingElements, setMissingElements] = useState([]);
  const [currentStep, setcurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const info = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    calculateMissingElements();
    if (editProfile) {
      setFormData(info);
    }
  }, [info]);

  const calculateMissingElements = () => {
    const missing = [];
    if (!info.tagLine) missing.push("tagLine");
    if (!info.description) missing.push("description");
    if (!info.city) missing.push("city");
    if (!info.state) missing.push("state");
    if (!info.address) missing.push("address");
    if (!info.country) missing.push("country");
    if (!info.pincode) missing.push("pincode");

    setMissingElements(missing);
  };

  const editProfileFields = [
    "name",
    "tagLine",
    "description",
    "city",
    "state",
    "address",
    "country",
    "pincode",
  ];

  const calculateTotalSteps = () => {
    if (editProfile) {
      if (editProfileFields.length % 2 === 0) {
        return Math.ceil(editProfileFields.length / 2);
      } else {
        return Math.ceil(editProfileFields.length / 2) + 1;
      }
    } else {
      if (missingElements.length % 2 === 0) {
        return Math.ceil(missingElements.length / 2);
      } else {
        return Math.ceil(missingElements.length / 2) + 1;
      }
    }
  };

  const validateFields = () => {
    let stepErrors = {};

    const currentMissingElements = missingElements.slice(
      currentStep,
      currentStep + 2,
    );

    const formElementstoBeValidated = ProfileCompletionDetails.elements.filter(
      (element) => currentMissingElements.includes(element.id),
    );

    formElementstoBeValidated.forEach((element) => {
      if (
        !formData[element.id] ||
        element.minimumLength > formData[element.id]?.length
      ) {
        stepErrors[element.id] = element.errorMessage;
      }
    });

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleIncrementStep = () => {
    if (editProfile) {
      if (currentStep < calculateTotalSteps()) setcurrentStep(currentStep + 2);
    } else {
      if (validateFields() && currentStep < calculateTotalSteps())
        setcurrentStep(currentStep + 2);
    }
  };

  const handleDecrementStep = () => {
    if (currentStep - 2 >= 0) setcurrentStep(currentStep - 2);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFields()) {
      const response = await UpdateUser(formData);
      if (response?.status !== 200) {
        showErrorToast(response?.data?.message);
      } else {
        dispatch(updateUserData(formData));
        setFormData({});
        setShowProfileModal(false);
        seteditProfile(false);
        showSuccessToast(response?.data?.message);
      }
    }
  };

  const maxSteps = editProfile
    ? editProfileFields.length
    : missingElements.length;

  return (
    <div className="profilecompletion_overlay">
      <div className="profilecompletion_modal">
        <IoMdCloseCircleOutline
          className="crossButton"
          onClick={() => {
            setShowProfileModal(false);
            seteditProfile(false);
            Cookies.set("skipProfileCompletion", "true", { expires: 7 });
          }}
        />

        <div className="profilecompletion_header">
          <h1> {editProfile ? "Edit Profile" : `We're almost done`} </h1>
          {!editProfile && (
            <p>
              Please complete your profile to enjoy the full benefits of the
              platform
            </p>
          )}
        </div>

        <form>
          {editProfile
            ? editProfileFields
                .slice(currentStep, currentStep + 2)
                .map((elId) => {
                  const formElement = ProfileCompletionDetails.elements.find(
                    (element) => element.id === elId,
                  );
                  console.log("🚀 ~ .map ~ formElement:", formElement);

                  return (
                    <div
                      className="profilecompletion_element"
                      key={formElement.id}
                    >
                      <label>{formElement?.label}</label>
                      <input
                        type={formElement?.type}
                        name={formElement?.id}
                        value={formData[formElement?.id] || ""}
                        onChange={handleChange}
                        className="auth_input"
                        placeholder={formElement?.placeholder}
                      />
                      {errors[formElement?.id] && (
                        <p>{errors[formElement?.id]}</p>
                      )}
                    </div>
                  );
                })
            : missingElements
                .slice(currentStep, currentStep + 2)
                .map((elId) => {
                  const formElement = ProfileCompletionDetails.elements.find(
                    (element) => element.id === elId,
                  );

                  return (
                    <div
                      className="profilecompletion_element"
                      key={formElement.id}
                    >
                      <label>{formElement?.label}</label>
                      <input
                        type={formElement?.type}
                        name={formElement?.id}
                        value={formData[formElement?.id] || ""}
                        onChange={handleChange}
                        className="auth_input"
                        placeholder={formElement?.placeholder}
                      />
                      {errors[formElement?.id] && (
                        <p>{errors[formElement?.id]}</p>
                      )}
                    </div>
                  );
                })}
        </form>

        <div className="profilecompletion_btndiv">
          <Button
            variant="solid"
            onClickfunction={handleDecrementStep}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          {currentStep + 2 >= maxSteps ? (
            <Button variant="solid" onClickfunction={handleSubmit}>
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

import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { ProfileCompletionDetails } from "../../../constants";
import { UpdateUser } from "../../../service/MilanApi";
import { showErrorToast, showSuccessToast } from "../../../utils/Toasts";
import Button from "../buttons/globalbutton/Button";
import "./ProfileCompletion.scss";

const ProfileCompletion = ({ setShowProfileModal, info }) => {
  const [missingElements, setMissingElements] = useState([]);
  const [currentStep, setcurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    calculateMissingElements();
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

  const totalSteps =
    missingElements.length % 2 === 0
      ? Math.ceil(missingElements.length / 2)
      : Math.ceil(missingElements.length / 2) + 1;

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
    if (validateFields() && currentStep < totalSteps)
      setcurrentStep(currentStep + 2);
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
        setShowProfileModal(false);
        showSuccessToast(response?.data?.message);
      }
    }
  };

  return (
    <div className="profilecompletion_overlay">
      <div className="profilecompletion_modal">
        <IoMdCloseCircleOutline
          className="crossButton"
          onClick={() => {
            setShowProfileModal(false);
          }}
        />

        <div className="profilecompletion_header">
          <h1>We&apos;re almost done</h1>
          <p>
            Please complete your profile to enjoy the full benefits of the
            platform
          </p>
        </div>

        <form>
          {missingElements.slice(currentStep, currentStep + 2).map((elId) => {
            const formElement = ProfileCompletionDetails.elements.find(
              (element) => element.id === elId,
            );

            return (
              <div className="profilecompletion_element" key={formElement.id}>
                <label>{formElement?.label}</label>
                <input
                  type={formElement?.type}
                  name={formElement?.id}
                  value={formData[formElement?.id] || ""}
                  onChange={handleChange}
                  className="auth_input"
                  placeholder={formElement?.placeholder}
                />
                {errors[formElement?.id] && <p>{errors[formElement?.id]}</p>}
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
          {currentStep + 2 >= missingElements.length ? (
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

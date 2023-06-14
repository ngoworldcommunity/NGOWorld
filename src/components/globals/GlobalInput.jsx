//
import React from "react";

export const GlobalInput = React.forwardRef(
  (
    {
      label,
      labelClassName,
      id,
      name,
      type,
      className,
      placeholder,
      value,
      readOnly,
      onChange,
      errorMessage,
      errorType,
      length,
      ...props
    },
    ref,
  ) => {
    const handleInputChange = (event) => {
      let target = event.target;
      let name = target.name;
      let value =
        target.type === "checkbox" || target.type === "radio"
          ? target.checked
          : target.value;
      onChange(event, { name: name, value: value });
    };

    return (
      <>
        {label && (
          <label htmlFor={name || ""} className={labelClassName || ""}>
            {label || ""}
          </label>
        )}
        <input
          type={type}
          id={id || ""}
          name={name || ""}
          className={className || "form-control"}
          placeholder={placeholder || ""}
          autoComplete={props.autoComplete || "off"}
          disabled={props.disabled || false}
          ref={ref}
          {...props}
          maxLength={length || undefined}
          readOnly={readOnly || false}
          value={value || ""}
          onChange={handleInputChange}
        />
        {errorType && (errorType !== "" || errorType !== "undefined") && (
          <span className="error-feedback">{errorMessage}</span>
        )}
      </>
    );
  },
);
GlobalInput.displayName = "GlobalInput";

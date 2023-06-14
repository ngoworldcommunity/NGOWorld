import React from "react";

export const GlobalTextarea = React.forwardRef(
  (
    {
      label,
      labelClassName,
      id,
      name,
      className,
      placeholder,
      value,
      onChange,
      errorMessage,
      errorType,
      keyUp,
      maxLength,
      ...props
    },
    ref
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
        <textarea
          id={id || ""}
          name={name || ""}
          className={className || "form-control"}
          placeholder={placeholder || ""}
          autoComplete={props.autoComplete || "off"}
          disabled={props.disabled || false}
          rows={props.rows || ""}
          ref={ref}
          maxLength={maxLength || undefined}
          {...props}
          value={value || ""}
          onKeyUp={keyUp || (event => { console.log("") })}
          onChange={handleInputChange}
        ></textarea>
        {
          errorType && (errorType !== "" || errorType !== "undefined") && (
            <span className="error-feedback">{errorMessage}</span>
          )
        }
      </>
    );
  }
);
GlobalTextarea.displayName = "GlobalTextarea";

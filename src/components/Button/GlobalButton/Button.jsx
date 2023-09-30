import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import { ClipLoader } from "react-spinners";

const Button = ({
  children,
  type = "button",
  variant = "solid",
  className = "",
  size = "",
  fontweight = "",
  to = "",
  disabled = false,
  cypressfield = "",
  isLoading = false,
  ...props
}) => {
  const classes = `btn ${styles.btn} ${className} ${styles[variant]} ${
    size ? styles[size] : ""
  } ${fontweight ? styles[fontweight] : ""}`;

  if (to && navigator.onLine === true) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      data-cy={cypressfield}
      {...props}
    >
      {isLoading ? <ClipLoader color="#000000" size={25} /> : children}
    </button>
  );
};

export default Button;

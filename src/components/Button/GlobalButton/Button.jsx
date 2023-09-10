import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({
  children,
  type = "button",
  variant = "solid",
  className = "",
  size = "",
  to = "",
  disabled = false,
  cypressfield = "",
  ...props
}) => {
  const classes = `btn ${styles.btn} ${className} ${styles[variant]} ${
    size ? styles[size] : ""
  }`;

  if (to) {
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
      {children}
    </button>
  );
};

export default Button;

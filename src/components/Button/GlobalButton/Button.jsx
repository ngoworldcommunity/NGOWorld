import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "solid",
  className = "",
  size = "",
  to = "",
  disabled = false,
  action = "",
  cypressfield = "",
  ...props
}) => {
  const navigate = useNavigate();

  const classes = `btn ${styles.btn} ${className} ${styles[variant]} ${
    size ? styles[size] : ""
  }`;

  const handleClick = () => {
    if (action === "login") {
      navigate("/auth/login");
    } else if (action === "signup") {
      navigate("/auth/register");
    } else {
      if (onClick) {
        onClick;
      }
    }
  };

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
      onClick={handleClick}
      data-cy={cypressfield}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

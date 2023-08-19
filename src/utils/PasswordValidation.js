export default function validatePassword(props) {
  let lowerCase = /[a-z]/g;
  let upperCase = /[A-Z]/g;
  let numbers = /[0-9]/g;
  let special = /.[!@#$%^&*]/g;

  if (props.password != props.confirmedPassword) {
    return {
      auth: false,
      message: "Password is not matching with Confirm Password",
    };
  } else if (!props.password.match(lowerCase)) {
    return {
      auth: false,
      message: "Password should contain at least one lowercase alphabet",
    };
  } else if (!props.password.match(upperCase)) {
    return {
      auth: false,
      message: "Password should contain at least one uppercase alphabet",
    };
  } else if (!props.password.match(numbers)) {
    return {
      auth: false,
      message: "Password should contain at least one number",
    };
  } else if (props.password.length < 8) {
    return {
      auth: false,
      message: "Password should not be less than 8 characters",
    };
  } else if (!props.password.match(special)) {
    return {
      auth: false,
      message: "Password should contains atleast one special character",
    };
  } else
    return {
      auth: true,
      message: "Good to go",
    };
}

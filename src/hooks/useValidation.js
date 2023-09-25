const useValidation = (credentials, userSignup, clubSignup) => {
  const errors = [];
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[a-zA-Z]+$/;
  const clubnameRegex = /^[a-zA-Z\s]+$/;

  if (!credentials.email) {
    errors.push({ error: true, message: "Please enter your email" });
  } else if (!emailRegex.test(credentials.email)) {
    errors.push({ error: true, message: "Please enter a valid email" });
  }

  if (!credentials.password) {
    errors.push({ error: true, message: "Please enter your password" });
  } else if (credentials.password.length < 6) {
    errors.push({
      error: true,
      message: "Password must be at least 6 characters long",
    });
  }

  if (credentials.confirmPassword) {
    if (credentials.password !== credentials.confirmPassword) {
      errors.push({
        error: true,
        message: "Password and confirm password do not match",
      });
    }
  }

  if (userSignup) {
    if (!credentials.firstname) {
      errors.push({ error: true, message: "Please enter your first name" });
    } else if (!nameRegex.test(credentials.firstname)) {
      errors.push({ error: true, message: "Please enter a valid first name" });
    } else if (
      credentials.firstname.length < 3 ||
      credentials.firstname.length > 30
    ) {
      errors.push({
        error: true,
        message: "First name must be between 3 and 30 characters long",
      });
    }

    if (!credentials.lastname) {
      errors.push({ error: true, message: "Please enter your last name" });
    } else if (!nameRegex.test(credentials.lastname)) {
      errors.push({ error: true, message: "Please enter a valid last name" });
    } else if (
      credentials.lastname.length < 3 ||
      credentials.lastname.length > 30
    ) {
      errors.push({
        error: true,
        message: "Last name must be between 3 and 30 characters long",
      });
    }
  }

  if (clubSignup) {
    if (!credentials.name) {
      errors.push({ error: true, message: "Please enter your club name" });
    } else if (!clubnameRegex.test(credentials.name)) {
      errors.push({ error: true, message: "Please enter a valid club name" });
    } else if (credentials.name.length < 3 || credentials.name.length > 30) {
      errors.push({
        error: true,
        message: "Club name must be between 3 and 30 characters long",
      });
    }

    if (!credentials.tagLine) {
      errors.push({ error: true, message: "Please enter your club tagline" });
    } else if (
      credentials.tagLine.length < 20 ||
      credentials.tagLine.length > 220
    ) {
      errors.push({
        error: true,
        message: "Club tagline must be between 20 and 220 characters long.",
      });
    }

    if (!credentials.description) {
      errors.push({
        error: true,
        message: "Please enter your club description",
      });
    } else if (
      credentials.description.length < 100 ||
      credentials.description.length > 1000
    ) {
      errors.push({
        error: true,
        message:
          "Club description must be between 100 and 1000 characters long",
      });
    }
  }

  if (userSignup || clubSignup) {
    if (!credentials.slug) {
      errors.push({ error: true, message: "Please enter your username" });
    } else if (
      credentials.slug[0] === "/" ||
      credentials.slug[credentials.slug.length - 1] === "/"
    ) {
      errors.push({
        error: true,
        message: "Username must not start or end with '/'",
      });
    } else if (/[^a-zA-Z0-9-]/.test(credentials.slug)) {
      errors.push({
        error: true,
        message: "Username must contain only letters, numbers and '-'",
      });
    } else if (credentials.slug.length < 3 || credentials.slug.length > 30) {
      errors.push({
        error: true,
        message: "Username must be between 3 and 30 characters long",
      });
    }

    if (!credentials.city) {
      errors.push({ error: true, message: "Please enter your city" });
    }

    if (!credentials.state) {
      errors.push({ error: true, message: "Please enter your state" });
    }

    if (!credentials.address) {
      errors.push({ error: true, message: "Please enter your address" });
    } else if (
      credentials.address.length < 20 ||
      credentials.address.length > 200
    ) {
      errors.push({
        error: true,
        message: "Address must be between 20 and 200 characters long",
      });
    }

    if (!credentials.country) {
      errors.push({ error: true, message: "Please enter your country" });
    }

    const pincode = credentials?.pincode?.toString();

    if (!credentials.pincode) {
      errors.push({ error: true, message: "Please enter your pincode" });
    } else if (pincode.length !== 6 && pincode.length !== 5) {
      errors.push({ error: true, message: "Please enter a valid pincode" });
    }
  }

  return errors.length ? errors : { error: false, message: "" };
};

export default useValidation;

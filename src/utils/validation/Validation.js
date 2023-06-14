import * as yup from "yup";
import {
  strongPassword,
  commonFields,
  validationErrors,
} from "../../utils/common";

export const registerSchema = yup.object().shape({
  firstname: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.FIRST_NAME),
  lastname: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.LAST_NAME),
  address: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.ADDRESS),
  password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD,
    )
    .min(8, validationErrors.MINIMUM_PASSWORD)
    .max(18)
    .test(
      validationErrors.STRONG_PASSWORD,
      validationErrors.STRONG_PASSWORD,
      (value) => strongPassword(value),
    ),
  pincode: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.PINCODE)
    .min(6),
  email: yup
    .string()
    .email()
    .required(validationErrors.PLEASE_ENTER + commonFields.EMAIL),
});

export const clubRegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.CLUBNAME),
  tagLine: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.TAGLINE),
  address: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.ADDRESS),
  password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD,
    )
    .min(8, validationErrors.MINIMUM_PASSWORD)
    .max(18)
    .test(
      validationErrors.STRONG_PASSWORD,
      validationErrors.STRONG_PASSWORD,
      (value) => strongPassword(value),
    ),
  confirmPassword: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER +
        commonFields.THE +
        commonFields.CONFIRM +
        " " +
        commonFields.PASSWORD,
    )
    .oneOf([yup.ref("password")], validationErrors.SAME_PASSWORD),
  pincode: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.PINCODE)
    .min(6),
  email: yup
    .string()
    .email()
    .required(validationErrors.PLEASE_ENTER + commonFields.EMAIL),
  description: yup
    .string()
    .required(validationErrors.PLEASE_ENTER + commonFields.CLUB +commonFields.DESCRIPTION),
});

export const loginSchema = yup.object().shape({
  password: yup
    .string()
    .required(
      validationErrors.PLEASE_ENTER + commonFields.THE + commonFields.PASSWORD,
    )
    .min(8, validationErrors.MINIMUM_PASSWORD)
    .max(18)
    .test(
      validationErrors.STRONG_PASSWORD,
      validationErrors.STRONG_PASSWORD,
      (value) => strongPassword(value),
    ),
  email: yup
    .string()
    .email()
    .required(validationErrors.PLEASE_ENTER + commonFields.EMAIL),
});

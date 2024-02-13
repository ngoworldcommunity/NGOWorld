import { z } from "zod";

const AuthSchema = {
  signInSchema: z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
  }),

  clubSignUpSchema: z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters long.",
    }),
    usertype: z.string().min(2, {
      message: "Please select a user type.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
  }),

  individualSignUpSchema: z.object({
    usertype: z.string().min(2, {
      message: "Please select a user type.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long.",
    }),
    firstname: z.string().min(2, {
      message: "First name must be at least 2 characters long.",
    }),
    lastname: z.string().min(2, {
      message: "Last name must be at least 2 characters long.",
    }),
  }),
};

export default AuthSchema;

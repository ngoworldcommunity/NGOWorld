import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters long.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters long.",
  }),
});

export const signInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
});

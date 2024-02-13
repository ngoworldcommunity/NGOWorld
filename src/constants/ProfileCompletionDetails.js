import { z } from "zod";

const ProfileCompletionDetails = {
  elements: [
    {
      id: "tagLine",
      label: "Tagline",
      placeholder: "A small and attractive tagline",
      minimumLength: 20,
      errorMessage: "Tagline must be at least 20 characters long",
      type: "text",
    },
    {
      id: "description",
      label: "Bio",
      placeholder: "A detailed bio about your organization",
      minimumLength: 100,
      errorMessage: "Bio must be at least 100 characters long",
      type: "textarea",
    },
    {
      id: "city",
      label: "City",
      placeholder: "The city where your organization is located",
      minimumLength: 3,
      errorMessage: "City must be at least 3 characters long",
      type: "text",
    },
    {
      id: "state",
      label: "State",
      placeholder: "The state where your organization is located",
      minimumLength: 3,
      errorMessage: "State must be at least 3 characters long",
      type: "text",
    },
    {
      id: "address",
      label: "Address",
      placeholder: "The address of your organization",
      minimumLength: 10,
      errorMessage: "Address must be at least 10 characters long",
      type: "text",
    },
    {
      id: "country",
      label: "Country",
      placeholder: "The country where your organization is located",
      minimumLength: 3,
      errorMessage: "Country must be at least 3 characters long",
      type: "text",
    },
    {
      id: "pincode",
      label: "Pincode",
      placeholder: "The pincode of your organization",
      minimumLength: 6,
      errorMessage: "Pincode must be at least 6 characters long",
      type: "text",
    },
  ],

  schema: z.object({
    tagLine: z.string().min(20, {
      message: "Tagline must be at least 20 characters long.",
    }),
    description: z.string().min(50, {
      message: "Description must be at least 50 characters long.",
    }),
    city: z.string().min(5, {
      message: "City must be at least 2 characters long.",
    }),
    state: z.string().min(5, {
      message: "State must be at least 5 characters long.",
    }),
    address: z.string().min(5, {
      message: "Address must be at least 5 characters long.",
    }),
    pincode: z.number().min(6, {
      message: "Pincode must be at least 6 characters long.",
    }),
  }),
};

export default ProfileCompletionDetails;

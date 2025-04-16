import { z } from "zod";

export const phoneSchema = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" });

export const emailSchema = z
  .string()
  .min(1, "Email is required")
  .email("Please enter a valid email");

export const nameSchema = z
  .string()
  .min(1, { message: "Name is required" })
  .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/, {
    message: "Name should contain only letters",
  });

export const titleSchema = z
  .string()
  .min(1, { message: "Title is required" })
  .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9\s]+$/, {
    message: "Invalid characters in title",
  });

export const surnameSchema = z
  .string()
  .min(1, { message: "Surname is required" })
  .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/, {
    message: "Surname should contain only letters",
  });
export const OrganizationNameSchema = z
  .string()
  .min(3, { message: "Organization name must be at least 3 characters" })
  .max(50, { message: "Organization name cannot exceed 50 characters" })
  .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9\s]+$/, "Invalid characters in name");
export const DescriptionSchema = z
  .string()
  .min(3, { message: "Description name must be at least 3 characters" })
  .max(500, { message: "Description name cannot exceed 500 characters" })
  .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9\s]+$/, "Invalid characters in name");

export const UUIDSchema = z.string().min(1).uuid();

export const StartDateSchema = z.coerce.date({
  errorMap: (error) => {
    if (error.message === "Invalid date") {
      return {
        message: "Input start date is invalid. Please provide a valid date",
      };
    }
    return { message: "Start date is required" };
  },
});

export const EndDateSchema = z.coerce.date({
  errorMap: (error) => {
    if (error.message === "Invalid date") {
      return {
        message: "Input End date is invalid. Please provide a valid date",
      };
    }
    return { message: "End date is required" };
  },
});

export const userCreateAccountSchema = z.object({
  name: nameSchema,

  surname: surnameSchema,

  email: emailSchema,

  phone: phoneSchema,
});

export const organizationSchema = z.object({
  name: OrganizationNameSchema,
});

export const eventSchema = z
  .object({
    name: nameSchema,
    start_date: StartDateSchema,
    end_date: EndDateSchema,
  })
  .refine(
    (data) => {
      if (isNaN(data.start_date.getTime()) || isNaN(data.end_date.getTime())) {
        return false;
      }
      return data.end_date.getTime() > data.start_date.getTime();
    },
    {
      message: "End date cannot be earlier than start date",
      path: ["end_date"],
    },
  );

export const taskSchema = z.object({
  title: titleSchema,
  description: DescriptionSchema,
});

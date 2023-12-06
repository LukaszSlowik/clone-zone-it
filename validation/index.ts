import { z } from "zod";
export const getSchema = (lang: string) => {
  const messages: any = {
    en: {
      required: "This field is required",
      invalid_email: "Invalid email",
      // other messages...
    },
    de: {
      required: "Dieses Feld ist erforderlich",
      invalid_email: "Ungültige E-Mail",
      // other messages...
    },
    pl: {
      required: "To pole jest wymagane",
      invalid_email: "Nieprawidłowy adres e-mail",
    },
    // other languages...
  };

  const langMessages = messages[lang];

  return z.object({
    name: z.string().min(2, langMessages.required),
    email: z
      .string({ required_error: langMessages.required })
      .email(langMessages.invalid_email),
    phone: z.string().optional(),
    message: z.string().min(2, langMessages.required),
  });
};

// export const schema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters long"),
//   email: z
//     .string({ required_error: "Email is required" })
//     .email("Invalid email"),
//   phone: z.string().optional(),
//   message: z.string().min(2, "Message must be at least 2 characters long"),
//   //file: typeof window === "undefined" ? z.any() : z.instanceof(File),
// });
//export type FormValues = z.infer<typeof schema>;

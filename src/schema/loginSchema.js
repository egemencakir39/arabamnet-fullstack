import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Geçersiz email formatı")
    .required("Email zorunludur"),
  password: yup
    .string()
    .required("Şifre zorunludur"),
});

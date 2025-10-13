import * as yup from "yup";

export const updateSchema = yup.object({
  email: yup
    .string()
    .email("Geçersiz email formatı"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{6,}$/,
      "Şifre en az 1 büyük harf ve 1 rakam içermelidir"
    ),
  name: yup
    .string()
    .trim()
    .min(2, "İsim en az 2 karakter olmalıdır"),
  surname: yup
    .string()
    .min(2, "Soyisim en az 2 karakter olmalıdır"),
  phone: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifreler eşleşmiyor"),
});
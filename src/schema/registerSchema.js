import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup
    .string()
    .email("Geçersiz email formatı")
    .required("Email zorunludur"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{6,}$/,
      "Şifre en az 1 büyük harf ve 1 rakam içermelidir"
    )
    .required("Şifre zorunludur"),
  name: yup
    .string()
    .trim()
    .min(2, "İsim en az 2 karakter olmalıdır")
    .required("İsim zorunludur"),
  surname: yup
    .string()
    .min(2, "Soyisim en az 2 karakter olmalıdır")
    .required("Soyisim zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifreler eşleşmiyor")
    .required("Şifre doğrulama zorunludur"),
});

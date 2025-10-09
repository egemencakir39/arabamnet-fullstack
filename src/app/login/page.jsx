"use client";
import { loginSchema } from "../../schema/loginSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log("Form gönderildi:", values);

          try {
            const res = await fetch("api/auth/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            });

            const data = await res.json();

            if (res.ok) {
              toast.success("Giriş başarılı! 🎉");
              if (data.token) {
                localStorage.setItem("token", data.token);
              }
              if (data.user.isAdmin) {
                router.push(`/admin/${data.user._id}`);
              } else {
                router.push(`/profile/${data.user._id}`);
              }
            } else {
              toast.error(data.error || "Giriş başarısız!");
            }
            resetForm();
          } catch (error) {
            toast.error("Sunucu Hatası!");
            console.error("İstek hatası:", error);
            setServerMessage("Sunucu hatası oluştu!");
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex justify-center flex-col gap-4 border px-15 py-10 rounded-lg shadow-lg bg-white m-3 w-full sm:w-3/4 md:w-1/2 lg:w-1/4">
            <h1 className="text-2xl text-center">Giriş Yap</h1>
            <p className="text-center text-sm text-gray-400">
              Arabam.net ile fırsatları kaçırma
            </p>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="E-posta adresi"
                className="border-gray-400 border rounded-sm text-sm w-full px-3 py-3 bg-gray-100"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Şifre"
                className="border-gray-400 border rounded-sm text-sm w-full px-3 py-3 bg-gray-100"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <Link
              href="/register"
              className="text-xs text-gray-400 text-center hover:underline"
            >
              Hesabın yok mu? Hemen Kaydol
            </Link>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 text-center py-2 px-3 text-white rounded-lg bg-blue-500 hover:bg-blue-600 transition"
              >
                Giriş Yap
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;

"use client";
import { loginSchema } from "../../schema/loginSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/authSlice";
import { CircularProgress } from "@mui/material";

const page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-100">
        <CircularProgress size={40} thickness={3} />
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={async (values, { resetForm }) => {
          const result = await dispatch(loginUser(values));

          if (loginUser.fulfilled.match(result)) {
            toast.success("Giriş başarılı 🎉");
            const user = result.payload.user;

            if (user.isAdmin) {
              router.push(`/admin/${user._id}`);
            } else {
              router.push(`/profile/${user._id}`);
            }
            resetForm();
          } else if (loginUser.rejected.match(result)) {
            toast.error("Giriş başarısız!");
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
                className="mt-4 text-center py-2 px-3 hover:text-white rounded-lg bg-amber-400 hover:bg-amber-500 transition"
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

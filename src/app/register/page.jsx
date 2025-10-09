"use client";
import { registerSchema } from "../../schema/registerSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

const page = () => {
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          surname: "",
          confirmPassword: "",
        }}
        validationSchema={registerSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          console.log("Form gönderildi:", values);

          try {
            
            const res = await fetch("/api/auth/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" }, 
              body: JSON.stringify({
                username: `${values.name} ${values.surname}`, 
                email: values.email,
                password: values.password, 
              }),
            });

            const data = await res.json();
            if (res.ok) {
              toast.success("Kayıt Başarılı")
              resetForm();
            } else {
              toast.error(data.error || "Bir hata oluştur")
            }
          } catch (error) {
            toast.error("Sunucu Hatası")
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="flex justify-center flex-col gap-4 border px-15 py-10 rounded-lg shadow-lg bg-white m-3 w-full sm:w-3/4 md:w-1/2 lg:w-1/4">
            <h1 className="text-2xl text-center">Kayıt Ol</h1>
            <p className="text-center text-sm text-gray-400">
              Arabam.net ile fırsatları kaçırma
            </p>

            <div>
              <Field
                type="name"
                name="name"
                placeholder="İsim"
                className="border-gray-400 border rounded-sm text-sm w-full px-3 py-3 bg-gray-100"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>
            <div>
              <Field
                type="surname"
                name="surname"
                placeholder="Soyisim"
                className="border-gray-400 border rounded-sm text-sm w-full px-3 py-3 bg-gray-100"
              />
              <ErrorMessage
                name="surname"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

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
            <div>
              <Field
                type="confirmPassword"
                name="confirmPassword"
                placeholder="Şifre Doğrula"
                className="border-gray-400 border rounded-sm text-sm w-full px-3 py-3 bg-gray-100"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 text-center py-2 px-3 text-white rounded-lg bg-blue-500 hover:bg-blue-600 transition"
              >
                Kayıt Ol
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;

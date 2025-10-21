"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { updateSchema } from "@/schema/updateSchema";
import { useSelector } from "react-redux";

const ProfileInfo = () => {
  const { user } = useSelector((state) => state.auth);
  const initialValues = {
    name: user?.name,
    surname: user?.surname,
    email: user?.email,
    phone: user?.phone,
    password: "",
  };
  return (
    <div className="w-full">
      <div className="bg-white mt-15 rounded-2xl shadow-2xl">
        <h1 className="text-center p-5 text-xl">Hesap Bilgileri</h1>
        <Formik initialValues={initialValues} validationSchema={updateSchema}>
          <Form>
            <div className="flex justify-between p-3">
              <label htmlFor="name" className="flex text-base items-center">
                İsim
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="w-[70%] border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex justify-between p-3">
              <label htmlFor="surname" className="flex text-base items-center">
                Soyisim
              </label>
              <Field
                type="text"
                id="surname"
                name="surname"
                className="w-[70%] border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex justify-between p-3">
              <label htmlFor="email" className="flex text-base items-center">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="w-[70%] border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex justify-between p-3">
              <label htmlFor="phone" className="flex text-base items-center">
                Telefon
              </label>
              <Field
                type="text"
                id="phone"
                name="phone"
                className="w-[70%] border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="flex justify-between p-3">
              <label htmlFor="password" className="flex text-base items-center">
                Şifre
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="w-[70%] border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ProfileInfo;

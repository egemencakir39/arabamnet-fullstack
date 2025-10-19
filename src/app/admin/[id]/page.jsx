"use client";
import AdminVehicles from "@/components/AdminVehicles";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IoMdAdd } from "react-icons/io";
import { TextField } from "@mui/material";
import AddCar from "@/components/AddCar";

const page = () => {
  return (
   <div>
    <AddCar/>
   </div>
  );
};

export default page;

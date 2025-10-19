"use client";
import React, { useEffect } from "react";
import VehicleCard from "./VehicleCard";
import { useDispatch, useSelector } from "react-redux";
import { getCars } from "@/redux/carDataSlice";
import { CircularProgress } from "@mui/material";

const Vehicles = () => {
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((state) => state.carData);

  useEffect(() => {
    dispatch(getCars());
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-100">
        <CircularProgress size={40} thickness={3} />
      </div>
    );
  }
  if (error)
    return (
      <div className="text-center text-red-500">Error fetching cars</div>
    );
  return (
    <div id="vehicles" className="container mt-15 ">
      <h2 className="text-5xl text-center">Satıştaki Araçlar</h2>
      <div className="flex flex-wrap justify-center">
        {items.map((car) => (
          <VehicleCard key={car._id} car={car} />
        ))}

        {items.length === 0 && (
          <div className="text-center text-gray-500">
            Satışta henüz araç yok
          </div>
        )}
      </div>
    </div>
  );
};

export default Vehicles;

import React from "react";
import { FaRoad } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GiStoneWheel } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Link from "next/link";

const VehicleCard = ({ car }) => {
  return (
    <div className="mt-15 p-5">
      <Link href={`ilan/${car._id}`}>
        <div className="bg-white hover:cursor-pointer rounded-2xl shadow-md hover:shadow-xl w-85 hover:-translate-y-1 transition-all">
          <img
            className="w-85 h-56 rounded-t-xl"
            src={car.images?.[0]?.url}
            alt={`${car.brand} ${car.model}`}
          />
          <h1 className="p-2 text-2xl">{car.brand}</h1>
          <h3 className="p-2">{car.model}</h3>
          <div className="p-2 flex flex-wrap justify-around">
            <p className="flex items-center  pr-2">
              <FaCalendarAlt className="mx-2" /> {car.modelYear}
            </p>
            <p className="flex items-center  pr-2">
              <FaRoad className="mx-2" />{" "}
              {Number(car.km).toLocaleString("tr-TR")} KM
            </p>
            <p className="flex items-center  pr-2">
              <GiStoneWheel className="mx-2" /> {car.gearBox}
            </p>
            <p className="flex items-center  pr-2">
              <BsFillFuelPumpFill className="mx-1" /> {car.fuel}
            </p>
            <p className="flex items-center pr-2">
              <FaLocationDot className="mx-1" /> {car.address}
            </p>
          </div>
          <h2 className="text-yellow-400 p-4 font-bold text-2xl">
            {Number(car.price).toLocaleString("tr-TR")} TL
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default VehicleCard;

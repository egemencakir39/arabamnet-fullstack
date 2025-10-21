"use client";
import { getCarById } from "@/redux/carDataSlice";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";


const AdvertSlider = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(0);
  const { items, loading, error, selectedCar } = useSelector(
    (state) => state.carData
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(getCarById(id));
  }, []);

  const nextSlide = () => {
   if (!selectedCar.images || selectedCar.images.length <= 1) return; 
    setCurrent((prev) => (prev + 1) % selectedCar.images.length);
  };

  const prevSlide = () => {
     if (!selectedCar.images || selectedCar.images.length <= 1) return; 
    setCurrent((prev) => (prev - 1) % selectedCar.images.length);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full h-screen bg-gray-100">
        <CircularProgress size={40} thickness={3} />
      </div>
    );
  }
  if (error)
    return <div className="text-center text-red-500">Error fetching cars</div>;

  return (
    <div>
      <div className="mt-15">
        <p className="text-2xl font-bold text-gray-400">
          {selectedCar.modelYear}
        </p>
        <p className="text-3xl">
          {selectedCar.brand} {selectedCar.model}{" "}
        </p>
      </div>
      <div className="mt-5 lg:flex ">
        <div className="relative  lg:w-[70%] h-[600px] overflow-hidden rounded-xl">
          {selectedCar.images?.map((img, index) => (
            <img
              key={index}
              src={img.url}
              alt={`${selectedCar.brand} ${selectedCar.model}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
          >
            <FaChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {selectedCar.images?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current ? "bg-yellow-400 scale-110" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
        {/*Fiyat Bilgisi*/}
        <div className="lg:ml-10 lg:mt-0 mt-10 lg:w-[25%] w-full justify-center">
          <div className="bg-yellow-400 px-8 py-5 rounded-2xl">
            <p>Fiyat</p>
            <p className="text-2xl">
              {Number(selectedCar.price).toLocaleString("tr-TR")} TL
            </p>
          </div>

          {/* İletişim ve adres*/}

          <div className="bg-[#273c4d] mt-10 px-8 py-5 rounded-2xl">
            <div className="flex justify-between">
              <p className="text-yellow-400">Adres</p>
              <p className=" text-yellow-400">{selectedCar.address}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-yellow-400">Telefon</p>
              <p className=" text-yellow-400">{selectedCar.phone}</p>
            </div>
          </div>
          {/*Araç Özellikleri*/}
          <div className="bg-[#273c4d] mt-10 px-8 py-5 rounded-2xl">
            <div className="flex justify-between">
              <p className="text-yellow-400">Marka</p>
              <p className=" text-yellow-400">{selectedCar.brand}</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-yellow-400">Model</p>
              <p className=" text-yellow-400">{selectedCar.model}</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-yellow-400">Model Yılı</p>
              <p className=" text-yellow-400">{selectedCar.modelYear}</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-yellow-400">Yakıt</p>
              <p className=" text-yellow-400">{selectedCar.fuel}</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-yellow-400">Vites</p>
              <p className=" text-yellow-400">{selectedCar.gearBox}</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-yellow-400">KM</p>
              <p className=" text-yellow-400">
                {Number(selectedCar.km).toLocaleString("tr-TR")}
              </p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-yellow-400">Renk</p>
              <p className=" text-yellow-400">{selectedCar.color}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 bg-yellow-400 rounded-2xl ">
        <div className="p-5">
          <h3 className="text-2xl">Açıklama</h3>
          <p className="mt-2 whitespace-pre-line">{selectedCar.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertSlider;

"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  "/download.jpg",
  "/download.jpg",
  "/download.jpg",
  "/download.jpg",
  "/download.jpg",
];

const AdvertSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <div className="mt-15">
        <p className="text-2xl font-bold text-gray-400">2023</p>
        <p className="text-3xl">Hyundai i20N 1.6 T-GDI 6-MT </p>
      </div>
      <div className="mt-5 lg:flex">
        <div className="relative  lg:w-[70%] h-[600px] overflow-hidden rounded-xl">
          {slides.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
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
            {slides.map((_, index) => (
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
        <div className="lg:ml-10 lg:mt-0 sm:mt-10 lg:w-[25%] w-full justify-center">
          <div className="bg-yellow-400 px-8 py-5 rounded-2xl">
            <p>Fiyat</p>
            <p className="text-2xl">1.180.000</p>
          </div>

          {/* İletişim ve adres*/}

          <div className="bg-[#273c4d] mt-10 px-8 py-5 rounded-2xl">
            <div className="flex justify-between">
              <p className="text-yellow-400">Adres</p>
              <p className=" text-yellow-400">İstanbul/Beykoz</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-yellow-400">Telefon</p>
              <p className=" text-yellow-400">555 555 55 55</p>
            </div>
          </div>
          {/*Araç Özellikleri*/}
          <div className="bg-[#273c4d] mt-10 px-8 py-5 rounded-2xl">
            <div className="flex justify-between">
              <p className="text-yellow-400">Marka</p>
              <p className=" text-yellow-400">Hyundai</p>
            </div>
             <div className="flex justify-between mt-5">
              <p className="text-yellow-400">Model</p>
              <p className=" text-yellow-400">i20N</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-yellow-400">Model Yılı</p>
              <p className=" text-yellow-400">2023</p>
            </div>
             <div className="flex justify-between mt-5">
              <p className="text-yellow-400">Yakıt</p>
              <p className=" text-yellow-400">Benzin</p>
            </div>
             <div className="flex justify-between mt-5">
              <p className="text-yellow-400">Vites</p>
              <p className=" text-yellow-400">Manuel</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-yellow-400">KM</p>
              <p className=" text-yellow-400">125.000</p>
            </div>
            <div className="flex justify-between mt-5">
              <p className="text-yellow-400">Renk</p>
              <p className=" text-yellow-400">Mavi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertSlider;

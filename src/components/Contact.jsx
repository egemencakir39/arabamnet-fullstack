import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-15">
      <div className="flex justify-center text-center ">
        <div className="bg-amber-400 rounded-2xl py-4 px-10">
        <p className="text-2xl pb-4">Telefon</p>
        <p>+90 999 999 99 99</p>
        </div>
      </div>
      <div className="flex mt-5 justify-center text-center ">
        <div className="bg-[#273c4d] rounded-2xl py-4 px-10">
        <p className="text-2xl pb-4 text-yellow-400">E-Mail</p>
        <p className="text-yellow-400">info@arabamnet.com</p>
        </div>
      </div>
      <div className="flex mt-5 justify-center text-center ">
        <div className="bg-amber-400 rounded-2xl py-4 px-10 max-w-59.5">
        <p className="text-2xl pb-4">Adres</p>
        <p>Kavacık Mahallesi, Çubuklu Caddesi No: 128, Beykoz / İstanbul, Türkiye</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

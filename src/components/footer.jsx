import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from "next/link";

const footer = () => {
  return (
    <div className=" mt-15 bg-[#273c4d]">
      <div className="container p-6 text-white md:flex md:justify-around">
        <div className="text-amber-400 w-85 p-5">
          <h1 className="text-2xl mb-3">Hakkında</h1>
          <p className="text-white">
            ArabamNet, kullanıcıların hayalindeki aracı güvenle bulup satın
            alabileceği modern bir araç satış platformudur. Amacımız; şeffaf,
            hızlı ve güvenli bir alışveriş deneyimi sunarak, hem alıcıyı hem
            satıcıyı memnun etmektir. Binlerce onaylı ilan arasından bütçene ve
            ihtiyaçlarına en uygun aracı kolayca bulabilir, güvenli ödeme
            altyapımızla işlemini zahmetsizce tamamlayabilirsin. ArabamNet –
            Aradığın araç, güvenle burada!
          </p>
        </div>
        <div className="text-amber-400 w-85 p-5">
          <h1 className="text-2xl mb-3">Sayfalar</h1>
          <ul className="text-white">
            <Link href="/about">
              <li className="pb-2 hover:cursor-pointer">Hakkında</li>
            </Link>
             <li className="pb-2 hover:cursor-pointer">
              <a href="#vehicles">Satıştaki Araçlar</a>
            </li>
            <Link href="/contact">
            <li className="pb-2 hover:cursor-pointer">Bize Ulaş</li>
            </Link>
          </ul>
        </div>
        <div className="text-amber-400 w-85 p-5">
          <h1 className="text-2xl mb-3">İletişim</h1>
          <ul className="text-white">
            <li className="pb-3 flex items-center gap-2">
              <FaHome className="text-yellow-500 text-4xl " />
              Kavacık Mahallesi, Çubuklu Caddesi No: 128, Beykoz / İstanbul,
              Türkiye
            </li>
            <li className="pb-3 flex items-center gap-2">
              <IoIosMail className="text-yellow-500 text-2xl" />
              info@arabamnet.com
            </li>
            <li className="pb-3 flex items-center gap-2">
              <FaPhoneSquareAlt className="text-yellow-500 text-2xl" />
              +90 (999) 999 99 99
            </li>
          </ul>
          <div className="flex mt-2 text-4xl">
            <FaFacebook className="mr-4" />
            <FaInstagramSquare className="mr-4" />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-yellow-400 pb-2">
        Copyright © 2025 arabam.net | Tüm Hakları Saklıdır.
      </div>
    </div>
  );
};

export default footer;

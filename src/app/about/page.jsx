import React from "react";

const page = () => {
  return (
    <div className="container mt-20 flex justify-center items-center">
      <div className="bg-amber-400 rounded-2xl shadow-xl p-10 md:p-16 text-center max-w-3xl">
        <h1 className="text-4xl font-bold mb-6  drop-shadow-lg">
          Hakkında
        </h1>
        <p className="text-lg leading-relaxed">
          ArabamNet, kullanıcıların hayalindeki aracı güvenle bulup satın
          alabileceği modern bir araç satış platformudur. Amacımız; şeffaf,
          hızlı ve güvenli bir alışveriş deneyimi sunarak, hem alıcıyı hem
          satıcıyı memnun etmektir. Binlerce onaylı ilan arasından bütçene ve
          ihtiyaçlarına en uygun aracı kolayca bulabilir, güvenli ödeme
          altyapımızla işlemini zahmetsizce tamamlayabilirsin.{" "}
          <span className="font-semibold ">
            ArabamNet – Aradığın araç, güvenle burada!
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;

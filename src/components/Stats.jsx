import React from "react";
import { IoPeopleSharp } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa6";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaShop } from "react-icons/fa6";

const Stats = () => {
  const stats = [
    {
      number: "12.450+",
      title: "Mutlu Müşteri",
      text: "ArabamNet üzerinden araç alım satımı yapan memnun kullanıcılarımız.",
      icon: <IoPeopleSharp className="text-yellow-500 text-2xl" />,
    },
    {
      number: "8.300+",
      title: "Listelenen Araç",
      text: "Her gün yenilenen onaylı ikinci el ve sıfır araç ilanı.",
      icon: <FaCarSide className="text-yellow-500 text-2xl" />,
    },
    {
      number: "5.200+",
      title: "Gerçekleşen Satış",
      text: "Güvenli ödeme altyapısıyla tamamlanan araç satışları.",
      icon: <RiMoneyDollarBoxFill className="text-yellow-500 text-2xl" />,
    },
    {
      number: "1.120+",
      title: "Yetkili Satıcı & Galeri",
      text: "Türkiye genelinde profesyonel olarak satış yapan iş ortaklarımız.",
      icon: <FaShop className="text-yellow-500 text-2xl" />,
    },
  ];
  return (
    <div className="container md:flex justify-center mt-15">
      {stats.map((item, i) => (
        <div key={i} className="w-75 m-5 ">
          <div className="flex">
            <div className="bg-[#273c4d] p-3 rounded-4xl">{item.icon}</div>
            <h4 className="text-2xl py-2 px-4">{item.number}</h4>
          </div>
          <div>
            <h2 className="mt-3 text-2xl">{item.title}</h2>
            <p className="mt-3 text-gray-500">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

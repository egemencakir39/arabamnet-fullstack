import React from "react";
import { BiSolidLogIn } from "react-icons/bi";

const header = () => {
  return (
    <div className="bg-[#273c4d]">
      <div className="flex px-25 py-5 container justify-between items-center">
        <div className="w-70">
          <img src="/logo3.png" alt="logo" className="cursor-pointer" />
        </div>
        <nav>
          <ul className="flex text-white hover:cursor-pointer text-lg">
            <li className="mx-2 hover:text-yellow-300 hover:underline">
              Hakkında
            </li>
            <li className="mx-2 hover:text-yellow-300 hover:underline">
              Satıştaki Araçlar
            </li>
            <li className="mx-2 hover:text-yellow-300 hover:underline">
              Bize Ulaş
            </li>
          </ul>
        </nav>
        <div>
          <button className="bg-yellow-400 p-2 rounded-xl hover:cursor-pointer hover:text-white transition-all hover:bg-amber-500 flex">
            Giriş Yap
            <BiSolidLogIn className="text-2xl mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default header;

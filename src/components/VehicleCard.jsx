import React from 'react'
import { FaRoad } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GiStoneWheel } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Link from 'next/link';


const VehicleCard = () => {
  return (
    <div className='mt-15 p-5'>
      <Link href="/ilan/1">
      <div className="bg-white hover:cursor-pointer rounded-2xl shadow-md hover:shadow-xl w-85 hover:-translate-y-1 transition-all">
        <img className='w-85 rounded-t-xl' src="download.jpg" alt="" />
        <h1 className='p-2 text-2xl'>Hyundai i20N</h1>
        <h3 className='p-2'>1.6 T-GDI 6-MT</h3>
        <div className='p-2 flex flex-wrap justify-around'>
          <p className='flex items-center  pr-2'><FaCalendarAlt className='mx-2'/> 2022</p>
          <p className='flex items-center  pr-2'><FaRoad className='mx-2' /> 58.000 Km</p>
           <p className='flex items-center  pr-2'><GiStoneWheel className='mx-2' /> Manuel</p>
          <p className='flex items-center  pr-2'><BsFillFuelPumpFill className='mx-2' /> Benzin</p>
          <p className='flex items-center pr-2'><FaLocationDot className='mx-2' /> İstanbul/Beykoz</p>
        </div>
       <h2 className="text-yellow-400 p-4 font-bold text-2xl">1.250.000 ₺</h2>
      </div>
      </Link>
    </div>
  )
}

export default VehicleCard

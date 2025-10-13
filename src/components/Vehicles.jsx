import React from "react";
import VehicleCard from "./VehicleCard";

const Vehicles = () => {
  return (
    <div id="vehicles" className="container mt-15 ">
      <h2 className="text-5xl text-center">Satıştaki Araçlar</h2>
      <div className="flex flex-wrap justify-center">
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
        <VehicleCard />
      </div>
    </div>
  );
};

export default Vehicles;

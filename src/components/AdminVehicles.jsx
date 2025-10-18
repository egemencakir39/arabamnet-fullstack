import React from 'react'
import AdminVehicleCard from './AdminVehicleCard';

const AdminVehicles = () => {
return (
    <div id="vehicles" className="container mt-15 ">
      <h2 className="text-5xl text-center">Satıştaki Araçlar</h2>
      <div className="flex flex-wrap justify-center">
        <AdminVehicleCard />
        <AdminVehicleCard />
        <AdminVehicleCard />
        <AdminVehicleCard />
      </div>
    </div>
  );
};

export default AdminVehicles

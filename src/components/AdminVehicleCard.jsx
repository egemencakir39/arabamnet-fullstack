import React, { useEffect, useState } from "react";
import { FaRoad } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GiStoneWheel } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteCarById, updateCarById, getCars } from "@/redux/carDataSlice";
import UploadImages from "./UploadImages";

const AdminVehicleCard = ({ car }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const updateCar = () => {
    dispatch(updateCarById({ id: car._id, updatedData: formData }));
    setOpen(false);
  };
  const deleteCar = () => {
    dispatch(deleteCarById(car._id)).then(() => {
      setOpen(false);
      dispatch(getCars());
    });
  };
  const [formData, setFormData] = useState({
    price: car.price,
    addres: car.address,
    phone: car.phone,
    brand: car.brand,
    model: car.model,
    modelYear: car.modelYear,
    fuel: car.fuel,
    gearBox: car.gearBox,
    km: car.km,
    color: car.color,
    desc: car.desc,
    images: car.images,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: "90%",
      sm: "70%",
      md: "50%",
      lg: 800,
    },
    maxHeight: "90vh",
    overflowY: "auto",
    bgcolor: "background.paper",
    borderRadius: "12px",
    boxShadow: 24,
    p: { xs: 2, sm: 3, md: 4 },
  };
  return (
    <div className="mt-15 p-5">
      <div
        onClick={() => setOpen(true)}
        className="bg-white hover:cursor-pointer rounded-2xl shadow-md hover:shadow-xl w-85 hover:-translate-y-1 transition-all"
      >
        <img
          className="w-85 h-56 object-cover rounded-t-xl"
          src={car.images?.[0]?.url}
          alt={`${car.brand} ${car.model}`}
        />
        <h1 className="p-2 text-2xl">{car.brand}</h1>
        <h3 className="p-2">{car.model}</h3>
        <div className="p-2 flex flex-wrap justify-around">
          <p className="flex items-center  pr-2">
            <FaCalendarAlt className="mx-2" /> {car.modelYear}
          </p>
          <p className="flex items-center  pr-2">
            <FaRoad className="mx-2" /> {Number(car.km).toLocaleString("tr-TR")}{" "}
            KM
          </p>
          <p className="flex items-center  pr-2">
            <GiStoneWheel className="mx-2" /> {car.gearBox}
          </p>
          <p className="flex items-center  pr-2">
            <BsFillFuelPumpFill className="mx-1" /> {car.fuel}
          </p>
          <p className="flex items-center pr-2">
            <FaLocationDot className="mx-1" /> {car.address}
          </p>
        </div>
        <h2 className="text-yellow-500 p-4 font-bold text-2xl">
          {Number(car.price).toLocaleString("tr-TR")} TL
        </h2>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" className="mb-4 text-center">
            Araç Bilgisi Güncelle
          </Typography>
          <div className="flex justify-end p-1 ">
            <button
              onClick={() => setOpen(false)}
              className="text-2xl hover:cursor-pointer bg-yellow-400 px-2 rounded-2xl"
            >
              X
            </button>
          </div>

          <form onSubmit={updateCar} className="flex flex-col gap-3">
            <TextField
              label="Fiyat"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <TextField
              label="Adres"
              name="addres"
              value={formData.addres}
              onChange={handleChange}
              required
            />
            <TextField
              label="Telefon"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Marka"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />
            <TextField
              label="Model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              required
            />
            <TextField
              label="Model Yılı"
              name="modelYear"
              value={formData.modelYear}
              onChange={handleChange}
              required
            />
            <select
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-sm"
            >
              <option value="Benzin">Benzin</option>
              <option value="Dizel">Dizel</option>
              <option value="Elektrik">Elektrik</option>
              <option value="Benzin + LPG">Benzin + LPG</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <select
              name="gearBox"
              value={formData.gearBox}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-sm"
            >
              <option value="Otomatik">Otomatik</option>
              <option value="Manuel">Manuel</option>
              <option value="Yarı Otomatik">Yarı Otomatik</option>
            </select>
            <TextField
              label="KM"
              name="km"
              value={formData.km}
              onChange={handleChange}
              required
            />
            <TextField
              label="Renk"
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
            />
            <TextField
              label="Açıklama"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              multiline
              rows={3}
            />
            <UploadImages
              value={formData.images} 
              onChange={(imgs) => setFormData({ ...formData, images: imgs })}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#facc15",
                "&:hover": { backgroundColor: "#eab308" },
              }}
            >
              Kaydet
            </Button>
            <Button
              onClick={deleteCar}
              variant="contained"
              sx={{
                backgroundColor: "#FF0000",
                "&:hover": { backgroundColor: "#FF0000" },
              }}
            >
              Sil
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminVehicleCard;

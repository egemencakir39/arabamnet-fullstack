import React, { useState } from "react";
import { FaRoad } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GiStoneWheel } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillFuelPumpFill } from "react-icons/bs";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const AdminVehicleCard = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    price: "",
    addres: "",
    phone: "",
    brand: "",
    model: "",
    modelYear: "",
    fuel: "",
    gearBox: "",
    km: "",
    color: "",
    desc: "",
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
        <img className="w-85 rounded-t-xl" src="/download.jpg" alt="aa" />
        <h1 className="p-2 text-2xl">Hyundai i20N</h1>
        <h3 className="p-2">1.6 T-GDI 6-MT</h3>
        <div className="p-2 flex flex-wrap justify-around">
          <p className="flex items-center  pr-2">
            <FaCalendarAlt className="mx-2" /> 2022
          </p>
          <p className="flex items-center  pr-2">
            <FaRoad className="mx-2" /> 58.000 Km
          </p>
          <p className="flex items-center  pr-2">
            <GiStoneWheel className="mx-2" /> Manuel
          </p>
          <p className="flex items-center  pr-2">
            <BsFillFuelPumpFill className="mx-2" /> Benzin
          </p>
          <p className="flex items-center pr-2">
            <FaLocationDot className="mx-2" /> İstanbul/Beykoz
          </p>
        </div>
        <h2 className="text-yellow-400 p-4 font-bold text-2xl">1.250.000 ₺</h2>
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
            <button onClick={()=> setOpen(false)} className="text-2xl hover:cursor-pointer bg-yellow-400 px-2 rounded-2xl">X</button>
          </div>

          <form className="flex flex-col gap-3">
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
              id=""
              className="border-1 border-gray-300 p-2 rounded-sm"
            >
              <option value={formData.fuel}>Benzin</option>
              <option value={formData.fuel}>Dizel</option>
              <option value={formData.fuel}>Elektrik</option>
              <option value={formData.fuel}>Benzin + LPG</option>
              <option value={formData.fuel}>Hybrid</option>
            </select>
            <select
              name="gearBox"
              id=""
              className="border-1 border-gray-300 p-2 rounded-sm"
            >
              <option value={formData.gearBox}>Otomatik</option>
              <option value={formData.gearBox}>Manuel</option>
              <option value={formData.gearBox}>Yarı Otomatik</option>
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
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AdminVehicleCard;

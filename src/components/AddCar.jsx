"use client";
import AdminVehicles from "@/components/AdminVehicles";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IoMdAdd } from "react-icons/io";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { createCar } from "@/redux/carDataSlice";

const AddCar = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    price: "",
    address: "",
    phone: "",
    brand: "",
    model: "",
    modelYear: "",
    fuel: "Benzin",
    gearBox: "",
    km: "",
    color: "",
    desc: "",
  });
  const addCar = (e) => {
    e.preventDefault();
    dispatch(createCar(formData));
    setFormData({
      price: "",
      address: "",
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
    setOpen(false);
  };

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
    <div className="container">
      <AdminVehicles />
      <div className="flex justify-end my-6">
        <button
          onClick={() => setOpen(true)}
          className="bg-yellow-400 hover:bg-amber-600 transition-all cursor-pointer p-3 rounded-2xl"
        >
          <IoMdAdd className="text-3xl" />
        </button>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" className="mb-4 text-center">
            Araç Ekle
          </Typography>
          <div className="flex justify-end p-1 ">
            <button
              onClick={() => setOpen(false)}
              className="text-2xl hover:cursor-pointer bg-yellow-400 px-2 rounded-2xl"
            >
              X
            </button>
          </div>
          <form onSubmit={addCar} className="flex flex-col gap-3">
            <TextField
              label="Fiyat"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <TextField
              label="Adres"
              name="address"
              value={formData.address}
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
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#facc15",
                "&:hover": { backgroundColor: "#eab308" },
              }}
            >
              Ekle
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCar;

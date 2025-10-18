import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
     price: { type: Number, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    modelYear: { type: Number, required: true },
    fuel: { type: String, required: true },
    gearBox: { type: String, required: true },
    km: { type: Number, required: true },
    color: { type: String, required: true },
    desc: { type: String, default: "Açıklama eklenmemiş" },
    images: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.models.CarData || mongoose.model("CarData", CarSchema);
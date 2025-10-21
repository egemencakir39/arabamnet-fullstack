import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    price: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    modelYear: { type: String, required: true },
    fuel: { type: String, required: true },
    gearBox: { type: String, required: true },
    km: { type: String, required: true },
    color: { type: String, required: true },
    desc: { type: String, default: "Açıklama eklenmemiş" },
    images: [
      {
        url: { type: String, required: true },
        publicId: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);
delete mongoose.connection.models["CarData"];
export default mongoose.models.CarData || mongoose.model("CarData", CarSchema);

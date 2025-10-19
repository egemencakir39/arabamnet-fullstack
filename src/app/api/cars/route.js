import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import CarData from "@/models/CarData";

export async function GET() {
  try {
    await dbConnect();
    const cars = await CarData.find().sort({ createdAt: -1 });
    return NextResponse.json(cars, { status: 200 });
  } catch (error) {
    console.error("Get error", error);
    return NextResponse.json(
      { message: "Araçlar Çekilemedi." },
      { status: 500 }
    );
  }
}
export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();

    const newCar = await CarData.create(body);
    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    console.error("POST error", error);
    return NextResponse.json({ message: "Araç eklenemedi." }, { status: 500 });
  }
}

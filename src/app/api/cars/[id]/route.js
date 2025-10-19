import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import CarData from "@/models/CarData";

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const { id } = await params;

    const car = await CarData.findById(id);

    if (!car) {
      return NextResponse.json({ message: "Araç bulunamadı" }, { status: 400 });
    }
    return NextResponse.json(car, { status: 200 });
  } catch (error) {
    console.error("Tek Araç çekilemedi", error);
    return NextResponse.json(
      { message: "Araç getirilemedi." },
      { status: 500 }
    );
  }
}

//SİL

export async function DELETE(req, { params }) {
  try {
    await dbConnect();
    const {id} = await params;

    if (!id) {
      return NextResponse.json(
        { message: "Araç ID'si gerekli." },
        { status: 400 }
      );
    }

    await CarData.findByIdAndDelete(id);
    return NextResponse.json({ message: "Araç silindi." }, { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json({ message: "Araç silinemedi." }, { status: 500 });
  }
}


//GÜNCELLE

export async function PATCH(req, { params }) {
  try {
    await dbConnect();

    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "Araç ID'si gerekli." },
        { status: 400 }
      );
    }

    const body = await req.json();

    const updatedCar = await CarData.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedCar) {
      return NextResponse.json(
        { message: "Araç bulunamadı." },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedCar, { status: 200 });
  } catch (error) {
    console.error("PATCH error:", error);
    return NextResponse.json(
      { message: "Araç güncellenemedi." },
      { status: 500 }
    );
  }
}

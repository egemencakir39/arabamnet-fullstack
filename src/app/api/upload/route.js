import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    // Gelen form verisini al
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "Dosya bulunamadı." }, { status: 400 });
    }

    // Dosya verisini buffera çevir
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Cloudinary yükle
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: process.env.CLOUDINARY_FOLDER },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(buffer);
    });

    // Başarılıysa url ve public_id döndür
    return NextResponse.json({
      url: result.secure_url,
      publicId: result.public_id,
    });
  } catch (error) {
    console.error("Yükleme hatası:", error);
    return NextResponse.json({ error: "Yükleme başarısız." }, { status: 500 });
  }
}
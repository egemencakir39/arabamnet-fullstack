"use client";
import React, { useState } from "react";

export default function UploadImages({ value = [], onChange, max = 10 }) {
  const [uploading, setUploading] = useState(false);

  const handleFiles = async (files) => {
    const willBe = value.length + files.length;
    if (willBe > max) {
      alert(`En fazla ${max} resim yükleyebilirsin. (Mevcut: ${value.length})`);
      return;
    }

    setUploading(true);
    try {
      const uploads = Array.from(files).map(async (file) => {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const data = await res.json();
        if (!res.ok || !data?.url) throw new Error("Yükleme başarısız");
        return { url: data.url, publicId: data.publicId };
      });

      const results = await Promise.all(uploads);
      const next = [...value, ...results];
      onChange?.([...next]); 
    } catch (err) {
      console.error(err);
      alert("Yükleme sırasında hata oluştu.");
    } finally {
      setUploading(false);
    }
  };

  const onFileChange = async (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    await handleFiles(files);
    e.target.value = "";
  };

 
  const removeAt = (index) => {
    const updated = [...value];
    updated.splice(index, 1); 
    onChange?.([...updated]); 
  };

  return (
    <div className="flex flex-col gap-3">
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={onFileChange}
        disabled={uploading}
        className="border p-2 rounded-md"
      />

      {uploading && <p className="text-blue-500 text-sm">Yükleniyor...</p>}

      {value.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
          {value.map((img, i) => (
            <div key={img.publicId ?? img.url ?? i} className="relative">
              <img
                src={img.url || img}
                alt={`image-${i}`}
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={() => removeAt(i)}
                className="absolute top-1 right-3 bg-red-600 text-white text-xs px-1 py-0.5 rounded hover:bg-red-700"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

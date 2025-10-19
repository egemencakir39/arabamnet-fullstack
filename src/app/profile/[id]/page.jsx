"use client";
import React, { use, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import ProfileInfo from "@/components/ProfileInfo";

const page = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id;

  return (
    <div className="container">
      <ProfileInfo />
    </div>
  );
};

export default page;

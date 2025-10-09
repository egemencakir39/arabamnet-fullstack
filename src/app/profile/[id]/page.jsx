"use client";
import React, { use } from 'react'
import { useParams } from 'next/navigation'
const page = () => {
    const params = useParams();
    const id = params.id;
  return (
    <div>
      <p>Kullanıcı id {id}</p>
    </div>
  )
}

export default page

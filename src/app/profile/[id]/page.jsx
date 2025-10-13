"use client";
import React, { use } from 'react'
import { useParams } from 'next/navigation'
import ProfileInfo from '@/components/ProfileInfo';
const page = () => {
    const params = useParams();
    const id = params.id;
  return (
    <div className='container'>
        <ProfileInfo/>
    </div>
  )
}

export default page

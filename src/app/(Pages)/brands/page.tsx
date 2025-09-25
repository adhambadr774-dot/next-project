'use client'
import { Brand } from '@/interfaces';
import { apiServices } from '@/services/api';
import { BrandsResponse } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function brands() {

  const [brands , setBrands]= useState <Brand[]>([])

  async function getBrands() {
    const data : BrandsResponse = await apiServices.getBrands()

    setBrands(data.data)    
  }
  useEffect(()=>{
    getBrands()
  },[])


  return (
<div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shop by Brand</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {brands.map((brand) => (
          <Link

            key={brand.slug}
            href={"/brands/${brand.slug}"}
            className="border rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition bg-amber-400"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-lg font-medium">{brand.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

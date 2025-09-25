'use client'
import { Button } from '@/components';
import { Category } from '@/interfaces';
import { apiServices } from '@/services/api';
import { CategoriesResponse } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'


export default function categories() {
  const [categores, setCategores] = useState<Category[]>()
  // const {id} =useParams()

  async function getaLLCategories() {

    const data: CategoriesResponse = await apiServices.getCategories()

    setCategores(data.data);


  }
  useEffect(() => {
    getaLLCategories()
  }, [])


  return (
   <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shop by Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categores?.map((category) => (
          <Link
            key={category.slug}
            href={"/categories/${category.slug}"}
            className="group border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <div className="aspect-w-1 aspect-h-1 w-full h-48 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full object-cover transform group-hover:scale-105 transition"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-medium">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

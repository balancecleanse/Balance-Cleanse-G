'use client';

import { Card, CardBody, CardFooter, Image, Input, Select, Slider } from "@nextui-org/react";
import Link from 'next/link';
import { useState } from "react";
import { ProductFilters } from "@/lib/types";
import { products } from "@/data/products";

export default function ProductList() {
  const [filters, setFilters] = useState<ProductFilters>({});
  const categories = ["All", "Juices", "Smoothies", "Supplements"];
  
  const filteredProducts = products.filter(product => {
    if (filters.category && filters.category !== "All" && product.category !== filters.category) return false;
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    if (filters.minPrice && product.price < filters.minPrice) return false;
    if (filters.maxPrice && product.price > filters.maxPrice) return false;
    return true;
  });

  return (
    <div>
      <div className="mb-8 space-y-4">
        <Input
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
          className="max-w-sm"
        />
        <div className="flex gap-4 flex-wrap">
          <Select
            placeholder="Category"
            options={categories}
            onChange={(val) => setFilters(f => ({ ...f, category: val.target.value }))}
          />
          <div className="w-64">
            <Slider
              label="Price Range"
              step={5}
              minValue={0}
              maxValue={100}
              onChange={(val) => setFilters(f => ({ 
                ...f, 
                minPrice: Array.isArray(val) ? val[0] : 0,
                maxPrice: Array.isArray(val) ? val[1] : 100
              }))}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Card 
              isPressable
              className="transform transition-transform hover:scale-105"
            >
              <CardBody className="p-0">
                <Image
                  alt={product.name}
                  className="w-full object-cover h-[200px]"
                  src={product.image}
                  fallbackSrc="https://via.placeholder.com/300x200"
                />
              </CardBody>
              <CardFooter className="flex flex-col items-start">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-default-500">${product.price.toFixed(2)}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

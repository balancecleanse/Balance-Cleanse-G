'use client';

import { Card, CardBody, CardFooter, Image, Input, Select, Slider, SelectItem } from "@nextui-org/react"; // Import SelectItem
import Link from 'next/link';
import { useState } from "react";
import { ProductFilters } from "@/lib/types";
import { products } from "@/data/products";

export default function ProductList() {
  const [filters, setFilters] = useState<ProductFilters>({});
  const categories = [
    { value: "All", label: "All" },
    { value: "Juices", label: "Juices" },
    { value: "Smoothies", label: "Smoothies" },
    { value: "Supplements", label: "Supplements" }
  ];
  
  const filteredProducts = products.filter(product => {
    if (filters.category && filters.category !== "All" && product.category !== filters.category) return false;
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    if (filters.minPrice && product.price < filters.minPrice) return false;
    if (filters.maxPrice && product.price > filters.maxPrice) return false;
    return true;
  });

  return (
    <div className="w-full max-w-[2000px] mx-auto">
      <div className="mb-8 space-y-4 lg:space-y-0 lg:flex lg:items-center lg:gap-8">
        <Input
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
          className="max-w-sm"
        />
        <div className="flex flex-wrap gap-4 items-center">
          <Select
            placeholder="Category"
            onChange={(val) => setFilters(f => ({ ...f, category: val.target.value }))}
            className="w-[200px]"
          >
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </Select>
          <div className="w-[300px]">
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
        {filteredProducts.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <Card 
              isPressable
              className="transform transition-transform hover:scale-105"
            >
              <CardBody className="p-0">
                <Image
                  alt={product.name}
                  className="w-full object-cover h-[200px] product-card-image"
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

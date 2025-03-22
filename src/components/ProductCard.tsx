'use client';

import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { Heart } from 'lucide-react';
import { Product } from "@/lib/types";
import { useWishlist } from "@/lib/WishlistContext";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <Card isPressable className="product-hover">
      <CardBody className="p-0 relative">
        <Button
          isIconOnly
          className="absolute top-2 right-2 z-10 bg-white/80"
          onClick={(e) => {
            e.preventDefault();
            inWishlist ? removeFromWishlist(product.id) : addToWishlist(product);
          }}
        >
          <Heart className={inWishlist ? "fill-red-500 stroke-red-500" : ""} />
        </Button>
        <Link href={`/products/${product.id}`}>
          <Image
            alt={product.name}
            className="w-full object-cover h-[200px]"
            src={product.image}
            fallbackSrc="https://via.placeholder.com/300x200"
          />
        </Link>
      </CardBody>
      <CardFooter className="flex flex-col items-start">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-bold text-lg">{product.name}</h3>
          <p className="text-default-500">${product.price.toFixed(2)}</p>
        </Link>
      </CardFooter>
    </Card>
  );
}

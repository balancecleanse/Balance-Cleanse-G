'use client';

import { useState } from 'react';
import { useCart } from '@/lib/CartContext';
import { Button, Card } from '@nextui-org/react';
import { Star } from 'lucide-react';
import { Product, Review } from '@/lib/types';
import Image from 'next/image';

interface ProductDetailProps {
  product: Product;
}

const mockReviews: Review[] = [
  {
    id: 1,
    productId: 1,
    userId: "user1",
    rating: 5,
    comment: "Great product!",
    createdAt: new Date(),
  }
];

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    for(let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-4">
          <div className="relative w-full h-[500px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </Card>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl">${product.price.toFixed(2)}</p>
          <p className="text-gray-600">{product.description}</p>
          <div className="flex gap-4 items-center">
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border rounded p-2"
            >
              {[1,2,3,4,5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <Button 
              color="primary"
              onClick={handleAddToCart}
              className="flex-grow"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <div className="space-y-4">
          {mockReviews.map(review => (
            <Card key={review.id} className="p-4">
              <div className="flex items-center gap-2 mb-2">
                {Array(5).fill(0).map((_, i) => (
                  <Star
                    key={i}
                    className={i < review.rating ? "fill-yellow-400" : "fill-gray-200"}
                  />
                ))}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

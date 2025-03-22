import { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Green Detox Juice",
    price: 12.99,
    image: "/images/green-juice.jpg",
    description: "A refreshing blend of green vegetables and fruits.",
    category: "Juices",
    rating: 4.5,
    reviews: 12
  },
  {
    id: 2,
    name: "Immunity Booster",
    price: 14.99,
    image: "/images/immunity.jpg",
    description: "Packed with vitamins and antioxidants.",
    category: "Supplements",
    rating: 4.0,
    reviews: 8
  },
  {
    id: 3,
    name: "Berry Blast Smoothie",
    price: 11.99,
    image: "/images/berry-smoothie.jpg",
    description: "A delicious mix of fresh berries and yogurt.",
    category: "Smoothies",
    rating: 4.8,
    reviews: 15
  }
];

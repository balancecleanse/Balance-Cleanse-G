'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";
import { useCart } from '@/lib/CartContext';
import { Heart, Search } from 'lucide-react';

export default function Header() {
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar className="shadow-sm">
      <NavbarBrand>
        <Link href="/" className="font-bold text-inherit">BALANCE CLEANSE</Link>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex flex-1 justify-center">
        <Input
          placeholder="Search products..."
          className="max-w-xl"
          startContent={<Search className="w-4 h-4 text-gray-400" />}
        />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/products" color="foreground">
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" color="foreground">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-4">
        <NavbarItem>
          <Link href="/wishlist">
            <Heart className="w-6 h-6" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href="/auth/login" variant="light">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/cart" variant="flat">
            Cart {cartCount > 0 && <span className="ml-1 px-2 py-1 bg-white rounded-full text-primary text-xs">{cartCount}</span>}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

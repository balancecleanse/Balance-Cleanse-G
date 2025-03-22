import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-green-500 text-6xl mb-4">✓</div>
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. We'll send you a confirmation email with your order details.
        </p>
        <Link href="/">
          <Button color="primary">Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
}

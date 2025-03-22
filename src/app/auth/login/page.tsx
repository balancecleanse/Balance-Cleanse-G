'use client';

import { Button, Card, Input, Link } from '@nextui-org/react';

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input 
            label="Email"
            type="email"
            placeholder="your@email.com"
            required
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            required
          />
          <Button color="primary" type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p>Don't have an account? <Link href="/auth/register">Register</Link></p>
        </div>
      </Card>
    </div>
  );
}

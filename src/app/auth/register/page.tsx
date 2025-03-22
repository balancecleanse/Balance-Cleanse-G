'use client';

import { Button, Card, Input, Link } from '@nextui-org/react';

export default function RegisterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Create Account</h1>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <Input 
            label="Full Name"
            placeholder="John Doe"
            required
          />
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
          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            required
          />
          <Button color="primary" type="submit" className="w-full">
            Register
          </Button>
        </form>
        <div className="mt-4 text-center">
          <p>Already have an account? <Link href="/auth/login">Login</Link></p>
        </div>
      </Card>
    </div>
  );
}

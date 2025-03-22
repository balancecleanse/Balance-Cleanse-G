'use client';

import { useState } from 'react';
import { useCart } from '@/lib/CartContext';
import { Button, Card, Input, Spacer } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

interface FormData {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

const steps = ['Shipping', 'Payment', 'Review'];

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const { total, items } = useCart();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: '', address: '', city: '', state: '', zip: '', 
    cardNumber: '', expiry: '', cvv: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateStep = () => {
    const newErrors: Partial<FormData> = {};
    
    if (currentStep === 0) {
      if (!formData.fullName) newErrors.fullName = 'Required';
      if (!formData.address) newErrors.address = 'Required';
      // ...add other validations...
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.push('/checkout/success');
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Shipping Information</h2>
            <Input 
              label="Full Name" 
              placeholder="John Doe" 
              required 
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              helperText={errors.fullName}
              status={errors.fullName ? 'error' : 'default'}
            />
            <Input 
              label="Address" 
              placeholder="123 Main St" 
              required 
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              helperText={errors.address}
              status={errors.address ? 'error' : 'default'}
            />
            <Input 
              label="City" 
              placeholder="New York" 
              required 
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              helperText={errors.city}
              status={errors.city ? 'error' : 'default'}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input 
                label="State" 
                placeholder="NY" 
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                helperText={errors.state}
                status={errors.state ? 'error' : 'default'}
              />
              <Input 
                label="ZIP" 
                placeholder="10001" 
                value={formData.zip}
                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                helperText={errors.zip}
                status={errors.zip ? 'error' : 'default'}
              />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Payment Details</h2>
            <Input 
              label="Card Number" 
              placeholder="4242 4242 4242 4242" 
              required 
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              helperText={errors.cardNumber}
              status={errors.cardNumber ? 'error' : 'default'}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input 
                label="Expiry" 
                placeholder="MM/YY" 
                required 
                value={formData.expiry}
                onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                helperText={errors.expiry}
                status={errors.expiry ? 'error' : 'default'}
              />
              <Input 
                label="CVV" 
                placeholder="123" 
                type="password" 
                required 
                value={formData.cvv}
                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                helperText={errors.cvv}
                status={errors.cvv ? 'error' : 'default'}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Order Summary</h2>
            {items.map(item => (
              <div key={item.id} className="flex justify-between py-2">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-6">
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step} className={`flex items-center ${index <= currentStep ? 'text-primary' : 'text-gray-400'}`}>
              <div className="rounded-full h-8 w-8 flex items-center justify-center border">
                {index + 1}
              </div>
              {index < steps.length - 1 && <div className="h-1 w-16 bg-gray-200 mx-2" />}
            </div>
          ))}
        </div>
        
        {renderStep()}
        
        <Spacer y={4} />
        
        <div className="flex justify-between">
          <Button 
            variant="flat"
            onClick={() => currentStep > 0 ? setCurrentStep(prev => prev - 1) : router.back()}
          >
            {currentStep === 0 ? 'Back to Cart' : 'Previous'}
          </Button>
          <Button
            color="primary"
            onClick={async () => {
              if (currentStep === steps.length - 1) {
                if (validateStep()) {
                  await handleSubmit();
                }
              } else {
                if (validateStep()) {
                  setCurrentStep(prev => prev + 1);
                }
              }
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : (currentStep === steps.length - 1 ? 'Place Order' : 'Next')}
          </Button>
        </div>
      </Card>
    </div>
  );
}

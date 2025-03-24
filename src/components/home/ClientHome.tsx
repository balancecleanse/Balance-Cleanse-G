'use client';

import { Button } from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
import { Leaf, Sparkles, Globe } from 'lucide-react';

interface Props {
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    name: string;
    comment: string;
  }>;
}

export default function ClientHome({ benefits, testimonials }: Props) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container mx-auto h-full flex items-center relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-8xl mx-auto w-full">
            <div className="space-y-8 max-w-3xl">
              <h1 className="heading-xl font-bold animate-fade-up max-w-4xl">
                Transform Your 
                <span className="block heading-gradient mt-2">Wellness Journey</span>
              </h1>
              <p className="text-responsive text-gray-600 animate-fade-up delay-200 leading-relaxed max-w-2xl">
                Discover our premium collection of natural health products crafted to elevate your well-being and nurture your body's natural balance.
              </p>
              <div className="flex gap-6 animate-fade-up delay-300">
                <Button 
                  as={Link}
                  href="/products"
                  color="primary"
                  size="lg"
                  className="hover:scale-105 hover:bg-primary/20 transition-all px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl"
                >
                  Explore Products
                </Button>
                <Button 
                  as={Link}
                  href="/about"
                  variant="bordered"
                  size="lg"
                  className="hover:bg-white/20 hover:bg-white/10 transition-all px-8 py-6 text-lg rounded-xl"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] w-full max-w-2xl mx-auto animate-float hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl"></div>
              <Image
                src="/images/immunity.jpg"
                alt="Featured Product"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute -bottom-8 -left-8 p-6 benefit-card rounded-2xl animate-fade-up delay-400">
                <div className="flex items-center gap-4">
                  <Leaf className="text-3xl" />
                  <div>
                    <p className="font-semibold">100% Natural</p>
                    <p className="text-sm text-gray-600">Pure & Organic Ingredients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container mx-auto relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Balance Cleanse?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our commitment to quality and natural wellness.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="benefit-card p-8 rounded-2xl animate-fade-up flex flex-col items-center text-center" /* Center content and use flex column */
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 h-12 w-12 relative flex items-center justify-center" > {/* Adjust icon container size and use relative positioning */}
                  {benefit.icon === '🌿' ? <Leaf size={48} /> : benefit.icon === '✨' ? <Sparkles size={48} /> : <Globe size={48} />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3> {/* Reduced margin */}
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p> {/* Smaller description text */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-blue-200/70 to-green-200/70 text-white relative overflow-hidden"> {/* Updated gradient */}
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Stay Inspired & Healthy</h2>
            <p className="text-xl mb-10 text-white/90">
              Join our community for exclusive wellness tips, special offers, and natural health insights.
            </p>
            <form className="flex gap-4 p-2 bg-white/10 rounded-xl backdrop-blur-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-lg bg-transparent border border-gray-300 text-white text-lg placeholder-white/80" /* Updated input styles */
              />
              <Button
                color="primary" /* Changed to primary color */
                size="lg"
                className="px-8 hover:scale-105 transition-transform text-lg rounded-xl shadow-md hover:shadow-lg" /* Updated button styles with rounded corners and shadows */
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

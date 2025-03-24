import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';
import ClientHome from '@/components/home/ClientHome';
import Image from 'next/image'; // Import Image component

const benefits = [
  {
    icon: '🌿',
    title: '100% Natural',
    description: 'All our products are made with pure, natural ingredients.'
  },
  {
    icon: '✨',
    title: 'Premium Quality',
    description: 'Highest quality standards in every product we offer.'
  },
  {
    icon: '🌍',
    title: 'Eco-Friendly',
    description: 'Sustainable packaging and environmentally conscious practices.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    comment: 'The green juice has become an essential part of my morning routine. I feel more energized than ever!'
  },
  {
    name: 'Michael Chen',
    comment: 'Outstanding quality and amazing results. The customer service is exceptional too.'
  },
  {
    name: 'Emma Davis',
    comment: 'These products have made such a difference in my wellness journey. Highly recommended!'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ClientHome benefits={benefits} testimonials={testimonials} />
        
        {/* Featured Products */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <ProductList />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col" /* Use testimonial-card class and flex column layout */
                >
                  <div className="text-yellow-400 text-2xl mb-2">★★★★★</div> {/* Reduced margin */}
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">{testimonial.comment}</p> {/* Darker text, smaller size, adjusted leading */}
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-200"> {/* Avatar and name container, add top border */}
                    <Image
                      src="/images/avatar-placeholder.png" /* Placeholder avatar image - replace later */
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-4"
                    />
                    <div className="font-semibold text-gray-800">{testimonial.name}</div> {/* Darker name text */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

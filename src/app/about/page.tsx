export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Balance Cleanse</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="text-gray-600">
            Balance Cleanse was founded with a simple mission: to provide premium health and wellness products that help people achieve their optimal well-being.
          </p>
          <h2 className="text-2xl font-semibold">Our Promise</h2>
          <p className="text-gray-600">
            We source only the highest quality ingredients and maintain strict quality control standards to ensure you receive the best possible products.
          </p>
        </div>
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Premium Quality Products
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              100% Natural Ingredients
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Sustainable Packaging
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Expert Customer Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

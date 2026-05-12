import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

function Home() {
  const products = [
    {
      id: 1,
      name: 'Sunflower Oil',
      category: 'Oils',
      price: 150,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5'
    },
    {
      id: 2,
      name: 'Masoor Dal',
      category: 'Dals',
      price: 120,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c'
    },
    {
      id: 3,
      name: 'Basmati Rice',
      category: 'Rice',
      price: 300,
      image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
    }
  ];

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product Added');
  };

  return (
    <div>
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-10">Retail Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
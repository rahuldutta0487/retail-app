// import Navbar from '../components/Navbar';
// import ProductCard from '../components/ProductCard';

// function Home() {
//   const products = [
//     {
//       id: 1,
//       name: 'Sunflower Oil',
//       category: 'Oils',
//       price: 150,
//       image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5'
//     },
//     {
//       id: 2,
//       name: 'Masoor Dal',
//       category: 'Dals',
//       price: 120,
//       image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b'
//     },
//     {
//       id: 3,
//       name: 'Basmati Rice',
//       category: 'Rice',
//       price: 300,
//       image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
//     },
//     {
//   id: 4,
//   name: 'Sunflower Oil',
//   category: 'Oil',
//   price: 180,
//   image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5'
// },
// {
//   id: 5,
//   name: 'Toor Dal',
//   category: 'Dal',
//   price: 140,
//   image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c'
// },
// {
//   id: 6,
//   name: 'Mustard Oil',
//   category: 'Oil',
//   price: 220,
//   image: 'https://images.unsplash.com/photo-1603048719539-9ecb4c1b7c9f'
// },
// {
//   id: 7,
//   name: 'Moong Dal',
//   category: 'Dal',
//   price: 130,
//   image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4'
// },
// {
//   id: 8,
//   name: 'Wheat Flour',
//   category: 'Atta',
//   price: 260,
//   image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff'
// },
// {
//   id: 9,
//   name: 'Olive Oil',
//   category: 'Oil',
//   price: 550,
//   image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5'
// },
// {
//   id: 10,
//   name: 'Chana Dal',
//   category: 'Dal',
//   price: 120,
//   image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c'
// },
// {
//   id: 11,
//   name: 'Brown Rice',
//   category: 'Rice',
//   price: 340,
//   image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
// },
// {
//   id: 12,
//   name: 'Sugar',
//   category: 'Groceries',
//   price: 60,
//   image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15'
// },
// {
//   id: 13,
//   name: 'Salt',
//   category: 'Groceries',
//   price: 25,
//   image: 'https://images.unsplash.com/photo-1514996937319-344454492b37'
// },
// {
//   id: 14,
//   name: 'Turmeric Powder',
//   category: 'Spices',
//   price: 90,
//   image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5'
// },
// {
//   id: 15,
//   name: 'Red Chilli Powder',
//   category: 'Spices',
//   price: 110,
//   image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d'
// }
    
//   ];

//   const addToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(product);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     alert('Product Added');
//   };

//   return (
//     <div>
//       <Navbar />

//       <div className="p-10">
//         <h1 className="text-4xl font-bold mb-10">Retail Products</h1>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               addToCart={addToCart}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

import { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';

function Home() {

  const [search, setSearch] = useState('');

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
      image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41'
    },
    {
      id: 3,
      name: 'Basmati Rice',
      category: 'Rice',
      price: 300,
      image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
    },
    {
      id: 4,
      name: 'Mustard Oil',
      category: 'Oil',
      price: 220,
      image: 'https://images.unsplash.com/photo-1603048719539-9ecb4c1b7c9f'
    },
    {
      id: 5,
      name: 'Moong Dal',
      category: 'Dal',
      price: 130,
      image: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e4'
    },
    {
      id: 6,
      name: 'Wheat Flour',
      category: 'Atta',
      price: 260,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff'
    },
    {
      id: 7,
      name: 'Olive Oil',
      category: 'Oil',
      price: 550,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5'
    },
    {
      id: 8,
      name: 'Brown Rice',
      category: 'Rice',
      price: 340,
      image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99'
    }
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product) => {

    const cart =
      JSON.parse(localStorage.getItem('cart')) || [];

    cart.push(product);

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );

    alert('Product Added To Cart');
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      {/* Hero Section */}

      <div className="bg-gradient-to-r from-green-600 to-green-400 text-white py-20 px-10 text-center">

        <h1 className="text-5xl font-bold mb-5">
          Welcome To Retail Store
        </h1>

        <p className="text-xl mb-8">
          Buy Quality Grocery Products At Best Prices
        </p>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-4 rounded-lg text-black outline-none shadow-lg"
        />

      </div>

      {/* Products Section */}

      <div className="px-10 py-16">

        <h2 className="text-4xl font-bold mb-10 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="transform hover:scale-105 transition duration-300"
            >
              <ProductCard
                product={product}
                addToCart={addToCart}
              />
            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Home;
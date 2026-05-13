import { useState } from 'react';
import Navbar from '../components/Navbar';

function Cart() {

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);

    setCart(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <div>
      <Navbar />

      <div className="p-10 bg-gray-100 min-h-screen">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <h2 className="text-center text-xl text-gray-500">
            Cart is Empty
          </h2>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-5 mb-5 flex justify-between items-center"
              >

                <div className="flex items-center gap-5">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div>
                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-gray-500">
                      {item.category}
                    </p>

                    <p className="text-green-600 font-bold">
                      ₹{item.price}
                    </p>
                  </div>

                </div>

                <button
                  onClick={() => removeItem(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>

              </div>
            ))}

            <div className="bg-white shadow-md rounded-lg p-6 mt-8">

              <h2 className="text-3xl font-bold mb-4">
                Total: ₹{total}
              </h2>

              <div className="flex gap-4">

                <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                  Checkout
                </button>

                <button
                  onClick={clearCart}
                  className="bg-gray-700   text-white px-6 py-3 rounded hover:bg-gray-800"
                >
                  Clear Cart
                </button>

              </div>

            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Cart;
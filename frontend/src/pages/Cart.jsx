import Navbar from '../components/Navbar';

function Cart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <Navbar />

      <div className='p-10'>
        <h1 className='text-3xl font-bold mb-6'>Shopping Cart</h1>

        {cart.map((item, index) => (
          <div
            key={index}
            className='border p-4 mb-4 flex justify-between'
          >
            <div>
              <h2 className='font-bold'>{item.name}</h2>
              <p>{item.category}</p>
            </div>

            <p>₹{item.price}</p>
          </div>
        ))}

        <h2 className='text-2xl font-bold mt-5'>
          Total: ₹{total}
        </h2>
      </div>
    </div>
  );
}

export default Cart;
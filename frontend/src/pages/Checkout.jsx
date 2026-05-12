import Navbar from '../components/Navbar';

function Checkout() {
  return (
    <div>
      <Navbar />

      <div className='p-10'>
        <h1 className='text-4xl font-bold mb-6'>Checkout</h1>

        <form className='max-w-lg'>
          <input
            type='text'
            placeholder='Full Name'
            className='border w-full p-3 mb-4'
          />

          <input
            type='text'
            placeholder='Address'
            className='border w-full p-3 mb-4'
          />

          <input
            type='text'
            placeholder='Phone Number'
            className='border w-full p-3 mb-4'
          />

          <button className='bg-green-600 text-white px-6 py-3 rounded'>
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
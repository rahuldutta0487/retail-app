function ProductCard({ product, addToCart }) {
  return (
    <div className='border rounded-lg shadow-lg p-4'>
      <img
        src={product.image}
        alt={product.name}
        className='h-40 w-full object-cover rounded'
      />

      <h2 className='text-xl font-bold mt-2'>{product.name}</h2>

      <p className='text-gray-600'>{product.category}</p>

      <p className='text-green-600 font-bold mt-2'>₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className='bg-green-600 text-white px-4 py-2 mt-3 rounded w-full'
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
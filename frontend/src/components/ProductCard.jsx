function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-2">{product.name}</h2>

      <p>{product.category}</p>

      <p className="text-green-600 font-bold">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-green-600 text-white px-4 py-2 rounded w-full mt-3"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;
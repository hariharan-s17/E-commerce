export default function ProductCard({ product }) {
  return (
    <div className="shadow-lg rounded-xl p-4">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
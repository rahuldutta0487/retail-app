import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">Retail Store</h1>

      <div className="space-x-5">
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default Navbar;
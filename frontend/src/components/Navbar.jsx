import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className='bg-green-600 text-white p-4 flex justify-between'>
      <h1 className='text-2xl font-bold'>Retail Store</h1>

      <div className='space-x-5'>
        <Link to='/home'>Home</Link>
        <Link to='/cart'>Cart</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
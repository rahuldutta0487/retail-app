import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const signup = async (e) => {
    e.preventDefault();

    await axios.post('http://127.0.0.1:5000/signup', form);

    alert('Signup Successful');
    navigate('/');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={signup} className="bg-white p-10 rounded shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">Signup</h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-green-600 text-white w-full p-3 rounded">
          Signup
        </button>

        <p className="mt-4 text-center">
          Already have an account?
          <Link to="/" className="text-green-600"> Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
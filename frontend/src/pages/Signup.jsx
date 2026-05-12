import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://127.0.0.1:5000/signup', {
        name,
        email,
        password,
      });

      alert('Signup Successful');
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('Signup Failed');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <form
        onSubmit={handleSignup}
        className='bg-white p-10 rounded shadow-md w-96'
      >
        <h2 className='text-3xl font-bold mb-6 text-center'>Signup</h2>

        <input
          type='text'
          placeholder='Name'
          className='w-full border p-3 mb-4 rounded'
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type='email'
          placeholder='Email'
          className='w-full border p-3 mb-4 rounded'
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Password'
          className='w-full border p-3 mb-4 rounded'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='bg-green-600 text-white w-full p-3 rounded'>
          Signup
        </button>

        <p className='mt-4 text-center'>
          Already have an account?
          <Link to='/' className='text-green-600'>
            {' '}Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className='ml-150 mt-30' >
      <h2 className='text-2xl mb-9'>Welcome To Slooze App</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className='border p-2 mb-2 w-70' /> <br />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required  className='border p-2 w-70'/> <br />
      <button type="submit" className='border mt-2 bg-blue-800 text-white rounded p-2 w-20 cursor-pointer ' >Login</button>
    </form>
  );
};

export default Login;
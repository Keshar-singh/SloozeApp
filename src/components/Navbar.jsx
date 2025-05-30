import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className='flex items-center justify-between p-4 border-b'>
      <div className="flex gap-4">
        {user && (
          <>
            {user.role === 'manager' && (
              <Link to="/dashboard" className='m-2'>Dashboard</Link>
            )}

            <Link to="/products" className='m-2'>Products</Link>

            {/* ✅ Show EditProduct link to both roles */}
            {(user.role === 'manager' || user.role === 'storekeeper') && (
              <Link to="/edit-product" className='m-2'>Edit Product</Link>
            )}
          </>
        )}
      </div>

      <div className="flex gap-4 items-center">
        <button
          onClick={toggleTheme}
          className='border p-2 rounded cursor-pointer'
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        {user ? (
          <button
            onClick={logout}
            className='border p-2 rounded cursor-pointer'
          >
            Logout
          </button>
        ) : (
          <Link to="/" className='border p-2 rounded cursor-pointer'>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

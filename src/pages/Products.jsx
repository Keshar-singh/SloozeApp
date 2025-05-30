import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Products = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  return (
    <div className="p-6 ml-140 mt-30">
      <h1 className="text-3xl font-bold mb-6 text-center">Products List</h1>

      {products.length === 0 ? (
        <p className="text-gray-500 text-center">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{p.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">Product ID: {p.id || index + 1}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

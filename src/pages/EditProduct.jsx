import React, { useState, useEffect } from 'react';

const EditProduct = () => {
  const [product, setProduct] = useState({ name: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing products from localStorage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Add the new product
    const updatedProducts = [...existingProducts, product];

    // Save back to localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));

    // Show success message
    setMessage('Product added successfully!');
    setProduct({ name: '' }); // Clear the input
  };

  return (
    <form onSubmit={handleSubmit} className='ml-150 mt-30'>
      <h2 className='text-2xl'>Add/Edit Product</h2>
      <input
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ name: e.target.value })}
        required
        className='p-2 m-2 border'
      />
      <button type="submit" className='border p-2 bg-blue-800 text-white cursor-pointer rounded'>
        Save
      </button>
      {message && <p className='m-2 text-green-600'>{message}</p>}
    </form>
  );
};

export default EditProduct;

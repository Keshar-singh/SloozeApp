import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import EditProduct from '../pages/EditProduct';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/dashboard" element={<ProtectedRoute role="manager"><Dashboard /></ProtectedRoute>} />
    <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
    <Route path="/edit-product" element={<ProtectedRoute><EditProduct /></ProtectedRoute>} />
  </Routes>
);

export default AppRoutes;
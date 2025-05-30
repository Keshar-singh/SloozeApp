import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import ThemeProvider from './context/ThemeContext';

const App = () => (
  <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <Navbar />
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
export default App;
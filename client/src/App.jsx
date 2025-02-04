import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import NotFound from './pages/NotFound';

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  const { isSignedIn } = useUser();
  return isSignedIn ? element : <Navigate to="/" replace />;
};

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <ToastContainer position='bottom-right' />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<ProtectedRoute element={<Result />} />} />
        <Route path="/buy-credit" element={<ProtectedRoute element={<BuyCredit />} />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

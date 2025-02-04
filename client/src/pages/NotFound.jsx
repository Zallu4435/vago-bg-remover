import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center text-center">
      <h1 className="text-5xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600 mt-2">Oops! Page not found.</p>
      <Link 
        to="/" 
        className="mt-4 px-6 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;

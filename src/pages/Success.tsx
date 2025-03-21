import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
  // Clear cart from localStorage when reaching success page
  useEffect(() => {
    localStorage.removeItem('cart');
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
        <div className="text-green-500 mb-4">
          <svg className="h-16 w-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your purchase! Your order has been received and is being processed.
          You will receive a confirmation email shortly with your order details.
        </p>
        
        <div className="space-y-4">
          <Link 
            to="/products" 
            className="block w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Continue Shopping
          </Link>
          
          <Link 
            to="/" 
            className="block w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
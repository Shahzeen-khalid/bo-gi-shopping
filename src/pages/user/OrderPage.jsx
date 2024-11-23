import React from 'react';
import { useNavigate } from 'react-router';
import TopProd from './TopProd';
import WishList from './WishList';

const OrderPage = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/payment');
  };

  return (
    <div className="container mx-auto p-6">
      <TopProd handleOrderNow={handleOrderNow} />
      <WishList handleOrderNow={handleOrderNow} />
      <h1 className="text-3xl font-bold text-center mb-6">Your Order</h1>
      
      {/* Order Summary Section */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold">Product: Awesome Item</h2>
        <p className="text-lg text-gray-700">Price: $100</p>
      </div>
      
      {/* Order Now Button */}
      <div className="flex justify-center">
        <button
          onClick={handleOrderNow}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default OrderPage;

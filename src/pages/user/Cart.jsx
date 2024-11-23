import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cart, getTotalPrice, updateQuantity, removeItem } = useCart();
  const totalPrice = getTotalPrice();

  const handleIncreaseQty = (itemId) => {
    updateQuantity(itemId, 1);
  };

  const handleDecreaseQty = (itemId) => {
    updateQuantity(itemId, -1);
  };

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

   const navigate = useNavigate();

   const handleOrderNow = () => {
    navigate('/payment')
   }

  return (
    <div className="mx-auto h-screen">
      <h1 className="text-3xl font-bold text-center mt-10">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-6 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              {/* Card Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-[200px] w-full object-contain"
              />
              <h2 className="font-semibold text-xl">
                {item.name}
              </h2>
              <p className="text-gray-700 dark:text-gray-500">Price: ${item.price}</p>
              <div className="flex items-center mt-4">
                <button
                  onClick={() => handleDecreaseQty(item.id)}
                  className="bg-set1 hover:bg-set2 text-white p-2 rounded-l-md"
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="px-10 text">{item.quantity}</span>
                <button
                  onClick={() => handleIncreaseQty(item.id)}
                  className="bg-set2 hover:bg-set1 text-white p-2 rounded-r-md"
                >
                  +
                </button>
              </div>
              {/* Delete Button */}
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="mt-4 px-10 py-2 bg-red-500 hover:bg-red-700 rounded-xl text-white font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="flex dark:bg-gray-900 justify-center items-center">
        <p
          className="px-5 w-full py-2 mb-20 bg-gradient-to-r from-set1 to-set2
          text-white font-semibold text-left mt-6 text-2xl"
        >
         TOTAL: ${totalPrice}
        </p>
        <button

          onClick={handleOrderNow}
          className="px-14 py-2 mb-20 bg-set2 
          hover:bg-gradient-to-r hover:from-green-500 hover:bg-green-600
          text-white font-semibold mt-6 text-2xl"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Cart;

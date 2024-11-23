import React, { useState, useEffect } from "react";

const PaymentPage = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [paymentOption, setPaymentOption] = useState("card"); // Default to card
  const [address, setAddress] = useState("");
  const [totalPrice, setTotalPrice] = useState(1200); // State to store total price
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch("../../../db.json");
        const data = await response.json();
        const prices = data.categories.map((item) => item.price);
        const total = prices.reduce((acc, curr) => acc + curr, 0);
        setTotalPrice(total);
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    };

    fetchPrice();
  }, []);

  const handleChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleUserDetailsChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userDetails.name || !userDetails.email || !userDetails.phone) {
      alert("Please fill in all user details!");
      return;
    }

    if (paymentOption === "card") {
      alert("Payment successful via card!");
    } else if (paymentOption === "gpay") {
      alert("Payment successful via Google Pay!");
    } else if (paymentOption === "cod") {
      alert("Order placed! Pay on delivery.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Check Out</h1>

      {/* Order Summary */}
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow mb-4">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <p className="text-lg mt-2">
          <span className="font-semibold">Total Price:</span> ₹{totalPrice}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Details */}
        <div>
          <h3 className="text-lg font-medium">User Details</h3>
          <div className="space-y-4 mt-2">
            <div>
              <label className="block text-gray-700  dark:text-white font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleUserDetailsChange}
                className="w-full dark:bg-gray-700 dark:border-white/20 border rounded-lg p-2 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-white font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleUserDetailsChange}
                className="w-full dark:bg-gray-700 dark:border-white/20 border rounded-lg p-2 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-white font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={userDetails.phone}
                onChange={handleUserDetailsChange}
                className="w-full dark:bg-gray-700 dark:border-white/20 border rounded-lg p-2 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>

        {/* Address Field */}
        <div>
          <label className="block text-gray-700 dark:text-white font-medium mb-2">
            Delivery Address
          </label>
          <textarea
            value={address}
            onChange={handleAddressChange}
            className="w-full dark:bg-gray-700 dark:border-white/20 border rounded-lg p-2 focus:outline-none"
            placeholder="Enter your delivery address"
            rows="3"
          ></textarea>
        </div>

        {/* Payment Option Selector */}
        <div>
          <h3 className="text-lg font-medium">Choose Payment Method</h3>
          <div className="flex space-x-4 mt-2">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentOption"
                value="card"
                checked={paymentOption === "card"}
                onChange={handlePaymentOptionChange}
                className="form-radio"
              />
              <span>Card</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentOption"
                value="gpay"
                checked={paymentOption === "gpay"}
                onChange={handlePaymentOptionChange}
                className="form-radio"
              />
              <span>Google Pay</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="paymentOption"
                value="cod"
                checked={paymentOption === "cod"}
                onChange={handlePaymentOptionChange}
                className="form-radio"
              />
              <span>Pay on Delivery</span>
            </label>
          </div>
        </div>

        {/* Card Payment Details */}
        {paymentOption === "card" && (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 dark:text-white font-medium">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleChange}
                className="w-full dark:bg-gray-700 dark:border-white/20 border rounded-lg p-2 focus:outline-none"
                placeholder="Enter card number"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-white font-medium">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleChange}
                className="w-full dark:bg-gray-700 dark:border-white/20 border rounded-lg p-2 focus:outline-none"
                placeholder="MM/YY"
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-white font-medium">
                CVV
              </label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleChange}
                className="w-full dark:bg-gray-700 dark:border-white/20 border rounded-lg p-2 focus:outline-none"
                placeholder="Enter CVV"
              />
            </div>
          </div>
        )}
        <button
          type="submit"
          className="bg-gradient-to-r from-set1 to-set2 text-white py-2 px-4 rounded-lg font-semibold hover:from-green-500 hover:to-green-600"
        >
          {paymentOption === "cod" ? "Place Order" : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;

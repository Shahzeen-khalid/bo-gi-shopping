import React, { createContext, useState, useContext, useEffect } from "react";
import cartEndpoints from "../api/cartEndpoints";
import axiosInstance from "../api/axiosInstance";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Fetch cart items from the backend (useEffect for initial data loading)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = (await axiosInstance.get("/cart")).data;

        console.log(data);
        
        setCart(data);
      } catch (error) {
        console.error("Failed to fetch cart items", error);
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (product) => {
    try {
      const newProduct = await cartEndpoints.addToCartBackend(product);
      setCart((prevCart) => [...prevCart, newProduct]);
    } catch (error) {
      console.error("Failed to add item to cart", error);
    }
  };

  const updateQuantity = async (itemId, delta) => {
    try {
      const item = cart.find((item) => item.id === itemId);
      if (item) {
        const updatedItem = await cartEndpoints.increaseCartQuantityBackend(itemId, item.quantity + delta);
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === itemId ? { ...item, quantity: updatedItem.quantity } : item
          )
        );
      }
    } catch (error) {
      console.error("Failed to update quantity", error);
    }
  };

  const removeItem = async (itemId) => {
    try {
      await cartEndpoints.removeCartItemBackend(itemId);
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error("Failed to remove item from cart", error);
    }
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getTotalPrice, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

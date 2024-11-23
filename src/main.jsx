import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter >
    <AuthProvider>
    <CartProvider>
      <App />
      </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

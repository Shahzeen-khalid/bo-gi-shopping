import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { FaStar, FaHeart } from "react-icons/fa6";
import Footer from "../../components/user/Footer";
import { useCart } from "../../context/CartContext";


const Category = () => {
  const { id } = useParams();
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const navigate = useNavigate();

  if (!category) {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold text-center">Category not found!</h2>
      </div>
    );
  }

  const handleFavorite = (productId) => {
    const updatedWishlist = wishlist.includes(productId)
      ? wishlist.filter((id) => id !== productId)
      : [...wishlist, productId];

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const { addToCart } = useCart();

  return (
    <div>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 capitalize">
          {categoryName} Products
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="group bg-white  dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div className="relative border overflow-hidden">
                <img
                  src={product.image}
                  alt={`Product: ${product.name}`}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="h-[200px] w-full object-contain group-hover:scale-105 transition-transform"
                />
                <button
                  onClick={() => handleFavorite(product.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full 
                  ${
                    wishlist.includes(product.id)
                      ? "bg-red-500 text-white"
                      : "bg-gray-300 text-gray-800"
                  } hover:bg-red-600 transition`}
                >
                  <FaHeart />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-3">
                <h3 
                onClick={() => navigate(`/product/${product.id}`)}
                className="text-lg font-semibold text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p 
                onClick={() => navigate(`/product/${product.id}`)}
                className="text-gray-600 dark:text-gray-300 mb-2">
                  ${product.price}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <FaStar className="text-yellow-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {product.rating}
                  </span>
                </div>
                <div className="flex justify-evenly flex-cols-2 sm:flex-cols-2 lg:flex-cols-3 gap-20">
                  {/* View Button */}
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="py-2 px-8 font-semibold bg-gradient-to-r from-set1/90 to-set2/90
                    text-white rounded-full hover:from-set2 hover:to-set1 transition
                    "
                  >
                    View
                  </button>
                  
                  {/* Add to cart */}
                  <button
                    onClick={() => addToCart(product)}
                    className="py-2 px-4 font-semibold 
                    bg-gradient-to-r from-set1/90 to-set2/90 text-white 
                    rounded-full hover:from-set2 hover:to-set1 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;

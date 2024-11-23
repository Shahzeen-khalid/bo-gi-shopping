import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router";
import Footer from "../../components/user/Footer";


const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((id) => id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleOrderNow = () => {
    navigate("/payment");
  };

  const productsInWishlist = categories.flatMap((cat) =>
    cat.products.filter((product) => wishlist.includes(product.id))
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">My Wishlist</h1>
        {productsInWishlist.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsInWishlist.map((product) => (
              <div
                key={product.id}
                
                className="border dark:border-white/20 rounded-lg shadow-md p-6 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="h-[300px] w-full object-cover border rounded-md mb-4"
                />
                <h3
                onClick={() => navigate(`/product/${product.id}`)}
                className="font-semibold text-xl text-gray-800 mb-2 dark:text-white">
                  {product.name}
                </h3>
                <p 
                onClick={() => navigate(`/product/${product.id}`)}
                className="text-lg text-gray-600 dark:text-indigo-50">
                  ${product.price}
                </p>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={handleOrderNow}
                    className="p-2 bg-lime-500 text-white rounded-md hover:bg-lime-600"
                  >
                    Checkout
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-lg">Your wishlist is empty!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default WishList;

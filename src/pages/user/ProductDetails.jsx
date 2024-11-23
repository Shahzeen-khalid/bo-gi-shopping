import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import TrendingProducts from './TrendingProducts'
import { useCart } from '../../context/CartContext'
import productEndpoints from '../../api/productEndpoints'

const ProductDetails = () => {
  const [product,setProduct] = useState({})
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async() => {
    const data = await productEndpoints.getProduct(id)
    setProduct(data)
    console.log(data);
    
    })()
  },[id])

  
const { addToCart } = useCart();
  if (!product) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-bold">Product not found!</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleBuyNow = () => {
    navigate("/payment");
  };

  return (
    <div className="mx-auto">
      <div className="container flex p-6 flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1 lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-contain rounded-lg shadow-lg lg:max-h-[500px]"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {product.description}
          </p>
          <p className="text-xl font-semibold text-green-600 mb-2">
            ${product.price}
          </p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="text-gray-500">{product.rating}</span>
          </div>

          <div className="flex justify-center gap-10">
          <button
            onClick={handleBuyNow}
            className="py-2 px-4 font-semibold bg-gradient-to-r from-set1/90 to-set2/90 text-white rounded-full hover:from-set2 hover:to-set1 transition"
          >
            Buy Now
          </button>
          <button
            onClick={() => addToCart(product)}
            className="py-2 px-4 font-semibold bg-gradient-to-r from-set1/90 to-set2/90 text-white rounded-full hover:from-set2 hover:to-set1 transition"
          >
            Add to Cart
          </button>
          </div>

          

        </div>
      </div>
          <TrendingProducts/>
    </div>
  )
}

export default ProductDetails

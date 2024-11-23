import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { FaStar } from "react-icons/fa6";
import productEndpoints from "../../api/productEndpoints.js";

const Products = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await productEndpoints.getProducts();
      setProducts(data);
    })();
  }, []);

  if (!products.length) return <>Loading...</>;

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section  */}
        <div className="text-center mb-10 mx-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-set2">
            Top Selling Products For You
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {/* Body Section  */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5
          lg:grid-cols-5 place-item-center gap-5"
          >
            {/* Card Section  */}
            {products.map((product) => (
              <div
                data-aos="fade-up"
                onClick={() => navigate(`/product/${product.id}`)}
                key={product.id}
                className="space-y-3"
              >
                <img
                  src={product.image}
                  alt=""
                  className="h-[220px] w-[150px] 
            object-cover rounded-md cursor-pointer"
                />
                <div className="cursor-pointer">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button  */}
          <div className="flex justify-center mt-4">
            <button
              data-aos="fade-up"
              onClick={() => navigate("/categories")}
              className="py-1 px-5 bg-gradient-to-r from-set1/90 to-set2/90
            hover:bg-gradient-to-r hover:from-set2 hover:to-set1 
            rounded-md text-white text-center cursor-pointer
            font-inter font-semibold"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

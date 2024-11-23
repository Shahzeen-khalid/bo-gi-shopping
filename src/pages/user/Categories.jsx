import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaStar } from "react-icons/fa6";
import Footer from "../../components/user/Footer";
import categoryEndpoints from "../../api/categoryEndpoints";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await categoryEndpoints.category();
        setCategories(data);
      } catch (err) {
        setError(err.message || "An Error occured");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading Categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="mt-14">
        <div className="container mb-20">
          {/* Header Section */}

          <h1 className="text-3xl font-bold text-center mb-6">ALL PRODUCTS</h1>
          <div className="mb-10 flex flex-row justify-center items-center gap-4">
            {categories.map((category) => (
              <Link
                to={`/category/${category.category}`}
                key={category.id}
                className="p-2 rounded-md shadow bg-gradient-to-r
                from-set1/90 to-set2/90 text-white 
                hover:bg-gradient-to-r hover:from-set2 hover:to-set1 font-semibold font-sans"
              >
                <h3>{category.name}</h3>
              </Link>
            ))}
          </div>

          {/* Body Section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* Card Section */}
              {categories.map((category) =>
                category.products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden
                    transition-transform transform hover:scale-105"
                    data-aos="fade-up"
                  >
                    <img
                      src={product.image}
                      alt={`Category: ${product.name}`}
                      className="h-52 w-full object-cover"
                    />
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <p className="text-sm text-gray-600 capitalize">
                        ${product.price}
                      </p>
                      <div className="flex items-center gap-2">
                        <FaStar className="text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                      <button
                        className="mt-2 w-full bg-gradient-to-r from-set1/90 to-set2/90
                        text-white py-2 rounded-lg font-semibold hover:from-set2 hover:to-set1"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Categories;

import React, { useContext, useState, useEf } from "react";
import Logo from "../../../assets/bo-gi-transparent.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart, FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../../../context/CartContext";
import { NavLink, useNavigate } from "react-router";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { AuthContext } from "../../../context/AuthContext";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Categories",
    link: "/categories",
  },
  {
    id: 3,
    name: "About Us",
    link: "/aboutus",
  },
  {
    id: 4,
    name: "Testimonial",
    link: "/testimonials",
  },
  {
    id: 5,
    name: "Contact Us",
    link: "/contactus",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/trending-products",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/best-selling",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/top-rated",
  },
];

const Navbar = () => { 
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, loading } = useContext(AuthContext);
  const { cart, getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  const handleProfileClick = () => {

    if (user) { 
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div
      className="shadow-md dark:bg-gray-900 dark:border-outline2
    dark:text-white backdrop-blur-md bg-white/60 dark:bg-gray-900/70
     duration-200 z-40 sticky top-0"
    >
      {/* Upper Navbar  */}
      <div className="bg-primary/10">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" className="w-40 uppercase" />
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex justify-between items-center h-[64px] gap-3">
            <div className="relative group hidden sm:block ">
              <input
                type="text"
                placeholder="search" 
                
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] focus:w-[300px]
                transition-all duration-300 rounded-full border border-gray-300
                 px-2 py-1 focus:outline-none focus:border-1
                  focus:border-outline dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-outline absolute
                  top-1/2 -translate-y-1/2 right-3"
              />
            </div>

            {/* Wish Button  */}
            <button
              onClick={() => navigate("/wishlist")}
              className="hidden sm:flex bg-gradient-to-r from-set1 to-set2 transition-all
            duration-200 text-white py-1 px-4 rounded-full
            items-center gap-3 group"
            >
              <span
                className="group-hover:block 
            hidden transition-all duration-200"
              >
                Wish
              </span>
              <FaHeart
                className="text-xl 
            text-white drop-shadow-sm cursor-pointer"
              />
            </button>

            {/* Cart Button */}
            <button
              onClick={() => navigate("/cart")}
              className="hidden sm:flex bg-gradient-to-r from-set1 to-set2 transition-all
            duration-200 text-white py-1 px-4 rounded-full
            items-center gap-3 group cursor-pointer"
            >
              <span
                className="group-hover:block 
            hidden transition-all duration-200"
              >
                Cart
              </span>
              <FaCartShopping
                className="text-xl 
            text-white drop-shadow-sm cursor-pointer"
              />
            </button>

             {/* Profile Button */}
             <button
              onClick={handleProfileClick}
              className="sm:flex bg-gradient-to-r from-set1 to-set2 transition-all
            duration-200 text-white py-1 px-4 rounded-full flex 
            items-center gap-3 group"
            >
              <FaUserAlt className="text-xl text-white drop-shadow-sm cursor-pointer" />
              <span className="group-hover:block hidden transition-all duration-200">
                {user ? "Profile" : "Login"}
              </span>
            </button>

            {/* DarkMode Switch  */}

            <div className="hidden sm:block">
              <DarkMode />
            </div>
            {/* Mobile Menu Toggle  */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden block text-xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Lower Navbar  */}
      <div
        className={`bg-primary/10 border font-semibold font-sans p-3
        dark:text-white ${menuOpen ? "block" : "hidden"} sm:flex
        sm:justify-center sticky top-[64px] z-30`}
      >
        <ul className="flex flex-col sm:flex-row items-center gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <NavLink
                to={data.link}
                className={({ isActive }) =>
                  isActive
                    ? "inline-block"
                    : "hover:text-purple-500 transition-all duration-200"
                }
              >
                {data.name}
              </NavLink>
            </li>
          ))}

          {/* Buttons For Mobile View  */}

          <div
            className="flex flex-col justify-around 
          items-center px-4 mt-2 sm:hidden"
          >
            {/* Wish Buttons  */}

            <button
              onClick={() => navigate("/wishlist")}
              className="flex transition-all duration p-2 
            items-center gap-2 group"
            >
              <FaHeart
                className="text-xl hover:text-purple-500
              text-gray-600 cursor-pointer"
              />
              <span
                className="text-black dark:text-white
              hover:text-purple-500 dark:hover:text-purple-500
              transition-all duration-200"
              >
                Wish
              </span>
            </button>

            {/* Cart Button  */}

            <button
              onClick={() => navigate("/cart")}
              className="flex transition-all duration-200
            p-2 items-center gap-2 group"
            >
              <FaCartShopping
                className="text-xl hover:text-purple-500
              text-gray-600 cursor-pointer"
              />
              <span
                className="text-black dark:text-white
              hover:text-purple-500 dark:hover:bg-purple-500
              transition-all duration-200"
              >
                Cart
              </span>
            </button>
          </div>

          {/* Dropdown and Links  */}

          <li className="group relative cursor-pointer">
            <div className="flex items-center gap-[2px] py-2">
              <span>Trending Products</span>
              <FaCaretDown
                className="transition-all duration-200
                group-hover:rotate-180"
              />
            </div>

            <div
              className="absolute z-[9999] hidden group-hover:block
              w-[200px] rounded-md bg-white dark:bg-gray-900 dark:text-white
              p-2 text-black shadow-md"
            >
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <NavLink
                      to={data.link}
                      className={({ isActive }) =>
                        isActive
                          ? "inline-block w-full rounded-md p-2 text-purple-500"
                          : "inline-block w-full rounded-md p-2 hover:bg-gradient-to-r from-set1 to-set2 hover:text-white"
                      }
                    >
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
        {/* Search Bar for Mobile View  */}

        <div className="block sm:hidden px-9 mt-2 mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full border border-gray-300
                    px-4 py-1 focus:outline-none focus:border-outline
                    dark:border-gray-500 dark:bg-gray-800"
            />
            <IoMdSearch
              className="text-gray-500 absolute top-1/2 -translate-y-1/2
                    right-4"
            />
          </div>
        </div>

        {/* DarkMode Switch  */}

        <div className="flex justify-center mb-4 sm:hidden">
          <DarkMode />
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;

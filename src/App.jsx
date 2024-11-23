import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router";
import { useLocation, useNavigate } from "react-router"; 
// HOME PAGE
import HomePage from "./pages/user/HomePage";
import Navbar from "./components/user/Navbar/Navbar";
import ProfilePage from "./pages/user/ProfilePage";

// Animate on Scroll
import AOS from "aos";
import "aos/dist/aos.css";

// Navigated Pages
import Categories from "./pages/user/Categories";
import Category from "./pages/user/Category";
import AboutUs from "./pages/user/AboutUs";
import TestimonialsPage from "./pages/user/TestimonialsPage";
import ContactUs from "./pages/user/ContactUs";
import TrendingProducts from "./pages/user/TrendingProducts";
import BestSelling from "./pages/user/BestSelling";
import TopRated from "./pages/user/TopRated";
import WishList from "./pages/user/WishList";
import ProductDetails from "./pages/user/ProductDetails";
import Login from "./pages/user/Login";
import OrderPage from "./pages/user/OrderPage";
import PaymentPage from "./pages/user/PaymentPage";
import Cart from "./pages/user/Cart";
import SignUp from "./pages/user/SignUp";



function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/payment");
  };
   

  return (
    <div
      className="bg-white dark:bg-gray-900 
    dark:text-white duration-200"
    >
     {!["/signup", "/signupin", "/login", "/register"].includes(location.pathname) && (
  <Navbar handleOrderNow={handleOrderNow} />
)}


      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/trending-products" element={<TrendingProducts />} />
        <Route path="/best-selling" element={<BestSelling />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

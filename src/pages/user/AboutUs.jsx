import React from "react";
import Footer from "./../../components/user/Footer";

const AboutUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Header Section */}
      <div 
      data-aos="zoom-in"
      className="bg-gradient-to-r from-set1 to-set2 text-white py-16">
        <div data-aos="fade-up" className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Discover the story behind BO & GI Shopping, your trusted online store!
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div data-aos="fade-up" className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">

        <div 
        className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            To provide a seamless and enjoyable shopping experience, offering a
            wide range of quality products at unbeatable prices.
          </p>
        </div>

        <div data-aos="fade-up" className="grid md:grid-cols-3 gap-8">

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md 
          hover:bg-gradient-to-r from-set1 to-set2 hover:text-white">
            <h3 className="text-xl font-bold mb-2">Wide Range of Products</h3>
            <p>
              From fashion to electronics, we’ve got everything you need.
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md
          hover:bg-gradient-to-r from-set1 to-set2 hover:text-white">
            <h3 className="text-xl font-bold mb-2">Customer-Centric Approach</h3>
            <p>
              Your satisfaction is our priority. We’re here to make you happy.
            </p>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md
          hover:bg-gradient-to-r from-set1 to-set2 hover:text-white">
            <h3 className="text-xl font-bold mb-2">Secure Shopping</h3>
            <p>
              Enjoy peace of mind with secure payments and data protection.
            </p>
          </div>
          
        </div>
      </div>

      {/* Vision Section */}
      <div 
      data-aos="zoom-in"
      className="bg-gray-50 dark:bg-gray-800 py-16 hover:bg-gradient-to-r from-set1 to-set2 hover:text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg max-w-2xl mx-auto">
            To revolutionize online shopping by creating a platform where
            innovation meets convenience and every purchase is an experience.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div 
      data-aos="fade-up"
      className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Have questions? We’d love to hear from you!
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-center gap-4">
            <div className="text-2xl text-purple-500">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <p>Calicut, Kerala</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-2xl text-purple-500">
              <i className="fas fa-phone-alt"></i>
            </div>
            <p>9876543210</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-2xl text-purple-500">
              <i className="fas fa-envelope"></i>
            </div>
            <p>support@boandgi.com</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div>
          <Footer />
        </div>
    </div>
  );
};

export default AboutUs;

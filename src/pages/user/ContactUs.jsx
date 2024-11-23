import React from "react";
import Footer from "../../components/user/Footer";

const ContactUs = () => {
  return (
    <div 
    className="flex flex-col w-full ">
      <h1 data-aos="zoom-in"
      className="p-6 text-4xl font-bold text-center mb-8 dark:text-white text-gray-800">
        Contact Us
      </h1>
      <div 
      data-aos="fade-up"
      className="grid grid-cols-1 p-6 md:grid-cols-2 gap-10 flex-grow">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700 dark:text-white">
            Get in Touch
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2 dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border dark:bg-gray-800 dark:border-white/30 text-black rounded-lg p-2 focus:outline-none focus:ring focus:ring-purple-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium dark:text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full border dark:bg-gray-800 dark:border-white/30 text-black rounded-lg p-2 focus:outline-none focus:ring focus:ring-purple-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-white font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full border dark:bg-gray-800 dark:border-white/30 text-black rounded-lg p-2 focus:outline-none focus:ring focus:ring-purple-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
            data-aos="fade-up"
              type="submit"
              className="bg-gradient-to-r from-set1 to-set2 hover:from-set2 hover:to-set1 text-white font py-2 px-4 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map and Contact Info */}
        <div data-aos="zoom-in">
          <h2 className="text-2xl dark:text-white font-semibold mb-4 text-gray-700">Find Us</h2>
          <p className="text-gray-600 dark:text-white mb-4">
            Bo & Gi Company, Calicut, Kerala, India
          </p>
          <div className="h-64 w-full rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Bo & Gi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.476290616313!2d75.77811981462293!3d11.258753091998853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b8e96c3f97f%3A0x1f1c098f2b3f9ef!2sCalicut%2C%20Kerala!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-gray-600 dark:text-white mt-4">
            For directions or more information, call us at{" "}
            <span className="font-semibold">+91 98765 43210</span>.
          </p>
        </div>
      </div>

      <div className="mt-10 p-6 space-y-10">
        {/* FAQ Section */}
        <div>
          <h2 
          data-aos="fade-up"
          className="text-2xl dark:text-white font-semibold text-gray-700 mb-4">
            Frequently Asked Questions
          </h2>
          <div 
          data-aos="zoom-in"
          className="space-y-3">
            <div>
              <h3 className="font-medium dark:text-white text-gray-800">
                What are your operating hours?
              </h3>
              <p className="text-gray-600 dark:text-white">
                We are open from <strong>9:00 AM to 6:00 PM, Monday to Saturday</strong>.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 dark:text-white ">
                Do you provide online support?
              </h3>
              <p className="text-gray-600 dark:text-white">
                Yes, you can email us at <strong>support@boandgi.com</strong> for online assistance.
              </p>
            </div>
          </div>
        </div>

        
        <div data-aos="fade-up">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">
            Working Hours
          </h2>
          <p className="text-gray-600 dark:text-white">
            Monday - Friday: <strong>9:00 AM to 6:00 PM</strong>
            <br />
            Saturday: <strong>10:00 AM to 4:00 PM</strong>
            <br />
            Sunday: <strong>Closed</strong>
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ContactUs;

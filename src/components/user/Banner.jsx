import React from "react";
import BannerImg from "../../assets/banner/babybanner.jpg";
import { GrSecure } from "react-icons/gr";
import { MdLocalShipping } from "react-icons/md";
import { FaTag } from "react-icons/fa";
import { MdPayment } from "react-icons/md";



const Banner = () => {
  return (
    <div
      className="min-h-[550px] flex justify-center items-center 
    py-12 sm:py-0"
    >
      <div className="container">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 
        gap-6 items-center"
        >
          {/* Image Section  */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[500px] h-[450px] w-full
            mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
            object-cover"
            />
          </div>
          {/* Text Details Section  */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="font-inter text-3xl sm:text-4xl font-bold"
            >Winter Sale upto 50% off
            </h1>
            <p data-aos="fade-up" className="text-sm font-inter text-gray-500 tracking-wide leading-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Deserunt, et iusto excepturi corporis iste rem rerum quis repellendus.
              </p>
              <div className="flex flex-col gap-4">
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <GrSecure 
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full
                   bg-violet-100 dark:bg-violet-400"/>
                  <p className="font-poppins">Quality Products</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <MdLocalShipping className="text-4xl h-12 w-12 shadow-sm
                   p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                   <p className="font-poppins">Fast Delivery</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <MdPayment className="text-4xl h-12 w-12 
                  shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400"/>
                  <p className="font-poppins">Easy Payment Method</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                  <FaTag className="text-4xl h-12 w-12 
                  shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400"/>
                  <p className="font-poppins">Get Offers</p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

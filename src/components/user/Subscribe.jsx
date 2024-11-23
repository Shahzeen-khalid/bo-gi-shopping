import React from 'react'
import Banner from"../../assets/banner/PurpleBanner.jpg"

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
}

const Subscribe = () => {
  return (
    <div 
      data-aos="zoom-in" 
      className="mb-20 bg-gray-100 dark:bg-gray-900 text-white" 
      style={BannerImg}>
      <div className="container py-20 flex flex-col justify-center items-center"> 
        <div className='space-y-6 mx-w-xl mx-auto'>
           <h1 className="text-2xl !text-center 
           sm:text-left sm:text-4xl font-semibold ">Get Notification About New Products</h1>
        </div>
        <input 
        // data-aos="fade-up"
        type="text" placeholder='Enter Your Email' required 
        className='w-[80%] p-2 bg-transparent border 
        border-white rounded-full mt-2'/>
      </div>
    </div>
  )
}

export default Subscribe

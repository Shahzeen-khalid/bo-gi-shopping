import React from "react";
import Image1 from "../../assets/hero/babyAi.png";
import Image2 from "../../assets/hero/baby-1.png";
import Image3 from "../../assets/hero/mom-baby.png";
import Slider from 'react-slick';


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Baby's Wear",
    description:
      "Full-body outfits, often with feet covering, designed for sleeping or lounging. Many come with zippers or snaps for easy dressing and undressing, perfect for nighttime diaper changes",
  },
  {
    id: 2,
    img: Image2,
    title: "Baby Essentials: Fashion & Nursery",
    description:
      "Flat 30% Off + Cashback: A limited-time promotion on all baby essentials to make these high-quality items more affordable.",
  },
  {
    id: 3,
    img: Image3,
    title: "Families are always changing",
    description:
      "Items like baby carriers and wraps that keep mother and baby close, promoting security and connection.",
  },
];

const Hero = ({handleOrderPopup}) => {

  let settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div
      className="relative overflow-hidden min-h-[550px] 
      sm:min-h-[650px] bg-gray-100 flex justify-center
      items-center dark:bg-gray-900 dark:text-white 
      duration-200">
      {/* Background Pattern */}
      <div
        className="h-[700px] w-[700px] bg-primary/40 
        absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"
      ></div>
      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0 ">
        <Slider {...settings}>
          {ImageList.map((slide) => (
            <div key={slide.id} >
            <div 
            className="grid grid-cols-1 sm:grid-cols-2">
              {/* Text Content Section  */}
              <div 
              
                className="flex flex-col justify-center gap-4
            pt-12 sm:pt-0 text-center sm:text-left order-2 
            sm:order-1 relative z-10"
              >
                <h1 
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                 {slide.title}
                </h1>
                <p 
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm ">
                 {slide.description}
                </p>
                <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
                >
                  <button
                  onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-set1/90 to-set2/90
                    hover:bg-gradient-to-r hover:from-set2 hover:to-set1
                hover:scale-105 duration-200 text-white font-semibold py-2 px-4
                rounded-full"
                  >
                    Order Now
                  </button>
                </div>
              </div>
              {/* Image Section  */}
              <div className="order-1 sm:order-2 ">
                <div 
                data-aos="zoom-in"
                data-aos-once="true"
                className="relative z-10 ">
                  <img
                    src={slide.img}
                    alt=""
                    className="w-[300px] h-[300px] sm:h-[450px] 
                sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          ))}
          
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

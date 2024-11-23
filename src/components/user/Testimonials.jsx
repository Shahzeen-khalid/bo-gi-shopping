import React from "react";
import Slider from "react-slick";
import Mom1 from "../../assets/testimonials/momandbaby1.jpg";
import Mom2 from "../../assets/testimonials/momandbaby2.jpg";
import Mom3 from "../../assets/testimonials/momandbaby3.jpg";
import Mom4 from "../../assets/testimonials/momandbaby4.jpg";
import Mom5 from "../../assets/testimonials/momandbaby5.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Binita",
    text: "Becoming a mom has been the most beautiful journey, and having products I can trust makes all the difference. I love knowing my baby is safe.",
    img: Mom1,
  },
  {
    id: 2,
    name: "Zahra",
    text: "Every mom wants the best for her little one, and I found just that. Reliable, gentle, and so thoughtfully made. My baby deserves nothing less",
    img: Mom2,
  },
  {
    id: 3,
    name: "Anastasia",
    text: "From sleepless nights to first smiles, this support has made every moment more precious. I couldn’t have done it without these essentials!",
    img: Mom3,
  },
  {
    id: 4,
    name: "Mahati",
    text: "As a first-time mom, I was overwhelmed with choices. But finding products I can rely on has been a blessing, makingmotherhood a little easier.",
    img: Mom4,
  },
  {
    id: 5,
    name: "Zendaya",
    text: "Knowing these products are safe and thoughtfully made gives me such peace. It’s like having a little extra love and care in every moment with my baby.",
    img: Mom5,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseonHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Header Section  */}
        <div className="text-center mb-10 mx-w-[600px] mx-auto ">
          <p data-aos="fade-up" className="text-sm text-set2">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* Testimonial Card  */}
        <div data-aos="zoom-in">
          <Slider { ...settings}>
          {TestimonialData.map((testi) => (
              <div key={testi.id} className="my-6">
                <div
                  
                  className="flex flex-col gap-4 shadow-lg
              py-8 px-6 mx-4 rounded-xl dark:bg-gray-800
              bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={testi.img}
                      alt=""
                      className="rounded-full w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{testi.text}</p>
                      <h1
                        className="text-xl font-semibold font-inter 
                text-black/80 dark:text-white"
                      >
                        {testi.name}
                      </h1>
                    </div>
                  </div>
                  <p
                    className="text-black/10 text-9xl 
               font-serif absolute top-0 right-0 dark:text-white/10"
                  >
                    ”
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

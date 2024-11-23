import React from "react";
import Mom1 from "../../assets/testimonials/momandbaby1.jpg";
import Mom2 from "../../assets/testimonials/momandbaby2.jpg";
import Mom3 from "../../assets/testimonials/momandbaby3.jpg";
import Mom4 from "../../assets/testimonials/momandbaby4.jpg";
import Mom5 from "../../assets/testimonials/momandbaby5.jpg";
import Mom6 from "../../assets/testimonials/momandbaby6.jpg"
import Footer from "../../components/user/Footer";
import { FaStar } from "react-icons/fa6";

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
  {
    id: 6,
    name: "Polina",
    text: "From sleepless nights to first smiles, this support has made every moment more precious. I couldn’t have done it without these essentials!",
    img: Mom6,
  },
];
const TestimonialsPage = () => {
  return (
    <div className="pt-10">
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
        <div data-aos="zoom-in"
        className="grid grid-cols-1 lg:grid-cols-2"
        >
          {TestimonialData.map((testi) => (
            <div key={testi.id} className="my-6">
              <div
                className="flex flex-col gap-4 shadow-lg
              py-8 px-4 mx-4 rounded-xl dark:bg-gray-800
              bg-primary/10 relative"
              >
                <div
                  className="text-center justify-center items-center
                   mb-4 lg:mb-6"
                >
                  <img
                    src={testi.img}
                    alt=""
                    className="rounded-md justify-center w-[100%] object-cover"
                  />
                  <h1
                    className="text-xl font-semibold font-inter 
                        text-black/80 dark:text-white"
                  >
                    {testi.name}
                  </h1>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className="space-y-3">
                    <p className="text-xs text-gray-500">{testi.text}</p>
                  </div>
                </div>
                <p
                  className="flex gap-1 text-black/10 text-xl 
               font-serif absolute top-9 right-8 dark:text-white/10"
                >
                  <FaStar className="text-2xl text-yellow-400" />
                  <FaStar className="text-2xl text-yellow-400" />
                  <FaStar className="text-2xl text-yellow-400" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TestimonialsPage;

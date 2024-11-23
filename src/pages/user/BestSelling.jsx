import React from "react";
import { useNavigate } from "react-router";
import Prod1 from "../../assets/topProduct/babypink.png";
import Prod2 from "../../assets/topProduct/suspenderOut.png";
import Prod3 from "../../assets/topProduct/Onesies2.png";
import { FaStar } from "react-icons/fa";
import Footer from "../../components/user/Footer";

const ProductsData = [
  {
    id: 1,
    img: Prod1,
    title: "Love Pink Dress",
    description:
      "ADORABLE BABY GIRL PINK DRESS WITH SOFT, BREATHABLE FABRIC, ELEGANT LACE DETAILING, AND A SATIN BOW. PERFECT FOR SPECIAL OCCASIONS, KEEPING HER COMFORTABLE AND STYLISH.",
  },
  {
    id: 2,
    img: Prod2,
    title: "Vintage Suspender",
    description:
      "BABY SUSPENDER OUTFIT FOR INFANTS AGED FROM 6 MONTHS TO 18 MONTHS.SOFT COTTON BLEND DENIM-LOOK PANTS WITH BUTTON DOWN SUSPENDERS, PAIRED WITH A WHITE COTTON T-SHIRT.",
  },
  {
    id: 3,
    img: Prod3,
    title: "Cute Baby Onesies Dress",
    description:
      "CUTE BABY ONESIES IN A PENGUIN CHARACTER, COMPLETE WITH FLIPPERS!  YOUR LITTLE ONE WILL LOOK ADORABLE DRESSED UP AS A BABY PENGUIN.  THEY WILL THINK IT’S GREAT FUN TOO!",
  },
  {
    id: 4,
    img: Prod3,
    title: "Cute Baby Onesies",
    description:
      "CUTE BABY ONESIES IN A PENGUIN CHARACTER, COMPLETE WITH FLIPPERS!  YOUR LITTLE ONE WILL LOOK ADORABLE DRESSED UP AS A BABY PENGUIN.  THEY WILL THINK IT’S GREAT FUN TOO!",
  },
  {
    id: 5,
    img: Prod1,
    title: "Sweetheart Pink Dress",
    description:
      "ADORABLE BABY GIRL PINK DRESS WITH SOFT, BREATHABLE FABRIC, ELEGANT LACE DETAILING, AND A SATIN BOW. PERFECT FOR SPECIAL OCCASIONS, KEEPING HER COMFORTABLE AND STYLISH.",
  },
  {
    id: 6,
    img: Prod2,
    title: "Baby Suspender Outfit",
    description:
      "BABY SUSPENDER OUTFIT FOR INFANTS AGED FROM 6 MONTHS TO 18 MONTHS.SOFT COTTON BLEND DENIM-LOOK PANTS WITH BUTTON DOWN SUSPENDERS, PAIRED WITH A WHITE COTTON T-SHIRT.",
  },
];
const BestSelling = () => {

  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/payment');
  };

  return (
    <div>
      <div className="container mb-10 flex flex-col items-center">
        {/* Header Section  */}
        <div className="text-center mt-10 mb-24">
          <p data-aos="fade-up" className="text-sm text-set2">
           Demanded Choice's
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-black dark:text-white">
            Best Selling
          </h1>
          
        </div>
        {/* Body Section  */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
              gap-20 md:gap-5 mt-10 place-items-center"
              >
             {ProductsData.map((product) => (
             <div
             key={product.id}
              // data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800
             hover:bg-black/80 dark:hover:bg-gradient-to-r from-set1 to-set2
             hover:text-white relative shadow-xl duration-300 group max-w-[300px] mb-20"
             >
              {/* Image Section  */}
              <div className="h-[120px]">
                <img
                  src={product.img}
                  alt=""
                  className="max-w-[170px] block mx-auto 
                transform -translate-y-20 group-hover:scale-105 duration-300 
                drop-shadow-md"
                />
              </div>
              {/* Details Section  */}
              <div className="p-4 text-center">
                {/* Star Rating  */}

                <div
                  className="w-full flex gap-1 items-center
                 justify-center"
                >
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold dark:text-white">{product.title}</h1>
                <p
                  className="text-gray-500 group-hover:text-white
                  duration-300 text-sm line-clamp-2"
                >
                  {product.description}
                </p>
                <button
                className="bg-gradient-to-r from-set1/90 to-set2/90
                hover:bg-gradient-to-r hover:from-set2 hover:to-set1  
                hover:scale-105 duration-300 font-semibold text-white py-1 px-4
                rounded-full mt-4 group-hover:bg-white
                group-hover:text-white dark:hover:bg-white"
                onClick={() => handleOrderNow()}
                >Order Now</button>
              </div>
            </div>
           ))}
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default BestSelling

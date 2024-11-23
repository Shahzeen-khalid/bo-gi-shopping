import React from "react";
import Banner from "../../assets/footer/footerOg.jpg";
import FooterLogo from "../../assets/footer/footer1.png";
import { NavLink } from "react-router";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
  position: "relative",
};

const gradientOverlay = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
};

const FooterLinks = [
  { id: 1,
    name: "Home", 
    link: "/" 
  },
  { id: 2, 
    name: "About Us", 
    link: "/aboutus" 
  },
  { id: 3, 
    name: "Contact Us", 
    link: "/contactus" 
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white relative">
      <div style={gradientOverlay}></div>
      <div className="container relative z-10 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Company Details */}
          <div className="flex flex-col items-start">
            <img src={FooterLogo} alt="Logo" className="max-w-[100px] mb-4" />
            <h1 className="text-2xl font-bold">BO & GI Shopping</h1>
            <p className="mt-2 text-gray-300">Your one-stop shop for all your needs!</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-10 mt-6 md:mt-0">
            <div>
              <h2 className="text-lg font-bold mb-4">Quick Links</h2>
              <ul className="flex flex-col gap-2">
                {FooterLinks.map((link) => (
                <li key={link.id} className="relative group">
                <NavLink
                  to={link.link}
                  className="relative z-10 hover:font-bold duration-300"
                >
                  {link.name}
                </NavLink>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-fuchsia-300 transition-all duration-300 group-hover:w-full"></span>
              </li>
              
                ))}
              </ul>
            </div>

            {/* Contact & Social Media */}
            <div>
              <h2 className="text-lg font-bold mb-4">Get in Touch</h2>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaLocationArrow />
                  <p>Calicut, Kerala</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaMobileAlt />
                  <p>9876543210</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a href="#" className="hover:text-fuchsia-300">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="hover:text-fuchsia-300">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="#" className="hover:text-fuchsia-300">
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 text-white/70 font-inter">
          © 2024 BO & GI Shopping. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

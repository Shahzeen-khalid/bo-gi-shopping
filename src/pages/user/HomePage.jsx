import React from 'react'
import Hero from "../../components/user/Hero";
import Products from "../../components/user/Products";
import TopProd from "../../pages/user/TopProd";
import Banner from "../../components/user/Banner";
import Subscribe from "../../components/user/Subscribe";
import Testimonials from "../../components/user/Testimonials";
import Footer from "../../components/user/Footer";

const HomePage = () => {

  
  return (
    <>
    <Hero />
    <Products />
    <TopProd />
    <Banner />
    <Subscribe />
    <Testimonials />
    <Footer />
  </>
  )
}

export default HomePage

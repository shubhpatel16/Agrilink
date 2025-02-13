import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image1 from "../../../Assests/images/image4.jpg";
import image2 from "../../../Assests/images/image3.jpg";
import image3 from "../../../Assests/images/image5.jpg";

const slides = [
  {
    image: image1,
    title: "Buy & Sell Fresh Agriculture Products",
    text: "Discover a wide range of fresh fruits, vegetables, grains, and organic produce directly from trusted farmers. Our platform connects buyers and sellers, ensuring fair pricing, fresh stock, and high-quality agricultural goods delivered straight to your doorstep.",
  },
  {
    image: image2,
    title: "High-Quality Seeds, Fertilizers & Tools",
    text: "Boost your farm productivity with premium-quality seeds, organic and chemical fertilizers, and the latest farming tools. Whether you're a small farmer or a large-scale agricultural business, find everything you need to cultivate healthy and high-yield crops.",
  },
  {
    image: image3,
    title: "Empowering Farmers & Growing Businesses",
    text: "Join a thriving online marketplace where farmers, suppliers, and businesses come together to trade efficiently. Sell your farm produce, buy essential farming equipment, and access the best deals on agricultural inputs – all in one place!",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 1500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[80vh] 800px:min-h-[100vh] w-full bg-no-repeat overflow-hidden flex items-center justify-center">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          fade ? "opacity-100" : "opacity-75"
        }`}
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div
        className={`relative z-9 flex flex-col justify-center items-center h-full text-center px-4 ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } transition-all duration-1000 ease-in-out`}
      >
        <div className="w-[90%] 800px:w-[60%] max-w-[1200px]">
          <h1 className="text-[40px] leading-[1.2] 800px:text-[90px] text-white font-[700] capitalize">
            {slides[currentSlide].title}
          </h1>
          <p className="pt-8 text-[18px] 800px:text-[24px] font-[Poppins] font-[400] text-white leading-relaxed  max-w-[900px] mx-auto">
            {slides[currentSlide].text}
          </p>
          <Link to="/products" className="inline-block mt-6">
            <div className="bg-[#58942c] px-8 py-4 rounded-md shadow-lg hover:bg-[#4a7b24] transition">
              <span className="text-white font-[Poppins] text-[20px]">
                Shop Now
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

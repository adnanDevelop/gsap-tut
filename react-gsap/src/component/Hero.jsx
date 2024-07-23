import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="mt-[55px] w-full  h-screen flex items-center justify-center bg-[url('/image/map.png')] bg-cover bg-center bg-fixed  relative z-[1]">
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000078] z-[-1]" />
      <div className="max-w-[900px] mx-auto flex flex-col items-center justify-center">
        <p className="py-[10px] px-[20px] rounded-full flex items-center gap-2 leading-none font-semibold bg-[#28281e] text-[#e9cb5a] ">
          New Around v2.0 <FaArrowRight />
        </p>
        <h1 className="text-[60px] text-center leading-[60px] mt-3 font-semibold text-white  uppercase italic">
          Powerful AI models to serve your business needs
        </h1>
        <p className="mt-3 text-center text-white max-w-[600px] mx-auto">
          Our robust platform is designed to handle large volumes of data and
          processing power, making it perfect for businesses of all sizes.
        </p>
      </div>
    </div>
  );
};

export default Hero;

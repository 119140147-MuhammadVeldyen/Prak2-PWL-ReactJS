import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
  
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#ffff]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#0a192f]">
          Muhammad Veldyen
        </h1>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a random people and super human
        </p>
      </div>
    </div>
  );
};

export default Home;

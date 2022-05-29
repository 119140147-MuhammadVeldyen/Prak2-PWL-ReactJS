import React from "react";

import turu from "../assets/zzz.jpg";
import aaa from "../assets/aaa.jpg";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">Skills that I Master</p>
        </div>
    
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#ffff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={turu} alt="turu icon" />
            <p className="my-4">TURU</p>
          </div>
          <div className="shadow-md shadow-[#ffff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={turu} alt="turu icon" />
            <p className="my-4">TURU</p>
          </div>
          <div className="shadow-md shadow-[#ffff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={turu} alt="turu icon" />
            <p className="my-4">TURU</p>
          </div>
          <div className="shadow-md shadow-[#ffff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={turu} alt="turu icon" />
            <p className="my-4">TURU</p>
          </div>
          <div className="shadow-md shadow-[#ffff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={aaa} alt="aaa icon" />
            <p className="my-4">AAAAAAAAAA</p>
          </div>
          <div className="shadow-md shadow-[#ffff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={aaa} alt="aaa icon" />
            <p className="my-4">AAAAAAAAAA</p>
          </div>
          <div className="shadow-md shadow-[#ffff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={aaa} alt="aaa icon" />
            <p className="my-4">AAAAAAAAAA</p>
          </div>
          <div className="shadow-md shadow-[#ffff] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={aaa} alt="aaa icon" />
            <p className="my-4">AAAAAAAAAA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import dog from "../image/dog.png";
import OptionBar from "../sub_assets/OptionBar";

function HeroImage() {
  return (
    <div className="mt-16 flex justify-between bg-white min-h-[400px] gap-8">
      <div className="m-11">
        <h1 className="text-[33px] font-bold md:text-[40px] uppercase">
          Welcome To
        </h1>
        <h1 className="text-[33px] font-bold md:text-[40px] uppercase">
          Our Pet Shop
        </h1>

        <p className="mt-5 text-balance">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as
        </p>
        <div className="mt-5 text-[20px] text-white hover:bg-orange-600 bg-orange-500 w-[200px] h-[50px] flex items-center justify-center rounded-full">
          Get Started
        </div>
      </div>
      <div className="w-[60%] hidden md:flex gap relative">
        <img
          src={dog}
          alt="image"
          className="h-[430px] w-auto items-center z-10 mt-3"
        />
        <div className="w-[100%]  bg-[#ff7e61] absolute h-[200px] top-[250px] right-8 rounded-tl-3xl rounded-tr-3xl "></div>
      </div>
      <div className="ml-11 mr-48 md:w-[94.25%] bg-[#ff7e61] h-28 absolute top-[470px] rounded-lg md:flex items-center justify-center hidden">
        <OptionBar />
      </div>
      <div className="w-full bg-[#ff7e61] h-4 absolute top-[400px] flex items-center justify-center md:hidden"></div>
    </div>
  );
}
export default HeroImage;

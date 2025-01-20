import React from "react";
import ImageCard from "../sub_assets/ImageCard";

function Services() {
  return (
    <div className="md:mt-28 mx-11">
      <p className="text-[20px] font-normal text-orange-500 uppercase">
        Our Services
      </p>
      <p class="text-3xl font-bold mt-4">
        <span class="block">Products and Services</span>
        <span class="block mt-4">loved by people and pets</span>
      </p>
      <ImageCard/>
    </div>
    
  );
}

export default Services;

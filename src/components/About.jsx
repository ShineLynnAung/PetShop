import React from "react";
import AboutCard from "../sub_assets/AboutCard";

function About() {
  return (
    <>
    <div className="w-full mt-8 mb-5 flex flex-col items-center">
      <p className="text-orange-500 text-center text-xl">Why Choose Us</p>
      <h1 className="font-bold text-3xl text-center mt-7">
        Why You Should Choose Pet
      </h1>
      <div className="w-2/3 mt-3">
        <p className=" text-center text-lg p-4 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          consequuntur id aspernatur porro, itaque dicta provident aut, a
          dolorem accusamus error? Magnam incidunt fugit soluta ratione dolorem,
          dolorum minus error, distinctio mollitia quas fugiat ut adipisci porro
          sint! Voluptatem quam laboriosam eius illum quos eum natus aliquam
          aliquid aperiam veritatis.
        </p>
      </div>
    </div>
    <div className="mx-8">
        <AboutCard />
    </div>
    </>
  );
}

export default About;

import React, { useState } from "react";
import { CgDetailsMore } from "react-icons/cg";

const menu = [
  {
    name: "Home",
    Link: "/",
  },
  {
    name: "About",
    Link: "",
  },
  {
    name: "Gallery",
    Link: "",
  },
  {
    name: "Pricing",
    Link: "",
  },
  {
    name: "Blog",
    Link: "",
  },
  {
    name: "Contact",
    Link: "",
  },
];

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between  fixed bg-gray-200 top-0 left-0 w-full h-20 z-50">
      <div className="flex gap-11 items-center mx-11">
        <div className="text-[24px] md:text-[32px] font-bold text-orange-600">Pet</div>
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <div
              key={item.name}
              className="text-[20px] cursor-pointer hover:underline underline-offset-8"
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden relative">
        <div
          className="text-[20px] font-bold cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <CgDetailsMore className="font-bold text-[32px]"/>
        </div>
        {toggle && (
          <div className="absolute right-0 mt-3 bg-[#121212] text-white border-[1px] border-gray-700 p-5 rounded-lg shadow-lg z-50">
            {menu.map((item) => (
              <div
                key={item.name}
                className="text-[20px] cursor-pointer hover:underline underline-offset-8 my-2"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

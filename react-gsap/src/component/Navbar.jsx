import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <div className="relative w-full">
      <div className="fixed top-0 left-0 w-full flex items-center justify-between px-[60px] py-[15px] bg-[#12151a] border-b border-b-[#448c74] z-10">
        <div className="flex items-center gap-3">
          <svg
            width="35"
            height="32"
            viewBox="0 0 36 33"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#448c74"
              d="M35.6,29c-1.1,3.4-5.4,4.4-7.9,1.9c-2.3-2.2-6.1-3.7-9.4-3.7c-3.1,0-7.5,1.8-10,4.1c-2.2,2-5.8,1.5-7.3-1.1c-1-1.8-1.2-4.1,0-6.2l0.6-1.1l0,0c0.6-0.7,4.4-5.2,12.5-5.7c0.5,1.8,2,3.1,3.9,3.1c2.2,0,4.1-1.9,4.1-4.2s-1.8-4.2-4.1-4.2c-2,0-3.6,1.4-4,3.3H7.7c-0.8,0-1.3-0.9-0.9-1.6l5.6-9.8c2.5-4.5,8.8-4.5,11.3,0L35.1,24C36,25.7,36.1,27.5,35.6,29z"
            ></path>
          </svg>
          <h3 className="text-lg font-medium text-white">Around</h3>
        </div>

        {/* Button section */}
        <div className="lg w-[45px] h-[40px] border border-[#448c74] rounded-md flex items-center justify-center">
          <button
            type="button"
            className="hamburger flex flex-col md:gap-y-[7px] gap-y-[6px]"
            onClick={() => setOpenHamburger(!openHamburger)}
          >
            <span
              className={`md:w-[30px] w-[25px] h-[1.5px]  bg-white rounded-full transform transition duration-500 ease-in-out ${
                openHamburger
                  ? "rotate-45 md:translate-y-[0.5rem] translate-y-[0.5rem] bg-[#448c74]"
                  : ""
              }`}
            ></span>
            <span
              className={`md:w-[20px] ms-auto w-[25px] h-[1.5px]  bg-white rounded-full transform transition duration-500 ease-in-out ${
                openHamburger ? " opacity-0" : ""
              }`}
            ></span>
            <span
              className={`md:w-[30px] w-[25px] h-[1.5px]  bg-white rounded-full transform transition duration-500 ease-in-out ${
                openHamburger
                  ? " -rotate-45 md:translate-y-[-.5rem] translate-y-[-.45rem] bg-[#448c74]"
                  : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col items-center justify-center gap-y-6 fixed top-0 right-[-280px] w-[280px] h-full bg-[#448c74] rounded-tl-[50px]">
          {/* Close icon */}
          <button className="close_icon w-[40px] h-[40px] rounded-lg border border-[#12151a] flex items-center justify-center absolute top-4 right-4">
            <IoClose size={20} />
          </button>

          <a href="#" className="text-2xl font-medium text-white uppercase">
            Home
          </a>
          <a href="#" className="text-2xl font-medium text-white uppercase">
            About
          </a>
          <a href="#" className="text-2xl font-medium text-white uppercase">
            Service
          </a>
          <a href="#" className="text-2xl font-medium text-white uppercase">
            Portfolio
          </a>
          <a href="#" className="text-2xl font-medium text-white uppercase">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

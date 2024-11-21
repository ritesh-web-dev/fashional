import React, { useState } from "react";

// framer motion
import { animate, motion } from "framer-motion";

// importing icons from react-icons library
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Button from "../components/Button";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHumbergerCross, setIsHumbergerCross] = useState(false);

  const handleMenuClick = () => {
    setIsNavOpen((prevNav) => !prevNav);
    setIsHumbergerCross((prevIcon) => !prevIcon);
  };

  return (
    <header className="flex items-center justify-between overflow-hidden">
    
      <div className="flex items-center justify-betwwen w-full bg-white fixed top-0 left-0 px-5 h-16 z-10 bg-black/0 backdrop-blur-sm ">
        <img
          src="/logos/fashional-logo.png"
          alt="Logo"
          className="h-8 w-auto cursor-pointer md:h-10"
        />
        {/* menu icon */}
        <motion.button onClick={handleMenuClick} className="absolute right-6">
          {isHumbergerCross ? (
            <RxCross2 className="hidden cursor-pointer size-6 max-md:block" />
          ) : (
            <FaBarsStaggered className="hidden cursor-pointer size-6 max-md:block" />
          )}
        </motion.button>
      </div>
      {/* **************************** */}
      <nav className="z-20 flex justify-center items-center md:fixed top-5 right-5">
        <motion.ul 
          className={`${
            isNavOpen
              ? "bg-yellow overflow-hidden w-full h-full items-center flex max-md:flex-col max-md:space-y-10 max-md:absolute max-md:inset-0 max-md:pt-[30%] z-10 max-md:mt-16" 
              : "flex gap-10 items-center max-md:hidden"
          }`}
        >
          <li>
            <a
              href="#catalogue"
              className="max-md:text-2xl text-lg transition-colors duration-500 text-black hover:text-hover max-md:hover:text-hover-white"
            >
              CATALOGUE
            </a>
          </li>
          <li>
            <a
              href="#fashion"
              className="max-md:text-2xl text-lg transition-colors duration-500 text-black hover:text-hover max-md:hover:text-hover-white"
            >
              FASHION
            </a>
          </li>
          <li>
            <a
              href="#favourite"
              className="max-md:text-2xl text-lg transition-colors duration-500 text-black hover:text-hover max-md:hover:text-hover-white"
            >
              FAVOURITE
            </a>
          </li>
          <li>
            <a
              href="#lifestyle"
              className="max-md:text-2xl text-lg transition-colors duration-500 text-black hover:text-hover max-md:hover:text-hover-white"
            >
              LIFESTYLE
            </a>
          </li>
          <li>
            {/* button component  */}
            <Button>SIGN UP</Button>
          </li>
        </motion.ul>
      </nav>
      
    </header>
  );
};

export default Header;

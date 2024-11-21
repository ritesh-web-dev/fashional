import React from "react";

// framer motion
import { motion } from "framer-motion";

const Button = ({ onClick, href, children, className }) => {
  return href ? (
    <>
      <motion.a
        href={href}
        className={`w-20 h-9 bg-black text-white hover:bg-white hover:text-black transition-colors duration-500 text-sm rounded-md shadow-md ${className}`}
      >
        {children}
      </motion.a>
    </>
  ) : (
    <>
      <motion.button
        onClick={onClick}
        className={`w-20 h-9 bg-black text-white hover:bg-white hover:text-black transition-colors duration-500 text-sm rounded-md shadow-md ${className}`}
      >
        {children}
      </motion.button>
    </>
  );
};

export default Button;

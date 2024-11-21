import React from "react";
import { motion } from "framer-motion";

const Partners = () => {
  const logos = [
    { src: "/logos/h&m.png", alt: "h&m" },
    { src: "/logos/obey.png", alt: "obey" },
    { src: "/logos/shopify.png", alt: "shopify" },
    { src: "/logos/lacoste.png", alt: "lacoste" },
    { src: "/logos/levis.png", alt: "levis" },
    { src: "/logos/amazon.png", alt: "amazon" },
  ];

  return (
    <section className="w-[100vw] overflow-hidden">
      <div className="relative flex w-[200%] bg-yellow h-[80px]">
        <motion.div
          className="flex gap-16 p-5"
          animate={{ x: "-100%" }}
          transition={{
            duration:50, // Adjust for desired speed
            ease: "linear",
            repeat: Infinity, // Infinite loop
          }}
        >
          {/* Duplicate the logos to create a seamless scrolling effect */}
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="min-w-[7rem] flex items-center">
              <img className="w-full" src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;

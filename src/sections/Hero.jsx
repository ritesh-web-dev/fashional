import React from "react";
import Button from "../components/Button";
import Star from "../components/Star";

const Hero = () => {
  return (
    <main className="p-16 mt-10">
      <div className="w-full md:h-[80vh] max-md:h-[90vh] max-md:flex-col max-md:items-center bg-[#F4F6F5] rounded-lg md:flex px-5 pt-5 relative max-sm:px-1">
          
          {/* stars starts here  */} 
            <Star className="absolute  top-10 right-10" />
            <Star className="absolute  top-10 left-[36rem] max-md:hidden" />
            <Star className="absolute  top-[32rem] left-[39rem] max-md:hidden" />
            <Star className="absolute  top-[30rem] right-10" />
          {/* stars ends here  */}

          <div className="pl-10 flex flex-col space-y-8 w-[50%] mt-5 h-full">
          <h1 className="text-8xl font-semibold w-60 space-y-5 max-sm:text-7xl"> <span className="bg-[url('/Rectangle-w.png')] bg-center bg-cover bg-no-repeat ">LET'S</span> <span>EXPLORE</span> <span className=" bg-[url('/Rectangle-y.png')] bg-center bg-cover bg-no-repeat">UNIQUE</span> <span>CLOTHES</span> </h1>
          <p>Live for Influential and Innovative fashion!</p>
            <Button className={`w-32 h-12`}>Shop Now</Button>
          </div>
          <div className="w-[50%] overflow-hidden h-full max-md:w-[40%] max-md:hidden">
            <img src="/hero-girl.png" alt="girl-img" className="w-full" />
          </div>
      </div>
    </main>
  );
};

export default Hero;

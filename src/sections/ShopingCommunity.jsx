import React from "react";
import Button from "../components/Button";

const ShopingCommunity = () => {
  return (
    <div className="bg-yellow flex items-center flex-col w-full h-[45vh] max-sm:h-[60vh] max-sm:pt-16 pl-5 gap-10 md:pt-10 md:h-[50vh]">
      <div className="space-y-5 px-5 md:space-y-10">
        <h1 className="text-white font-bold text-center px-4 max-sm:text-3xl max-md:text-4xl max-md:px-20 max-md:mt-10 md:text-6xl">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h1>

        <p className=" text-center text-white tracking-wide text-sm max-md:text-lg max-md:pl-10 md:text-xl">
          Type your email down below and be young wild generation !
        </p>
      </div>

      <div className="email-input flex items-center relative max-md:mr-10 max-sm:-mr-3">
        <input
          type="email"
          required
          placeholder="Add your email here"
          className="self-start w-96 h-12 px-5 rounded-md border-none outline-none focus:outline-none text-gray-500"
        />
        <Button className="absolute right-2">SEND</Button>
      </div>
    </div>
  );
};

export default ShopingCommunity;

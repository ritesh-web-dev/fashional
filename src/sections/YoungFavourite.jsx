import React from "react";
import { BsArrowRight } from "react-icons/bs";

const YoungFavourite = () => {
  const cards = [
    {
      img: "/newArrivalsImg/pinkGirl.png",
      title: "Trending on Instagram",
      dis: "Explore Now!",
    },
    {
      img: "/newArrivalsImg/beigeGirl.png",
      title: "All Under $40",
      dis: "Explore Now!",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center mt-32 gap-10 px-4 md:px-16">
      {/* Heading */}
      <h1 className="text-4xl self-start ml-4 font-bold">
        Young's{" "}
        <span className="bg-[url('/vectorYellow.png')] bg-no-repeat bg-right-bottom bg-[length:100px_20px] px-2">
          Favourite
        </span>
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 mt-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col items-start transition-transform duration-300"
          >
            {/* Card Image */}
            <div className="w-full cursor-pointer">
              <img
                src={card.img}
                alt={card.title}
                className="w-full group-hover:-translate-y-3 transition-transform duration-500"
              />
            </div>

            {/* Card Details */}
            <div className="flex items-center justify-between w-full mt-5">
              <div>
                <h2 className="text-lg font-semibold tracking-normal">
                  {card.title}
                </h2>
                <p className="text-black/60 tracking-normal cursor-pointer">
                  {card.dis}
                </p>
              </div>
              <BsArrowRight className="cursor-pointer group-hover:translate-x-3 transition-transform duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YoungFavourite;

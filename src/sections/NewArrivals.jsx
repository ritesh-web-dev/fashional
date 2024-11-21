import React from "react";

// icon
import { BsArrowRight } from "react-icons/bs";

const NewArrivals = () => {
  const cards = [
    {
      img: "/newArrivalsImg/img1.png",
      title: "Hoodies & Sweatshirts",
      dis: "Explore Now!",
    },
    {
      img: "/newArrivalsImg/img2.png",
      title: "Coats & Parkas",
      dis: "Explore Now!",
    },
    {
      img: "/newArrivalsImg/img3.png",
      title: "Tees & T-Shirts",
      dis: "Explore Now!",
    },
  ];

  return (
    <section className="w-full flex flex-col justify-center mt-10 gap-10 px-4 md:px-8">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl self-start ml-4 md:ml-8 font-bold">
        New{" "}
        <span className="bg-[url('/vectorYellow.png')] bg-no-repeat bg-right-bottom bg-[length:100px_20px] px-2">
          Arrivals
        </span>
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {cards.map((card, index) => (
          <div key={index} className="group">
            {/* Card Image */}
            <div className="cursor-pointer w-full">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-auto group-hover:-translate-y-3 transition-transform duration-500"
              />
            </div>
            {/* Card Details */}
            <div className="flex items-center justify-between mt-5">
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

export default NewArrivals;

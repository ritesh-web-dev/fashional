import React from "react";

const Star = ({ className }) => {
  return (
    <div className={`w-12 ${className}`}>
      <img src="/star.png" alt="star" className="w-full" />
    </div>
  );
};

export default Star;

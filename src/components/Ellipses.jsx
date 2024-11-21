import React from 'react'

const Ellipses = ({className}) => {
  return (
    <div className={`relative ${className}`}>
    {/* Concentric Rings */}
    <div className="absolute flex items-center justify-center w-96 h-96 bg-transparent rounded-full border-2 border-gray-300 top-28 -z-10 left-6">
      <div className="w-80 h-80 bg-transparent rounded-full border-2 border-gray-300 flex items-center justify-center">
        <div className="w-64 h-64 bg-transparent rounded-full border-2 border-gray-300"></div>
      </div>
    </div>
  </div>
  )
}

export default Ellipses

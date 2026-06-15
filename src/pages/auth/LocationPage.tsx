// import React from 'react'

// function LocationPage() {
//   return (
//     <div>
//       Loaction page
//     </div>
//   )
// }

// export default LocationPage





import React, { useState } from "react";
import locationImage from "../../assets/locationImg.png"

const zones = [
  "Banasree",
  "Gulshan",
  "Dhanmondi",
  "Mirpur",
];

const areas = [
  "Block A",
  "Block B",
  "Block C",
  "Block D",
];

export default function LocationPage() {
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("");

  return (
    <div className="h-screen max-w-[390px] mx-auto bg-[#C4C4C4]   bg-[#FEFEFE8C]
    backdrop-blur-[90px]
    rounded-3xl flex flex-col">
      {/* Content */}
      <div className="flex-1 px-6 pt-4">
        {/* Back Button */}
        <button className="w-8 h-8 flex items-center justify-center">
          ←
        </button>

        {/* Image */}
        <div className="flex justify-center mt-8">
         <img
  src={locationImage}
  alt="location"
  className="w-[180px] h-auto"
/>
        </div>

        {/* Title */}
        <h1 className="text-center mt-8 text-[20px] font-semibold text-[#1c1c1e]">
          Select Your Location
        </h1>

        {/* Description */}
        <p className="text-center text-[#8e8e93] text-[15px] leading-6 mt-3 px-4">
          Switch on your location to stay in tune
          with what's happening in your area
        </p>

        {/* Form */}
        <div className="mt-20">
          {/* Zone */}
          <div>
            <p className="text-[14px] text-[#7b7b7b] mb-3">
              Your Zone
            </p>

            <div className="border-b border-[#e5e5e5] pb-4 flex items-center justify-between">
              <select
                value={zone}
                onChange={(e) =>
                  setZone(e.target.value)
                }
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[18px]
                  text-[#1c1c1e]
                  appearance-none
                  cursor-pointer
                "
              >
                {zones.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <span className="text-xl text-gray-500">
                ˅
              </span>
            </div>
          </div>

          {/* Area */}
          <div className="mt-8">
            <p className="text-[14px] text-[#7b7b7b] mb-3">
              Your Area
            </p>

            <div className="border-b border-[#e5e5e5] pb-4 flex items-center justify-between">
              <select
                value={area}
                onChange={(e) =>
                  setArea(e.target.value)
                }
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[18px]
                  text-[#b0b0b0]
                  appearance-none
                  cursor-pointer
                "
              >
                <option value="">
                  Types of your area
                </option>

                {areas.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

              <span className="text-xl text-gray-500">
                ˅
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="px-4 pb-12">
        <button
          className="
            w-full
            h-[54px]
            rounded-[18px]
            bg-[#53B676]
            text-white
            font-medium
            text-[18px]
          "
        >
          Submit
        </button>
      </div>
    </div>
  );
}
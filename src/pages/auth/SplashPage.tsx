// import React from 'react'

// function SplashPage() {
//   return (
//     <div>
//       splash screen
//     </div>
//   )
// }

// export default SplashPage

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import carrotIcon from "../../assets/carrotIcon.svg";

function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(()=>{
      navigate("/onboarding");
    },2000);
  }, []);

  return (
    <div
      className="
      h-screen
      bg-green-500
      flex
      gap-1
      justify-center
      items-center
    "
    >
      <img src={carrotIcon} className="w-14 h-10"></img>
      <div
        className="
      flex
      flex-col
      justify-center
      items-start
    
    "
      >
        <h1 className="text-white font-gilroy font-bold text-base  text-center">
          nectar
        </h1>

        <p className="text-white 400 font-gilroy font-normal text-sm  text-center">
          online groceriet
        </p>
      </div>
    </div>
  );
}

export default SplashPage;

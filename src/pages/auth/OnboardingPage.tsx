// // // // import React from 'react'

// // // // function OnboardingPage() {
// // // //   return (
// // // //     <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-cover bg-center"
// // // //         style={{ 
// // // //             backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.85)), url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80')" 
// // // //         }}
// // // //     >
// // // //        <div className="z-10 text-center text-white mb-6 space-y-4">
// // // //               {/* <NectarLogo size="lg" light={true} withText={false} /> */}
// // // //               <h1 className="font-display text-4xl font-bold tracking-tight mt-2 px-4 leading-tight">
// // // //                 Welcome<br />to our store
// // // //               </h1>
// // // //               <p className="font-sans text-sm text-gray-200/90 font-light mt-1 px-4 leading-relaxed">
// // // //                 Get your groceries in as fast as one hour
// // // //               </p>
// // // //             </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default OnboardingPage




// // // // import peopleImg from "../../assets/peopleImg.svg"

// // // // function OnboardingPage() {
// // // //   return (
// // // //     <div className="relative h-screen">
// // // //       <img
// // // //         src={peopleImg}
// // // //         alt=""
// // // //         className="absolute inset-0 h-full w-full object-contain"
// // // //       />

// // // //       <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/85" />

// // // //         <div className="relative z-10 flex h-full flex-col justify-end p-6">
// // // //           Content
// // // //         </div>
// // // //     </div>
// // // //   );
// // // // }



// // // //  export default OnboardingPage




// // // import peopleImg from "../../assets/peopleImg.svg";
// // // // import { Carrot } from "lucide-react";
// // // import carrotIcon from "../../assets/carrotIcon.svg";

// // // function OnboardingPage() {
// // //   return (
// // //     <div className="relative min-h-screen w-full overflow-hidden">
// // //       {/* Background Image */}
// // //       <img
// // //         src={peopleImg}
// // //         alt="onboarding"
// // //         className="absolute inset-0 h-full w-full object-cover"
// // //       />

// // //       {/* Dark Gradient Overlay */}
// // //       <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/85" />

// // //       {/* Content */}
// // //       <div className="relative z-10 flex min-h-screen flex-col justify-end items-center text-center px-6 pb-10 md:pb-16">
        
// // //         {/* Icon */}
// // //         <img src={carrotIcon} className="mb-4" />
          
          
       

// // //         {/* Heading */}
// // //         <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
// // //           Welcome
// // //           <br />
// // //           to our store
// // //         </h1>

// // //         {/* Description */}
// // //         <p className="mt-3 text-white/80 text-sm md:text-base max-w-sm">
// // //           Get your groceries in as fast as one hour
// // //         </p>

// // //         {/* Button */}
// // //         <button
// // //           className="
// // //             mt-8
// // //             w-full
// // //             max-w-sm
// // //             rounded-2xl
// // //             bg-green-500
// // //             py-4
// // //             text-white
// // //             font-semibold
// // //             text-base
// // //             transition
// // //             hover:bg-green-600
// // //           "
// // //         >
// // //           Get Started
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default OnboardingPage;








// // import peopleImg from "../../assets/peopleImg.svg";
// // import carrotIcon from "../../assets/carrotIcon.svg";

// // function OnboardingPage() {
// //   return (
// //     <div className="relative min-h-screen overflow-hidden">

// //       {/* Background */}
// //       <img
// //         src={peopleImg}
// //         alt="onboarding"
// //         className="
// //           absolute
// //           inset-0
// //           h-full
// //           w-full
// //           object-cover
// //         "
// //       />

// //       {/* Overlay */}
// //       <div
// //         className="
// //           absolute
// //           inset-0
// //           bg-gradient-to-b
// //           from-black/10
// //           via-black/30
// //           to-black/90
// //         "
// //       />

// //       {/* Content */}
// //       <div
// //         className="
// //           relative
// //           z-10
// //           min-h-screen

// //           flex
// //           flex-col
// //           justify-end
// //           items-center

// //           px-6
// //           pb-10

// //           lg:justify-center
// //           lg:items-start
// //           lg:max-w-7xl
// //           lg:mx-auto
// //           lg:px-16
// //         "
// //       >

// //         {/* Desktop Card */}
// //         <div
// //           className="
// //             lg:max-w-lg
// //             lg:bg-black/20
// //             lg:backdrop-blur-sm
// //             lg:p-10
// //             lg:rounded-3xl
// //           "
// //         >
// //           {/* Logo */}
// //           <img
// //             src={carrotIcon}
// //             alt="logo"
// //             className="
// //               mb-4
// //               w-12

// //               lg:w-16
// //             "
// //           />

// //           {/* Heading */}
// //           <h1
// //             className="
// //               text-white
// //               font-bold
// //               leading-tight

// //               text-4xl

// //               lg:text-6xl
// //             "
// //           >
// //             Welcome
// //             <br />
// //             to our store
// //           </h1>

// //           {/* Description */}
// //           <p
// //             className="
// //               mt-4
// //               text-white/80

// //               text-sm

// //               lg:text-lg
// //               lg:max-w-md
// //             "
// //           >
// //             Get your groceries in as fast as one hour
// //           </p>

// //           {/* Button */}
// //           <button
// //             className="
// //               mt-8

// //               w-full
// //               max-w-sm

// //               rounded-2xl

// //               bg-[#53B175]

// //               py-4

// //               text-white
// //               font-semibold

// //               transition-all
// //               duration-300

// //               hover:bg-[#429660]
// //               hover:scale-[1.02]

// //               lg:max-w-xs
// //             "
// //           >
// //             Get Started
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default OnboardingPage;












// import peopleImg from "../../assets/peopleImg.svg";
// import carrotIcon from "../../assets/carrotIcon.svg";

// function OnboardingPage() {
//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background */}
//       <img
//         src={peopleImg}
//         alt="onboarding"
//         className="absolute inset-0 h-full w-full object-cover"
//       />

//       {/* Overlay */}
//       <div
//         className="
//           absolute
//           inset-0
//           bg-gradient-to-b
//           from-black/10
//           via-black/30
//           to-black/90
//         "
//       />

//       {/* Content */}
//       <div
//         className="
//           relative
//           z-10
//           min-h-screen
//           flex
//           flex-col
//           justify-end
//           items-center
//           text-center
//           px-6
//           pb-10

//           md:pb-14
//           lg:pb-20
//         "
//       >
//         {/* Logo */}
//         <img
//           src={carrotIcon}
//           alt="logo"
//           className="
//             mb-5
//             w-10

//             md:w-12
//             lg:w-14
//           "
//         />

//         {/* Heading */}
//         <h1
//           className="
//             text-white
//             font-semibold

//             text-[38px]
//             leading-[44px]

//             md:text-[44px]
//             md:leading-[50px]

//             lg:text-[48px]
//             lg:leading-[54px]
//           "
//         >
//           Welcome
//           <br />
//           to our store
//         </h1>

//         {/* Description */}
//         <p
//           className="
//             mt-3
//             text-white/80

//             text-[14px]

//             md:text-[15px]

//             lg:text-[16px]
//             max-w-[320px]
//           "
//         >
//           Get your groceries in as fast as one hour
//         </p>

//         {/* Button */}
//         <button
//           className="
//             mt-8

//             h-[60px]
//             w-full
//             max-w-[340px]

//             rounded-[20px]

//             bg-[#53B175]

//             text-white
//             font-semibold

//             transition-all
//             duration-300

//             hover:bg-[#429660]
//           "
//         >
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// }

// export default OnboardingPage;










import peopleImg from "../../assets/peopleImg.svg";
import carrotIcon from "../../assets/carrotIcon.svg";

function OnboardingPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={peopleImg}
        alt="onboarding"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          flex-col
          items-center
          justify-end
          text-center
          px-6
          pb-10

          md:pb-14
          lg:pb-20
        "
      >
        {/* Logo */}
        <img
          src={carrotIcon}
          alt="Carrot Logo"
          className="
            mb-5
            w-10

            md:w-12
            lg:w-14
          "
        />

        {/* Heading */}
        <h1
          className="
            text-white
            font-semibold

            text-[32px]
            leading-[38px]

            sm:text-[36px]
            sm:leading-[42px]

            md:text-[42px]
            md:leading-[50px]

            lg:text-[48px]
            lg:leading-[56px]
          "
        >
          Welcome to our store
        </h1>

        {/* Description */}
        <p
          className="
            mt-3
            max-w-[320px]

            text-[14px]
            text-white/80

            md:max-w-[420px]
            md:text-[16px]
          "
        >
          Get your groceries in as fast as one hour
        </p>

        {/* Button */}
        <button
          className="
            mt-8
            h-[60px]
            w-full
            max-w-[340px]

            rounded-[20px]

            bg-[#53B175]

            text-base
            font-semibold
            text-white

            transition-all
            duration-300

            hover:bg-[#429660]
            hover:scale-[1.02]
          "
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default OnboardingPage;
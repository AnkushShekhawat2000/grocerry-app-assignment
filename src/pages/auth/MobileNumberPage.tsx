// // import React from 'react'

// // function MobileNumberPage() {
// //   return (
// //     <div>
// //       Mobile number Page
// //     </div>
// //   )
// // }

// // export default MobileNumberPage




// // import React from "react";
// // import keypadImg from "../../assets/keypadImg.png";

// // export default function EnterMobileNumber() {
// //   const [phone, setPhone] = React.useState("");

// //    return (
// //     <div
// //       className="
// //         min-h-screen
// //         bg-[#FCFCFC99]
// //         backdrop-blur-[90px]
// //         flex
// //         justify-center
// //       "
// //     >
// //       <div className="w-full max-w-md min-h-screen flex flex-col">

// //         {/* Content */}
// //         <div className="flex-1 px-6 pt-8">

// //           {/* Back Button */}
// //           <button
// //             className="
// //               mb-12
// //               flex
// //               h-10
// //               w-10
// //               items-center
// //               justify-center
// //               rounded-full
// //               transition
// //               hover:bg-white/60
// //             "
// //           >
// //             <span className="text-[26px] text-[#181725]">←</span>
// //           </button>

// //           {/* Heading */}
// //           <h1
// //             className="
// //               text-[28px]
// //               font-semibold
// //               leading-[34px]
// //               text-[#181725]
// //             "
// //           >
// //             Enter your mobile number
// //           </h1>

// //           {/* Label */}
// //           <label
// //             className="
// //               mt-10
// //               mb-3
// //               block
// //               text-sm
// //               font-medium
// //               text-[#7C7C7C]
// //             "
// //           >
// //             Mobile Number
// //           </label>

// //           {/* Input Container */}
// //           <div
// //             className="
// //               bg-white
// //               rounded-2xl
// //               px-4
// //               py-4
// //               shadow-sm
// //               border
// //               border-[#EAEAEA]
// //             "
// //           >
// //             <div className="flex items-center gap-3">
// //               <span className="text-2xl">🇧🇩</span>

// //               <span className="text-[18px] font-medium text-[#181725]">
// //                 +880
// //               </span>

// //               <input
// //                 type="tel"
// //                 value={phone}
// //                 onChange={(e) => setPhone(e.target.value)}
// //                 placeholder="1712345678"
// //                 className="
// //                   flex-1
// //                   bg-transparent
// //                   outline-none
// //                   text-[18px]
// //                   text-[#181725]
// //                   placeholder:text-[#B1B1B1]
// //                 "
// //               />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Bottom Action */}
// //         <div className="px-6 pb-10 flex justify-end">
// //           <button
// //             disabled={!phone}
// //             className={`
// //               h-16
// //               w-16
// //               rounded-full
// //               flex
// //               items-center
// //               justify-center
// //               text-white
// //               text-[28px]
// //               shadow-xl
// //               transition-all
// //               duration-300

// //               ${
// //                 phone
// //                   ? "bg-[#53B175] hover:scale-105 hover:bg-[#43A866]"
// //                   : "bg-[#D9D9D9] cursor-not-allowed"
// //               }
// //             `}
// //           >
// //             →
// //           </button>
// //         </div>

// //         <img src={keypadImg} alt="keypad" className="w-full"/>
// //       </div>
// //     </div>
// //   );

// // }




// import React, { useState } from "react";
// import keypadImg from "../../assets/keypadImg.png";
// // import bangladeshFlag from "../../assets/bd-flag.png";

// export default function EnterMobileNumber() {
//   const [phone, setPhone] = useState("");

//   return (
//     <div className="min-h-screen bg-white flex justify-center">
//       <div className="w-full max-w-md h-screen flex flex-col">

//         {/* Main Content */}
//         <div className="flex-1 px-6 pt-4">

//           {/* Back */}
//           <button className="mb-10">
//             <img
//               src="/back-icon.svg"
//               alt="back"
//               className="w-5 h-5"
//             />
//           </button>

//           {/* Heading */}
//           <h1 className="text-[28px] font-semibold text-[#181725] leading-[34px]">
//             Enter your mobile number
//           </h1>

//           {/* Label */}
//           <p className="mt-10 text-[14px] text-[#7C7C7C]">
//             Mobile Number
//           </p>

//           {/* Input Row */}
//           <div className="mt-3 border-b border-[#E2E2E2] pb-3 flex items-center gap-3">
//             <img
//               // src={bangladeshFlag}
//               alt="flag"
//               className="w-6 h-4 object-cover"
//             />

//             <span className="text-[18px] font-medium text-[#181725]">
//               +880
//             </span>

//             <input
//               type="tel"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="
//                 flex-1
//                 outline-none
//                 bg-transparent
//                 text-[18px]
//                 text-[#181725]
//               "
//             />
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="relative">

//           {/* Floating Arrow */}
//           <button
//             disabled={!phone}
//             className={`
//               absolute
//               right-6
//               -top-20
//               w-14
//               h-14
//               rounded-full
//               flex
//               items-center
//               justify-center
//               text-white
//               text-2xl
//               shadow-lg
//               ${
//                 phone
//                   ? "bg-[#53B175]"
//                   : "bg-gray-300"
//               }
//             `}
//           >
//             →
//           </button>

//           {/* Keypad Image */}
//           <img
//             src={keypadImg}
//             alt="keypad"
//             className="w-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useState } from "react";
// import keypadImg from "../../assets/keypadImg.png";

// export default function EnterMobileNumber() {
//   const [phone, setPhone] = useState("");

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background Gradient (blur visible karne ke liye) */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#F7F3F0] via-[#EEF7F8] to-[#F8EEEE]" />

//       {/* Glass Layer */}
//       <div
//         className="
//           relative
//           min-h-screen
//           bg-[#FCFCFC]/60
//           backdrop-blur-[90px]
//           flex
//           justify-center
//         "
//       >
//         <div className="w-full max-w-md min-h-screen flex flex-col">
//           {/* Content */}
//           <div className="flex-1 px-8 pt-14">
//             {/* Back Button */}
//             <button className="mb-12">
//               <svg
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M15 18L9 12L15 6"
//                   stroke="#181725"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>

//             {/* Title */}
//             <h1
//               className="
//                 text-[26px]
//                 font-semibold
//                 leading-[32px]
//                 text-[#181725]
//               "
//             >
//               Enter your mobile number
//             </h1>

//             {/* Label */}
//             <p
//               className="
//                 mt-10
//                 mb-2
//                 text-[14px]
//                 font-medium
//                 text-[#7C7C7C]
//               "
//             >
//               Mobile Number
//             </p>

//             {/* Input Line */}
//             <div className="border-b border-[#E2E2E2] pb-3">
//               <div className="flex items-center gap-3">
//                 {/* Bangladesh Flag */}
//                 <div className="w-6 h-4 overflow-hidden rounded-sm shadow-sm">
//                   <div className="relative w-full h-full bg-[#006A4E]">
//                     <div className="absolute w-2.5 h-2.5 bg-[#F42A41] rounded-full top-1/2 left-[42%] -translate-x-1/2 -translate-y-1/2" />
//                   </div>
//                 </div>

//                 <span className="text-[18px] text-[#181725] font-medium">
//                   +880
//                 </span>

//                 <input
//                   type="tel"
//                   value={phone}
//                   onChange={(e) =>
//                     setPhone(
//                       e.target.value.replace(/[^0-9]/g, "")
//                     )
//                   }
//                   className="
//                     flex-1
//                     outline-none
//                     bg-transparent
//                     text-[18px]
//                     text-[#181725]
//                   "
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="relative">
//             {/* Floating Arrow Button */}
//             <button
//               disabled={!phone}
//               className={`
//                 absolute
//                 right-6
//                 bottom-[170px]
//                 w-14
//                 h-14
//                 rounded-full
//                 flex
//                 items-center
//                 justify-center
//                 shadow-lg
//                 transition-all

//                 ${
//                   phone
//                     ? "bg-[#53B175] text-white"
//                     : "bg-gray-300 text-white cursor-not-allowed"
//                 }
//               `}
//             >
//               <svg
//                 width="22"
//                 height="22"
//                 viewBox="0 0 24 24"
//                 fill="none"
//               >
//                 <path
//                   d="M5 12H19"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//                 <path
//                   d="M12 5L19 12L12 19"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </button>

//             {/* Keypad Image */}
//             <img
//               src={keypadImg}
//               alt="keypad"
//               className="w-full block"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import keypadImg from "../../assets/keypadImg.png";

// export default function EnterMobileNumber() {
//   const [phone, setPhone] = useState("");

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Background Gradient */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(90deg, #F6F2EE 0%, #EDF6F7 50%, #F8EDED 100%)",
//         }}
//       />

//       {/* Glass Layer */}
//       <div
//         className="relative min-h-screen flex flex-col"
//         style={{
//           background: "rgba(252,252,252,0.6)",
//           backdropFilter: "blur(90px)",
//           WebkitBackdropFilter: "blur(90px)",
//         }}
//       >
//         {/* Content */}
//         <div className="flex-1 px-8 pt-12">
//           {/* Back Button */}
//           <button className="mb-10">
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M15 18L9 12L15 6"
//                 stroke="#181725"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           {/* Heading */}
//           <h1 className="text-[28px] font-semibold text-[#181725] leading-[34px]">
//             Enter your mobile number
//           </h1>

//           {/* Label */}
//           <p className="mt-10 text-[14px] text-[#7C7C7C]">
//             Mobile Number
//           </p>

//           {/* Input */}
//           <div className="mt-2 border-b border-[#E2E2E2] pb-3">
//             <div className="flex items-center gap-3">
//               {/* Bangladesh Flag */}
//               <div className="relative w-6 h-4 overflow-hidden rounded-sm">
//                 <div className="absolute inset-0 bg-[#006A4E]" />
//                 <div className="absolute w-2.5 h-2.5 bg-[#F42A41] rounded-full top-1/2 left-[42%] -translate-x-1/2 -translate-y-1/2" />
//               </div>

//               <span className="text-[18px] font-medium text-[#181725]">
//                 +880
//               </span>

//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) =>
//                   setPhone(
//                     e.target.value.replace(/[^0-9]/g, "")
//                   )
//                 }
//                 className="
//                   flex-1
//                   bg-transparent
//                   outline-none
//                   text-[18px]
//                   text-[#181725]
//                 "
//               />
//             </div>


//           </div>
//         </div>


        

//         {/* Bottom Area */}
//         <div className="relative">
//           {/* Next Button */}
//           <button
//             disabled={!phone}
//             className={`
//               absolute
//               right-6
//               bottom-[170px]
//               z-20
//               w-14
//               h-14
//               rounded-full
//               flex
//               items-center
//               justify-center
//               shadow-lg
//               transition-all

//               ${
//                 phone
//                   ? "bg-[#53B175] text-white"
//                   : "bg-gray-300 text-white cursor-not-allowed"
//               }
//             `}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M5 12H19"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//               <path
//                 d="M12 5L19 12L12 19"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </button>

//           {/* Keypad Image */}
//           <img
//             src={keypadImg}
//             alt="keypad"
//             className="w-full block"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import keypadImg from "../../assets/keypadImg.png";

// export default function EnterMobileNumber() {
//   const [phone, setPhone] = useState("");

//   return (
//     <div className="relative min-h-screen overflow-hidden">

//       {/* TOP GRADIENT */}
//       <div
//         className="absolute top-0 left-0 right-0 h-[220px] pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at top center, rgba(255,235,220,.35) 0%, rgba(220,245,255,.25) 45%, transparent 100%)",
//         }}
//       />

//       {/* BOTTOM GRADIENT */}
//       <div
//         className="absolute bottom-0 left-0 right-0 h-[280px] pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at bottom center, rgba(194,178,255,.30) 0%, rgba(180,235,255,.25) 40%, rgba(255,220,230,.22) 70%, transparent 100%)",
//         }}
//       />

//       {/* GLASS EFFECT */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background: "rgba(254,254,254,0.55)",
//           backdropFilter: "blur(90px)",
//           WebkitBackdropFilter: "blur(90px)",
//         }}
//       />

//       {/* MAIN UI */}
//       <div className="relative z-10 min-h-screen flex flex-col">

//         {/* Content */}
//         <div className="flex-1 px-8 pt-12">

//           {/* Back Button */}
//           <button className="mb-10">
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M15 18L9 12L15 6"
//                 stroke="#181725"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>

//           {/* Heading */}
//           <h1 className="text-[28px] font-semibold text-[#181725] leading-[34px]">
//             Enter your mobile number
//           </h1>

//           {/* Label */}
//           <p className="mt-10 text-[14px] text-[#7C7C7C]">
//             Mobile Number
//           </p>

//           {/* Input */}
//           <div className="mt-2 border-b border-[#E2E2E2] pb-3">
//             <div className="flex items-center gap-3">

//               {/* Bangladesh Flag */}
//               <div className="relative w-6 h-4 overflow-hidden rounded-sm">
//                 <div className="absolute inset-0 bg-[#006A4E]" />
//                 <div className="absolute w-2.5 h-2.5 bg-[#F42A41] rounded-full top-1/2 left-[42%] -translate-x-1/2 -translate-y-1/2" />
//               </div>

//               <span className="text-[18px] font-medium text-[#181725]">
//                 +880
//               </span>

//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) =>
//                   setPhone(e.target.value.replace(/[^0-9]/g, ""))
//                 }
//                 className="
//                   flex-1
//                   bg-transparent
//                   outline-none
//                   text-[18px]
//                   text-[#181725]
//                 "
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Area */}
//         <div className="relative">

//           {/* Next Button */}
//           <button
//             disabled={!phone}
//             className={`
//               absolute
//               right-6
//               bottom-[170px]
//               z-20
//               w-14
//               h-14
//               rounded-full
//               flex
//               items-center
//               justify-center
//               shadow-lg
//               transition-all

//               ${
//                 phone
//                   ? "bg-[#53B175] text-white"
//                   : "bg-gray-300 text-white cursor-not-allowed"
//               }
//             `}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//             >
//               <path
//                 d="M5 12H19"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//               <path
//                 d="M12 5L19 12L12 19"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </button>

//           {/* Keypad Image */}
//           <img
//             src={keypadImg}
//             alt="keypad"
//             className="w-full block"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }






// EnterMobileNumber




// import BackButton from "../components/BackButton.tsx";
// import NumericalKeyboard from "../components/NumericalKeyboard.tsx";

// interface Props {
//   phoneNumber: string;
//   setPhoneNumber: React.Dispatch<
//     React.SetStateAction<string>
//   >;
// }

// export default function MobileNumberPage({
//   phoneNumber,
//   setPhoneNumber,
// }: Props) {
//   return (
//     <div className="min-h-screen flex flex-col justify-between">
//       <div className="p-6">
//         <BackButton onClick={() => {}} />

//         <h2 className="mt-10 text-2xl font-bold">
//           Enter your mobile number
//         </h2>

//         <div className="mt-8 border-b-2 border-green-500">
//           {phoneNumber}
//         </div>
//       </div>

//       <NumericalKeyboard
//         onKeyPress={(value) => {
//           if (value === "backspace") {
//             setPhoneNumber((prev) =>
//               prev.slice(0, -1)
//             );
//           } else {
//             setPhoneNumber(
//               (prev) => prev + value
//             );
//           }
//         }}
//       />
//     </div>
//   );
// }




import { useState } from "react";
import KeyboardImage from "../../assets/keypadImg.png"

// export default function MobileNumberPage() {
//   const [phoneNumber, setPhoneNumber] = useState("");

//   return (
//     <div className="min-h-screen flex flex-col bg-[#f4f4f4]">
//       {/* Top Section */}
//       <div className="px-5 pt-4">
//         {/* Back Button */}
//         <button className="text-2xl">
//           ←
//         </button>

//         {/* Heading */}
//         <h1 className="mt-8 text-[28px] font-semibold text-[#222]">
//           Enter your mobile number
//         </h1>

//         {/* Input Section */}
//         <div className="mt-10">
//           <p className="text-xs text-gray-500 mb-2">
//             Mobile Number
//           </p>

//           <div className="flex items-center border-b border-gray-300 pb-3">
//             {/* Bangladesh Flag */}
//             <div className="relative w-5 h-4 bg-[#006A4E] rounded-sm overflow-hidden mr-2">
//               <div className="absolute w-2.5 h-2.5 bg-[#F42A41] rounded-full left-[6px] top-[3px]" />
//             </div>

//             <span className="text-base">
//               +880
//             </span>

//             <input
//               type="text"
//               value={phoneNumber}
//               onChange={(e) =>
//                 setPhoneNumber(e.target.value)
//               }
//               className="flex-1 ml-2 bg-transparent outline-none"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Middle Space */}
//       <div className="flex-1 relative">
//         {/* Next Button */}
//         <button
//           className="
//             absolute
//             right-6
//             bottom-8
//             w-14
//             h-14
//             rounded-full
//             bg-[#5AC17D]
//             flex
//             items-center
//             justify-center
//             text-white
//             text-3xl
//           "
//         >
//           ›
//         </button>
//       </div>

//       {/* Keyboard Image */}
//       <div>
//         <img
//           src={KeyboardImage}
//           alt="Keyboard"
//           className="w-full"
//         />
//       </div>
//     </div>
//   );
// }









export default function MobileNumberPage() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="px-4 pt-4">
        <button className="text-2xl text-black">
          ←
        </button>

        <h1 className="mt-8 text-[26px] font-semibold text-[#222]">
          Enter your mobile number
        </h1>

        <div className="mt-8">
          <p className="text-xs text-gray-500 mb-2">
            Mobile Number
          </p>

          <div className="flex items-center border-b border-gray-300 pb-3">
            {/* Bangladesh Flag */}
            <div className="relative w-5 h-4 bg-[#006A4E] rounded-sm overflow-hidden">
              <div className="absolute w-2.5 h-2.5 bg-[#F42A41] rounded-full left-[6px] top-[3px]" />
            </div>

            <span className="ml-2 text-[15px]">
              +880
            </span>

            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) =>
                setPhoneNumber(e.target.value)
              }
              className="ml-2 flex-1 outline-none bg-transparent text-[15px]"
            />
          </div>
        </div>
      </div>

      {/* Space */}
      <div className="flex-1 relative">
        <button
          className="
            absolute
            right-5
            bottom-6
            w-14
            h-14
            rounded-full
            bg-[#5AC17D]
            flex
            items-center
            justify-center
            text-white
            text-3xl
            shadow-md
          "
        >
          ›
        </button>
      </div>

      {/* Keyboard Image */}
      <div className="w-full">
        <img
          src={KeyboardImage}
          alt="Keyboard"
          className="w-full h-auto block"
        />
      </div>
    </div>
  );
}
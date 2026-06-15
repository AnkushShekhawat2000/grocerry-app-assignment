
import { useState } from "react";
import KeyboardImage from "../../assets/keypadImg.png"
import { useNavigate } from "react-router-dom";


export default function MobileNumberPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-white flex flex-col overflow-hidden">
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

      <div className="flex-1 relative">
        <button
           onClick={() => navigate("/verification")}
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
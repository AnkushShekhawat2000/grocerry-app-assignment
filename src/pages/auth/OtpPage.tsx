


import { useState } from "react";
import KeyboardImage from "../../assets/keypadImg.png"
import { useNavigate } from "react-router-dom";

export default function OtpPage() {
  const [otp, setOtp] = useState("123");
  const navigate = useNavigate();

  return (
    <div className="h-screen max-w-[390px] mx-auto bg-white flex flex-col overflow-hidden">
      <div className="px-4 pt-4">
        <button className="text-2xl text-black">
          ←
        </button>

        <h1 className="mt-8 text-[28px] font-semibold text-[#222]">
          Enter your 4-digit code
        </h1>

        <div className="mt-8">
          <p className="text-xs text-gray-500 mb-2">
            Code
          </p>

          <div className="border-b border-gray-300 pb-3">
            <input
              type="text"
              maxLength={4}
              value={otp}
              onChange={(e) =>
                setOtp(
                  e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 4)
                )
              }
              className="w-full outline-none text-lg tracking-[12px] bg-transparent"
              placeholder="----"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        <button
        onClick={() => navigate("/location")}
          className="
            absolute
            right-5
            bottom-6
            w-14
            h-14
            rounded-full
            bg-[#58C77A]
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

        <button
          className="
            absolute
            left-4
            bottom-10
            text-[#58C77A]
            text-sm
            font-medium
          "
        >
          Resend Code
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
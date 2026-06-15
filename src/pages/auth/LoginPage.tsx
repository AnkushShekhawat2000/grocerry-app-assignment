

import { useState, } from "react";
import carrotIcon from "../../assets/orangeCarrotIcon.png"

export default function LoginPage() {
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("password123");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
   
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-[#FCFCFC] flex justify-center">
      <div className="w-full max-w-[375px] min-h-screen px-5 py-10 flex flex-col justify-between">
        
        {/* Top Section */}
        <div>
          {/* Logo */}
          <div className="flex justify-center mb-16">
            {/* Yahan apna image laga dena */}
            <div className="w-12 h-12 flex items-center justify-center text-4xl">
               <img src={carrotIcon}/>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-10">
            <h1 className="text-[30px] font-semibold text-[#181725]">
              Login
            </h1>

            <p className="mt-2 text-[16px] text-[#7C7C7C]">
              Enter your emails and password
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-8">
              <label className="block text-[14px] font-medium text-[#7C7C7C] mb-3">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  border-0
                  border-b
                  border-[#E2E2E2]
                  bg-transparent
                  pb-4
                  text-[16px]
                  text-[#181725]
                  outline-none
                "
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[14px] font-medium text-[#7C7C7C] mb-3">
                Password
              </label>

              <div className="relative border-b border-[#E2E2E2]">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="
                    w-full
                    bg-transparent
                    pb-4
                    pr-10
                    text-[16px]
                    text-[#181725]
                    outline-none
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-0 h-full flex items-center text-[#7C7C7C]"
                >
                  {showPassword ? "👁" : "🙈"}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end mt-5">
              <button
                type="button"
                className="text-[14px] text-[#181725] font-medium"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full
                mt-8
                h-[65px]
                rounded-[18px]
                bg-[#53B175]
                text-white
                text-[18px]
                font-semibold
                transition
              "
            >
              Log In
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center pb-4">
          <span className="text-[15px] text-[#181725] font-medium">
            Don't have an account?
          </span>

          <button className="ml-1 text-[15px] font-semibold text-[#53B175]">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
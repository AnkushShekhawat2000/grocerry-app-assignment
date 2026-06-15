

import peopleImg from "../../assets/peopleImg.svg";
import carrotIcon from "../../assets/carrotIcon.svg";
import { useNavigate } from "react-router-dom";

function OnboardingPage() {

  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img
        src={peopleImg}
        alt="onboarding"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />

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

        <button
          onClick={() => navigate("/signin")}
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
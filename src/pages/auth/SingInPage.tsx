import { useNavigate } from "react-router-dom";
import basketImg from "../../assets/basketIcon.png";
import earthIcon from "../../assets/earthIcon.png";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col lg:flex-row">
        <section className="h-[50%] lg:h-screen lg:w-1/2">
          <img
            src={basketImg}
            alt="grocery"
            className="
              h-full
              w-full
              object-cover
              object-top
            "
          />
        </section>

        <section
          className="
    flex
    flex-col
    px-5
    gap-8

    lg:w-1/2
    lg:h-screen
    lg:justify-center
    lg:px-16
  "
        >
          <h1
            className="
              text-[#181725]
              font-semibold

              text-[28px]
              leading-[34px]

              md:text-[34px]
              md:leading-[42px]

              lg:text-[52px]
              lg:leading-[60px]
            "
          >
            Get your groceries
            <br />
            with nectar
          </h1>

          <div className="mt-8 border-b border-[#E2E2E2] pb-4">
            <div className="flex items-center gap-3">
              <img className="w-6 h-6" src={earthIcon} />

              <input
                onFocus={() => navigate("/loginwithNumber")}
                placeholder="+880"
                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[#181725]
                "
              />
            </div>
          </div>

          <p
            className="
              mt-10
              text-center
              text-[13px]
              text-[#828282]
            "
          >
            Or connect with social media
          </p>

          <button
          onClick={() => navigate("/signup")}
            className="
              mt-9
              h-[64px]
              w-full
              rounded-[18px]
              bg-[#5383EC]
              text-white
              font-medium
            "
          >
            Continue with Email
          </button>

          <button
            className="
              mt-5
              h-[64px]
              w-full
              rounded-[18px]
              bg-[#4A66AC]
              text-white
              font-medium
            "
          >
            Continue with Facebook
          </button>
        </section>
      </div>
    </div>
  );
};

export default SignIn;

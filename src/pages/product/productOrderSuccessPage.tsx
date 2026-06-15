import { useNavigate } from "react-router-dom";

export default function OrderFailedPage() {
  const navigate = useNavigate();

  return (
    // <div className="min-h-screen bg-black/20 flex items-center justify-center px-5">
    //   <div className="w-full max-w-sm rounded-[30px] bg-white p-6">
    //     <button className="text-2xl">
    //       ×
    //     </button>

    //     <div className="mt-4 flex justify-center">
    //       <div className="h-40 w-40 rounded-full bg-[#EAF4EA]" />
    //     </div>

    //     <h2 className="mt-6 text-center text-[28px] font-semibold text-[#181725]">
    //       Oops! Order Failed
    //     </h2>

    //     <p className="mt-3 text-center text-[#7C7C7C]">
    //       Something went terribly wrong.
    //     </p>

    //     <button className="mt-8 h-[67px] w-full rounded-[19px] bg-[#53B175] text-white font-semibold">
    //       Please Try Again
    //     </button>

    //     <button
    //       onClick={() => navigate("/home")}
    //       className="mt-5 w-full text-center font-semibold text-[#181725]"
    //     >
    //       Back to home
    //     </button>
    //   </div>
    // </div>

       <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8">
      <div className="h-36 w-36 rounded-full bg-[#53B175] flex items-center justify-center text-white text-6xl">
        ✓
      </div>

      <h1 className="mt-10 text-center text-[28px] font-semibold text-[#181725]">
        Your Order has been
        <br />
        accepted
      </h1>

      <p className="mt-4 text-center text-[#7C7C7C]">
        Your items has been placed and is on
        it's way to being processed
      </p>

      <button className="mt-12 h-[67px] w-full rounded-[19px] bg-[#53B175] text-white font-semibold">
        Track Order
      </button>

      <button
        onClick={() => navigate("/home")}
        className="mt-5 font-semibold text-[#181725]"
      >
        Back to home
      </button>
    </div>
  );
}
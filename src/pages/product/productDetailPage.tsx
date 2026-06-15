import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import backArrow from "../../assets/back arrow.png";
import shareProductIcon from "../../assets/shareIconProduct.png";
import favProductIcon from "../../assets/addFavIcon.png";
import rightArrow from "../../assets/roghtArrow.png";
import downArrow from "../../assets/downarraow.png";
import starGroup from "../../assets/stargroup.png";

export default function ProductDetailPage() {
  const navigate = useNavigate();

  const { state: product } = useLocation();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-semibold">Product Not Found</h2>
      </div>
    );
  }

  const totalPrice = Number(product.price) * quantity;

  return (
    <div className="min-h-screen bg-white">
      {/* TOP SECTION */}
      <div className="rounded-b-[32px] bg-[#F2F3F2]">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 pt-6">
          <button onClick={() => navigate(-1)}>
            <img
              src={backArrow}
              alt="back"
              className="h-5 w-5 object-contain"
            />
          </button>

          <button>
            <img
              src={shareProductIcon}
              alt="share"
              className="h-5 w-5 object-contain"
            />
          </button>
        </div>

        <div className="flex justify-center px-6 py-10">
          <img
            src={product.image}
            alt={product.name}
            className="h-[220px] object-contain"
          />
        </div>

        <div className="flex justify-center gap-2 pb-6">
          <span className="h-2 w-2 rounded-full bg-[#53B175]" />
          <span className="h-2 w-2 rounded-full bg-[#D9D9D9]" />
          <span className="h-2 w-2 rounded-full bg-[#D9D9D9]" />
        </div>
      </div>

      <div className="px-6 pt-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[24px] font-semibold text-[#181725]">
              {product.name}
            </h1>

            <p className="mt-1 text-[16px] text-[#7C7C7C]">{product.unit}</p>
          </div>

          <button>
            <img
              src={favProductIcon}
              alt="favourite"
              className="h-6 w-6 object-contain"
            />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="text-[28px] font-light text-[#B3B3B3]"
            >
              −
            </button>

            <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[16px] border border-[#E2E2E2]">
              <span className="font-semibold text-[#181725]">{quantity}</span>
            </div>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="text-[28px] font-light text-[#53B175]"
            >
              +
            </button>
          </div>

          <span className="text-[24px] font-bold text-[#181725]">
            ${totalPrice.toFixed(2)}
          </span>
        </div>

        <div className="mt-8 border-t border-[#E2E2E2] pt-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[16px] font-semibold text-[#181725]">
              Product Detail
            </h3>

            <button>
              <img
                src={downArrow}
                alt="expand"
                className="h-4 w-4 object-contain"
              />
            </button>
          </div>

          <p className="mt-3 text-[13px] leading-6 text-[#7C7C7C]">
            {product.description ??
              "Fresh and healthy product. Rich in nutrients and suitable for daily consumption. Perfect for everyday use and maintaining a healthy lifestyle."}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[#E2E2E2] py-5">
          <h3 className="text-[16px] font-semibold text-[#181725]">
            Nutritions
          </h3>

          <div className="flex items-center gap-3">
            <span className="rounded-md bg-[#EBEBEB] px-2 py-1 text-xs font-medium text-[#7C7C7C]">
              100gr
            </span>

            <img
              src={rightArrow}
              alt="arrow"
              className="h-4 w-4 object-contain"
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#E2E2E2] py-5">
          <h3 className="text-[16px] font-semibold text-[#181725]">Review</h3>

          <div className="flex items-center gap-3">
            <img src={starGroup} alt="rating" className="h-4 object-contain" />

            <img
              src={rightArrow}
              alt="arrow"
              className="h-4 w-4 object-contain"
            />
          </div>
        </div>

        <button
          className="
            mb-8
            mt-6
            h-[67px]
            w-full
            rounded-[19px]
            bg-[#53B175]
            text-[18px]
            font-semibold
            text-white
            shadow-sm
          "
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
}

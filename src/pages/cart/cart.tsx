// import { useState } from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

type CartItem = {
  id: number;
  name: string;
  unit: string;
  price: number;
  quantity: number;
};

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "Bell Pepper Red",
    unit: "1kg",
    price: 4.99,
    quantity: 1,
  },
  {
    id: 2,
    name: "Egg Chicken Red",
    unit: "4pcs",
    price: 1.99,
    quantity: 1,
  },
  {
    id: 3,
    name: "Organic Bananas",
    unit: "12kg",
    price: 3,
    quantity: 1,
  },
  {
    id: 4,
    name: "Ginger",
    unit: "250gm",
    price: 2.99,
    quantity: 1,
  },
];

export default function Cart() {
  const [items, setItems] = useState(initialItems);
  const [openCheckout, setOpenCheckout] = useState(false);
   const navigate = useNavigate();


  const increaseQty = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deliveryCost = 3.5;

  const grandTotal = subtotal + deliveryCost;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="border-b pb-4 text-center text-2xl font-bold">
        My Cart
      </h1>

      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        {/* LEFT */}
        <div className="flex-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-6"
            >
              {/* IMAGE PLACEHOLDER */}
              <div className="h-20 w-20 rounded-xl bg-gray-100" />

              {/* INFO */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-400">
                  {item.unit}, Price
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border"
                  >
                    -
                  </button>

                  <span className="w-4 text-center font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border text-green-600"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex h-20 flex-col items-end justify-between">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-xl text-gray-400"
                >
                  ×
                </button>

                <span className="font-semibold">
                  $
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP SUMMARY */}
        <div className="hidden w-[320px] shrink-0 lg:block">
          <div className="rounded-3xl border p-5 shadow-sm">
            <h2 className="border-b pb-4 text-xl font-bold">
              Order Summary
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Subtotal
                </span>

                <span className="font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Delivery Cost
                </span>

                <span className="font-medium">
                  ${deliveryCost.toFixed(2)}
                </span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-bold">
                    Grand Total
                  </span>

                  <span className="text-2xl font-bold">
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-2">
              <input
                placeholder="Promo Code"
                className="h-11 flex-1 rounded-xl border px-3 text-sm outline-none"
              />

              <button className="rounded-xl bg-slate-800 px-4 text-white">
                Apply
              </button>
            </div>

            <button className="mt-6 h-14 w-full rounded-2xl bg-[#53B175] font-semibold text-white">
              Place Order (${grandTotal.toFixed(2)})
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE CHECKOUT BUTTON */}
      {/* <div className="sticky bottom-4 mt-6 lg:hidden">
        <button className="flex h-14 w-full items-center justify-between rounded-2xl bg-[#53B175] px-5 text-white shadow-lg">
          <span className="flex-1 text-center font-semibold">
            Go to Checkout
          </span>

          <span className="rounded-md bg-green-700 px-2 py-1 text-xs">
            ${subtotal.toFixed(2)}
          </span>
        </button>
      </div> */}


<div className="sticky bottom-4 mt-6 lg:hidden">
  <button
    onClick={() => setOpenCheckout(true)}
    className="flex h-14 w-full items-center justify-between rounded-2xl bg-[#53B175] px-5 text-white shadow-lg"
  >
    <span className="flex-1 text-center font-semibold">
      Go to Checkout
    </span>

    <span className="rounded-md bg-green-700 px-2 py-1 text-xs">
      ${subtotal.toFixed(2)}
    </span>
  </button>
</div>




{openCheckout && (
 <div className="fixed inset-0 z-[9999] bg-black/40 lg:hidden">
    
    {/* Overlay */}
    <div
      className="absolute inset-0"
      onClick={() => setOpenCheckout(false)}
    />

    {/* Bottom Sheet */}
    <div
      className="
      absolute bottom-0 left-0 right-0
      rounded-t-[30px]
      bg-white
      px-6
      pt-6
      pb-8
      animate-slideUp
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-5">
        <h2 className="text-2xl font-semibold">
          Checkout
        </h2>

        <button
          onClick={() => setOpenCheckout(false)}
          className="text-2xl"
        >
          ×
        </button>
      </div>

      {/* Delivery */}
      <div className="flex items-center justify-between border-b py-5">
        <span className="text-[#7C7C7C]">
          Delivery
        </span>

        <div className="flex items-center gap-2">
          <span className="font-medium">
            Select Method
          </span>

          <span>›</span>
        </div>
      </div>

      {/* Payment */}
      <div className="flex items-center justify-between border-b py-5">
        <span className="text-[#7C7C7C]">
          Payment
        </span>

        <div className="flex items-center gap-2">
          <div className="h-5 w-8 rounded bg-blue-500" />

          <span>›</span>
        </div>
      </div>

      {/* Promo */}
      <div className="flex items-center justify-between border-b py-5">
        <span className="text-[#7C7C7C]">
          Promo Code
        </span>

        <div className="flex items-center gap-2">
          <span className="font-medium">
            Pick discount
          </span>

          <span>›</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex items-center justify-between py-5">
        <span className="text-[#7C7C7C]">
          Total Cost
        </span>

        <div className="flex items-center gap-2">
          <span className="font-bold">
            ${grandTotal.toFixed(2)}
          </span>

          <span>›</span>
        </div>
      </div>

      {/* Terms */}
      <p className="mb-6 text-xs text-[#7C7C7C]">
        By placing an order you agree to our{" "}
        <span className="font-semibold text-black">
          Terms
        </span>{" "}
        And{" "}
        <span className="font-semibold text-black">
          Conditions
        </span>
      </p>

      {/* Place Order */}
      <button
       onClick={() => navigate("/order-success")}
        className="
        h-[67px]
        w-full
        rounded-[19px]
        bg-[#53B175]
        text-lg
        font-semibold
        text-white
        "
      >
        Place Order
      </button>
    </div>
  </div>
)}

    </div>
  );
}
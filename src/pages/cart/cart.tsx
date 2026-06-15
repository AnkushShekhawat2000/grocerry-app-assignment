import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export default function Cart() {
  const navigate = useNavigate();

  const [openCheckout, setOpenCheckout] = useState(false);

  const items = useCartStore((state) => state.items);

  const removeItem = useCartStore((state) => state.removeFromCart);

  const increaseQty = useCartStore((state) => state.increaseQuantity);

  const decreaseQty = useCartStore((state) => state.decreaseQuantity);

  const clearCart = useCartStore((state) => state.clearCart);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const deliveryCost = 3.5;

  const grandTotal = subtotal + deliveryCost;

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-5">
        <h2 className="text-3xl font-bold text-[#181725]">
          Your Cart is Empty
        </h2>

        <p className="mt-3 text-center text-[#7C7C7C]">
          Add some products to continue shopping
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 rounded-2xl bg-[#53B175] px-6 py-3 font-semibold text-white"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen bg-white max-w-[390px] lg:max-w-7xl lg:px-6">
      <h1
        className="
    h-[84px]
    flex
    items-center
    justify-center
    text-[20px]
    font-semibold
    text-[#181725]
    border-b
    border-[#E2E2E2]
  "
      >
        My Cart
      </h1>

      <div className="mt-6 flex flex-col gap-8 lg:flex-row">
        {/* Cart Items */}
        <div className="flex-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="
flex items-center
gap-4
px-6
py-7
border-b
border-[#E2E2E2]
"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-[70px] w-[70px] object-contai"
              />

              <div className="flex-1">
                <h3 className="text-[16px] font-semibold text-[#181725]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[14px] text-[#7C7C7C]">
                  {item.category}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="
flex
h-[45px]
w-[45px]
items-center
justify-center
rounded-[17px]
border
border-[#E2E2E2]
text-[#B3B3B3]
text-xl
"
                  >
                    -
                  </button>

                  <span className="w-5 text-center font-medium">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="
flex
h-[45px]
w-[45px]
items-center
justify-center
rounded-[17px]
border
border-[#E2E2E2]
text-[#53B175]
text-xl
"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex h-20 flex-col items-end justify-between">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-[24px] text-[#B3B3B3]"
                >
                  ×
                </button>

                <span className="text-[18px] font-semibold text-[#181725]">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Summary */}
        <div className="hidden w-[320px] shrink-0 lg:block">
          <div
            className="
sticky
top-5
rounded-[24px]
border
border-[#E2E2E2]
p-6
bg-white
"
          >
            <h2 className="border-b pb-4 text-xl font-bold">Order Summary</h2>

            <div className="mt-5 space-y-4">
              <div className="flex justify-between">
                <span className="text-[#7C7C7C]">Subtotal</span>

                <span className="font-medium">₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#7C7C7C]">Delivery</span>

                <span className="font-medium">₹{deliveryCost.toFixed(2)}</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>

                  <span className="text-2xl font-bold">
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setOpenCheckout(false);

                setTimeout(() => {
                  clearCart();
                  navigate("/order-success");
                }, 500);
              }}
              className="mt-6 h-14 w-full rounded-2xl bg-[#53B175] font-semibold text-white"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Checkout */}
      <div
        className="
    fixed
    bottom-[90px]
    left-0
    right-0
    px-6
    z-40
    lg:hidden
  "
      >
        <button
          onClick={() => setOpenCheckout(true)}
          className="
h-[67px]
w-full
rounded-[19px]
bg-[#53B175]
flex
items-center
justify-center
relative
text-white
font-semibold
text-[18px]
"
        >
          <span className="flex-1 text-center font-semibold">
            Go to Checkout
          </span>

          <span
            className="
    absolute
    right-4
    bg-[#489E67]
    px-2
    py-1
    rounded-[4px]
    text-[12px]
  "
          >
            ₹{grandTotal.toFixed(2)}
          </span>
        </button>
      </div>

      {openCheckout && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpenCheckout(false)}
          />

        
          <div
            className="
      absolute bottom-0 left-0 right-0
      bg-white
      rounded-t-[30px]
      px-[25px]
      pt-[30px]
      pb-[25px]
      animate-slideUp
      "
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E2E2E2] pb-6">
              <h2 className="text-[24px] font-semibold text-[#181725]">
                Checkout
              </h2>

              <button
                onClick={() => setOpenCheckout(false)}
                className="text-[26px] text-[#181725]"
              >
                ×
              </button>
            </div>

            {/* Delivery */}
            <div className="flex items-center justify-between border-b border-[#E2E2E2] py-5">
              <span className="text-[16px] text-[#7C7C7C]">Delivery</span>

              <div className="flex items-center gap-3">
                <span className="text-[16px] font-medium text-[#181725]">
                  Select Method
                </span>

                <span className="text-xl">›</span>
              </div>
            </div>

         
            <div className="flex items-center justify-between border-b border-[#E2E2E2] py-5">
              <span className="text-[16px] text-[#7C7C7C]">Payment</span>

              <div className="flex items-center gap-3">
                <div className="h-5 w-8 rounded bg-blue-500" />

                <span className="text-xl">›</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-b border-[#E2E2E2] py-5">
              <span className="text-[16px] text-[#7C7C7C]">Promo Code</span>

              <div className="flex items-center gap-3">
                <span className="text-[16px] font-medium text-[#181725]">
                  Pick discount
                </span>

                <span className="text-xl">›</span>
              </div>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between py-5">
              <span className="text-[16px] text-[#7C7C7C]">Total Cost</span>

              <div className="flex items-center gap-3">
                <span className="text-[18px] font-bold text-[#181725]">
                  ${grandTotal.toFixed(2)}
                </span>

                <span className="text-xl">›</span>
              </div>
            </div>

         =
            <p className="mb-8 text-[14px] leading-5 text-[#7C7C7C]">
              By placing an order you agree to our{" "}
              <span className="font-semibold text-[#181725]">Terms</span> And{" "}
              <span className="font-semibold text-[#181725]">Conditions</span>
            </p>

            <button
              onClick={() => {
                clearCart();
                navigate("/order-success");
              }}
              className="
        h-[67px]
        w-full
        rounded-[19px]
        bg-[#53B175]
        text-[18px]
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

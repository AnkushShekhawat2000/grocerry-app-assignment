import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../data/products";
import { useCartStore } from "../../store/cartStore";
import { useFavouriteStore } from "../../store/favouriteStore";
import { useProductStore } from "../../store/productStore";

export default function Favourite() {
  const navigate = useNavigate();
  const favouriteIds = useFavouriteStore((state) => state.favouriteIds);

  const products = useProductStore((state) => state.products);

  const addToCart = useCartStore((state) => state.addToCart);

  const favourites = products.filter((product) =>
    favouriteIds.includes(product.id),
  );

  const handleAddAllToCart = () => {
    favourites.forEach((product) => {
      addToCart({
        ...product,
        quantity: 1,
      });
    });

    navigate("/cart");
  };

  if (favourites.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">No Favourite Items</h2>

        <p className="mt-2 text-[#7C7C7C]">Add products to favourites</p>
      </div>
    );
  }
  return (
    <div className="mx-auto min-h-screen max-w-[390px] bg-white">
      <div className="h-[84px] border-b border-[#E2E2E2] flex items-center justify-center">
        <h1 className="text-[20px] font-semibold">Favourite</h1>
      </div>

      {favourites.map((item) => (
        <div
          key={item.id}
          className="
            flex items-center
            border-b border-[#E2E2E2]
            px-[25px]
            py-[22px]
          "
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-[55px] w-[55px] object-contain"
          />

          <div className="ml-5 flex-1">
            <h3 className="font-semibold">{item.name}</h3>

            <p className="text-sm text-[#7C7C7C]">{item.unit}, Price</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-semibold">${item.price}</span>

            <span className="text-xl">›</span>
          </div>
        </div>
      ))}

      <div
        className="
  fixed
  bottom-[90px]
  left-1/2
  z-40
  w-full
  max-w-[390px]
  -translate-x-1/2
  px-[25px]
"
      >
        <button
          onClick={handleAddAllToCart}
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
          Add All To Cart
        </button>
      </div>
    </div>
  );
}

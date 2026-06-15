import { useState } from "react";

type FavouriteItem = {
  id: number;
  name: string;
  unit: string;
  price: number;
};

const initialItems: FavouriteItem[] = [
  {
    id: 1,
    name: "Sprite Can",
    unit: "325ml",
    price: 1.5,
  },
  {
    id: 2,
    name: "Diet Coke",
    unit: "355ml",
    price: 1.99,
  },
  {
    id: 3,
    name: "Apple & Grape Juice",
    unit: "2L",
    price: 15.5,
  },
  {
    id: 4,
    name: "Coca Cola Can",
    unit: "325ml",
    price: 4.99,
  },
  {
    id: 5,
    name: "Pepsi Can",
    unit: "330ml",
    price: 4.99,
  },
];

export default function Favourite() {
  const [items] = useState(initialItems);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="border-b py-5">
        <h1 className="text-center text-2xl font-bold">
          Favourite
        </h1>
      </div>

      <div className="flex-1">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b px-4 py-6"
          >
            <div className="h-16 w-16 shrink-0 rounded-xl bg-gray-100" />

            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">
                {item.name}
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                {item.unit}, Price
              </p>
            </div>

            {/* Price + Arrow */}
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-900">
                ${item.price.toFixed(2)}
              </span>

              <button className="text-xl text-gray-500">
                ›
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 bg-white p-4">
        <button className="h-14 w-full rounded-2xl bg-[#53B175] text-lg font-semibold text-white">
          Add All To Cart
        </button>
      </div>
    </div>
  );
}
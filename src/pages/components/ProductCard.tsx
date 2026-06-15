// type Props = {
//   product: any;
// };

// export default function ProductCard({ product }: Props) {
//   return (
//     <div className="min-w-[170px] lg:min-w-0 bg-white border border-[#E2E2E2] rounded-2xl p-4">
//       <div className="h-28 flex items-center justify-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="h-24 object-contain"
//         />
//       </div>

//       <h3 className="mt-4 font-semibold text-[#181725] text-sm">
//         {product.name}
//       </h3>

//       <p className="text-xs text-[#7C7C7C] mt-1">
//         {product.unit}
//       </p>

//       <div className="flex items-center justify-between mt-4">
//         <span className="font-bold text-lg">
//           ${product.price}
//         </span>

//         <button className="w-10 h-10 rounded-xl bg-[#53B175] text-white">
//           +
//         </button>
//       </div>
//     </div>
//   );
// }





import { useNavigate } from "react-router-dom";

type Props = {
  product: any;
};

export default function ProductCard({
  product,
}: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/product/${product.id}`, {
          state: product,
        })
      }
      className="min-w-[170px] lg:min-w-0 bg-white border border-[#E2E2E2] rounded-2xl p-4 cursor-pointer transition-all hover:shadow-md"
    >
      <div className="h-28 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-24 object-contain"
        />
      </div>

      <h3 className="mt-4 font-semibold text-[#181725] text-sm">
        {product.name}
      </h3>

      <p className="text-xs text-[#7C7C7C] mt-1">
        {product.unit}
      </p>

      <div className="flex items-center justify-between mt-4">
        <span className="font-bold text-lg">
          ${product.price}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic
          }}
          className="w-10 h-10 rounded-xl bg-[#53B175] text-white"
        >
          +
        </button>
      </div>
    </div>
  );
}
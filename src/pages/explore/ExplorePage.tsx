import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import searchIcon from "../../assets/searchIcon.png";
import filterIcon from "../../assets/filterIcon.png";

export default function ExplorePage() {
  const categories = [
    {
      id: 1,
      title: "Fresh Fruits & Vegetables",
      image: "...",
      color: "bg-[#EEF7F1] border-[#53B175]",
    },
    {
      id: 2,
      title: "Cooking Oil & Ghee",
      image: "...",
      color: "bg-[#FFF6EB] border-[#F8A44C]",
    },
    {
      id: 3,
      title: "Meat & Fish",
      image: "...",
      color: "bg-[#FDE8E4] border-[#F7A593]",
    },
    {
      id: 4,
      title: "Bakery & Snacks",
      image: "...",
      color: "bg-[#F4EBF7] border-[#B7A6D8]",
    },
    {
      id: 5,
      title: "Dairy & Eggs",
      image: "...",
      color: "bg-[#FFF8E5] border-[#F9C74F]",
    },
    {
      id: 6,
      title: "Beverages",
      image: "...",
      color: "bg-[#E8F3FF] border-[#4A90E2]",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Organic Bananas",
      category: "Fresh Fruits",
      price: 4.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Red Apple",
      category: "Fresh Fruits",
      price: 3.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 3,
      name: "Beef Bone",
      category: "Meat & Fish",
      price: 12.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 4,
      name: "Broiler Chicken",
      category: "Meat & Fish",
      price: 9.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 5,
      name: "Fresh Milk",
      category: "Dairy & Eggs",
      price: 5.99,
      image: "https://via.placeholder.com/300",
    },
    {
      id: 6,
      name: "Egg Pack",
      category: "Dairy & Eggs",
      price: 6.99,
      image: "https://via.placeholder.com/300",
    },
  ];

  // const [searchQuery, setSearchQuery] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const [showFilters, setShowFilters] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  const showCategories = !selectedCategory && searchQuery.trim() === "";

  const resetFilters = () => {
    setSelectedCategory(null);
    setSearchQuery("");
  };

  const filterCategories = [
    "Eggs",
    "Noodles & Pasta",
    "Chips & Crisps",
    "Fast Food",
  ];

  const brands = ["Individual Collection", "Cocola", "Ifad", "Kazi Farms"];

  const toggleItem = (
    item: string,
    list: string[],
    setter: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (list.includes(item)) {
      setter(list.filter((i) => i !== item));
    } else {
      setter([...list, item]);
    }
  };

  return (
    // <div className="flex-grow flex flex-col h-full max-w-[1120px] mx-auto w-full">
  // <>
  //      <div className="flex flex-1 gap-6 max-w-[1400px] mx-auto w-full">
  //     {/* Desktop Sidebar */}
  //     <div className="hidden lg:block ...">

  //           {/* Desktop Filter */}
  //     <div
  //       className="
  //   hidden
  //   lg:block
  //   w-[280px]
  //   bg-white
  //   border
  //   border-[#E2E2E2]
  //   rounded-[24px]
  //   p-5
  //   h-fit
  //   sticky
  //   top-6
  // "
  //     >
  //       <div className="flex justify-between items-center mb-5">
  //         <h3 className="font-semibold text-lg">Filters</h3>

  //         <button
  //           onClick={() => {
  //             setSelectedCategories([]);
  //             setSelectedBrands([]);
  //           }}
  //           className="text-[#53B175] text-sm"
  //         >
  //           Clear All
  //         </button>
  //       </div>

  //       <hr className="mb-5" />

  //       {/* Categories */}
  //       <h4 className="font-semibold mb-4">Categories</h4>

  //       <div className="space-y-3">
  //         {filterCategories.map((item) => (
  //           <label
  //             key={item}
  //             className="flex items-center gap-3 cursor-pointer"
  //           >
  //             <input
  //               type="checkbox"
  //               checked={selectedCategories.includes(item)}
  //               onChange={() =>
  //                 toggleItem(item, selectedCategories, setSelectedCategories)
  //               }
  //               className="w-5 h-5 rounded"
  //             />

  //             <span>{item}</span>
  //           </label>
  //         ))}
  //       </div>

  //       <hr className="my-6" />

  //       {/* Brands */}
  //       <h4 className="font-semibold mb-4">Brand</h4>

  //       <div className="space-y-3">
  //         {brands.map((brand) => (
  //           <label
  //             key={brand}
  //             className="flex items-center gap-3 cursor-pointer"
  //           >
  //             <input
  //               type="checkbox"
  //               checked={selectedBrands.includes(brand)}
  //               onChange={() =>
  //                 toggleItem(brand, selectedBrands, setSelectedBrands)
  //               }
  //               className="w-5 h-5 rounded"
  //             />

  //             <span>{brand}</span>
  //           </label>
  //         ))}
  //       </div>

  //       <button
  //         className="
  //     mt-8
  //     w-full
  //     h-[56px]
  //     bg-[#53B175]
  //     text-white
  //     rounded-[18px]
  //     font-semibold
  //   "
  //       >
  //         Apply Filter
  //       </button>
  //     </div>

  //     {/* Categories */}
  //     {showCategories ? (
  //       <div
  //         className="
  //       grid
  //       grid-cols-2
  //       md:grid-cols-3
  //       lg:grid-cols-4
  //       gap-4
  //       pb-20
  //     "
  //       >
  //         {categories.map((cat) => (
  //           <div
  //             key={cat.id}
  //             onClick={() => setSelectedCategory(cat.title)}
  //             className={`
  //           ${cat.color}
  //           border
  //           rounded-[18px]
  //           h-[190px]
  //           cursor-pointer
  //           flex
  //           flex-col
  //           items-center
  //           justify-center
  //           transition-all
  //           hover:scale-[1.02]
  //         `}
  //           >
  //             <img
  //               src={cat.image}
  //               alt={cat.title}
  //               className="
  //             w-[85px]
  //             h-[85px]
  //             rounded-full
  //             object-cover
  //           "
  //             />

  //             <h3
  //               className="
  //             mt-5
  //             text-center
  //             text-[15px]
  //             font-semibold
  //             leading-5
  //             text-[#181725]
  //             px-3
  //           "
  //             >
  //               {cat.title}
  //             </h3>
  //           </div>
  //         ))}
  //       </div>
  //     ) : (
  //       <div className="pb-20">
  //         {/* Product Header */}
  //         <div className="flex items-center justify-between mb-5">
  //           <div>
  //             <p className="text-[11px] uppercase tracking-wider text-[#7C7C7C]">
  //               Products
  //             </p>

  //             <h2 className="text-[24px] font-bold text-[#181725]">
  //               {selectedCategory || `Search results for "${searchQuery}"`}
  //             </h2>
  //           </div>

  //           <div
  //             className="
  //           bg-[#F2F3F2]
  //           px-3
  //           py-1.5
  //           rounded-full
  //           text-xs
  //           font-semibold
  //           text-[#181725]
  //         "
  //           >
  //             {filteredProducts.length} Items
  //           </div>
  //         </div>

  //         {/* Products */}
  //         {filteredProducts.length > 0 ? (
  //           <div
  //             className="
  //           grid
  //           grid-cols-2
  //           md:grid-cols-3
  //           lg:grid-cols-4
  //           gap-4
  //         "
  //           >
  //             {filteredProducts.map((product) => (
  //               <ProductCard key={product.id} product={product} />
  //             ))}
  //           </div>
  //         ) : (
  //           <div className="text-center py-20">
  //             <h3 className="text-xl font-semibold text-[#181725]">
  //               No Products Found
  //             </h3>

  //             <p className="text-gray-500 mt-2">
  //               Try another search or category.
  //             </p>

  //             <button
  //               onClick={resetFilters}
  //               className="
  //             mt-4
  //             px-5

            
  //             py-2
  //             bg-[#53B175]
  //             text-white
  //             rounded-xl
  //           "
  //             >
  //               Reset
  //             </button>
  //           </div>
  //         )}
  //       </div>
  //     )}

  //     </div>

  //     <div className="flex-1">
  //       {/* Header */}
  //       <div className="mb-4">
  //         {showCategories && (
  //           <h1
  //             className="
  //         text-[30px]
  //         font-semibold
  //         text-[#181725]
  //         text-center
  //         lg:text-left
  //         mb-5
  //       "
  //           >
  //             Find Products
  //           </h1>
  //         )}

  //         {/* Search */}
  //         <div className="flex items-center gap-3">
  //           {selectedCategory && (
  //             <button
  //               onClick={resetFilters}
  //               className="
  //           w-11
  //           h-11
  //           rounded-full
  //           border
  //           border-[#E2E2E2]
  //           flex
  //           items-center
  //           justify-center
  //           shrink-0
  //           bg-white
  //         "
  //             >
  //               ←
  //             </button>
  //           )}

  //           <div className="relative flex-1">
  //             <img
  //               src={searchIcon}
  //               alt=""
  //               className="
  //           absolute
  //           left-4
  //           top-1/2
  //           -translate-y-1/2
  //           w-4
  //           h-4
  //         "
  //             />

  //             <input
  //               type="text"
  //               placeholder="Search Store"
  //               value={searchQuery}
  //               onChange={(e) => setSearchQuery(e.target.value)}
  //               className="
  //           w-full
  //           h-[52px]
  //           bg-[#F2F3F2]
  //           rounded-[15px]
  //           pl-11
  //           pr-10
  //           text-sm
  //           text-[#181725]
  //           outline-none
  //           placeholder:text-[#7C7C7C]
  //         "
  //             />

  //             {searchQuery && (
  //               <button
  //                 onClick={() => setSearchQuery("")}
  //                 className="
  //             absolute
  //             right-4
  //             top-1/2
  //             -translate-y-1/2
  //             text-[#7C7C7C]
  //           "
  //               >
  //                 ✕
  //               </button>
  //             )}
  //           </div>
  //           <button
  //             onClick={() => setShowFilters(true)}
  //             className="
  //   lg:hidden
  //   w-[52px]
  //   h-[52px]
  //   bg-[#F2F3F2]
  //   rounded-[15px]
  //   flex
  //   items-center
  //   justify-center
  // "
  //           >
  //             <img src={filterIcon} alt="" className="w-5 h-5" />
  //           </button>
  //         </div>
  //       </div>
  //       {showFilters && (
  //         <>
  //           <div
  //             onClick={() => setShowFilters(false)}
  //             className="
  //       fixed
  //       inset-0
  //       bg-black/40
  //       z-40
  //       lg:hidden
  //     "
  //           />

  //           <div
  //             className="
  //       fixed
  //       bottom-0
  //       left-0
  //       right-0
  //       bg-white
  //       rounded-t-[32px]
  //       z-50
  //       lg:hidden
  //       max-h-[85vh]
  //       overflow-y-auto
  //     "
  //           >
  //             <div className="p-6">
  //               <div className="flex items-center justify-between">
  //                 <h2 className="text-2xl font-semibold">Filters</h2>

  //                 <button onClick={() => setShowFilters(false)}>✕</button>
  //               </div>

  //               <div className="flex justify-end mt-2">
  //                 <button
  //                   className="text-[#53B175] text-sm"
  //                   onClick={() => {
  //                     setSelectedCategories([]);
  //                     setSelectedBrands([]);
  //                   }}
  //                 >
  //                   Clear All
  //                 </button>
  //               </div>

  //               <hr className="my-5" />

  //               <h3 className="font-semibold mb-4">Categories</h3>

  //               <div className="space-y-4">
  //                 {filterCategories.map((item) => (
  //                   <label key={item} className="flex items-center gap-3">
  //                     <input
  //                       type="checkbox"
  //                       checked={selectedCategories.includes(item)}
  //                       onChange={() =>
  //                         toggleItem(
  //                           item,
  //                           selectedCategories,
  //                           setSelectedCategories,
  //                         )
  //                       }
  //                     />

  //                     <span>{item}</span>
  //                   </label>
  //                 ))}
  //               </div>

  //               <h3 className="font-semibold mt-8 mb-4">Brand</h3>

  //               <div className="space-y-4">
  //                 {brands.map((brand) => (
  //                   <label key={brand} className="flex items-center gap-3">
  //                     <input
  //                       type="checkbox"
  //                       checked={selectedBrands.includes(brand)}
  //                       onChange={() =>
  //                         toggleItem(brand, selectedBrands, setSelectedBrands)
  //                       }
  //                     />

  //                     <span>{brand}</span>
  //                   </label>
  //                 ))}
  //               </div>

  //               <button
  //                 onClick={() => setShowFilters(false)}
  //                 className="
  //           mt-8
  //           w-full
  //           h-[56px]
  //           bg-[#53B175]
  //           rounded-[18px]
  //           text-white
  //           font-semibold
  //         "
  //               >
  //                 Apply Filter
  //               </button>
  //             </div>
  //           </div>
  //         </>
  //       )}
  //     </div>

  //   </div>  
  
  // </>




  <>
  
           <div className="flex gap-6 max-w-[1400px] mx-auto w-full">

  


  {/* Desktop Filter */}
<div
  className="
    hidden
    lg:block
    w-[280px]
    min-w-[280px]
    bg-white
    border
    border-[#E2E2E2]
    rounded-[24px]
    p-6
    h-fit
    sticky
    top-6
  "
>
  <div className="flex items-center justify-between mb-5">
    <h2 className="text-[24px] font-semibold text-[#181725]">
      Filters
    </h2>

    <button
      onClick={() => {
        setSelectedCategories([]);
        setSelectedBrands([]);
      }}
      className="
        text-[#53B175]
        text-sm
        font-medium
      "
    >
      Clear All
    </button>
  </div>

  <div className="border-b border-[#E2E2E2] mb-6" />

  {/* Categories */}
  <div>
    <h3
      className="
        text-[18px]
        font-semibold
        text-[#181725]
        mb-4
      "
    >
      Categories
    </h3>

    <div className="space-y-4">
      {filterCategories.map((item) => (
        <label
          key={item}
          className="
            flex
            items-center
            gap-3
            cursor-pointer
          "
        >
          <input
            type="checkbox"
            checked={selectedCategories.includes(item)}
            onChange={() =>
              toggleItem(
                item,
                selectedCategories,
                setSelectedCategories
              )
            }
            className="
              w-5
              h-5
              accent-[#53B175]
            "
          />

          <span
            className="
              text-[16px]
              text-[#181725]
            "
          >
            {item}
          </span>
        </label>
      ))}
    </div>
  </div>

  <div className="border-b border-[#E2E2E2] my-6" />

  {/* Brand */}
  <div>
    <h3
      className="
        text-[18px]
        font-semibold
        text-[#181725]
        mb-4
      "
    >
      Brand
    </h3>

    <div className="space-y-4">
      {brands.map((brand) => (
        <label
          key={brand}
          className="
            flex
            items-center
            gap-3
            cursor-pointer
          "
        >
          <input
            type="checkbox"
            checked={selectedBrands.includes(brand)}
            onChange={() =>
              toggleItem(
                brand,
                selectedBrands,
                setSelectedBrands
              )
            }
            className="
              w-5
              h-5
              accent-[#53B175]
            "
          />

          <span
            className="
              text-[16px]
              text-[#181725]
            "
          >
            {brand}
          </span>
        </label>
      ))}
    </div>
  </div>

  <button
    className="
      mt-8
      w-full
      h-[60px]
      bg-[#53B175]
      text-white
      rounded-[18px]
      font-semibold
      text-[16px]
      hover:opacity-90
      transition
    "
  >
    Apply Filter
  </button>
</div>

 <div className="flex-1">
  {/* Header */}
  <div className="mb-6">
    {showCategories && (
      <h1 className="text-[30px] font-semibold text-[#181725] mb-5">
        Find Products
      </h1>
    )}

    {/* Search */}
    <div className="flex items-center gap-3">
      {selectedCategory && (
        <button
          onClick={resetFilters}
          className="
            w-11
            h-11
            rounded-full
            border
            border-[#E2E2E2]
            flex
            items-center
            justify-center
            shrink-0
            bg-white
          "
        >
          ←
        </button>
      )}

      <div className="relative flex-1">
        <img
          src={searchIcon}
          alt=""
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            w-4
            h-4
          "
        />

        <input
          type="text"
          placeholder="Search Store"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="
            w-full
            h-[52px]
            bg-[#F2F3F2]
            rounded-[15px]
            pl-11
            pr-10
            text-sm
            text-[#181725]
            outline-none
          "
        />

        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-[#7C7C7C]
            "
          >
            ✕
          </button>
        )}
      </div>

      {/* Mobile Filter Button */}
      <button
        onClick={() => setShowFilters(true)}
        className="
          lg:hidden
          w-[52px]
          h-[52px]
          bg-[#F2F3F2]
          rounded-[15px]
          flex
          items-center
          justify-center
        "
      >
        <img
          src={filterIcon}
          alt=""
          className="w-5 h-5"
        />
      </button>
    </div>
  </div>

  {/* Categories OR Products */}
  {showCategories ? (
    <div
      className="
        grid
        grid-cols-2
        md:grid-cols-3
        xl:grid-cols-4
        gap-4
        pb-20
      "
    >
      {categories.map((cat) => (
        <div
          key={cat.id}
          onClick={() => setSelectedCategory(cat.title)}
          className={`
            ${cat.color}
            border
            rounded-[18px]
            h-[190px]
            cursor-pointer
            flex
            flex-col
            items-center
            justify-center
            transition-all
            hover:scale-[1.02]
          `}
        >
          <img
            src={cat.image}
            alt={cat.title}
            className="
              w-[85px]
              h-[85px]
              object-cover
            "
          />

          <h3
            className="
              mt-5
              text-center
              text-[15px]
              font-semibold
              leading-5
              text-[#181725]
              px-3
            "
          >
            {cat.title}
          </h3>
        </div>
      ))}
    </div>
  ) : (
    <div className="pb-20">
      {/* Product Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] uppercase tracking-wider text-[#7C7C7C]">
            Products
          </p>

          <h2 className="text-[24px] font-bold text-[#181725]">
            {selectedCategory ||
              `Search results for "${searchQuery}"`}
          </h2>
        </div>

        <div
          className="
            bg-[#F2F3F2]
            px-3
            py-1.5
            rounded-full
            text-xs
            font-semibold
            text-[#181725]
          "
        >
          {filteredProducts.length} Items
        </div>
      </div>

      {/* Products */}
      {filteredProducts.length > 0 ? (
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            gap-4
          "
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-xl font-semibold text-[#181725]">
            No Products Found
          </h3>

          <p className="text-gray-500 mt-2">
            Try another search or category.
          </p>

          <button
            onClick={resetFilters}
            className="
              mt-4
              px-5
              py-2
              bg-[#53B175]
              text-white
              rounded-xl
            "
          >
            Reset
          </button>
        </div>
      )}
    </div>
  )}

  {/* Mobile Filter Drawer */}
  {showFilters && (
    <>
      <div
        onClick={() => setShowFilters(false)}
        className="
          fixed
          inset-0
          bg-black/40
          z-40
          lg:hidden
        "
      />

      <div
        className="
          fixed
          bottom-0
          left-0
          right-0
          bg-white
          rounded-t-[32px]
          z-50
          lg:hidden
          max-h-[85vh]
          overflow-y-auto
        "
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Filters
            </h2>

            <button
              onClick={() => setShowFilters(false)}
            >
              ✕
            </button>
          </div>

          <button
            onClick={() => setShowFilters(false)}
            className="
              mt-8
              w-full
              h-[56px]
              bg-[#53B175]
              rounded-[18px]
              text-white
              font-semibold
            "
          >
            Apply Filter
          </button>
        </div>
      </div>
    </>
  )}
</div>

</div>

















{/* Mobile Filter Drawer */}
{showFilters && (
  <>
    {/* Overlay */}
    <div
      onClick={() => setShowFilters(false)}
      className="
        fixed
        inset-0
        bg-black/40
        z-40
        lg:hidden
      "
    />

    {/* Drawer */}
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        bg-white
        rounded-t-[32px]
        z-50
        lg:hidden
        max-h-[85vh]
        overflow-y-auto
      "
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-[#181725]">
            Filters
          </h2>

          <button
            onClick={() => setShowFilters(false)}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <div className="flex justify-end mt-3">
          <button
            onClick={() => {
              setSelectedCategories([]);
              setSelectedBrands([]);
            }}
            className="text-[#53B175] text-sm font-medium"
          >
            Clear All
          </button>
        </div>

        <hr className="my-5" />

        {/* Categories */}
        <h3 className="font-semibold text-[18px] mb-4">
          Categories
        </h3>

        <div className="space-y-4">
          {filterCategories.map((item) => (
            <label
              key={item}
              className="flex items-center gap-3"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(item)}
                onChange={() =>
                  toggleItem(
                    item,
                    selectedCategories,
                    setSelectedCategories
                  )
                }
                className="w-5 h-5 accent-[#53B175]"
              />

              <span>{item}</span>
            </label>
          ))}
        </div>

        {/* Brands */}
        <h3 className="font-semibold text-[18px] mt-8 mb-4">
          Brand
        </h3>

        <div className="space-y-4">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3"
            >
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() =>
                  toggleItem(
                    brand,
                    selectedBrands,
                    setSelectedBrands
                  )
                }
                className="w-5 h-5 accent-[#53B175]"
              />

              <span>{brand}</span>
            </label>
          ))}
        </div>

        {/* Apply Button */}
        <button
          onClick={() => setShowFilters(false)}
          className="
            mt-8
            w-full
            h-[56px]
            bg-[#53B175]
            rounded-[18px]
            text-white
            font-semibold
          "
        >
          Apply Filter
        </button>
      </div>
    </div>
  </>
)}
  </>
  

    
    
  );
}



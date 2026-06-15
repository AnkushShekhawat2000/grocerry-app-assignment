


import Header from "../components/Header.tsx";
import SearchBar from "../components/SearchBar.tsx";
import Banner from "../components/Banner.tsx";
import SectionHeader from "../components/SectionHeader.tsx";
import ProductCard from "../components/ProductCard.tsx";
import BottomNav from "../components/BottomNav.tsx";
import { PRODUCTS } from "../data/products.tsx";



const groceryGroups = [
  {
    name: "Pulses",
    image: "https://via.placeholder.com/60",
    bg: "bg-[#F8EBDD]",
  },
  {
    name: "Rice",
    image: "https://via.placeholder.com/60",
    bg: "bg-[#EAF4EA]",
  },
];

export default function DashBoardPage() {
  const exclusive = PRODUCTS.filter(
    (item) => item.isExclusive
  );

  const bestSelling = PRODUCTS.filter(
    (item) => item.isBestSelling
  );

  return (
<div className="min-h-screen bg-white">
  <div className="w-full max-w-[390px] lg:max-w-[1280px] mx-auto px-5 lg:px-8 pb-24">
            <Header />
            <SearchBar />

<div className="mt-5">
  <Banner />
</div>
      


            <div className="mt-10">
              <SectionHeader
              title="Exclusive Offer"
              onSeeAll={() => console.log("Exclusive")}
              />

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {exclusive.slice(0, 4).map((item) => (
                  <ProductCard
                    key={item.id}
                    product={item}
                  />
                  ))}
              </div>
            </div>


            <div className="mt-8">
  <SectionHeader
    title="Best Selling"
    onSeeAll={() => console.log("Best Selling")}
  />

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    {bestSelling.slice(0, 4).map((item) => (
      <ProductCard
        key={item.id}
        product={item}
      />
    ))}
  </div>
</div>


<div className="mt-10">
  <SectionHeader
    title="Groceries"
    onSeeAll={() => console.log("Groceries")}
  />

  {/* Category Cards */}
  <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-none">
    {groceryGroups.map((group) => (
      <div
        key={group.name}
        className={`
          ${group.bg}
          min-w-[145px] lg:min-w-[180px]
          rounded-2xl
          px-4
          py-3
          flex
          items-center
          gap-3
          cursor-pointer
          rounded-[18px]
border border-[#E2E2E2]
        `}
      >
        <img
          src={group.image}
          alt={group.name}
          className="w-10 h-10 rounded-xl object-cover"
        />

        <span className="text-sm font-bold text-[#181725]">
          {group.name}
        </span>
      </div>
    ))}
  </div>

  {/* Products */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
    {PRODUCTS.slice(0, 4).map((item) => (
      <ProductCard
        key={item.id}
        product={item}
      />
    ))}
  </div>
</div>
        






    
<BottomNav />
    </div>
    </div>
  );
}
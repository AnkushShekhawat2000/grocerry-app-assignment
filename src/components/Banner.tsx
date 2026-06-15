

export default function Banner() {
  return (
    <div className="mt-5">
      <div className="relative h-[115px] md:h-[140px] bg-[#F1FFF3] rounded-2xl overflow-hidden">
        
        <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
          <h2 className="text-[22px] md:text-[28px] font-bold text-[#181725] leading-tight">
            Fresh Vegetables
          </h2>

          <p className="mt-1 text-[13px] md:text-sm font-medium text-[#53B175]">
            Get Up To 40% OFF
          </p>
        </div>

        {/* Banner Image */}
        <div className="absolute right-0 top-0 h-full w-[48%]">
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800"
            alt="Fresh Vegetables"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-3">
        <div className="w-4 h-1.5 rounded-full bg-[#53B175]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D9D9D9]" />
      </div>
    </div>
  );
}
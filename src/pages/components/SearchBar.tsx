// 




import searchIcon from "../../assets/searchIcon.png";
// import filterIcon from "../../assets/filterIcon.png";

export default function SearchBar() {
  return (
    <div className="mt-5">
      <div className="relative">
        
        <img
          src={searchIcon}
          alt="Search"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
        />

        <input
          type="text"
          placeholder="Search Store"
          className="
            w-full
            h-[52px]
            bg-[#F2F3F2]
            rounded-2xl
            pl-12
            pr-12
            text-[14px]
            font-medium
            text-[#181725]
            placeholder:text-[#7C7C7C]
            outline-none
          "
        />

        {/* <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <img
            src={filterIcon}
            alt="Filter"
            className="w-5 h-5"
          />
        </button> */}
      </div>
    </div>
  );
}
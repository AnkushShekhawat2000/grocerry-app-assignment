import orangeCarrot from "../assets/orangeCarrotIcon.png";
import locationIcon from "../assets/locationIcon.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center pt-5 pb-3">
      <img src={orangeCarrot} alt="Logo" className="w-7 h-7" />

      <div className="flex items-center gap-1.5 mt-2.5">
        <img src={locationIcon} alt="Location" className="w-4 h-4" />

        <p className="text-[15px] font-semibold text-[#181725]">
          Dhaka, Banassre
        </p>
      </div>
    </header>
  );
}

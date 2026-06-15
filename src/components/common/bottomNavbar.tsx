

import { NavLink } from "react-router-dom";

import storeIcon from "../../assets/storeIcon.png"
import exploreIcon from "../../assets/exploreIcon.png";
import cartIcon from "../../assets/cartIcon.png";
import favouriteIcon from "../../assets/favouriteIcon.png";
import profileIcon from "../../assets/ProfileIcon.png";

const tabs = [
  {
    label: "Shop",
    path: "/home",
    icon: storeIcon,
  },
  {
    label: "Explore",
    path: "/explore",
    icon: exploreIcon,
  },
  {
    label: "Cart",
    path: "/cart",
    icon: cartIcon,
  },
  {
    label: "Favourite",
    path: "/favourite",
    icon: favouriteIcon,
  },
  {
    label: "Account",
    path: "/account",
    icon: profileIcon,
  },
];

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#E2E2E2] shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-[84px] max-w-md items-center justify-around px-2">
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 transition-all ${
                isActive ? "text-[#53B175]" : "text-[#181725]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img
                  src={tab.icon}
                  alt={tab.label}
                  className={`h-5 w-5 object-contain transition-all duration-200 ${
                    isActive
                      ? "opacity-100 scale-105"
                      : "opacity-70 scale-100"
                  }`}
                />

                <span
                  className={`text-[12px] font-medium ${
                    isActive
                      ? "text-[#53B175]"
                      : "text-[#181725]"
                  }`}
                >
                  {tab.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
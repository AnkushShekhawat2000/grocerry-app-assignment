import { Outlet } from "react-router-dom";
import BottomNavbar from "./common/bottomNavbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pb-24">
        <Outlet />
      </main>

      <BottomNavbar />
    </div>
  );
}
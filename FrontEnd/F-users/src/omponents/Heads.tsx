import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
//import Headss from "./Headss"; // Your existing Headss component

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white shadow-md backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Left: Extra Component & Brand Logo */}
          <div className="flex items-center gap-4">
          

            <Link
              to="/home"
              className="group flex items-center gap-2.5 transition-transform duration-200 active:scale-95"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-white shadow-inner backdrop-blur-sm transition-colors group-hover:bg-white/30">
                <FaHome className="text-lg" />
              </div>
              <h1 className="text-xl font-extrabold italic tracking-wide text-white drop-shadow-sm">
                My Pizza
              </h1>
            </Link>
          </div>

          {/* Right: Navigation Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="home/myorder"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-200 hover:bg-white/15 hover:text-white active:scale-95"
            >
              My Orders
            </Link>

            <Link
              to="home/myaccount"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition-all duration-200 hover:bg-white/25 hover:shadow-md active:scale-95"
              title="My Account"
              aria-label="My Account"
            >
              <IoMdPerson className="text-xl" />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
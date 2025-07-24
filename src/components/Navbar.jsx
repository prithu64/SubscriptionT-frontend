import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed top-0 z-50 w-full dark:text-white ">
      <div className="px-2 py-4">
        <div className="flex justify-between backdrop-blur-lg shadow-sm items-center py-2 max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto border px-3 dark:border-white/30 rounded-sm">
          {/* Logo */}
          <div className="font-semibold text-lg">SubTrack</div>

          {/* Menu icon */}
          <button className="hidden md:block">
            <BsFillQuestionCircleFill size={20} />
          </button>
          <button className="md:hidden" onClick={() => setShowMenu(true)}>
            <GiHamburgerMenu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed h-screen w-[60%] top-0 right-0 dark:bg-white/10 bg-black/5 backdrop-blur-sm dark:text-white/60 shadow-lg border-l dark:border-white/30 transform transition-transform duration-300 ease-in-out z-50 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col px-2 pt-5">
          <div>
            <button onClick={() => setShowMenu(false)}>
              <IoClose size={25} />
            </button>
          </div>
          <ul className="text-center mt-6">
            <li className="underline mb-2">Home</li>
            <li className="underline mb-2">How it works?</li>
            <li className="underline mb-2">Features</li>
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {showMenu && (
        <div
          onClick={() => setShowMenu(false)}
          className="fixed inset-0 dark:bg-black/50 bg-white/40 z-40 transition-opacity duration-300 md:hidden"
        />
      )}
    </div>
  );
}

export default Navbar;

import { BsFillQuestionCircleFill } from "react-icons/bs";

function Navbar() {
  

  return (
    <div className="fixed top-0 z-50 w-full dark:text-white ">
      <div className="px-2 py-4">
        <div className="flex justify-between backdrop-blur-lg shadow-sm items-center py-2 max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto border px-3 dark:border-white/30 rounded-sm">
          {/* Logo */}
          <div className="font-semibold text-lg">SubTrack</div>

          {/* Menu icon */}
          <button className="cursor-pointer">
            <BsFillQuestionCircleFill size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

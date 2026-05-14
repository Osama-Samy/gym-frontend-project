import { useState } from "react";
import { GiWeightLiftingUp, GiHamburgerMenu } from "react-icons/gi";
import { CiSearch, CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative p-5 shadow-sm bg-white">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        <div className="flex gap-2 items-center">
          <GiWeightLiftingUp className="text-3xl md:text-4xl font-bold text-[#ff8900]" />
          <p className="text-2xl md:text-3xl font-bold">Osama</p>
          <p className="text-lg md:text-2xl font-semibold text-[#ff8900]">GYM</p>
        </div>

        <div className="hidden md:flex">
          <ul className="flex gap-6 lg:gap-10">
            <li><a href="#" className="text-gray-500 hover:text-[#ff8900] transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-500 hover:text-[#ff8900] transition-colors">Trainer</a></li>
            <li><a href="#" className="text-gray-500 hover:text-[#ff8900] transition-colors">Programs</a></li>
            <li><a href="#" className="text-gray-500 hover:text-[#ff8900] transition-colors">Blogs</a></li>
            <li><a href="#" className="text-gray-500 hover:text-[#ff8900] transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div className="hidden md:flex gap-4 lg:gap-5 items-center">
          <CiSearch className="text-2xl lg:text-3xl text-gray-500 hover:text-[#ff8900] cursor-pointer transition-colors" />
          <CiShoppingCart className="text-2xl lg:text-3xl text-gray-500 hover:text-[#ff8900] cursor-pointer transition-colors" />
          <input 
            type="button" 
            value="Login" 
            className="py-1 px-5 text-[#ff8900] hover:bg-[#ff8900] hover:text-emerald-50 border-[#ff8900] border-2 rounded-2xl cursor-pointer transition-all duration-300" 
          />
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-3xl text-[#ff8900] focus:outline-none"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 bg-gray-50 p-5 rounded-xl shadow-lg absolute top-full left-0 right-0 z-50">
          <ul className="flex flex-col items-center gap-4 w-full">
            <li><a href="#" className="text-gray-700 font-semibold hover:text-[#ff8900]">Home</a></li>
            <li><a href="#" className="text-gray-700 font-semibold hover:text-[#ff8900]">Trainer</a></li>
            <li><a href="#" className="text-gray-700 font-semibold hover:text-[#ff8900]">Programs</a></li>
            <li><a href="#" className="text-gray-700 font-semibold hover:text-[#ff8900]">Blogs</a></li>
            <li><a href="#" className="text-gray-700 font-semibold hover:text-[#ff8900]">Pricing</a></li>
          </ul>
          
          <div className="flex gap-6 mt-4 border-t border-gray-200 pt-4 w-full justify-center">
            <CiSearch className="text-3xl text-gray-500 hover:text-[#ff8900] cursor-pointer" />
            <CiShoppingCart className="text-3xl text-gray-500 hover:text-[#ff8900] cursor-pointer" />
          </div>
          
          <input 
            type="button" 
            value="Login" 
            className="mt-4 w-full max-w-50 py-2 px-5 text-[#ff8900] hover:bg-[#ff8900] hover:text-white border-[#ff8900] border-2 rounded-2xl cursor-pointer transition-all duration-300" 
          />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
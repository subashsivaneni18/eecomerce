// Navbar.js
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import { Menu } from "lucide-react";
import { CircleX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="fixed w-full z-50">
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white px-6 relative">
        <div className="flex items-center space-x-4">
          <p className="text-xl font-bold cursor-pointer" onClick={()=>navigate('/')}>Logo</p>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <SearchBar />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex">
            <NavIcons />
          </div>
          <div className="lg:hidden">
            <button onClick={() => setShowMenu(!showMenu)}>
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="fixed inset-0 bg-gray-800 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={() => setShowMenu(false)}
          >
            <CircleX className="text-white" />
          </button>
          <div className="max-h-screen overflow-y-auto flex flex-col items-center space-y-5">
            <SearchBar />

            <div className="text-white px-6">
              <NavIcons />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

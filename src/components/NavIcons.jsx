import React, { useState } from "react";
import { CircleUserRound, Filter } from "lucide-react";

const NavIcons = () => {
  const icons = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "AboutUs",
      path: "/",
    },
    {
      label: "Products",
      path: "/",
    },
    {
      label: "Industrial",
      path: "/",
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownItemClick = (label) => {
    // Handle dropdown item click
    console.log("Clicked:", label);
    // Close dropdown after item click
    setShowDropdown(false);
  };

  const applyFilter = () => {
    // Apply filter logic here
    console.log("Filter applied");
  };

  return (
    <div className="flex items-center mt-10 md:mt-0 md:space-x-4 relative">
      {icons.map((icon) => (
        <p key={icon.path} className="cursor-pointer px-2 text-lg text-white">
          {icon.label}
        </p>
      ))}
      <div className="cursor-pointer relative">
        <Filter onClick={toggleDropdown} />
        {showDropdown && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg p-4 z-40">
            <div className="mb-4">
              <label className="block text-sm font-semibold">Min Price</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Max Price</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Sort Order</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Select</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
            <button
              onClick={()=>{}}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600"
            >
              Apply
            </button>
          </div>
        )}
      </div>
      <div className="relative">
        <div className="text-xl cursor-pointer" onClick={toggleDropdown}>
          <CircleUserRound />
        </div>
      </div>
    </div>
  );
};

export default NavIcons;

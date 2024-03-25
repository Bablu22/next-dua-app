"use client";
import { useState } from "react";
import MobileSidebar from "./layout/MobileSidebar";

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative rounded overflow-hidden">
      {/* Background Image */}
      <div className="bg-banner-image h-56 bg-cover bg-center relative rounded">
        {/* Green Overlay */}
        <div className="absolute inset-0 bg-green-800 opacity-70"></div>
        {/* Fancy Text */}
        <div className="h-full flex flex-col items-center justify-center relative z-10">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-shadow-md">
            Dua
          </h1>
          <p className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
            A powerful connection between you and your Creator
          </p>
        </div>
      </div>
      {/* Responsive Burger Menu Icon */}
      <div className="md:hidden absolute top-4 right-4 z-20">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <MobileSidebar
          setSidebarOpen={setIsMenuOpen}
          sidebarOpen={isMenuOpen}
        />
      )}
    </div>
  );
};

export default Banner;

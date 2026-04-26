import React from "react";

const Navbar = () => {

  return (
    <nav className="bg-blue-400/60 text-white sticky top-0 z-50 backdrop-blur-xl border-b border-white/30 shadow-[0_10px_30px_rgba(96,165,250,0.2)]">
      <div className="mycontainer flex items-center justify-between p-4">
        <div className="logo font-bold text-2xl text-shadow-md cursor-pointer hover:scale-105 transition-transform duration-200">
            <span className="text-blue-700"> &lt;</span>
            <span>Pass</span>
            <span className="text-blue-700">Core/&gt;</span>
        </div>

        <a href="https://github.com/Khushi-1703" target="_blank"><button className="text-white bg-blue-600 mx-2 rounded-full flex justify-between items-center ring-1 ring-white hover:bg-blue-700 hover:scale-101 transition-transform duration-200 cursor-pointer shadow-lg text-shadow-md">
            <img className="invert w-8" src="/icons/github.svg" alt="github logo" />
            <span className="font-bold px-2 hidden sm:block">GitHub</span>
        </button></a>
      </div>
    </nav>
  );
};

export default Navbar;

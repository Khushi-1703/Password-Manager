import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-400/60 text-blue-900 backdrop-blur-xl border-t border-white/30 flex flex-col items-center w-full text-sm shadow-[30px_10px_0_rgba(96,165,250,0.2)] mt-10">
        <div className="logo font-bold text-2xl text-shadow-md cursor-pointer mt-1">
            <span className="text-blue-600"> &lt;</span>
            <span>Pass</span>
            <span className="text-blue-600">Core/&gt;</span>
        </div>

        <div className="flex justify-center items-center text-shadow-lg">
            Created with <img className="w-7 mx-1" src="icons/heart.png" alt="red heart" />by&nbsp;<a href="mailto:khushigupta1703@gmail.com" target="_blank" className="hover:underline">Khushi Gupta</a>
        </div>
    </footer>
  )
}

export default Footer
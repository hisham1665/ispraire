import React, { useState } from 'react';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="relative inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <h1 className="orbitron font-semibold text-2xl text-white sm:text-3xl">
              Ispirare <span className="text-xl sm:text-2xl font-bold">2.0</span>
            </h1>
          </a>
        </div>
       
        <div className={`${isOpen ? 'block' : 'hidden'} sm:flex sm:gap-x-6 lg:gap-x-12 transition-all duration-300 ease-in-out`} >
          <a href="#" className="text-md sm:text-md font-semibold text-gray-300 hover:text-gray-200"> About </a>
          <a href="#" className="text-md sm:text-md font-semibold text-gray-300 hover:text-gray-200">  Contact Us </a>
          <a href="#" className="text-md sm:text-md font-semibold text-gray-300 hover:text-gray-200"> Programmes </a>
          <a href="#" className="text-md sm:text-md font-semibold text-gray-300 hover:text-gray-200"> Gallery  </a>
        </div>
        <div className={` flex flex-1 justify-end ${isOpen ? 'block' : 'hidden'} sm:flex sm:gap-x-6 lg:gap-x-12 transition-all duration-300 ease-in-out` }>
          <button className="text-md sm:text-md font-semibold text-gray-300 hover:text-gray-200"> Register <span aria-hidden="true" className=''>&rarr;</span> </button>
        </div>
            <button className="sm:hidden flex justify-center w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full" onClick={handleToggle} >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
      </nav>

      {/* Animated Navigation Links for Small Screens */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:hidden fixed top-0 left-0 w-full bg-white shadow-md p-4 transition-all duration-400 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={handleToggle}
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18  6M6 6l12 12"
            />
          </svg>
        </button>
        <a href="#" className="block text-sm font-semibold text-gray-900 hover:text-gray-700 mb-4">
          About
        </a>
        <a href="#" className="block text-sm font-semibold text-gray-900 hover:text-gray-700 mb-4">
          Contact Us
        </a>
        <a href="#" className="block text-sm font-semibold text-gray-900 hover:text-gray-700 mb-4">
          Programmes
        </a>
        <a href="#" className="block text-sm font-semibold text-gray-900 hover:text-gray-700 mb-4">
          Gallery
        </a>
        <div className="block text-sm font-semibold text-gray-900 hover:text-gray-700 mb-4">
          <button > Register <span aria-hidden="true" className=''>&rarr;</span> </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
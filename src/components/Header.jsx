import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold gradient-text">Portfolio</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Dark Mode Toggle */}
          <button
            id="theme-toggle"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <i id="theme-icon" className="fas fa-moon text-gray-700 dark:text-yellow-300"></i>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden hamburger p-2"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-2 mobile-menu`}>
          <div className="flex flex-col space-y-3 py-3">
            <a href="#home" className="nav-link px-2 py-1">Home</a>
            <a href="#about" className="nav-link px-2 py-1">About</a>
            <a href="#skills" className="nav-link px-2 py-1">Skills</a>
            <a href="#projects" className="nav-link px-2 py-1">Projects</a>
            <a href="#contact" className="nav-link px-2 py-1">Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

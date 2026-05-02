import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check initial preference from localStorage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDarkMode(true);
    }
  };

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
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <Sun className="text-yellow-300 w-6 h-6" />
            ) : (
              <Moon className="text-gray-700 w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-2`}>
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

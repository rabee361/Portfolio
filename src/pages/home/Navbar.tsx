import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from '../../components/Icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === null) {
      return false;
    }
    try {
      const initialValue = JSON.parse(saved);
      return initialValue || false;
    } catch (error) {
      console.error("Error parsing dark mode state:", error);
      return false;
    }
  });

  const darkModeHandler = () => {
    setDark(!dark);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", dark ? "true" : "false");
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = (
    <>
      <li>
        <button
          type="button"
          onClick={() => scrollToSection('contact')}
          className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 transition-colors duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#508C9B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-900"
        >
          Contact
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => scrollToSection('projects')}
          className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 transition-colors duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#508C9B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-900"
        >
          Projects
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => scrollToSection('about')}
          className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 transition-colors duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#508C9B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-900"
        >
          About
        </button>
      </li>
    </>
  );

  return (
    <div className={`fixed top-0 w-full h-16 z-50 transition-colors duration-300 ${scrolled ? "bg-[#EEEEEE] dark:bg-gray-900 shadow-sm" : "bg-transparent"}`}>
      <div className="flex justify-between items-center h-full px-5 sm:px-10">
        {/* Logo */}
        <button
          type="button"
          onClick={scrollToTop}
          className="text-xl font-bold text-[#201E43] dark:text-white transition-colors duration-200 hover:text-[#508C9B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#508C9B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:hover:text-blue-300 dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-900"
          aria-label="Scroll to top"
        >
          Rabee Hasan
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex gap-8 font-medium">
            {navLinks}
          </ul>
          {/* Theme Controller */}
          <button
            onClick={darkModeHandler}
            className="p-2 rounded-full text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-400 transition-colors duration-200"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Button & Toggle */}
        <div className="flex items-center gap-4 sm:hidden">
          <button
            onClick={darkModeHandler}
            className="p-2 rounded-full text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-400 transition-colors duration-200"
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#508C9B] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-900"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FaTimes className="size-6" /> : <FaBars className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div id="mobile-navigation" className={`fixed inset-0 top-16 bg-white dark:bg-[#111] z-40 flex flex-col items-center justify-start pt-20 gap-8 sm:hidden transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col items-center gap-8 text-xl font-medium">
          {navLinks}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
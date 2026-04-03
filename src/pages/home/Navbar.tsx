import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
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
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = (
    <>
      <li onClick={() => scrollToSection('contact')} className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 ease-linear duration-100 cursor-pointer">Contact</li>
      <li onClick={() => scrollToSection('projects')} className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 ease-linear duration-100 cursor-pointer">Projects</li>
      <li onClick={() => scrollToSection('about')} className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 ease-linear duration-100 cursor-pointer">About</li>
    </>
  );

  return (
    <div className={`fixed top-0 w-full h-16 z-50 transition-colors duration-300 ${scrolled ? "bg-[#EEEEEE] dark:bg-gray-900 shadow-sm" : "bg-transparent"}`}>
      <div className="flex justify-between items-center h-full px-5 sm:px-10">
        {/* Logo */}
        <span className="text-xl font-bold text-[#201E43] dark:text-white cursor-pointer" onClick={() => navigate('/')}>
          Rabee Hasan
        </span>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex gap-8 font-medium">
            {navLinks}
          </ul>
          {/* Theme Controller */}
          <button
            onClick={darkModeHandler}
            className="p-2 rounded-full text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {dark ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Button & Toggle */}
        <div className="flex items-center gap-4 sm:hidden">
          <button
            onClick={darkModeHandler}
            className="p-2 rounded-full text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-400 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {dark ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-400 transition-colors">
            {menuOpen ? <FaTimes className="size-6" /> : <FaBars className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 top-16 bg-white dark:bg-[#111] z-40 flex flex-col items-center justify-start pt-20 gap-8 sm:hidden transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col items-center gap-8 text-xl font-medium">
          {navLinks}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
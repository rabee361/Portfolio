import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

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
      <li onClick={() => { navigate('/blog'); setMenuOpen(false); }} className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 ease-linear duration-100 cursor-pointer">Blog</li>
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
          <label className="swap swap-rotate dark:hover:text-blue-400 hover:text-[#508C9B] transition-colors duration-100">
            <input type="checkbox" className="theme-controller" value="synthwave" checked={dark} onClick={darkModeHandler} readOnly />
            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
          </label>
        </div>

        {/* Mobile Menu Button & Toggle */}
        <div className="flex items-center gap-4 sm:hidden">
          <label className="swap swap-rotate dark:hover:text-blue-400 hover:text-[#508C9B] transition-colors duration-100">
            <input type="checkbox" className="theme-controller" value="synthwave" checked={dark} onClick={darkModeHandler} readOnly />
            <svg className="swap-off fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
            <svg className="swap-on fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
          </label>
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
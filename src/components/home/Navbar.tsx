import { useEffect, useState } from "react";

function Navbar() {

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    console.log(saved);
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

  useEffect(() => {
    localStorage.setItem("darkMode", dark ? "true" : "false");
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const darkModeHandler = () => {
    setDark(!dark);
  };

  return (
    <div className=" fixed top-0 flex justify-between h-14 w-full dark:text-white text-[#201E43] font-medium z-10">
        <div className="sm:flex w-full flex justify-between sm:justify-start sm:h-full sm:items-center sm:ml-5 sm:gap-5">
            <span className="ml-5 mt-6 sm:ml-0 sm:mt-0">
              Rabee Hasan
            </span>
            <label className="swap swap-rotate mr-5 mt-2 sm:mr-0 sm:mt-0 dark:hover:text-blue-400 hover:text-[#508C9B] ease-linear duration-100">
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" className="theme-controller" value="synthwave" checked={dark} onClick={()=> darkModeHandler()} />
              {/* sun icon */}
              <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
              {/* moon icon */}
              <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
            </label>
        </div>
        <div className="mr-10 hidden sm:block">
            <ul className="flex h-full items-center gap-8 ">
                <li onClick={() => {
                  const element = document.getElementById('contact')
                  element?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }} className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 ease-linear duration-100 cursor-pointer">Contact</li>
                <li onClick={() => {
                  const element = document.getElementById('projects')
                  element?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }} className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 ease-linear duration-100 cursor-pointer">Projects</li>
                <li  onClick={()=> {
                  const element = document.getElementById('about');
                  element?.scrollIntoView({
                    behavior:'smooth'
                  })
                }} className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 ease-linear duration-100 cursor-pointer">About</li>
                <li  onClick={()=> {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({
                    behavior:'smooth'
                  })
                }} className="text-[#201E43] dark:text-white hover:text-[#508C9B] dark:hover:text-blue-300 ease-linear duration-100 cursor-pointer">Services</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
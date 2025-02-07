import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Cookies from 'js-cookie';
import logo from '../assets/logo_test.svg'

export default function Nav() {

      // theme control
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
      const applyTheme = (isDark) => {
        setIsDarkMode(isDark);
        if (isDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };
  
      const storedTheme = Cookies.get('theme');
      if (storedTheme) {
        applyTheme(storedTheme === 'dark');
      } else {
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(userPrefersDark);
      }
  
      const handleChange = (e) => {
        applyTheme(e.matches);
      };
      
      // auto update theme on system theme change
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', handleChange);
  
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }, []);
  
    const toggleTheme = () => {
      const newTheme = isDarkMode ? 'light' : 'dark';
      setIsDarkMode(!isDarkMode);
      document.documentElement.classList.toggle('dark');
      Cookies.set('theme', newTheme, { expires: 365 });
    };

    // menu control
    const handleMenu = () => {
        const button = document.querySelector("#menub");
         const menu = document.querySelector("#menu");
         menu.classList.toggle("active"),
         button.classList.toggle("change"),
        menu.classList.toggle("height"),
        menu.classList.contains("active")
         ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");      
    };

    const handlePricing = () =>{
      document.querySelector("#serv").scrollIntoView({ behavior: 'smooth' });
    };
  
    const handleWork = () => {
      const targetPosition = document.querySelector("#ourwork").offsetTop - 40; // 2rem offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      if (window.innerWidth < 768) {
      handleMenu();
    }
    };

    const handleAbout = () => {
      const targetPosition = document.getElementById('aboutus').offsetTop - 120; // 2rem offset
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      if (window.innerWidth < 768) {
      handleMenu();
    }
    };
  
    return (
      <>
        {/* Top */}
        <div className="hiddenm bg-gray-100 dark:bg-gray-900 dark:text-gray-200 shadow-sm sticky top-0 z-10 transition ease-in duration-300">
          <div className="flex justify-between items-center text-lg md:max-w-[90rem] mx-auto">
          {/* Left */}
          <div className=""><
            a href="https://pactel.site">
              <img src={logo} width="80" height="80" className="mr-4 dark:bg-gray-400" alt="logo" />
            </a></div>
            {/* Right */}
          <div className="md:flex items-center dark:text-gray-200 text-black">
            
            <a href="#" className="inline-block p-3 md:mr-2 hover:text-gray-800 dark:hover:text-gray-400">Home</a>
            <button onClick={handlePricing} className="inline-block p-3 md:mr-4 hover:text-gray-800 dark:hover:text-gray-400">Pricing</button>
            <a href="https://wa.me/201004416036" target="_blank" className="px-2 md:mr-4 hover:text-gray-800 dark:hover:text-gray-400">Call Us</a>
            <a onClick={handleMenu} href="https://pactel20.wordpress.com/" className="flex ml-2 hover:text-gray-800 dark:hover:text-gray-400">
              Articles
            </a>
            <img className="md:mr-4 dark:invert" src='https://pactel.site/.netlify/images?q=50&url=%2Fnew.webp&fit=cover&q=100&fm=webp&w=60&h=40' width="30" height="20" alt="new" />
            <a href="https://courses.pactel.site" className="flex ml-2 hover:text-gray-800 dark:hover:text-gray-400">Courses</a>
            <img className="md:mr-4 dark:invert" src='https://pactel.site/.netlify/images?q=50&url=%2Fnew.webp&fit=cover&q=10&fm=webp&w=60&h=40' width="30" height="20" alt="new" />
            <button onClick={handleAbout} className="px-2 hover:underline hover:text-gray-800 dark:hover:text-gray-400">About Us</button>
            <button aria-label='theme-toggle' onClick={toggleTheme} className='theme-switch min-w-[4rem]'><FontAwesomeIcon icon={isDarkMode? faSun:faMoon} size='lg'/></button>
          </div>
          </div>
        </div>
  
        {/* Mobile Navigation */}
        <nav
          style={{ paddingTop: "8px" }}
          className="nav dark:bg-gray-900 dark:text-gray-200 transition ease-in duration-300 md:hidden shadow-md sticky top-0 z-10 bg-white px-4 justify-between font-semibold"
        >
          <div className="flex justify-between">
            <a href="https://pactel.site">
              <img src={logo} width="60" height="60" className="justify-between dark:bg-gray-400" alt="logo" />
            </a>
            <div className="flex">
              <button aria-label='theme-toggle' onClick={toggleTheme} className='theme-switch mr-5'><FontAwesomeIcon icon={isDarkMode? faSun:faMoon} size='lg'/></button>
            <button aria-label='menu-button' id="menub" onClick={handleMenu} className="md:hidden justify-between">
            <div className="container">
                    {['bar1', 'bar2', 'bar3'].map((bar, index) => (
                      <div key={index} className={bar}>
                        <hr className="border-2 bg-black border-black dark:bg-gray-400 dark:border-gray-400" />
                      </div>
                    ))}
                  </div>
            </button>
            </div>
          </div>

          <div className="flex justify-center p-1a">
            <div
              className="menu dark:bg-gray-900 dark:text-gray-300 transition ease-in duration-300 mt-2 px-4 bg-gray-200"
              id="menu"
            >
              <a onClick={handleMenu} href="#" className="block mr-2 mt-4 hover:bg-gray-400 p-2">Home</a>
              <hr className="border-1 rounded border-gray-400 m-2 opacity-50" />
              <a href="https://wa.link/go5sb5" onClick={handleMenu} className="inline-block ml-2a hover:bg-gray-400 p-2 hover:text-white">
                Pricing <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
              <hr className="border-1 rounded border-gray-400 m-2 opacity-50" />
              <a href="https://wa.me/201154185848" className="block mr-2a hover:bg-gray-400 p-2">Call us</a>
              <hr className="border-1 rounded border-gray-400 m-2 opacity-50" />
              <div className="hidden transition ease-in-out duration-200" id="lang">
                <a href="#" className="inline-block mr-2 hover:bg-gray-400 px-4 py-2 lang">عربي</a>
              </div>
              <button onClick={handleWork} className="flex justify-center mx-auto w-full hover:bg-gray-400 p-2">Our Work</button>
              <hr className="border-1 rounded border-gray-400 m-2 opacity-50" />
              <a onClick={handleMenu} href="https://pactel20.wordpress.com/" className="flex justify-center mx-auto w-full hover:bg-gray-400 p-2">
                Articles <img className="px-2a ml-2 dark:invert" src='https://pactel.site/.netlify/images?q=50&url=%2Fnew.webp&fit=cover&q=10&fm=webp&w=30&h=20' width="30" height="20" alt="new" />
              </a>
              <hr className="border-1 rounded border-gray-400 m-2 opacity-50" />
              <a href="https://courses.pactel.site" className="flex justify-center mx-auto w-full hover:bg-gray-400 p-2">
                Courses <img className="px-2a ml-2 dark:invert" src='https://pactel.site/.netlify/images?q=50&url=%2Fnew.webp&fit=cover&q=10&fm=webp&w=30&h=20' width="30" height="20" alt="new" />
              </a>
              <hr className="border-1 rounded border-gray-400 m-2 opacity-50" />
              <button onClick={handleAbout} className="flex justify-center mx-auto w-full hover:bg-blue-500 p-2">About Us</button>
            </div>
          </div>
        </nav>
      </>
    );
  };

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import logo from "../assets/logo_test.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
export default function Loader({ isReady }) {
  const [isVisible, setIsVisible] = useState(true);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const applyTheme = (isDark) => {
      // setIsDarkMode(isDark);
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

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleChange);

    if (isReady) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 100); // Match the duration of the opacity transition

      return () => {
        clearTimeout(timer);
        mediaQuery.removeEventListener('change', handleChange);

      }; // Cleanup timeout on unmount
    }
  }, [isReady]);

  if (!isVisible) return null;

  return (
    <div className={`spin-wrapper fixed left-0 top-0 h-full w-full bg-gray-200 dark:bg-gray-900 transition-opacity duration-100 ${isReady ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="flex justify-center items-center h-full">
      <div className="flex-col justify-center">
        <img className="dark:invert-50" src={logo} width="192" height="192" alt="pactel_logo" />
        <FontAwesomeIcon icon={faSpinner} spin size="xl" className="dark:text-gray-100" style={{ marginLeft: "76px" }} />
      </div>
    </div>
      <div id="progress" className="progress fixed z-30 top-0 h-2 rounded-r dark:bg-gray-500 bg-gray-700"></div>
    </div>
  );
}
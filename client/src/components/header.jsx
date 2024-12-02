import React, { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const Header = ({ toggleTheme }) => {
  const [isOpen, mobileMenu] = useState(false);

  // Get current theme from the HTML data attribute
  const currentTheme = document.documentElement.getAttribute('data-theme');

  const toggleMobileMenu = () => {
    mobileMenu(!isOpen);
  };

  return (
    <header>
      <nav className={`bg-white dark:bg-gray-800 fixed w-full z-50 shadow-md bg-opacity-90`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-24">
          <div className="flex items-center h-16">
            {/* Logo and Name */}
            <div className="flex items-center">
              <img className="h-16 w-auto" src="/PCEA_logo.png" alt="PCEA CHURCH LOGO" />
              <span className="text-black dark:text-white text-lg font-semibold ml-2">
                PCEA BETHEL
	        <span style={{ fontFamily: "'Caveat', cursive"}}> RUAI</span>
              </span>
            </div>

            {/* Desktop navigation */}
            <div className="flex justify-end flex-1">
              <nav className="hidden lg:flex lg:space-x-4">
                <a href="/" className="rounded-md px-3 py-2 text-sm font-medium text-black dark:text-white hover:bg-blue-900 hover:text-white">
                  HOME
                </a>
                <a href="/about" className="rounded-md px-3 py-2 text-sm font-medium text-black dark:text-white hover:bg-blue-900 hover:text-white">
                  ABOUT US
                </a>
                <a href="/services" className="rounded-md px-3 py-2 text-sm font-medium text-black dark:text-white hover:bg-blue-900 hover:text-white">
                  SERVICES
                </a>
                <a href="/events" className="rounded-md px-3 py-2 text-sm font-medium text-black dark:text-white hover:bg-blue-900 hover:text-white">
                  EVENTS
                </a>
                <a href="/blog" className="rounded-md px-3 py-2 text-sm font-medium text-black dark:text-white hover:bg-blue-900 hover:text-white">
                  BLOGS
                </a>
              </nav>

              {/* Theme toggle button */}
              <button onClick={toggleTheme} className="ml-4 p-2 text-black dark:text-white">
                {currentTheme === 'night' ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              </button>

              {/* Mobile menu button */}
              <div className={`flex lg:hidden ml-4 ${isOpen ? 'hidden' : 'block'}`}>
                <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-black dark:text-white">
                  <span className="sr-only">Open main menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden fixed inset-x-0 top-0 bg-white dark:bg-gray-800 shadow-lg z-50 bg-opacity-90 h-1/2 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu} className="text-black dark:text-white">
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block rounded-md px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-blue-900 hover:text-white">
              HOME
            </a>
            <a href="/about" className="block rounded-md px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-blue-900 hover:text-white">
              ABOUT US
            </a>
            <a href="/services" className="block rounded-md px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-blue-900 hover:text-white">
              SERVICES
            </a>
            <a href="/events" className="block rounded-md px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-blue-900 hover:text-white">
              EVENTS
            </a>
            <a href="/blog" className="block rounded-md px-3 py-2 text-base font-medium text-black dark:text-white hover:bg-blue-900 hover:text-white">
              BLOGS
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

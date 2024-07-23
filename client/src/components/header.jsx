
const Header = () => {
  return (
    <header>
      <nav className="bg-white fixed w-full z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Left side - Church Logo and Name */}
            <div className="flex items-center">
              <img
                className="h-16 w-auto"
                src="../../PCEA_logo.png"
                alt="PCEA CHURCH LOGO"
              />
              <span className="text-black text-lg font-semibold ml-2">
                PCEA BETHEL
              </span>
            </div>
            {/* Right side - Desktop Navigation Links and Mobile Menu Button */}
            <div className="flex justify-end flex-1">
              {/* Desktop navigation links */}
              <nav className="hidden lg:flex lg:space-x-4">
                <a
                  href="/"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-900 hover:text-white"
                >
                  HOME
                </a>
                <a
                  href="/about"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-900 hover:text-white"
                >
                  ABOUT US
                </a>
                <a
                  href="/services"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-900 hover:text-white"
                >
                  SERVICES
                </a>
                <a
                  href="/events"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-900 hover:text-white"
                >
                  EVENTS
                </a>
                <a
                  href="/blogs"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-blue-900 hover:text-white"
                >
                  BLOGS
                </a>
              </nav>
              {/* Mobile menu button */}
              <div className="flex lg:hidden ml-4">
                <button
                  type="button"
                  className="text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* Icon when menu is closed */}
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* Icon when menu is open */}
                  <svg
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-900 hover:text-white"
            >
              HOME
            </a>
            <a
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-900 hover:text-white"
            >
              ABOUT US
            </a>
            <a
              href="/services"
              className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-900 hover:text-white"
            >
              SERVICES
            </a>
            <a
              href="/events"
              className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-900 hover:text-white"
            >
              EVENTS
            </a>
            <a
              href="/blogs"
              className="block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-900 hover:text-white"
            >
              BLOGS
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

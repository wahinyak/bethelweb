import churchLogo from '/PCEA_logo.png'


const Footer = () => {
  return (
    <footer className="bg-black mt-8 pt-6 pb-2 text-white">
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex-1 md:flex-none flex items-center">
          <img className="h-18 w-10" src={churchLogo} alt="PCEA CHURCH LOGO" />
          <span className="text-lg font-semibold ml-2">PCEA BETHEL RUAI CENTRAL PARISH
	  </span>
        </div>
       
        {/* Contact information */}
        <div className="flex-1 pt-4 md:flex-none">
          <h2 className="text-lg font-semibold p-2">CONTACT US</h2>
          {/* Email Contact */}
          <a href="mailto:bethelpcea.rcp@gmail.com">
            <div className="flex p-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 w-4 text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <span className="ml-2">bethelpcea.rcp@gmail.com</span>
            </div>
          </a>
          {/* Phone Contact */}
          <a href="tel:+254 710 001203">
            <div className="flex p-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 w-4 text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <span className="ml-2">+254 710 001203</span>
            </div>
          </a>
          
          {/* Google maps Location */}
          <a
            href="https://maps.app.goo.gl/b1nELocnRAMZSNnJA?g_st=atm"
            target="_blank"
          >
            <div className="flex p-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 w-4 text-blue-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span className="ml-2">
                Block 10, Kangundo Rd Ruai, Nairobi Kenya
              </span>
            </div>
          </a>
        </div>
      </div>
      {/* Copyright Statement */}
      <div className="bottom-0 text-center text-xs pt-2">
        <p>Copyright &copy; {new Date().getFullYear()} - PCEA Bethel &nbsp;&nbsp; All rights reserved</p>
      </div>
    </footer>

  );
}

export default Footer;

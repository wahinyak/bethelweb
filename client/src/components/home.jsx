import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-router-dom';
const Home = () => {

  const slides = [
    {url: "https://drive.google.com/thumbnail?id=1h8THgt4GHR3U8LYybpUEvN1eCufD6y-T&sz=h600", text: "WELCOME TO PCEA BETHEL CHURCH, WHERE EVERYBODY MATTERS", color: "white"},
    {url: "https://drive.google.com/thumbnail?id=1mg4mMbmodkAEAchfSnaweHmvgTE-iJCl&sz=h600", text: "WELCOME TO PCEA BETHEL CHURCH, WHERE EVERYBODY MATTERS", color: "white"},
    {url: "https://drive.google.com/thumbnail?id=1RsyPswASPiCFM-7Vkjv4zLAq2WMOCy5G&sz=h600", text: "WELCOME TO PCEA BETHEL CHURCH, WHERE EVERYBODY MATTERS", color: "black"},
    {url: "https://drive.google.com/thumbnail?id=1HOCNMwru8c9XeJekH79qqUFB44OOU8A6&sz=h600", text: "WELCOME TO PCEA BETHEL CHURCH, WHERE EVERYBODY MATTERS", color: "black"},
  ]

  const pages = [
    {title: "ABOUT US", text: "Learn about Bethel Church, our Mission, Vision, Core values, Theme of the current year, our Leadership and Ministries.", link: "/about"},
    {title: "SERVICES", text: "View our Order of Services and explore recordings of the past 5 services to Stay Engaged With Us.", link: "services"},
    {title: "EVENTS", text: "Stay Up To Date and with our activities through an interactive Google Calendar and explore Upcoming Events.", link: "events"},
    {title: "BLOGS", text: "Read our Articles or Posts to be inspired and stay informed.", link: "blog"},
  ]

  const[curr, setIndex] = useState(0);
  const interval = 5000;

  const prev = () => {
    const firstIdx = curr === 0;
    const newIdx = firstIdx ? slides.length - 1 : curr - 1;
    setIndex(newIdx);
  };

  const next = () => {
    const lastIdx = curr === slides.length - 1;
    const newIdx = lastIdx ? 0 : curr + 1;
    setIndex(newIdx);
  };

  const toSlide = (slideIdx) => {
    setIndex(slideIdx);
  }

  useEffect(() => {
    const slideInterval = setInterval(next, interval);
    return () => clearInterval(slideInterval);
  }, [next, interval]);

  const handleClick = (path) => {
    window.location.href = path;
    window.scrollTo(0, 0); // Top of the page
  };

  return (
    
    <div className="flex-1">
      <section className="bg-cover bg-center lg:h-screen md:h-[80vh] sm:h-[70vh] min-h-[60vh] duration-500 relative mb-10"
        style={{ 
          backgroundImage: `url(${slides[curr].url})`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
        }}>

	{/* Chevron Left */}
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
          <button onClick={prev} className="text-white bg-black bg-opacity-80 rounded-full p-1 hover:bg-black"><ChevronLeft size={30} /></button>
        </div>

	{/* Chevron Right */}
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
          <button onClick={next} className="text-white bg-black bg-opacity-80 rounded-full p-1 hover:bg-black"><ChevronRight size={30} /></button>
        </div>

	{/* Slides Indicators */}
        <div className="absolute bottom-2 right-0 left-0 flex justify-center gap-4 z-20">
          {slides.map((slide, slideIdx) =>
	    <div
	      key={slideIdx}
	      onClick={() => toSlide(slideIdx)}
	      className={`text-3xl duration-500 cursor-pointer ${curr === slideIdx ? "text-blue-400": "text-white"}`}>
	      <RxDotFilled />
	    </div>)}
        </div>

	{/* Slides text */}
        <div className="absolute inset-0 flex items-end justify-center pb-20">
          {slides.map((slide, idx) =>
            <p key={idx} style={{ color: slide.color }} className="text-2xl font-bold">{curr === idx ? slide.text : '' }</p>)}
        </div>

      </section>

      <section className="container mx-auto p-8 flex justify-around">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          {pages.map((page) =>
            <Link
	      to={page.link}
	      onClick={() => handleClick(page.link)}
	      className="border-t-8 border-b-8 border-base-100 hover:border-blue-900 card w-full sm:w-80 md:w-[38vw] lg:w-[40vw] shadow-2xl lg:h-[70vh] md:h-[70vh] sm:h-[60vh] min-h-[60vh]">
              <div className="card-body flex items-center justify-center">
	        <div>
                  <h2 className="card-title font-bold text-blue-900">
	            {page.title}
                  </h2>
                </div>
	        <div>
                  <p className="font-serif italic text-gray-900 dark:text-white">{page.text}</p>
                </div>
              </div>

            </Link>)}
        </div>
      </section>

      <section className="relative bg-cover bg-center"
        style={{
	  backgroundImage: `url("https://drive.google.com/thumbnail?id=1PjjaWysqg7WTRnrHDAeeOWxCfDDr9c0t&sz=h600")`,
	  backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh',
	  }}>

        <div className="absolute inset-0 flex flex-col items-center justify-around sm:flex-row">
          <img src="https://drive.google.com/thumbnail?id=1eoqvPtFKW3ltgY5uUpU0kPPTjeyNxM_Q&sz=h400" alt="Parish Minister"/>
	  <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto p-2">
	    <h1 className="text-lg font-bold text-black">Word from our Parish Minister</h1>

	    <p className="text-sm text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      
	    <h2
  className="pt-2 text-4xl font-semibold underline text-black"
  style={{ fontFamily: "'Caveat', cursive", transform: "rotate(-10deg)" }}
>
  Rev. Moses Kihara
</h2>
	  </div>
        </div>

      </section>

    </div>
  );
};

export default Home;

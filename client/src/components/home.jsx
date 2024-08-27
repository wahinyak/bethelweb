import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { FaCircle } from 'react-icons/fa';

const Home = () => {

  const slides = [
    {url: "https://drive.google.com/thumbnail?id=1h8THgt4GHR3U8LYybpUEvN1eCufD6y-T&sz=h600"},
    {url: "https://drive.google.com/thumbnail?id=1mg4mMbmodkAEAchfSnaweHmvgTE-iJCl&sz=h600"},
    {url: "https://drive.google.com/thumbnail?id=1RsyPswASPiCFM-7Vkjv4zLAq2WMOCy5G&sz=h600"},
    {url: "https://drive.google.com/thumbnail?id=1HOCNMwru8c9XeJekH79qqUFB44OOU8A6&sz=h600"},
  ]

  const[curr, setIndex] = useState(0);

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

  return (
    <div className="flex-1">
      <section className="bg-cover bg-center text-white duration-500 relative mb-10"
        style={{ 
          backgroundImage: `url(${slides[curr].url})`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh'
        }}>

        <div className="absolute inset-0 p-2 flex items-center justify-between">
          <button onClick={prev} className="text-white bg-black bg-opacity-80 rounded-full p-1 hover:bg-black"><ChevronLeft size={30} /></button>
          <button onClick={next} className="text-white bg-black bg-opacity-80 rounded-full p-1 hover:bg-black"><ChevronRight size={30} /></button>
        </div>

        <div className="absolute bottom-2 right-0 left-0 flex justify-center gap-4">
          {slides.map((slide, slideIdx) =>
	    <div className={`text-xs bg-black rounded-full p-0.5 ${curr === slideIdx ? "text-blue-400": "text-white"}`}><FaCircle /></div>)}
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
	    <h1 className="text-lg font-bold">Word from our Parish Minister</h1>
	    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
	    <h2 className="pt-2 text-2xl font-semibold underline">Rev. Moses</h2>
	  </div>
        </div>

      </section>

    </div>
  );
};

export default Home;

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
    <div className="flex-1 relative">
      <section className="background-image bg-cover bg-center text-white duration-500" 
        style={{ 
          backgroundImage: `url(${slides[curr].url})`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100vh'
        }}
      >
      </section>

      <div className="absolute inset-0 p-2 flex items-center justify-between">
        <button onClick={prev} className="text-white bg-black bg-opacity-80 rounded-full p-1 hover:bg-black"><ChevronLeft size={30} /></button>
        <button onClick={next} className="text-white bg-black bg-opacity-80 rounded-full p-1 hover:bg-black"><ChevronRight size={30} /></button>
      </div>

      <div className="absolute bottom-2 right-0 left-0 flex justify-center gap-4">
        {slides.map((slide, slideIdx) =>
	  <div className="text-xs"><FaCircle /></div>)}
      </div>

    </div>
  );
};

export default Home;

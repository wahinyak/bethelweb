import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/notfound';
import Services from './components/services';

const App = () => {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </div>
  );
};

export default App;

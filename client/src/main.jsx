import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as  Route, Routes } from 'react-router-dom';
import App from '../src/App.jsx';
import './index.css'
import About from './components/about.jsx';
import NotFound from './components/notfound.jsx';
import Home from './components/home.jsx';
ReactDOM.render(
  <React.StrictMode>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    
  </React.StrictMode>,
  document.getElementById('root')
);

import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Events from './components/events';
import NotFound from './components/notfound';
import Services from './components/services';
import Blogpost from './blog/pages/Blogpost';
import Bloghome from './blog/pages/Bloghome';
import Archive from './blog/pages/Archive';
import './App.css';

function App() {
  const [theme, setTheme] = useState('cupcake');

  useEffect(() => {
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || (userPrefersDark ? 'night' : 'cupcake');

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'night' ? 'cupcake' : 'night';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="appContainer">
      <Header toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Bloghome />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/blog/:slug" element={<Blogpost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

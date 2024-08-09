import {Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Homeome';
import About from './components/about';
import NotFound from './components/Notfound';
import Services from './components/services';
import Bloghome from './blog/pages/Bloghome';
import Archive from './blog/pages/Archive';
import Blogpost from './blog/pages/Blogpost';

const App = () => {
  return (
    <div>
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path='/services' element={<Services />} />
        <Route path='/bloghome' element={<Bloghome />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/blogpost' element={<Blogpost />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

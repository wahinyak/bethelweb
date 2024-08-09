import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/Notfound';
import Services from './components/Services';
import Blogpost from './blog/pages/Blogpost';
import Bloghome from './blog/pages/Bloghome';
import Header from '../src/components/header';
import Footer from '../src/components/Footer';


const App = () => {
  return (
    <div>
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Bloghome />} />
        <Route path='/blog/:slug' element={<Blogpost />} />    
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Services from './components/Services';
// import Blog from './blog/pages/Blog';
import Blogpost from './blog/pages/Blogpost';
import Homepage from './blog/pages/Bloghome';
import Header from '../src/components/Header';
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
        <Route path='/blog' element={<Homepage />} />
        <Route path='/blog/:slug' element={<Blogpost />} />    
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

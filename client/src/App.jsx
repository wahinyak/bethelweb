import {Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/Notfound';
import Services from './components/Services';
import Blogpost from './blog/pages/Blogpost';
import Bloghome from './blog/pages/Bloghome';
import Archive from './blog/pages/Archive';
import Header from './components/header'


const App = () => {
  return (
    <div className="appContainer">
    
      <Header />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Bloghome />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/blog/:slug' element={<Blogpost />} />    
      </Routes>
    </div>
    </div>
  );
};

export default App;

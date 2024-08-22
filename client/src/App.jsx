import {Route, Routes } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import NotFound from './components/notfound';
import Services from './components/services';
import Blogpost from './blog/pages/Blogpost';
import Bloghome from './blog/pages/Bloghome';
import Archive from './blog/pages/Archive';
import Header from './components/header'


function App() {
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
}

export default App;

import {Route, Routes } from 'react-router-dom';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Events from './components/events.jsx'
import NotFound from './components/notfound.jsx';
import Services from './components/services.jsx';
import Blogpost from './blog/pages/Blogpost';
import Bloghome from './blog/pages/Bloghome';
import Archive from './blog/pages/Archive';
import './App.css';

function App() {
  return (
    <div className="appContainer">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path='/services' element={<Services />} />
        <Route path='/events' element={<Events />} />
        <Route path='/blog' element={<Bloghome />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/blog/:slug' element={<Blogpost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import {Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Homeome';
import About from './components/about';
import NotFound from './components/notfound';
import Services from './components/services';

const App = () => {
  return (
    <div className="appContainer">
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import {Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/Notfound';
import Services from './components/Services';

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

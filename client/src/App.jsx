import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Events from './components/events';
import NotFound from './components/notfound';
import Services from './components/services';
import './App.css';

const App = () => {
  return (
    <div className="appContainer">
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path='/services' element={<Services />} />
        <Route path='/events' element={<Events />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

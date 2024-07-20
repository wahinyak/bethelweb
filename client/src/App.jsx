import './App.css';
import { Link } from 'react-router-dom';
import About from './components/about';
import NotFound from './components/notfound.jsx';


function App() {
return ( 
<div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about"><About /></Link></li>
          <li><Link to="/notfound"><NotFound /></Link></li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};


export default App

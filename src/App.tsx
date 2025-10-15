import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './App.scss'
import Home from './modules/Home/home.tsx';
import Pre from './components/Pre/pre.tsx';
import Navbar from './components/navbar/navbar.tsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [load, setLoad] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false); 
    }, 1200);

  return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000,
       easing: 'ease-in-out',
      once: true, 
      offset: 100 
     });
  }, []);

  return (
    <Router>
      <Pre load={load} />
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
       </div>
    </Router>
  )
}

export default App

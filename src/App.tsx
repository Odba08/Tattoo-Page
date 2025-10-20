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
import Footer from './components/footer/footer.tsx';
import Contact from './modules/Contact/contact.tsx';
import Products from './modules/Products/products.tsx';
import Tattos from './modules/Tattos/tattos.tsx';
import Curse from './modules/Curse/curse.tsx';
import ScrollToTop from './components/scrolltotop.tsx';

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="productos" element={<Products />} />
        <Route path="tattoos" element={<Tattos />} />
        <Route path="cursos" element={<Curse />} />


      </Routes>
      <Footer />
       </div>
    </Router>
  )
}

export default App

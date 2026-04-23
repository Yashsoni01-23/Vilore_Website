import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components Import
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Series540 from './Components/540series';
import Boutique from './Components/Boutique';
import About from './Components/About';
import Philosophy from './Components/Philosophy'; // Naya component
import Shipping from './Components/Shipping';     // Naya component
import Footer from './Components/Footer';         // Naya component
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="min-h-screen bg-[#060a11] text-white font-sans selection:bg-blue-900/30">
        
        {/* Navbar: Hamesha top par rahega */}
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/vx540" element={<Series540 />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route path="/about" element={<About />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/shipping" element={<Shipping />} />
          </Routes>
        </main>

        {/* Footer: Har page ke niche apne aap aayega */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
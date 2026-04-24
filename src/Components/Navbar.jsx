import React, { useState } from 'react';
import { Menu, X, MessageCircle, Info, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';
import FounderDrawer from './FounderDrawer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isFounderOpen, setIsFounderOpen] = useState(false); 
  
  const whatsappNumber = "919889908199"; 

  const handleExpertTalk = () => {
    const msg = encodeURIComponent("Hi Vilore, I'd like to speak with a fragrance expert regarding your collections.");
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* --- VELZIGLOBAL Top Bar: Highlights the Parent Company without taking space from links --- */}
      <div className="bg-[#060a11] text-white py-1.5 text-center">
        <p className="text-[8px] md:text-[9px] tracking-[0.5em] uppercase font-bold opacity-80">
          The House of <span className="text-blue-500">Velziglobal</span>
        </p>
      </div>

      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 py-3">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-10">
          <div className="flex justify-between items-center h-16">
            
            {/* 1. Left: All 5 Main Links Kept Intact */}
            <div className="hidden xl:flex items-center space-x-6">
              <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition">Home</Link>
              <Link to="/vx540" className="text-[10px] font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition">VX-540</Link>
              <Link to="/philosophy" className="text-[10px] font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition">Philosophy</Link>
              <Link to="/shipping" className="text-[10px] font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition">Shipping</Link>
              <Link to="/about" className="text-[10px] font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition">About</Link>
            </div>

            {/* 2. Center: Logo Section */}
            <Link to="/" className="flex flex-col items-center">
              <h1 className="text-2xl md:text-4xl font-serif tracking-[0.2em] font-black text-black leading-none">
                VILORE
              </h1>
              <span className="text-[8px] tracking-[0.3em] uppercase font-medium text-gray-400 mt-1 italic">
                Define Your Presence
              </span>
            </Link>

            {/* 3. Right: Legacy, Talk & Boutique Kept Intact */}
            <div className="hidden lg:flex items-center space-x-6">
              <button 
                onClick={() => setIsFounderOpen(true)}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition group"
              >
                <Fingerprint size={18} strokeWidth={1.5} className="group-hover:scale-110 transition" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Legacy</span>
              </button>

              <button 
                onClick={handleExpertTalk}
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition group"
              >
                <MessageCircle size={18} strokeWidth={2} className="group-hover:rotate-12 transition" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Expert Talk</span>
              </button>
              
              <Link to="/boutique">
                <button className="bg-black text-white px-4 py-2.5 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition shadow-lg">
                  Boutique
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-black p-2">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay: Everything included here too */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 p-8 space-y-6 h-screen shadow-2xl overflow-y-auto">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">Home</Link>
            <Link to="/vx540" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">VX-540 Series</Link>
            <Link to="/philosophy" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">Philosophy</Link>
            <Link to="/shipping" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">Shipping</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">About Us</Link>
            <button 
              onClick={() => { setIsFounderOpen(true); setIsOpen(false); }}
              className="flex items-center gap-3 text-gray-900 font-bold uppercase text-xs tracking-widest border-b border-gray-50 pb-2 w-full text-left"
            >
              <Fingerprint size={20} /> The Legacy (Velziglobal)
            </button>
            <div className="pt-4 flex flex-col gap-6">
              <button onClick={handleExpertTalk} className="flex items-center gap-3 text-blue-600 font-bold uppercase text-xs tracking-widest">
                <MessageCircle size={22} /> Talk to an Expert
              </button>
            </div>
          </div>
        )}

        <FounderDrawer isOpen={isFounderOpen} onClose={() => setIsFounderOpen(false)} />
      </nav>
    </>
  );
};

export default Navbar;
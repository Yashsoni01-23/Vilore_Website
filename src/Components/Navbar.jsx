import React, { useState } from 'react';
import { Menu, X, MessageCircle, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // WhatsApp Number Updated
  const whatsappNumber = "919889908199"; 

  const handleExpertTalk = () => {
    const msg = encodeURIComponent("Hi Vilore, I'd like to speak with a fragrance expert regarding your collections.");
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          
          {/* Left: Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-[11px] font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/vx540" className="text-[11px] font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition">
              VX-540
            </Link>
            <Link to="/philosophy" className="text-[11px] font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition">
              Philosophy
            </Link>
            <Link to="/shipping" className="text-[11px] font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition">
              Shipping
            </Link>
            <Link to="/about" className="text-[11px] font-bold uppercase tracking-widest text-gray-800 hover:text-blue-600 transition">
              About
            </Link>
          </div>

          {/* Center: VILORE LOGO */}
          <Link to="/" className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-serif tracking-[0.2em] font-black text-black leading-none">
              VILORE
            </h1>
            <span className="text-[9px] tracking-[0.4em] uppercase font-medium text-gray-400 mt-1">
              Define Your Presence
            </span>
          </Link>

          {/* Right: Actions */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Expert Talk (WhatsApp) */}
            <button 
              onClick={handleExpertTalk}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition group"
              title="Talk to an Expert"
            >
              <MessageCircle size={20} strokeWidth={2} className="group-hover:scale-110 transition" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Expert Talk</span>
            </button>
            
            {/* Boutique Link */}
            <Link to="/boutique">
              <button className="bg-black text-white px-5 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-gray-800 transition shadow-lg shadow-black/5">
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-8 space-y-6 h-screen shadow-2xl overflow-y-auto">
          <Link to="/" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">Home</Link>
          <Link to="/vx540" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">VX-540 Series</Link>
          <Link to="/philosophy" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">Philosophy</Link>
          <Link to="/shipping" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">Shipping</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">About Us</Link>
          <Link to="/boutique" onClick={() => setIsOpen(false)} className="block text-sm font-bold uppercase tracking-[0.2em] text-gray-900 border-b border-gray-50 pb-2">Boutique</Link>
          
          <div className="pt-4 flex flex-col gap-6">
            <button onClick={handleExpertTalk} className="flex items-center gap-3 text-blue-600 font-bold uppercase text-xs tracking-widest">
              <MessageCircle size={22} />
              Talk to an Expert
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
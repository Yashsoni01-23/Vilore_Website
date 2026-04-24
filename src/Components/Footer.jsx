import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Globe, Shield, Zap } from 'lucide-react'; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6 relative">
      
      {/* Scroll to Top Booster */}
      <button 
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#060a11] text-white p-3 rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 group"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Parent Info */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif tracking-[0.2em] font-black text-gray-900 uppercase">VILORE</h2>
              <p className="text-[9px] tracking-[0.3em] text-blue-600 uppercase font-black italic">A Velziglobal Venture</p>
            </div>
            <p className="text-[11px] leading-relaxed text-gray-400 uppercase tracking-widest font-light">
              Defining Presence through the art of haute parfümerie.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900">Maison</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-[11px] text-gray-500 hover:text-blue-600 transition uppercase tracking-widest">Our Story</Link></li>
              <li><Link to="/philosophy" className="text-[11px] text-gray-500 hover:text-blue-600 transition uppercase tracking-widest">Philosophy</Link></li>
              <li><Link to="/shipping" className="text-[11px] text-gray-500 hover:text-blue-600 transition uppercase tracking-widest">Shipping</Link></li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900">Legal & Privacy</h4>
            <ul className="space-y-3">
              <li><span className="text-[11px] text-gray-500 uppercase tracking-widest">Terms & Conditions</span></li>
              <li><span className="text-[11px] text-gray-500 uppercase tracking-widest">Privacy Policy</span></li>
              <li><span className="text-[11px] text-gray-400 italic uppercase tracking-widest border-b border-gray-100 pb-1">Trademark: Nexvoy®</span></li>
            </ul>
          </div>

          {/* Social Presence - Fixed: Using only ultra-safe icons */}
          <div className="space-y-4 text-right md:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900">Connect</h4>
            <div className="flex justify-end md:justify-start gap-6">
               <Globe size={18} className="text-gray-400 hover:text-blue-600 cursor-pointer transition" />
               <Mail size={18} className="text-gray-400 hover:text-blue-600 cursor-pointer transition" />
               <Zap size={18} className="text-gray-400 hover:text-blue-600 cursor-pointer transition" />
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-[9px] tracking-[0.3em] text-gray-400 uppercase font-medium">
              Vilore Artisan Laboratory © 2026. All Rights Reserved.
            </p>
            <p className="text-[9px] tracking-[0.3em] text-gray-300 uppercase font-medium">
              Member of the House of Velziglobal
            </p>
          </div>
          
          <div className="flex gap-4">
            <span className="text-[9px] tracking-[0.2em] text-gray-400 uppercase border border-gray-100 px-3 py-1">JH</span>
            <span className="text-[9px] tracking-[0.2em] text-gray-400 uppercase border border-gray-100 px-3 py-1">GJ</span>
            <span className="text-[9px] tracking-[0.2em] text-gray-400 uppercase border border-gray-100 px-3 py-1">USA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
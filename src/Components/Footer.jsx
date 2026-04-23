import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-serif tracking-[0.2em] font-black text-gray-900 uppercase">VILORE</h2>
            <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase font-medium">Define Your Presence</p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">Explore</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-xs text-gray-500 hover:text-blue-600 transition">About Us</Link></li>
                <li><Link to="/philosophy" className="text-xs text-gray-500 hover:text-blue-600 transition">Philosophy</Link></li>
                <li><Link to="/shipping" className="text-xs text-gray-500 hover:text-blue-600 transition">Shipping</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-900">Legal</h4>
              <ul className="space-y-2">
                <li><span className="text-xs text-gray-500">Terms of Service</span></li>
                <li><span className="text-xs text-gray-500">Privacy Policy</span></li>
                <li><span className="text-xs text-gray-500 italic">Trademark: Nexvoy®</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] tracking-widest text-gray-400 uppercase font-medium">
            Vilore Artisan Laboratory © 2026. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[9px] tracking-widest text-gray-400 uppercase font-medium">
            JH | GJ | USA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
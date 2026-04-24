import React from 'react';
import { X, MapPin, ShieldCheck, Heart } from 'lucide-react';

const FounderDrawer = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Background Overlay */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      
      {/* Drawer Content */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-white z-[101] shadow-2xl transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Close Button - Left Top */}
        <button onClick={onClose} className="absolute top-6 left-6 p-2 text-gray-400 hover:text-black transition z-10">
          <X size={24} strokeWidth={1} />
        </button>

        <div className="h-full overflow-y-auto px-10 py-24 space-y-12">
          {/* Section: The Legacy */}
          <div className="space-y-3 text-center">
            <h2 className="text-[10px] tracking-[0.5em] text-blue-500 uppercase font-black">The Founders</h2>
            <h3 className="text-3xl font-serif italic text-gray-900 leading-tight">Manoj & Meenal Soni</h3>
          </div>

          {/* Founders Images - FIXED: Removed grayscale, now in Full Color */}
          <div className="grid grid-cols-2 gap-5 pt-4">
            <div className="space-y-3 text-center group">
              <div className="aspect-[3/4] bg-white shadow-sm border border-gray-100 overflow-hidden rounded-sm">
                <img 
                  src="M1.png" 
                  alt="Mr. Manoj Soni" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-900">Mr. Manoj Soni</p>
            </div>
            
            <div className="space-y-3 text-center group">
              <div className="aspect-[3/4] bg-white shadow-sm border border-gray-100 overflow-hidden rounded-sm">
                <img 
                  src="M2.png" 
                  alt="Mrs. Meenal Soni" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-900">Mrs. Meenal Soni</p>
            </div>
          </div>

          {/* Vision Data */}
          <div className="space-y-10 py-10 border-y border-gray-50">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-blue-600">
                <MapPin size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Roots in Jhansi</span>
              </div>
              <p className="text-sm text-gray-600 font-light leading-loose tracking-wide">
                Deeply rooted in the historical heart of <strong>Jhansi, Uttar Pradesh</strong>, the founders have built Vilore on the foundation of Indian heritage and global excellence.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-blue-600">
                <ShieldCheck size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Transparent Legacy</span>
              </div>
              <p className="text-sm text-gray-600 font-light leading-loose tracking-wide">
                Transparency is our invisible note. From ingredient sourcing to laboratory testing, Mr. & Mrs. Soni ensure that Vilore operates with absolute clarity and uncompromising integrity.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Heart size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">A Shared Vision</span>
              </div>
              <p className="text-sm text-gray-600 font-light leading-loose italic tracking-wide">
                "We don't just sell perfumes; we share a piece of our vision for a more elegant India."
              </p>
            </div>
          </div>

          {/* Bottom Branding */}
          <div className="text-center pt-8 opacity-40">
             <p className="text-[8px] tracking-[0.8em] uppercase font-black text-gray-900">Vilore Private Circle</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FounderDrawer;
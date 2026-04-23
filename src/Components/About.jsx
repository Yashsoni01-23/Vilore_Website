import React from 'react';
import { Globe, Factory, Award, MapPin, Truck, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      
      {/* Refined Header - Minimal & Decent */}
      <div className="bg-[#f8fafc] py-20 px-6 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-serif tracking-[0.15em] text-gray-900 uppercase">
            Our Story
          </h1>
          <div className="w-12 h-[2px] bg-blue-500 mx-auto"></div>
          <p className="text-gray-500 tracking-[0.3em] text-[10px] uppercase font-bold">
            Artisan Excellence since inception
          </p>
        </div>
      </div>

      {/* Leadership & Identity Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
               <h2 className="text-xl font-serif italic text-gray-800">Founded by Manoj Soni</h2>
               <h3 className="text-3xl font-serif text-gray-900 leading-tight">Crafting Memories <br/> in Jhansi, Uttar Pradesh.</h3>
            </div>
            
            <p className="text-gray-600 leading-relaxed font-light text-sm">
              Vilore is the realization of <strong>Manoj Soni's</strong> vision to bring world-class perfumery to India. Rooted in Jhansi, we combine traditional aesthetics with modern olfactory science to create scents that define your presence.
            </p>

            <div className="flex items-center gap-3 py-2 border-l-2 border-blue-500 pl-4 bg-blue-50/30">
               <MapPin size={16} className="text-blue-500" />
               <span className="text-[11px] font-bold uppercase tracking-widest text-gray-700">
                 Corporate Office: Jhansi, UP
               </span>
            </div>
          </div>

          {/* Stats/Market Grid - Compact */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 border border-gray-100 bg-[#fafbfc]">
              <h4 className="text-xl font-serif mb-1">USA</h4>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest font-black">International Export</p>
            </div>
            <div className="p-6 border border-gray-100 bg-[#fafbfc]">
              <h4 className="text-xl font-serif mb-1">PAN India</h4>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest font-black">Nationwide Supply</p>
            </div>
            <div className="col-span-2 p-6 bg-[#060a11] text-white flex justify-between items-center">
               <div>
                  <h4 className="text-lg font-serif">Direct to Consumer</h4>
                  <p className="text-[9px] text-blue-400 uppercase tracking-widest font-bold">Boutique Exclusive Pricing</p>
               </div>
               <ShieldCheck size={28} className="text-blue-500 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Sourcing & Manufacturing */}
      <div className="bg-[#060a11] text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="flex justify-center">
             <Factory size={30} strokeWidth={1.5} className="text-blue-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-black">Artisan Laboratory</h2>
            <h3 className="text-3xl font-serif italic text-white">Minati Perfumes, Gujarat</h3>
          </div>
          <p className="text-gray-400 font-light leading-loose text-sm italic">
            "Our strategic partnership with <strong>Minati Perfumes</strong> ensures that every blend 
            undergoes rigorous testing in Gujarat's finest laboratories, reaching the 
            purity standards required for the global stage."
          </p>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
            <div className="space-y-2">
               <Award size={20} className="text-blue-500 mx-auto" />
               <p className="text-[9px] tracking-widest uppercase font-bold text-gray-500">Pure Grade</p>
            </div>
            <div className="space-y-2">
               <Globe size={20} className="text-blue-500 mx-auto" />
               <p className="text-[9px] tracking-widest uppercase font-bold text-gray-500">Global Export</p>
            </div>
            <div className="space-y-2">
               <Truck size={20} className="text-blue-500 mx-auto" />
               <p className="text-[9px] tracking-widest uppercase font-bold text-gray-500">Secure Delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="py-12 text-center opacity-20">
        <p className="text-[8px] tracking-[1em] uppercase font-black text-gray-900">Vilore Artisan © 2026</p>
      </div>
    </div>
  );
};

export default About;
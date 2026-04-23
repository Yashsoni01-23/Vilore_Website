import React from 'react';
import { Sparkles, Wind, Clock, ShieldCheck } from 'lucide-react';

const Series540 = () => {
  const notes = [
    { title: "Top Notes", scent: "Saffron & Jasmine", desc: "The first impression. Bright, airy, and slightly sweet." },
    { title: "Heart Notes", scent: "Amberwood & Ambergris", desc: "The soul of the scent. Warm, mineral, and captivating." },
    { title: "Base Notes", scent: "Fir Resin & Cedar", desc: "The lasting presence. Woody, deep, and sophisticated." }
  ];

  return (
    <div className="bg-[#0a0f18] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-gold-500 text-xs tracking-[0.6em] uppercase mb-4">Unisex Masterpiece</h2>
          <h1 className="text-5xl md:text-7xl font-serif tracking-widest uppercase">VX - 540</h1>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto tracking-wide italic font-light">
            "Designed for the bold, the elegant, and the unforgettable. A fragrance that transcends gender and defines presence."
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24 text-center">
          {notes.map((note, index) => (
            <div key={index} className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
              <div className="h-12 w-12 border border-gray-700 flex items-center justify-center mx-auto mb-6 group-hover:border-white transition">
                <Wind size={20} className="text-gray-500 group-hover:text-white" />
              </div>
              <h3 className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-2">{note.title}</h3>
              <h4 className="text-xl font-serif mb-4">{note.scent}</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-light">{note.desc}</p>
            </div>
          ))}
        </div>

        {/* Technical Specs Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center border-t border-white/10 pt-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif tracking-wider">The Performance</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="text-gray-400 mt-1" size={20} />
                <div>
                  <h5 className="text-[12px] uppercase tracking-widest font-bold">Longevity</h5>
                  <p className="text-gray-500 text-sm italic">12-14 Hours on skin, 24+ Hours on fabric.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Sparkles className="text-gray-400 mt-1" size={20} />
                <div>
                  <h5 className="text-[12px] uppercase tracking-widest font-bold">Occasion</h5>
                  <p className="text-gray-500 text-sm italic">Versatile - From office boardrooms to midnight galas.</p>
                </div>
              </div>
            </div>
            <button className="bg-white text-black px-12 py-4 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gray-200 transition">
              Find in Boutique
            </button>
          </div>
          
          {/* Subtle Graphic Element */}
          <div className="bg-gradient-to-brown-from-white/5 to-transparent h-96 flex items-center justify-center relative">
             <div className="text-[15vw] font-serif opacity-[0.03] absolute select-none">540</div>
             <p className="relative z-10 text-center px-10 text-gray-400 font-light leading-loose tracking-widest">
                EXTRAIT DE PARFUM <br/>
                CONCENTRATION 25% <br/>
                VILORE ARTISAN LABORATORY
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Series540;
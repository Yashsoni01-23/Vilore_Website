import React from 'react';
import { Globe, Droplets, Compass, Zap, ShieldCheck, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      
      {/* 1. Immersive Hero - Pure Visual (Text Overlay Removed) */}
      <div className="relative h-[65vh] md:h-[80vh] overflow-hidden">
        <img 
          src="/6.png" 
          alt="Vilore VX-540 Presence" 
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-[2s]" 
        />
        {/* Subtle bottom gradient to blend with the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      {/* 2. Brand Identity Header - Text Moved Here */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-serif tracking-tighter text-gray-900 italic">
            VILORE
          </h1>
          <div className="h-[1px] w-16 bg-blue-500 mx-auto"></div>
          <p className="text-blue-600 tracking-[0.6em] text-[10px] uppercase font-black">
            Define Your Presence
          </p>
      </div>

      {/* 3. Core Narrative - The VX-540 Philosophy */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-gray-800">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-4 border-l-4 border-gray-900 pl-8">
               <h3 className="text-[10px] tracking-[0.4em] text-gray-400 uppercase font-bold">The Signature Experience</h3>
               <h2 className="text-4xl font-serif text-gray-900 leading-tight">
                 Elegance in Every <br/> <span className="italic text-gray-500">Singular Note.</span>
               </h2>
            </div>
            
            <p className="text-gray-600 leading-loose text-lg font-light italic">
              "VILORE VX-540 is a premium inspired fragrance designed to **Define Your Presence**. Crafted for those who seek elegance and long-lasting performance, this unisex perfume delivers a luxurious experience at an accessible price."
            </p>
          </div>
          
          <div className="space-y-8 text-gray-600 font-light leading-relaxed text-base tracking-wide bg-[#f8fafc] p-10 rounded-sm border border-gray-50">
             <p>
               Perfect for both daily wear and special occasions, our composition transcends the ordinary. It is a masterful orchestration of rare essences, curated for the modern individual who understands that a scent is more than a fragrance—it is a statement.
             </p>
             <div className="pt-4">
                <p className="text-[9px] tracking-[0.3em] uppercase font-black text-blue-600 italic">
                  Define Your Presence. Always.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* 4. The Pillars of Luxury (Dark Section) */}
      <div className="bg-[#060a11] py-32 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-3xl font-serif italic text-white">The Art of Olfaction</h2>
             <p className="text-[9px] tracking-[0.5em] text-gray-500 uppercase font-bold">Define Your Presence Through Quality</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6 text-center group">
               <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mx-auto bg-white/5 group-hover:border-blue-500 transition-colors">
                  <Sparkles size={24} strokeWidth={1} className="text-blue-500" />
               </div>
               <h4 className="text-xl font-serif">Luxurious Sillage</h4>
               <p className="text-gray-400 font-light text-[10px] leading-relaxed italic uppercase tracking-widest">
                 Designed to linger, ensuring you define your presence long after you leave the room.
               </p>
            </div>

            <div className="space-y-6 text-center group">
               <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mx-auto bg-white/5 group-hover:border-blue-500 transition-colors">
                  <ShieldCheck size={24} strokeWidth={1} className="text-blue-500" />
               </div>
               <h4 className="text-xl font-serif">Unisex Mastery</h4>
               <p className="text-gray-400 font-light text-[10px] leading-relaxed italic uppercase tracking-widest">
                 A gender-neutral masterpiece that allows anyone to define their presence with confidence.
               </p>
            </div>

            <div className="space-y-6 text-center group">
               <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center mx-auto bg-white/5 group-hover:border-blue-500 transition-colors">
                  <Zap size={24} strokeWidth={1} className="text-blue-500" />
               </div>
               <h4 className="text-xl font-serif">Pure Concentration</h4>
               <p className="text-gray-400 font-light text-[10px] leading-relaxed italic uppercase tracking-widest">
                 Extraordinary performance met with accessible luxury to define your presence daily.
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Minimal Footer Branding */}
      <div className="py-20 text-center space-y-6">
           <h3 className="text-2xl font-serif text-gray-900 italic">A Legacy in Every Bottle.</h3>
           <p className="text-gray-400 text-[9px] tracking-[1em] uppercase font-black">
             Define Your Presence
           </p>
      </div>
    </div>
  );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Wind, Sparkles, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-[#060a11] overflow-x-hidden">
      {/* --- SECTION 1: MAIN HERO BANNER (Dark Backdrop) --- */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-950/10 blur-[150px] rounded-full animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 animate-fade-in-left">
            <div className="space-y-4">
               <h2 className="text-[11px] tracking-[0.8em] uppercase text-gray-500 font-bold">VILORE PRESENTS</h2>
               <h1 className="text-5xl md:text-7xl font-serif tracking-[0.1em] font-light text-white leading-tight">The VX-540<br /> Series</h1>
            </div>
            <p className="text-[14px] leading-relaxed tracking-wide text-gray-400 max-w-lg font-light uppercase">
              A masterful orchestration of artisan notes, crafted for those who command elegance and unprecedented performance.
            </p>
            <Link to="/vx540">
              <button className="mt-4 border border-white/20 px-10 py-4 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500">
                Discover The Notes →
              </button>
            </Link>
          </div>

          <div className="relative flex justify-center items-center animate-fade-in-right">
            <img src="/1.png" alt="Vilore Primary" className="h-[450px] md:h-[550px] object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: VISUAL SOVEREIGNTY (White Card Contrast) --- */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-[#f8fafc] rounded-3xl p-10 md:p-16 border border-gray-100">
            <div className="order-2 md:order-1 flex justify-center">
              <img src="/2.png" alt="Olfactory Perspective" className="h-[400px] md:h-[500px] object-contain drop-shadow-xl hover:scale-105 transition-transform duration-1000" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <Eye className="text-blue-500/50" size={24} strokeWidth={1} />
              <h3 className="text-4xl font-serif text-gray-900 tracking-[0.2em] uppercase leading-tight">Visual Sovereignty</h3>
              <div className="w-10 h-[1px] bg-blue-500"></div>
              <p className="text-gray-500 font-light tracking-[0.2em] text-xs uppercase italic leading-loose">
                Experience the silhouette of modern luxury and timeless precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: INFINITE SILLAGE (Dark Section - Tight Spacing) --- */}
      <section className="py-20 px-6 bg-[#060a11]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-right order-1">
            <Wind className="text-blue-500/50 ml-auto" size={24} strokeWidth={1} />
            <h3 className="text-4xl font-serif text-white tracking-[0.2em] uppercase leading-tight">Infinite Sillage</h3>
            <div className="w-10 h-[1px] bg-blue-500 ml-auto"></div>
            <p className="text-gray-400 font-light tracking-[0.2em] text-xs uppercase italic leading-loose">
              An enduring trail of elegance that lingers beyond time.
            </p>
          </div>
          <div className="order-2 flex justify-center">
            <img src="/3.png" alt="Aromatic Aura" className="h-[400px] md:h-[500px] object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* --- SECTION 4: AROMATIC LEGACY (White Section Contrast) --- */}
      <section className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <img src="/4.png" alt="Aromatic Legacy" className="h-[400px] md:h-[500px] object-contain drop-shadow-xl" />
            </div>
            <div className="order-1 md:order-2 space-y-6 bg-[#f8fafc] p-12 rounded-3xl border border-gray-100">
              <Shield size={24} className="text-blue-500/50" strokeWidth={1} />
              <h3 className="text-4xl font-serif text-gray-900 tracking-[0.2em] uppercase leading-tight">Aromatic Legacy</h3>
              <div className="w-10 h-[1px] bg-blue-500"></div>
              <p className="text-gray-500 font-light tracking-[0.2em] text-xs uppercase italic leading-loose">
                A profound heritage encapsulated in a singular, crystalline essence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Animations CSS */}
      <style>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow { animation: pulseSlow 8s ease-in-out infinite; }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in-right { animation: fadeInRight 1s ease-out; }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in-left { animation: fadeInLeft 1s ease-out; }
      `}</style>
    </div>
  );
};

export default Hero;
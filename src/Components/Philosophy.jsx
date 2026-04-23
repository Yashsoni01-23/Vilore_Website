import React from 'react';
import { Leaf, Droplets, ShieldCheck, Sparkles } from 'lucide-react';

const Philosophy = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      {/* Header */}
      <div className="bg-[#060a11] py-28 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-serif tracking-tighter mb-6 italic">The Art of Transparency</h1>
        <div className="w-20 h-[1px] bg-blue-500 mx-auto mb-6"></div>
        <p className="max-w-2xl mx-auto text-gray-400 font-light tracking-widest text-xs uppercase leading-loose">
          Beyond the scent lies the soul of our craft. We believe in absolute clarity, 
          sourcing only the finest elements for the modern connoisseur.
        </p>
      </div>

      {/* Ingredients Grid */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <h3 className="text-[10px] tracking-[0.5em] text-blue-600 font-black uppercase">Pure Essences</h3>
            <h4 className="text-3xl font-serif text-gray-900">Rare Ingredients</h4>
            <p className="text-gray-500 font-light leading-relaxed text-sm">
              From the deep woods of India to the floral valleys of the world, we source 
              Oud, Sandalwood, and Bergamot in their most potent forms. No synthetic shortcuts.
            </p>
          </div>
          <div className="space-y-6 border-x border-gray-100 px-8">
            <h3 className="text-[10px] tracking-[0.5em] text-blue-600 font-black uppercase">Scientific Precision</h3>
            <h4 className="text-3xl font-serif text-gray-900">High Concentration</h4>
            <p className="text-gray-500 font-light leading-relaxed text-sm">
              Our VX-540 series boasts a 25% oil concentration—a true Extrait De Parfum. 
              Meticulously blended in Gujarat for unparalleled sillage and longevity.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-[10px] tracking-[0.5em] text-blue-600 font-black uppercase">Ethical Bond</h3>
            <h4 className="text-3xl font-serif text-gray-900">100% Transparency</h4>
            <p className="text-gray-500 font-light leading-relaxed text-sm">
              We provide full disclosure of our olfactory notes. What you see on our 
              profile is exactly what you feel on your skin. Honest luxury, redefined.
            </p>
          </div>
        </div>

        {/* Visual Badges */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 pt-20 border-t border-gray-50">
          <div className="text-center space-y-3">
            <Leaf size={24} className="mx-auto text-blue-500" strokeWidth={1} />
            <span className="block text-[9px] font-bold tracking-[0.3em] uppercase">Ethically Sourced</span>
          </div>
          <div className="text-center space-y-3">
            <ShieldCheck size={24} className="mx-auto text-blue-500" strokeWidth={1} />
            <span className="block text-[9px] font-bold tracking-[0.3em] uppercase">Quality Certified</span>
          </div>
          <div className="text-center space-y-3">
            <Droplets size={24} className="mx-auto text-blue-500" strokeWidth={1} />
            <span className="block text-[9px] font-bold tracking-[0.3em] uppercase">Paraben Free</span>
          </div>
          <div className="text-center space-y-3">
            <Sparkles size={24} className="mx-auto text-blue-500" strokeWidth={1} />
            <span className="block text-[9px] font-bold tracking-[0.3em] uppercase">Global Standard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
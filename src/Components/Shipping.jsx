import React from 'react';
import { Truck, ExternalLink, Globe2, Zap } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif text-gray-900">Expedited Logistics</h2>
            <p className="text-gray-500 font-light tracking-widest text-[11px] uppercase">Pan-India & Global Export</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className="text-gray-600 leading-relaxed font-light">
                We understand that luxury cannot wait. Vilore partners with the world’s most 
                reliable logistics networks to ensure your signature scent reaches you in 
                pristine condition, anywhere across the globe.
              </p>
              
              <div className="space-y-6 pt-6">
                <div className="flex items-center gap-6 group">
                  <Zap className="text-blue-500" size={20} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest">Express Partners</h4>
                    <p className="text-sm text-gray-500">Bluedart, Delhivery, Amazon Express</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <Globe2 className="text-blue-500" size={20} />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest">Global Reach</h4>
                    <p className="text-sm text-gray-500">Direct Exporting to USA and Europe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#060a11] p-10 text-white space-y-8 rounded-sm shadow-2xl">
              <h3 className="text-xl font-serif tracking-widest uppercase">Visit Our Storefront</h3>
              <p className="text-gray-400 text-sm font-light leading-loose">
                Experience seamless shopping through our verified Amazon Storefront. 
                Full protection, fast delivery, and authentic Vilore products.
              </p>
              <a 
                href="https://amazon.in/vilore" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-500 hover:text-white transition-all"
              >
                Buy on Amazon <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
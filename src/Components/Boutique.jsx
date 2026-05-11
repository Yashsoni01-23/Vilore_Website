import React from 'react';
import { MapPin, Mail, MessageSquare, Clock } from 'lucide-react';

const Boutique = () => {
  const emailAddress = "contact@viloze.com";

  const handleConsultation = () => {
    const subject = "Boutique Consultation - Viloze";
    const message = "Hi Viloze, I would like to inquire about the VX-540 Series and book a consultation.";
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header section */}
      <div className="bg-[#f8fafc] py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-serif tracking-[0.2em] text-gray-900 uppercase font-light">The Viloze Boutique</h1>
          <div className="w-16 h-[1px] bg-blue-500 mx-auto mt-6"></div>
          <p className="mt-6 text-gray-400 tracking-[0.4em] text-[10px] uppercase font-bold">Exclusive Fragrances & Artisan Care</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          
          {/* Left Side: Brand Experience */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif text-gray-900 leading-snug">Crafting your <br/><span className="italic text-blue-600">unique signature.</span></h2>
              <p className="text-gray-500 leading-loose font-light">
                At Viloze, we believe a fragrance is more than just a scent—it is a memory. 
                Our Brand laboratories work meticulously to bring you the highest 
                concentration of artisan oils. Reach out to us for a personalized olfactory experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-gray-50">
              <div className="space-y-2">
                <Clock size={18} className="text-blue-500 mb-2" />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Consultation Hours</h4>
                <p className="text-sm text-gray-700">10:00 AM - 07:00 PM</p>
              </div>
              <div className="space-y-2">
                <MessageSquare size={18} className="text-blue-500 mb-2" />
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Response Time</h4>
                <p className="text-sm text-gray-700">Within 24 Hours</p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Card */}
          <div className="bg-[#060a11] text-white p-12 shadow-2xl relative overflow-hidden group rounded-xl md:rounded-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] -mr-16 -mt-16"></div>
            
            <h3 className="text-xl font-serif tracking-widest mb-10 uppercase border-b border-white/10 pb-4">Get In Touch</h3>
            
            <div className="space-y-8 relative z-10">
              {/* Updated Location Section */}
              <div className="flex gap-6 items-center">
                <MapPin className="text-blue-400 shrink-0" size={22} />
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-1">Availability</h4>
                  <p className="text-sm font-light text-gray-300">Worldwide Shipping | Online Exclusive</p>
                </div>
              </div>

              {/* Clickable Email Option */}
              <a href={`mailto:${emailAddress}`} className="flex gap-6 items-center group/item cursor-pointer">
                <Mail className="text-blue-400 shrink-0 group-hover/item:scale-110 transition" size={22} />
                <div>
                  <h4 className="text-[9px] uppercase tracking-[0.3em] text-gray-500 mb-1">Email Inquiry</h4>
                  <p className="text-sm font-light text-gray-300 border-b border-transparent group-hover/item:border-blue-400 inline-block transition">
                    {emailAddress}
                  </p>
                </div>
              </a>
            </div>

            {/* Main Consultation Button */}
            <div className="mt-12 space-y-4 relative z-10">
               <button 
                onClick={handleConsultation}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 text-[11px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3"
              >
                <MessageSquare size={16} />
                Book a Consultation
              </button>
              <p className="text-[9px] text-center text-gray-500 tracking-widest">NO REGISTRATION REQUIRED</p>
            </div>
          </div>

        </div>

        {/* Minimal Footer Tag */}
        <div className="mt-40 text-center opacity-30">
          <p className="text-[9px] tracking-[0.6em] text-gray-900 uppercase font-black">Viloze © 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Boutique;
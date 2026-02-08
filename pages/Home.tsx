
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CORE_VALUES, PRACTICE_AREAS } from '../constants.tsx';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0a1a15]">
        {/* Slideshow Background */}
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
                currentSlide === index ? 'opacity-40' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Hero slide ${index + 1}`}
                className="w-full h-full object-cover transform scale-105"
              />
            </div>
          ))}
          
          {/* Creative Mesh Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a15] via-[#0a1a15]/95 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(17,82,212,0.15),transparent_50%)] z-15"></div>
          
          {/* Top Fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a1a15] to-transparent z-20"></div>

          {/* THE CURVED TRANSITION (Architectural Arcs) */}
          <div className="absolute bottom-0 left-0 w-full z-40 overflow-hidden leading-[0]">
             {/* Secondary Glow Path */}
             <svg 
              viewBox="0 0 1440 320" 
              className="absolute bottom-0 left-0 w-full h-[150px] md:h-[220px] opacity-20 text-accent-gold blur-xl"
              preserveAspectRatio="none"
            >
              <path fill="currentColor" d="M0,160C480,320,960,320,1440,160L1440,320L0,320Z" />
            </svg>

            {/* Primary Sharp Curve */}
            <svg 
              viewBox="0 0 1440 320" 
              className="relative block w-full h-[100px] md:h-[180px] fill-background-light dark:fill-background-dark drop-shadow-[0_-15px_15px_rgba(0,0,0,0.3)]"
              preserveAspectRatio="none"
            >
              <path d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,240C840,256,960,256,1080,240C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
            </svg>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-50 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-12 pb-32 md:pb-48">
          <div className="flex flex-col items-start max-w-5xl">
            {/* Tagline precisely as shown in the screenshot */}
            <div className="flex items-center gap-6 mb-10 animate-in slide-in-from-left duration-1000">
              <div className="w-16 h-[2.5px] bg-accent-gold"></div>
              <span className="text-accent-gold font-bold tracking-[0.5em] text-[11px] uppercase">Integrity • Stewardship • Excellence</span>
            </div>

            <h1 className="text-white font-serif text-6xl md:text-8xl lg:text-[10rem] xl:text-[11.5rem] leading-[0.82] font-bold animate-in slide-in-from-bottom duration-1000">
              Justice.<br />
              Integrity.<br />
              <span className="text-accent-gold italic block mt-2 drop-shadow-[0_10px_20px_rgba(212,175,55,0.4)]">Stewardship.</span>
            </h1>
            
            <p className="mt-10 md:mt-14 text-slate-200 text-lg md:text-2xl lg:text-3xl max-w-3xl leading-relaxed font-light animate-in fade-in duration-1000 delay-500">
              A premier Ugandan law firm grounded in Christian values and dedicated to your legal success through ethical excellence and professional stewardship.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mt-14 md:mt-18 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
              <Link
                to="/contact"
                className="h-16 px-12 bg-[#1152d4] text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(17,82,212,0.5)] min-w-[260px] group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Schedule a Call 
                  <span className="material-symbols-outlined text-2xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <Link
                to="/practice-areas"
                className="h-16 px-12 border-2 border-white/20 text-white rounded-xl font-bold text-lg bg-white/5 backdrop-blur-2xl hover:bg-white hover:text-[#0a1a15] transition-all flex items-center justify-center min-w-[260px]"
              >
                Our Practice Areas
              </Link>
            </div>
          </div>
        </div>

        {/* Refined Vertical Indicators */}
        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-10 z-40">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className="group relative flex items-center justify-end h-16"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <span className={`mr-6 text-[10px] font-bold tracking-widest text-white transition-all duration-300 transform ${currentSlide === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 group-hover:opacity-60'}`}>0{idx + 1}</span>
              <div className={`w-1 h-full transition-all duration-1000 rounded-full ${
                currentSlide === idx 
                  ? 'bg-accent-gold shadow-[0_0_25px_rgba(212,175,55,1)] scale-x-150' 
                  : 'bg-white/10 group-hover:bg-white/30'
              }`} />
            </button>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-32 md:py-48 bg-background-light dark:bg-background-dark transition-colors">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 mb-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[2px] bg-accent-gold rounded-full"></span>
                <h2 className="text-accent-gold font-bold uppercase tracking-[0.5em] text-[10px]">The Pactum Philosophy</h2>
              </div>
              <h3 className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 dark:text-white leading-[1.0] tracking-tight font-bold italic">Guided by Principles,<br /> <span className="text-[#1152d4] not-italic">Driven by Results</span></h3>
            </div>
            <div className="lg:text-right">
               <p className="text-slate-500 dark:text-slate-400 max-w-sm italic font-serif text-2xl border-l-4 lg:border-l-0 lg:border-r-4 border-accent-gold pl-8 lg:pl-0 lg:pr-8 py-6 bg-slate-50 dark:bg-slate-900/40 rounded-r-2xl lg:rounded-r-none lg:rounded-l-2xl">
                "Better is a little with righteousness than great revenues without right."<br/> 
                <span className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-slate-400 mt-4 block">— Proverbs 16:8</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {CORE_VALUES.map((value) => (
              <div key={value.title} className="group p-12 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-accent-gold/40 transition-all duration-700 shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:-translate-y-4">
                <div className="size-24 rounded-3xl bg-slate-50 dark:bg-slate-800 shadow-inner flex items-center justify-center mb-12 text-accent-gold group-hover:bg-[#1152d4] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  <span className="material-symbols-outlined text-6xl">{value.icon}</span>
                </div>
                <h4 className="text-3xl font-bold mb-6 dark:text-white font-serif">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Preview Section */}
      <section className="py-32 bg-slate-100 dark:bg-slate-900/20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="relative group">
              <div className="absolute -inset-10 bg-accent-gold/5 rounded-full blur-[100px] group-hover:bg-accent-gold/10 transition-all duration-1000"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-3xl border-8 border-white dark:border-slate-800">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Law library" 
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 p-12 bg-[#1152d4] text-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(17,82,212,0.6)] z-20">
                <p className="text-6xl font-bold font-serif mb-2">12+</p>
                <p className="text-xs font-bold tracking-[0.4em] uppercase opacity-80">Years of Integrity</p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div className="inline-block px-6 py-2 bg-accent-gold/10 rounded-full border border-accent-gold/20">
                <h2 className="text-accent-gold font-bold uppercase tracking-[0.4em] text-[10px]">Excellence in Practice</h2>
              </div>
              <h3 className="text-5xl md:text-6xl font-serif dark:text-white leading-tight font-bold">Advanced Legal Solutions for Complex Times</h3>
              <p className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Whether navigating land transactions or complex corporate litigation, our team provides the clarity and moral fortitude required to protect your interests in the heart of Uganda.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6">
                {PRACTICE_AREAS.slice(0, 4).map(area => (
                  <div key={area.id} className="flex items-center gap-5 group cursor-default">
                    <div className="size-12 rounded-2xl border-2 border-accent-gold/20 flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-white transition-all transform group-hover:scale-110">
                       <span className="material-symbols-outlined text-2xl">check_circle</span>
                    </div>
                    <span className="font-bold text-slate-700 dark:text-slate-200 text-lg tracking-tight">{area.title}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/practice-areas" className="inline-flex items-center gap-6 text-[#1152d4] font-bold text-2xl group hover:gap-10 transition-all pt-12 border-t border-slate-200 dark:border-slate-800 w-full">
                Explore Our Specializations 
                <span className="material-symbols-outlined text-3xl group-hover:translate-x-4 transition-transform">east</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 md:py-56 relative overflow-hidden bg-[#0a1a15]">
        {/* Animated Background Mesh */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(17,82,212,0.18),transparent_70%)] z-0 animate-pulse-slow"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white font-serif text-5xl md:text-7xl lg:text-9xl mb-16 drop-shadow-2xl font-bold tracking-tight">Begin Your Journey to Justice</h2>
          <p className="text-blue-100 text-2xl md:text-4xl max-w-5xl mx-auto mb-24 leading-relaxed font-light opacity-90">
            Connect with our experienced legal team today. We are ready to provide the professional stewardship and integrity your case deserves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-10 justify-center">
            <Link
              to="/contact"
              className="h-24 px-20 bg-white text-[#1152d4] rounded-[2rem] font-bold text-3xl hover:bg-accent-gold hover:text-white transition-all shadow-[0_30px_100px_rgba(0,0,0,0.4)] flex items-center justify-center group"
            >
              Book Consultation
              <span className="material-symbols-outlined ml-4 text-4xl group-hover:translate-x-3 transition-transform">calendar_month</span>
            </Link>
            <a href="tel:+256414123456" className="h-24 px-20 border-3 border-white/20 text-white rounded-[2rem] font-bold text-3xl hover:bg-white/10 transition-all flex items-center justify-center gap-6 backdrop-blur-md">
              <span className="material-symbols-outlined text-5xl">phone_in_talk</span> +256 414 123 456
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

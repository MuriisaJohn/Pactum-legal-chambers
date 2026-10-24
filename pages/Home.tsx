
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CORE_VALUES, PROGRAMMES, APPROACH_PRINCIPLES } from '../constants.tsx';

const HERO_IMAGES = [
  "/new/WhatsApp Image 2026-10-14 at 10.34.53 PM.jpeg",
  "/new/WhatsApp Image 2026-10-14 at 10.34.54 PM.jpeg",
  "/new/WhatsApp Image 2026-10-14 at 10.34.55 PM.jpeg",
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
      <section className="relative w-full min-h-[75vh] flex items-center overflow-hidden bg-background-dark">
        {/* Slideshow Background */}
        <div className="absolute inset-0 z-0">
          {HERO_IMAGES.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${currentSlide === index ? 'opacity-60' : 'opacity-0'}`}
            >
              <img
                src={img}
                alt={`Hero slide ${index + 1}`}
                className="w-full h-full object-cover transform scale-105"
              />
            </div>
          ))}

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(26,60,110,0.12),transparent_50%)] z-15"></div>

          {/* Top Fade */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background-dark to-transparent z-20"></div>

          {/* Curved Transition */}
          <div className="absolute bottom-0 left-0 w-full z-40 overflow-hidden leading-[0]">
            <svg
              viewBox="0 0 1440 320"
              className="absolute bottom-0 left-0 w-full h-[100px] md:h-[140px] opacity-25 text-accent-gold blur-xl"
              preserveAspectRatio="none"
            >
              <path fill="currentColor" d="M0,160C480,320,960,320,1440,160L1440,320L0,320Z" />
            </svg>
            <svg
              viewBox="0 0 1440 320"
              className="relative block w-full h-[80px] md:h-[120px] fill-background-light dark:fill-background-dark drop-shadow-[0_-10px_10px_rgba(0,0,0,0.3)]"
              preserveAspectRatio="none"
            >
              <path d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,240C840,256,960,256,1080,240C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
            </svg>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-50 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-8 pb-20 md:pb-28">
          <div className="flex flex-col items-start max-w-5xl">
            {/* Tagline */}
            <div className="flex items-center gap-4 mb-6 animate-in slide-in-from-left duration-800">
              <div className="w-12 h-[2px] bg-accent-gold"></div>
              <span className="text-accent-gold font-bold tracking-[0.4em] text-[10px] uppercase">Every Child Deserves Justice.</span>
            </div>

            <h1 className="text-white font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-bold italic animate-in slide-in-from-bottom duration-800">
              Every Young Person Deserves a Second Chance.
            </h1>

            <p className="mt-6 md:mt-8 text-slate-200 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed font-light animate-in fade-in duration-800 delay-300">
              Verbum Justice Centre is a Christian, child-focused organisation committed to protecting the rights of children, promoting access to justice, and rehabilitating children and young people facing challenges such as drug and substance abuse, family breakdown, homelessness, and conflict with the law.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12 animate-in fade-in slide-in-from-bottom duration-800 delay-500">
              <Link
                to="/contact"
                className="h-14 px-10 bg-primary text-white rounded-xl font-bold text-base hover:bg-primary-dark transition-all flex items-center justify-center gap-3 shadow-[0_15px_30px_-10px_rgba(26,60,110,0.5)] min-w-[240px] group overflow-hidden relative"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Contact Us
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>
              <Link
                to="/programmes"
                className="h-14 px-10 border-2 border-white/20 text-white rounded-xl font-bold text-base bg-white/5 backdrop-blur-2xl hover:bg-white hover:text-background-dark transition-all flex items-center justify-center min-w-[240px]"
              >
                Our Programmes
              </Link>
            </div>
          </div>

          {/* Vertical Indicators */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-40">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className="group relative flex items-center justify-end h-14"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className={`mr-4 text-[9px] font-bold tracking-widest text-white transition-all duration-300 transform ${currentSlide === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 group-hover:opacity-60'}`}>0{idx + 1}</span>
                <div className={`w-1 h-full transition-all duration-1000 rounded-full ${currentSlide === idx ? 'bg-accent-gold shadow-[0_0_20px_rgba(184,134,11,1)] scale-x-120' : 'bg-white/10 group-hover:bg-white/30'}`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="relative py-32 md:py-48 bg-background-light dark:bg-background-dark transition-colors">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-10 h-[2px] bg-accent-gold rounded-full"></span>
                <h2 className="text-accent-gold font-bold uppercase tracking-[0.5em] text-[10px]">About Verbum Justice Centre</h2>
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 dark:text-white leading-[1.1] tracking-tight font-bold italic mb-8">
                Rooted in Christian values,<br />
                <span className="text-primary not-italic">guided by compassion.</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-light">
                We believe that no child should be defined by their mistakes, circumstances, or past experiences. At Verbum Justice Centre, we see potential where society may see failure, hope where others see despair, and an opportunity for restoration where others see a lost cause.
              </p>
              <Link to="/about" className="inline-flex items-center gap-3 text-primary font-bold hover:text-primary-dark transition-colors">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-1000"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-background-dark">
                <img
                  src="/children.jpeg"
                  alt="Children in community gathering"
                  className="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Preview */}
      <section className="py-32 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-10 h-[2px] bg-accent-gold rounded-full"></span>
              <h2 className="text-accent-gold font-bold uppercase tracking-[0.5em] text-[10px]">Our Core Values</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white leading-[1.1] tracking-tight font-bold italic">
              Principles That Guide<br />
              <span className="text-primary not-italic">Everything We Do</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {CORE_VALUES.slice(0, 4).map((value) => (
              <div key={value.title} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-accent-gold/40 transition-all duration-500">
                <div className="size-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 text-accent-gold group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-4 dark:text-white font-serif">{value.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Preview */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/20 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-10 h-[2px] bg-accent-gold rounded-full"></span>
              <h2 className="text-accent-gold font-bold uppercase tracking-[0.5em] text-[10px]">Our Programmes</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 dark:text-white leading-[1.1] tracking-tight font-bold italic mb-8">
              Comprehensive Support for<br />
              <span className="text-primary not-italic">Every Child's Journey</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMMES.map((prog) => (
              <div key={prog.id} className="group p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-accent-gold/50 transition-all duration-500 hover:-translate-y-2">
                <div className="size-14 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 text-accent-gold group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-2xl">{prog.icon}</span>
                </div>
                <h4 className="text-lg font-bold mb-3 dark:text-white">{prog.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light mb-6">
                  {prog.description}
                </p>
                <Link to="/programmes" className="inline-flex items-center gap-2 text-primary text-sm font-bold hover:gap-3 transition-all">
                  Explore <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Preview */}
      <section className="py-32 bg-background-dark text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-10 h-[2px] bg-accent-gold rounded-full"></span>
              <h2 className="text-accent-gold font-bold uppercase tracking-[0.5em] text-[10px]">Our Approach</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif leading-[1.1] tracking-tight font-bold italic">
              A Holistic, Child-Centred<br />
              <span className="text-accent-gold not-italic">Pathway to Restoration</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {APPROACH_PRINCIPLES.map((principle) => (
              <div key={principle.title} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-gold/50 transition-all duration-500 backdrop-blur-sm">
                <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-accent-gold">
                  <span className="material-symbols-outlined text-2xl">{principle.icon}</span>
                </div>
                <h4 className="text-lg font-bold mb-3">{principle.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 md:py-40 relative overflow-hidden bg-primary">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_50%,rgba(184,134,11,0.15),transparent_70%)] z-0 animate-pulse"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-white font-serif text-4xl md:text-6xl lg:text-8xl mb-10 font-bold leading-[1.1] tracking-tight">
            Join Us in Restoring Hope
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light opacity-90">
            Every child has an opportunity to thrive. Partner with us to build a future where justice, dignity, and restoration are within reach for every vulnerable child.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              to="/contact"
              className="h-16 px-20 bg-white text-primary rounded-xl font-bold text-lg hover:bg-accent-gold hover:text-white transition-all flex items-center justify-center group shadow-[0_25px_50px_-15px_rgba(0,0,0,0.5)]"
            >
              Contact Us
              <span className="material-symbols-outlined ml-3 text-xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </Link>
            <a href="mailto:info@verbumjusticecentre.org" className="h-16 px-12 border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md">
              <span className="material-symbols-outlined text-xl">mail</span> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

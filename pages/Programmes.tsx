
import React from 'react';
import { PROGRAMMES } from '../constants.tsx';

const Programmes: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-background-dark/80 z-10"></div>
          <img
            src="/talk2.jpeg"
            alt="Programmes background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Programmes</h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Comprehensive support for every child's journey — from legal protection to rehabilitation, restoration, and reintegration.
          </p>
        </div>
      </section>

      {/* Programmes Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h3 className="text-accent-gold text-sm font-bold uppercase tracking-[0.3em] mb-3">Holistic Support</h3>
          <h4 className="text-3xl font-bold dark:text-white">Six Interconnected Programmes</h4>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our work combines legal advocacy, restorative justice, rehabilitation, Christian mentorship, and community engagement to help vulnerable children and young people reclaim their dignity and build a better future.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROGRAMMES.map((prog) => (
            <div
              key={prog.id}
              className="group p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-accent-gold/60 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
            >
              <div className="size-16 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-8 text-accent-gold group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <span className="material-symbols-outlined text-3xl">{prog.icon}</span>
              </div>
              <h5 className="text-2xl font-bold mb-4 dark:text-white font-serif">{prog.title}</h5>
              <span className="text-accent-gold text-xs font-bold uppercase tracking-wider mb-6 block">{prog.subtitle}</span>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-8 font-light">
                {prog.description}
              </p>

              <div className="mb-8">
                <h6 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Services Include:</h6>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {prog.services.slice(0, 4).map((service) => (
                    <li key={service} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-accent-gold text-xs mt-[2px]">check_circle</span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Our Philosophy</p>
                <p className="italic text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{prog.philosophy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5 dark:bg-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="size-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
            <span className="material-symbols-outlined text-4xl">handshake</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-6">Partner With Us</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Join us in restoring hope and building a future where every child has an opportunity to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@verbumjusticecentre.org" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-5 text-lg font-bold text-white hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
              <span className="material-symbols-outlined">mail</span>
              Partner With Us
            </a>
            <a href="tel:+256752146252" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-10 py-5 text-lg font-bold text-primary hover:bg-slate-100 transition-all">
              <span className="material-symbols-outlined">call</span>
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;

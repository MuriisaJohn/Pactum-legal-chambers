
import React from 'react';
import { PRACTICE_AREAS } from '../constants.tsx';

const PracticeAreas: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdOGDUOt6QPOjwhfkCK4Tycm3trqiCMZf3FDgipAbGIwldFwKJMG0G-fwMH7ZUis8s0h1tg3GydTsmtBNlPWeeoafnwKO_OsfcUBkwxNESxYflO7PBnQICqc3A4TtLAZZ_r7xZoi43TQYFRUPsJNwb3ob_RnBrShcGGg_POeA4QmqqD41ID2Do4IhNzj5QH2n_EPYgtPbgbEMZISNKW_cyWoaUUmnaJSCAD_eFih-ZjiWQ9564YpPsaIVS7aYzTkasvhl27Z9WLFY"
            alt="Practice areas background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Our Expertise</h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Specialized legal solutions tailored to the Ugandan context and grounded in moral fortitude.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16 text-center">
          <h3 className="text-accent-gold text-sm font-bold uppercase tracking-[0.3em] mb-3">Comprehensive Services</h3>
          <h4 className="text-3xl font-bold dark:text-white">Expert Legal Management</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="group flex flex-col md:flex-row bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800"
            >
              <div className="md:w-1/2 overflow-hidden h-64 md:h-auto">
                <img
                  src={area.imageUrl}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">{area.icon}</span>
                <h5 className="text-2xl font-bold mb-4 dark:text-white">{area.title}</h5>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {area.features?.map(f => (
                    <span key={f} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-wider rounded-full">{f}</span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-primary font-bold text-sm hover:translate-x-1 transition-transform">
                  Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;

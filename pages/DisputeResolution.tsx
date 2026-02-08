
import React from 'react';

const DisputeResolution: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero */}
      <section className="relative py-20 bg-[#0d121b] flex items-center justify-center min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiQy3gAzyz1ZH-U8Gpjbyq7vR4HiGJ7NOQ-QKbS0nP_VPjRZ9R6ldGRN1MSKXijL0j36zc9Jykl-mlCAsbbBe9MDqAe6qSibMXXwJYLwWBgfYOHaLewK9qFM3j35tpw52x7NQCmm0GyNxzoYciX1yXtraEXo-QWZtLBS7pMUf2R0HAUzGNfkYMpdgGzBIiQpgvOcGtPFAKDUKEAnJFJ31gmrNuRSUGuunME6tKEwuj-cucx89f1-rfkKeT628hkhnHGkqxvaWMaBI"
            className="w-full h-full object-cover"
            alt="Mediation setting"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block px-4 py-1 bg-primary/20 backdrop-blur-md rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-6">Specialized Practice</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-6">Restoring Peace Through<br /><span className="text-accent-gold italic">Principled Resolution</span></h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Conflict doesn't have to be destructive. We navigate disputes with wisdom and integrity to achieve lasting harmony.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold dark:text-white">Our Approach: Beyond the Courtroom</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            At Pactum Legal Chambers, we believe in reconciliation over retribution. Our dispute resolution practice is designed to provide calm, authoritative, and ethical pathways to harmony. We guide our clients through complex conflicts using tools that prioritize relationship preservation and cost-effectiveness.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">handshake</span>
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Commercial Mediation</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              A voluntary, confidential process where our neutral mediators facilitate dialogue to reach a mutually beneficial settlement.
            </p>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Preserves business relationships</li>
              <li className="flex gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Faster than traditional court cases</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">gavel</span>
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Binding Arbitration</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              A private alternative to litigation where an impartial arbitrator makes a final, legally binding decision on the dispute.
            </p>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Expert decision makers</li>
              <li className="flex gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Legally enforceable awards</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">account_balance</span>
            </div>
            <h3 className="text-xl font-bold mb-4 dark:text-white">Strategic Litigation</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              When alternative routes are exhausted, we provide robust, ethical representation in civil courts across Uganda.
            </p>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
              <li className="flex gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Rigorous legal research</li>
              <li className="flex gap-2"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> Principled advocacy</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisputeResolution;

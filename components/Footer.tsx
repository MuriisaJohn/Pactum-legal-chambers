
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-primary flex items-center justify-center rounded">
              <span className="material-symbols-outlined text-white text-lg">gavel</span>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">PACTUM LEGAL</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Premium legal services grounded in the values of justice and stewardship. Serving Uganda and East Africa with excellence and Christian integrity since 2012.
          </p>
          <div className="flex gap-4">
            <a href="#" className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a href="#" className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Practice Areas</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/practice-areas" className="hover:text-accent-gold transition-colors">Corporate Law</Link></li>
            <li><Link to="/practice-areas" className="hover:text-accent-gold transition-colors">Land Transactions</Link></li>
            <li><Link to="/practice-areas" className="hover:text-accent-gold transition-colors">Family & Succession</Link></li>
            <li><Link to="/dispute-resolution" className="hover:text-accent-gold transition-colors">Litigation & ADR</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Kampala Office</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-accent-gold">location_on</span>
              <span>Plot 12, Nakasero Road<br />Kampala, Uganda</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-accent-gold">call</span>
              <span>+256 414 123 456</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-accent-gold">mail</span>
              <span>info@pactumlegal.ug</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Pactum Legal Chambers. All Rights Reserved. Regulated by the Uganda Law Council.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

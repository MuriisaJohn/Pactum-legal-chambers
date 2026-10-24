
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-slate-300 py-12 px-6 border-t border-slate-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <div className="size-7 bg-primary flex items-center justify-center rounded">
              <span className="material-symbols-outlined text-white text-lg">gavel</span>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">Verbum Justice Centre.</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-slate-400">
            A Christian, child-focused organisation committed to protecting the rights of children, promoting access to justice, and rehabilitating children and young people in Uganda.
          </p>
          <div className="flex gap-4">
            <a href="#" className="size-9 rounded-full bg-slate-700 flex items-center justify-center hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a href="#" className="size-9 rounded-full bg-slate-700 flex items-center justify-center hover:bg-primary transition-colors">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Programmes</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li><Link to="/programmes" className="hover:text-accent-gold transition-colors">Child Justice & Legal Aid</Link></li>
            <li><Link to="/programmes" className="hover:text-accent-gold transition-colors">Drug & Substance Rehabilitation</Link></li>
            <li><Link to="/programmes" className="hover:text-accent-gold transition-colors">Child & Youth Rehabilitation</Link></li>
            <li><Link to="/programmes" className="hover:text-accent-gold transition-colors">Street-Connected Children</Link></li>
            <li><Link to="/programmes" className="hover:text-accent-gold transition-colors">Family Strengthening</Link></li>
            <li><Link to="/programmes" className="hover:text-accent-gold transition-colors">Christian Mentorship</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Kampala Office</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-accent-gold">location_on</span>
              <span> Plot 822, Rubaga Road<br />Kampala, Uganda</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-accent-gold">call</span>
              <span>+256 752 146 252</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-accent-gold">mail</span>
              <span>info@verbumjusticecentre.org</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-700 text-center text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500">
        <p>© 2026 Verbum Justice Centre. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

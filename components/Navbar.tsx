
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-[60] w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-4 group shrink-0">
          <div className="size-11 bg-primary flex items-center justify-center rounded-xl group-hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
            <span className="material-symbols-outlined text-white text-3xl">balance</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-black tracking-tight text-primary dark:text-white leading-none">PACTUM</h1>
            <p className="text-[10px] font-bold tracking-[0.3em] text-accent-gold uppercase mt-1">Legal Chambers</p>
          </div>
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center justify-center gap-10 flex-grow">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[15px] font-bold tracking-wide transition-all duration-300 hover:text-primary ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-6 shrink-0">
          <Link
            to="/contact"
            className="hidden lg:flex items-center justify-center rounded-lg h-12 px-10 bg-primary text-white text-[15px] font-black hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
          >
            Consultation
          </Link>

          <button
            className="md:hidden text-slate-900 dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-screen border-t border-slate-200 dark:border-slate-800' : 'max-h-0'
      }`}>
        <nav className="bg-white dark:bg-background-dark px-6 py-8 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xl font-bold ${
                location.pathname === link.path ? 'text-primary' : 'text-slate-600 dark:text-slate-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-white py-5 rounded-xl text-center font-bold text-lg shadow-xl"
            onClick={() => setIsOpen(false)}
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-[60] w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="size-9 bg-primary flex items-center justify-center rounded-lg group-hover:bg-primary-dark transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-white text-2xl">gavel</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tight text-primary dark:text-white leading-none">Verbum</h1>
            <p className="text-[9px] font-bold tracking-[0.3em] text-accent-gold uppercase mt-0.5">Justice Centre.</p>
          </div>
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center justify-center gap-8 flex-grow">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[14px] font-bold tracking-wide transition-all duration-300 hover:text-primary ${
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
        <div className="flex items-center gap-4 shrink-0">
          <Link
            to="/contact"
            className="hidden lg:flex items-center justify-center rounded-lg h-10 px-8 bg-primary text-white text-[14px] font-black hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
          >
            Contact Us
          </Link>

          <button
            className="md:hidden text-slate-900 dark:text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined text-2xl">{isOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-screen border-t border-slate-200 dark:border-slate-800' : 'max-h-0'
      }`}>
        <nav className="bg-white dark:bg-background-dark px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold ${location.pathname === link.path ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-white py-4 rounded-xl text-center font-bold text-lg shadow-xl mt-2"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

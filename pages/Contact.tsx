
import React from 'react';
import { Link } from 'react-router-dom';

const CONTACT_METHODS = [
  {
    method: 'Phone',
    details: ['+256 752 146 252'],
    icon: 'call',
    description: 'Call us for urgent matters or to schedule a consultation.',
  },
  {
    method: 'Email',
    details: ['info@verbumjusticecentre.org'],
    icon: 'mail',
    description: 'Send us an email with your inquiry and we will respond promptly.',
  },
  {
    method: 'Visit Us',
    details: ['Plot 822, Rubaga Road', 'Kampala, Uganda'],
    icon: 'location_on',
    description: 'Visit our office for in-person consultations and support.',
  },
];

const CTA_LINKS = [
  { label: 'Support Our Mission', path: '/contact' },
  { label: 'Partner With Us', path: '/contact' },
  { label: 'Contact Us', path: '/contact' },
];

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-10 h-[2px] bg-accent-gold rounded-full"></span>
              <h2 className="text-accent-gold font-bold uppercase tracking-[0.5em] text-[10px]">Get in Touch</h2>
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl mb-6 text-white">
              Every Child Deserves Justice.
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              Reach out to the Verbum Justice Centre team today. We are here to listen, support, and walk alongside children and young people on their journey to restoration.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CONTACT_METHODS.map((contact) => (
              <div key={contact.method} className="rounded-2xl bg-white/5 dark:bg-slate-900/40 p-8 border border-white/10 dark:border-slate-700 backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">{contact.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{contact.method}</h3>
                <p className="text-sm text-slate-400 mb-4">{contact.description}</p>
                <div className="space-y-2">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-300 font-medium">
                      {detail.startsWith('+') || detail.startsWith('http') || detail.startsWith('mailto')
                        ? <a key={idx} href={detail.startsWith('mailto') ? detail : `tel:${detail.replace(/\s/g, '')}`} className="text-accent-gold hover:underline">{detail}</a>
                        : detail
                      }
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Find Our Office</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Located in Kampala, our offices are accessible for consultations, legal support, and programme enquiries.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-96 relative group">
            <img
              src="/children.jpeg"
              alt="Verbum Justice Centre location"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-background-dark/95 backdrop-blur p-4 rounded-xl shadow-lg flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Kampala Office</span>
              <button className="text-primary text-sm font-bold flex items-center gap-1">
                Get Directions <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Join Us in Restoring Hope</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            At Verbum Justice Centre, we see potential where society may see failure, hope where others see despair, and an opportunity for restoration where others see a lost cause. Partner with us to build a future where every child has an opportunity to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {CTA_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.path}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-10 py-5 text-lg font-bold text-white hover:bg-primary-dark transition-all shadow-xl shadow-primary/20"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;


import React from 'react';

const PRACTICE_AREAS = [
  {
    title: 'Juvenile Justice & Child Rights',
    description: 'Legal representation and advocacy for children in conflict with the law and child protection matters.',
    icon: 'shield_child',
  },
  {
    title: 'Family & Succession Law',
    description: 'Guidance on family disputes, inheritance matters, and succession planning with dignity and care.',
    icon: 'family_restroom',
  },
  {
    title: 'Dispute Resolution',
    description: 'Mediation and legal resolution services for civil and commercial disputes.',
    icon: 'gavel',
  },
  {
    title: 'Corporate & Commercial Law',
    description: 'Legal advisory services for businesses and corporate entities.',
    icon: 'business_center',
  },
  {
    title: 'Real Estate & Land Law',
    description: 'Property rights, land disputes, and real estate transaction guidance.',
    icon: 'home_work',
  },
  {
    title: 'Community Legal Education',
    description: 'Legal literacy programs and rights awareness workshops for vulnerable communities.',
    icon: 'school',
  },
  {
    title: 'Adoption Services',
    description: 'Comprehensive legal support for national and inter-country adoption with compassion and expertise.',
    icon: 'favorite',
  },
];

const CONTACT_METHODS = [
  {
    method: 'Phone',
    details: ['+256 752 146 252', '+256 789 171 032'],
    icon: 'call',
    description: 'Call us for urgent matters or to schedule a consultation.',
  },
  {
    method: 'Email',
    details: ['info@pactumlegal.ug'],
    icon: 'mail',
    description: 'Send us an email with your inquiry and we will respond promptly.',
  },
  {
    method: 'Visit Us',
    details: ['Plot 822, Rubaga Road', 'Kampala, Uganda'],
    icon: 'location_on',
    description: 'Visit our office for in-person consultations and legal advice.',
  },
];

const Contact: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl mb-6 dark:text-white">
              Justice, Integrity, & <span className="text-primary">Excellence.</span>
            </h1>
            <p className="text-lg leading-8 text-slate-600 dark:text-slate-400">
              Our doors are open to serve your legal needs. Reach out to the Pactum Legal team today for a confidential consultation.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CONTACT_METHODS.map((contact) => (
              <div key={contact.method} className="rounded-2xl bg-slate-50 dark:bg-slate-900/40 p-8 border border-slate-100 dark:border-slate-800">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <span className="material-symbols-outlined text-2xl">{contact.icon}</span>
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-2">{contact.method}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{contact.description}</p>
                <div className="space-y-2">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-700 dark:text-slate-300 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">Find Our Office</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Located in the heart of Kampala, our chambers are easily accessible for consultations and legal services.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-96 relative group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr3ujoNo8AM24kuf9UfBNMPkhkEJdzemWqPR3ZO1D67ODUOf1UzjQapcS1oAsD7YJ4WsmQ_NXrptHI58gNDQnaYDRjfPJcqf2muoZ-VZXt287dbGtLccsPt7wG_n8pTeo1LegUFtFOVBeLbs7vzwUPmH60fvjKSR7gZR1NdaqMqed1u5kmL0Nzx14MEIBIczlAyQHsN5he2FdB9ZD0wjdmeQDqxVzzenYqfLLSk_zlJ2jIn67iohCcpSqYinYOnrGZO2b1ApTcAF8"
              alt="Kampala Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-background-dark/95 backdrop-blur p-4 rounded-xl shadow-lg flex justify-between items-center">
              <span className="text-sm font-semibold dark:text-white">Rubaga, Kampala Office</span>
              <button className="text-primary text-sm font-bold flex items-center gap-1">
                Get Directions <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 lg:py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Services</h2>
            <h3 className="text-3xl md:text-4xl font-bold dark:text-white leading-tight">Areas of Legal Practice</h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              We provide comprehensive legal services across multiple practice areas, with a special focus on serving vulnerable populations and advancing justice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRACTICE_AREAS.map((area) => (
              <div key={area.title} className="rounded-2xl bg-slate-50 dark:bg-slate-900/40 p-8 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6">
                  <span className="material-symbols-outlined">{area.icon}</span>
                </div>
                <h4 className="text-lg font-bold dark:text-white mb-3">{area.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-primary/5 dark:bg-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-6">Ready to Seek Justice?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Contact us today to discuss your legal matter. Our team is committed to providing expert legal guidance with compassion and integrity. All consultations are treated with strict confidentiality and legal privilege.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+256752146252"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary py-4 px-8 text-base font-bold text-white hover:bg-blue-700 transition-all"
            >
              <span className="material-symbols-outlined">call</span>
              Call Us
            </a>
            <a 
              href="mailto:info@pactumlegal.ug"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-200 dark:bg-slate-800 py-4 px-8 text-base font-bold text-slate-900 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
            >
              <span className="material-symbols-outlined">mail</span>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

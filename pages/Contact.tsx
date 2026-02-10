
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Juvenile Justice & Child Rights',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry. A member of the Pactum Legal team will contact you shortly.");
    setFormState({ name: '', email: '', subject: 'Juvenile Justice & Child Rights', message: '' });
  };

  return (
    <div className="animate-in fade-in duration-700">
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

          <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
            {/* Contact Details */}
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold dark:text-white">Main Chambers</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400 leading-relaxed">
                    Plot 822, Rubaga Road<br />
                    Kampala, Uganda
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold dark:text-white">Direct Support</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">+256 752 146 252</p>
                  <p className="text-slate-600 dark:text-slate-400">+256 789 171 032</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold dark:text-white">Email Us</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">info@pactumlegal.ug</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-80 relative group">
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

            {/* Form */}
            <div className="rounded-2xl bg-white dark:bg-slate-900 p-8 shadow-xl border border-slate-100 dark:border-slate-800">
              <div className="mb-8">
                <h2 className="text-2xl font-bold dark:text-white">Send a Message</h2>
                <p className="mt-2 text-slate-500 text-sm italic">
                  * All inquiries are treated with strict legal privilege and confidentiality.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold mb-2 dark:text-slate-200">Full Name</label>
                    <input 
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent dark:text-white py-3 px-4 text-sm focus:border-primary focus:ring-primary"
                      type="text" 
                      required
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 dark:text-slate-200">Email Address</label>
                    <input 
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent dark:text-white py-3 px-4 text-sm focus:border-primary focus:ring-primary"
                      type="email" 
                      required
                      value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 dark:text-slate-200">Legal Matter / Subject</label>
                  <select 
                    className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent dark:text-white py-3 px-4 text-sm focus:border-primary focus:ring-primary"
                    value={formState.subject}
                    onChange={e => setFormState({...formState, subject: e.target.value})}
                  >
                    <option>Juvenile Justice & Child Rights</option>
                    <option>Corporate & Commercial Law</option>
                    <option>Family & Succession</option>
                    <option>Real Estate & Land</option>
                    <option>Dispute Resolution</option>
                    <option>Other Legal Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 dark:text-slate-200">Brief Case Description</label>
                  <textarea 
                    className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-transparent dark:text-white py-3 px-4 text-sm focus:border-primary focus:ring-primary"
                    rows={5}
                    placeholder="How can we help you?"
                    required
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  className="w-full rounded-lg bg-primary py-4 text-base font-bold text-white shadow-md hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                  type="submit"
                >
                  Submit Inquiry <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

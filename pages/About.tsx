
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom duration-700">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(13, 18, 27, 0.7), rgba(13, 18, 27, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3L3D95aysg65_8APuU1bcQFAo0-lpl8NLOFojNIqj1nZJ5CHUW6UubguHguR1FKKxfA_cAdQVQMVQ1YQzLWVvrO3_r6E74rOs1NhOIVav_VvaAMkPgfP0Y0ZLyFMqi2jE3xWZNVYJkYfiRvlqoepbRDdltGK0lWESyuKh26w4fsNAjDDoMdX2_EsqLB2ayXe7o60_u1d7ZQhNJMcz0tXJ3YB_K1AkioeHHPYMobapzZQqm4KrYtB2KDxEaCEphgDfNPPlXLjWxMY')" }}></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Legacy</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            A Calling to Excellence
          </h1>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto">
            Rooted in Kampala, serving the spirit of justice across East Africa.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">The Story of Pactum</h2>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8 dark:text-white">Redefining the Ugandan legal landscape.</h3>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-IugCu71trug1m1-teue4p_5mvYbU805b1L1MqAJlAlGUeMBHS3cyZTrt7WL4uXVEfFx3ooOY_mP-oGlbFRC_W5WBBna96-HWxd49tEirhDMVqKk1vHEl7e9mcL1sXCbFUAGaa5Gs5qEF3_LEpXscoT3uK7QM34kB7JR5HBWC4b82nBFOkuYnyV6aCu5vJWw_ipCSo45azcX-R8vcDMhULvWK1APhKVt4fpodaBn4T7kDpFsqY7757NXx_CrDyB4KmPxcAcmgzls"
                alt="Professional legal meeting"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                Pactum Legal Chambers was founded on the conviction that legal practice is more than a profession—it is a stewardship of justice. Named after the Latin word for 'Covenant', our firm reflects our deep-rooted commitment to our clients and our Creator.
              </p>
              <p>
                In an era where legal complexities are growing, we remain steadfast in our mission to provide sophisticated counsel through the lens of integrity. We believe that true advocacy requires both a sharp legal mind and a humble heart.
              </p>
              <blockquote className="border-l-4 border-accent-gold pl-6 py-2 italic text-2xl text-slate-900 dark:text-white font-serif">
                "Justice is not just a standard of law, but a reflection of divine order. We practice with this eternal perspective in mind."
              </blockquote>
              <p>
                Today, Pactum Legal Chambers stands as a beacon of trust for corporations, non-profits, and individuals who seek not just legal results, but ethical peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-background-dark p-12 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-6">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 dark:text-white font-serif">Our Mission</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To deliver justice through faith-led practice and unwavering professional excellence, ensuring that every client receives counsel rooted in truth and executed with precision.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark p-12 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-6">
              <div className="size-14 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 dark:text-white font-serif">Our Vision</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  To be the premier legal partner in East Africa, recognized as a global beacon of integrity where the pursuit of justice is harmonized with universal values of service and truth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

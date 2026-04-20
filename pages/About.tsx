import React from 'react';

const COMMUNITY_HIGHLIGHTS = [
  {
    title: 'Media & Public Advocacy',
    description:
      'Regularly invited to national media and leadership forums to speak on child protection, access to justice, and legal reform for vulnerable families.',
    icon: 'campaign',
  },
  {
    title: 'Community Legal Outreach',
    description:
      'We carry legal literacy and rights-awareness programs directly into communities where children and families are most at risk.',
    icon: 'diversity_3',
  },
  {
    title: 'Child-Centered Representation',
    description:
      'Our legal strategy prioritizes rehabilitation, dignity, and long-term social reintegration for children in conflict with the law.',
    icon: 'favorite',
  },
];

const IMPACT_GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1200',
    alt: 'Lawyer speaking to a youth community gathering',
  },
  {
    src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=1200',
    alt: 'Children participating in a community activity outdoors',
  },
  {
    src: 'https://images.unsplash.com/photo-1536337005238-94b997371b40?auto=format&fit=crop&q=80&w=1200',
    alt: 'Portrait of a vulnerable child beneficiary',
  },
  {
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1200',
    alt: 'Public advocacy and legal outreach in a large community setting',
  },
];

const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom duration-700">
      {/* Hero Section */}
      <section className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(13, 18, 27, 0.7), rgba(13, 18, 27, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3L3D95aysg65_8APuU1bcQFAo0-lpl8NLOFojNIqj1nZJ5CHUW6UubguHguR1FKKxfA_cAdQVQMVQ1YQzLWVvrO3_r6E74rOs1NhOIVav_VvaAMkPgfP0Y0ZLyFMqi2jE3xWZNVYJkYfiRvlqoepbRDdltGK0lWESyuKh26w4fsNAjDDoMdX2_EsqLB2ayXe7o60_u1d7ZQhNJMcz0tXJ3YB_K1AkioeHHPYMobapzZQqm4KrYtB2KDxEaCEphgDfNPPlXLjWxMY')",
          }}
        ></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Calling</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">Justice for the Most Vulnerable</h1>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto">
            Serving children, youth, and vulnerable families with Christ-centered legal advocacy.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Commitment</h2>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8 dark:text-white">From the streets to the courtroom.</h3>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1200"
                alt="Legal advocate engaging with young people in the community"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                At Pactum Legal Chambers, our work is deeply rooted in faith, dignity, and service. We stand with those who are too often unheard: children, youth, and vulnerable families who struggle to access justice.
              </p>
              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                <p className="font-medium text-slate-900 dark:text-white">
                  Our team offers <strong className="text-primary">Christ-centered legal aid and advocacy</strong> that protects rights, restores hope, and creates pathways for fair treatment and rehabilitation.
                </p>
              </div>
              <p>
                Beyond legal representation, we work at the grassroots—partnering with communities, institutions, and media spaces to build awareness on child protection and equitable access to justice.
              </p>
              <blockquote className="border-l-4 border-accent-gold pl-6 py-2 italic text-2xl text-slate-900 dark:text-white font-serif">
                “Speak up for those who cannot speak for themselves… defend the rights of the poor and needy.”
                <span className="block text-sm mt-3 not-italic font-sans tracking-wide text-slate-500 dark:text-slate-400">Proverbs 31:8–9 (NIV)</span>
              </blockquote>
              <p>
                Every case we take and every voice we amplify is part of a larger vision: a just society where the vulnerable have equal access to justice.
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
                  To provide Christ-centered legal aid and advocacy for children, youth, and vulnerable families in need.
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
                  A just society where the vulnerable have equal access to justice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-bold dark:text-white leading-tight">Advocacy in courtrooms, media, and communities</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {COMMUNITY_HIGHLIGHTS.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 p-8 shadow-sm"
              >
                <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_GALLERY.map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <img src={item.src} alt={item.alt} className="w-full h-72 object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


import React from 'react';

const SUCCESS_STORIES = [
  {
    id: 1,
    category: 'Juvenile Justice',
    title: 'Restoring Hope for a Youth in Conflict with the Law',
    description: 'We successfully advocated for the rehabilitation and reintegration of a 15-year-old facing minor charges, ensuring they could return to school instead of facing detention.',
    impact: 'Rehabilitation & Education Access',
    image: '#/child2.jpeg',
    icon: 'shield_child'
  },
  {
    id: 2,
    category: 'Family Law',
    title: 'Securing a Stable Future for Vulnerable Siblings',
    description: 'Our team provided legal representation in a complex guardianship case, securing a safe and loving environment for three children following the loss of their primary caregivers.',
    impact: 'Safe Guardianship & Stability',
    image: '/children.jpeg',
    icon: 'family_restroom'
  },
  {
    id: 3,
    category: 'Community Outreach',
    title: 'Empowering Communities through Legal Literacy',
    description: 'Through our grassroots advocacy, we reached over 500 community members in rural areas, providing essential knowledge on child protection and legal rights.',
    impact: 'Community Awareness & Empowerment',
    image: '/talk2.jpeg',
    icon: 'diversity_3'
  },
  {
    id: 4,
    category: 'Dispute Resolution',
    title: 'Mediating a Complex Land Dispute with Integrity',
    description: 'We facilitated a peaceful resolution between two families in a long-standing land dispute, avoiding years of costly litigation and preserving community harmony.',
    impact: 'Peaceful Reconciliation',
    image: '/pre.jpeg',
    icon: 'handshake'
  }
];

const DisputeResolution: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 flex items-center justify-center min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1683187481079-fadf0e704ba1?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="w-full h-full object-cover object-top"
            alt="Success Stories Background"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="inline-block px-4 py-1 bg-primary/20 backdrop-blur-md rounded-full text-xs font-bold text-primary uppercase tracking-widest mb-6 border border-primary/30">Impact & Results</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">Our <span className="text-accent-gold italic">Success Stories</span></h1>
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Every case we handle is a step toward a more just society. Explore how Verbum Justice Center is making a difference in the lives of the vulnerable.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">Justice in Action</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            At Verbum Justice Center, our success is measured by the lives restored and the rights protected. We stand at the forefront of legal advocacy for children, youth, and vulnerable families, turning legal challenges into stories of hope and restoration.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SUCCESS_STORIES.map((story) => (
              <div key={story.id} className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 dark:border-slate-800 flex flex-col">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg text-[10px] font-black uppercase tracking-wider text-primary shadow-sm">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-xl">{story.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold dark:text-white leading-tight">{story.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                    {story.description}
                  </p>
                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Key Impact</span>
                      <span className="text-sm font-bold text-primary">{story.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="size-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8">
            <span className="material-symbols-outlined text-4xl">verified</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white mb-6">Join Our Mission</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            Every successful story is made possible through dedicated advocacy and community support. If you or someone you know needs legal assistance, we are here to help write the next chapter of justice.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-10 py-5 text-lg font-bold text-white hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 gap-3"
          >
            Start Your Story <span className="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default DisputeResolution;

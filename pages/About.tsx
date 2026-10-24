
import React from 'react';
import { CORE_VALUES } from '../constants.tsx';

const SCRIPTURES = [
  {
    reference: 'Isaiah 1:17 (KJV)',
    text: 'Learn to do well; seek judgment, relieve the oppressed, judge the fatherless, plead for the widow.',
    context: 'This Scripture reflects our commitment to advocating for children whose voices may otherwise go unheard.',
  },
  {
    reference: 'Matthew 19:14 (KJV)',
    text: 'Suffer little children, and forbid them not, to come unto me: for of such is the kingdom of heaven.',
    context: 'These teachings inspire us to protect children, advocate for fairness, support rehabilitation, and demonstrate compassion without discrimination.',
  },
];

const VISION = {
  title: 'Our Vision',
  text: 'A society where every child enjoys justice, protection, dignity, and the opportunity to live a safe, meaningful, and productive life.',
};

const MISSION = {
  title: 'Our Mission',
  text: 'To protect the rights and interests of children in conflict with the law, promote the rehabilitation and recovery of children and young people affected by drug and substance use, and advance their reintegration into families and communities through Christian values, legal advocacy, restorative justice, and community-based support.',
};

const COMMITMENTS = [
  {
    title: 'Justice',
    description: 'Protecting the legal rights and interests of children in conflict with the law.',
    icon: 'balance',
  },
  {
    title: 'Rehabilitation',
    description: 'Supporting children and young people affected by drug and substance use.',
    icon: 'healing',
  },
  {
    title: 'Restoration',
    description: 'Promoting healing, accountability, family support, and community reintegration.',
    icon: 'healing',
  },
  {
    title: 'Dignity',
    description: 'Treating every child and young person with respect, regardless of their circumstances.',
    icon: 'person',
  },
  {
    title: 'Faith',
    description: 'Demonstrating the love of Christ through practical service, compassion, and advocacy.',
    icon: 'favorite',
  },
  {
    title: 'Hope',
    description: 'Creating opportunities for vulnerable children and young people to rebuild their lives.',
    icon: 'trending_up',
  },
];

const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom duration-700">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(11, 20, 38, 0.75), rgba(11, 20, 38, 0.55)), url('/new/WhatsApp Image 2026-10-14 at 10.34.52 PM.jpeg')",
          }}
        ></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Calling</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">Justice for the Most Vulnerable</h1>
          <p className="text-lg text-gray-200 font-light max-w-2xl mx-auto">
            A Christian, child-focused organisation protecting children's rights and restoring hope to young people in Uganda.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-8 aspect-[4/5]">
              <img
                className="w-full h-full object-contain object-center"
                src="/ronald.jpeg"
                alt="Verbum Justice Centre team engaging with children"
              />
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8 dark:text-white">Every Child Deserves Justice.</h3>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                Verbum Justice Centre is a Christian organisation committed to advancing child justice, promoting rehabilitation, and protecting the dignity and rights of vulnerable children and young people in Uganda.
              </p>
              <p>
                We recognise that children who come into conflict with the law or struggle with drug and substance use often face complex challenges, including poverty, neglect, abuse, family instability, peer pressure, homelessness, and limited access to essential services.
              </p>
              <div className="p-6 bg-primary/5 border-l-4 border-primary rounded-r-xl">
                <p className="font-medium text-slate-900 dark:text-white">
                  Rather than responding to these challenges with stigma and exclusion, we promote an approach that combines legal protection, rehabilitation, psychosocial support, mentorship, family participation, and community-based interventions.
                </p>
              </div>
              <p>
                Our work is inspired by the conviction that every child possesses inherent dignity and the capacity for growth, healing, and transformation.
              </p>
              <p>
                As a Christian organisation, we draw inspiration from the teachings of Jesus Christ, particularly His concern for the vulnerable, His compassion for those rejected by society, and His commitment to justice, mercy, and restoration.
              </p>
              <p>
                While our work is grounded in Christian faith, our services are intended to respect the dignity, rights, and lawful protections of every child, irrespective of religious background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Change - Images with Words */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Stories of Change</h2>
            <h3 className="text-3xl md:text-5xl font-bold dark:text-white leading-tight">Lives Restored, Futures Rebuilt</h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Behind every case is a child whose life is being transformed. These are some of the stories we walk alongside every day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                <img
                  src="/new/WhatsApp Image 2026-10-14 at 10.34.53 PM.jpeg"
                  alt="Child receiving legal support"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold dark:text-white mb-3">From Conflict to the Classroom</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  A 14-year-old boy facing charges for petty theft was diverted from detention into our rehabilitation programme. Today, he is back in school, receiving mentorship, and rebuilding his future with dignity.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
                <img
                  src="/new/WhatsApp Image 2026-10-14 at 10.34.54 PM.jpeg"
                  alt="Family reunification support"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold dark:text-white mb-3">A Family Reunited</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  After months of street-connected life, a young girl was traced back to her family. Through our family strengthening and reintegration support, she is now home, safe, and receiving counselling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Christian Foundation */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Christian Foundation</h2>
            <h3 className="text-3xl md:text-5xl font-bold dark:text-white leading-tight">Faith in Action</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SCRIPTURES.map((scripture) => (
              <div key={scripture.reference} className="bg-white dark:bg-background-dark p-10 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <blockquote className="italic text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-serif text-xl">
                  "{scripture.text}"
                </blockquote>
                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-lg bg-accent-gold/10 flex items-center justify-center text-accent-gold flex-shrink-0">
                    <span className="material-symbols-outlined text-xl">book</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{scripture.reference}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{scripture.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white dark:bg-background-dark p-12 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-6">
              Our Christian identity is central to our mission. We believe that serving vulnerable children is not merely a social responsibility but also an expression of Christian love and a commitment to human dignity. We seek to translate these values into practical action by standing with children whose rights are threatened, supporting young people on the journey to recovery, and helping families and communities become safer and more supportive environments.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              Our ultimate goal is to contribute to a Uganda where children are protected, justice systems are responsive to their needs, rehabilitation is accessible, and every young person has a meaningful opportunity to rebuild their life.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white dark:bg-background-dark p-12 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-6">
              <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 dark:text-white font-serif">{VISION.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{VISION.text}</p>
              </div>
            </div>
            <div className="bg-white dark:bg-background-dark p-12 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-6">
              <div className="size-14 rounded-xl bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                <span className="material-symbols-outlined text-3xl">flag</span>
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4 dark:text-white font-serif">{MISSION.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{MISSION.text}</p>
              </div>
            </div>
          </div>

          {/* Core Values Full List */}
          <div className="mb-16">
            <div className="max-w-3xl mb-10">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Core Values</h2>
              <h3 className="text-3xl md:text-5xl font-bold dark:text-white leading-tight">Values That Transform</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((value) => (
                <div key={value.title} className="p-8 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100/50 dark:border-slate-800/50">
                  <div className="size-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center mb-5 text-primary shadow-sm">
                    <span className="material-symbols-outlined text-xl">{value.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3 dark:text-white">{value.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commitments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMITMENTS.map((commitment) => (
              <div key={commitment.title} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-accent-gold/50 transition-all duration-500">
                <div className="size-10 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-5 text-accent-gold">
                  <span className="material-symbols-outlined text-xl">{commitment.icon}</span>
                </div>
                <h4 className="text-lg font-bold mb-3 dark:text-white">{commitment.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{commitment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Gallery */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-4">Our Impact in Action</h2>
            <h3 className="text-3xl md:text-5xl font-bold dark:text-white leading-tight">Restoring Hope, One Child at a Time</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm aspect-[4/5]">
              <img
                src="/new/WhatsApp Image 2026-10-14 at 10.34.56 PM.jpeg"
                alt="Children participating in community activities"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm aspect-[4/5]">
              <img
                src="/new/WhatsApp Image 2026-10-14 at 10.34.58 PM.jpeg"
                alt="Family reunification and support visit"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm aspect-[4/5]">
              <img
                src="/new/WhatsApp Image 2026-10-14 at 10.34.54 PM (1).jpeg"
                alt="Legal aid and outreach session"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

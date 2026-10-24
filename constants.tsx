
import { Programme, NavLink, Value } from './types.ts';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programmes', path: '/programmes' },
  { label: 'Contact', path: '/contact' },
];

export const CORE_VALUES: Value[] = [
  {
    title: 'Christ-Centred Service',
    description: 'Guided by the teachings of Jesus Christ, we demonstrate His love through justice, mercy, compassion, and service to vulnerable children.',
    icon: 'favorite',
  },
  {
    title: 'Justice and Fairness',
    description: 'We advocate for the rights of children and promote fair, lawful, and child-sensitive treatment within the justice system.',
    icon: 'balance',
  },
  {
    title: 'Human Dignity',
    description: 'We recognise the inherent worth of every child and young person, regardless of their background, behaviour, disability, or circumstances.',
    icon: 'person',
  },
  {
    title: 'Compassion',
    description: 'We approach children and families with empathy, understanding, and a commitment to addressing the underlying causes of their challenges.',
    icon: 'favorite',
  },
  {
    title: 'Accountability',
    description: 'We promote responsibility, lawful conduct, safeguarding, and constructive accountability as essential components of justice and rehabilitation.',
    icon: 'verified_user',
  },
  {
    title: 'Restoration',
    description: 'We believe in creating opportunities for healing, recovery, reconciliation where appropriate, and reintegration into society.',
    icon: 'self_improvement',
  },
  {
    title: 'Integrity',
    description: 'We are committed to honesty, transparency, professionalism, and responsible stewardship of the resources entrusted to us.',
    icon: 'verified',
  },
  {
    title: 'Inclusion and Participation',
    description: 'We believe children should be heard, respected, and meaningfully involved in decisions affecting their lives, in accordance with their age, maturity, and best interests.',
    icon: 'people',
  },
];

export const PROGRAMMES: Programme[] = [
  {
    id: 'child-justice-legal-aid',
    title: 'Child Justice and Legal Aid',
    subtitle: 'Protecting the Rights of Children in Conflict with the Law',
    description: 'Every child deserves fair treatment, legal protection, and an opportunity to be heard. We ensure children in conflict with the law receive appropriate legal support and are treated in accordance with Uganda\u2019s child protection and juvenile justice framework.',
    icon: 'gavel',
    imageUrl: '/child.jpeg',
    services: [
      'Legal representation for eligible children in conflict with the law',
      'Legal advice and assistance for children and caregivers',
      'Police station and court support with child-sensitive procedures',
      'Diversion advocacy and alternatives to formal court proceedings',
      'Bail and release assistance',
      'Child rights advocacy',
      'Family engagement throughout legal proceedings',
      'Restorative justice approaches',
    ],
    philosophy: 'A child in conflict with the law is still a child deserving of protection, justice, and an opportunity for rehabilitation.',
  },
  {
    id: 'drug-substance-rehabilitation',
    title: 'Drug and Substance Use Rehabilitation',
    subtitle: 'From Dependency to Recovery. From Stigma to Hope.',
    description: 'Drug and substance use can significantly affect a child\u2019s physical health, mental wellbeing, education, family relationships, and future opportunities. We support affected children and young people through compassionate, structured, and age-appropriate rehabilitation interventions.',
    icon: 'self_improvement',
    imageUrl: '/child1.jpeg',
    services: [
      'Identification and early intervention',
      'Psychosocial support through qualified professionals',
      'Rehabilitation referrals to health facilities and addiction treatment providers',
      'Recovery mentorship',
      'Family support and education',
      'Education and life skills development',
      'Relapse prevention support',
      'Community reintegration',
    ],
    philosophy: 'Recovery is possible, dignity can be restored, and every young person deserves an opportunity to begin again.',
  },
  {
    id: 'child-youth-rehabilitation',
    title: 'Child and Youth Rehabilitation',
    subtitle: 'Addressing the Challenges Behind the Behaviour',
    description: 'Children and young people may experience difficulties that affect their conduct, relationships, education, and ability to participate positively in society, including homelessness, neglect, family breakdown, and exposure to violence.',
    icon: 'search',
    imageUrl: '/children.jpeg',
    services: [
      'Individual assessment and referral to appropriate services',
      'Psychosocial support and mentoring',
      'Life skills and personal development programmes',
      'Educational reintegration and school retention support',
      'Vocational training and skills development referrals',
      'Family tracing and reunification where appropriate and safe',
      'Positive behaviour development and conflict management',
      'Recreational, creative, and community engagement activities',
    ],
    philosophy: 'Rehabilitation is most effective when interventions respond to the individual child\u2019s circumstances, needs, strengths, and aspirations.',
  },
  {
    id: 'street-connected-children',
    title: 'Street-Connected Children and Vulnerable Families',
    subtitle: 'Reaching Children Where They Are',
    description: 'Children living or working on the streets face significant risks, including violence, exploitation, substance use, homelessness, interrupted education, and conflict with the law.',
    icon: 'route',
    imageUrl: '/talk1.jpeg',
    services: [
      'Outreach and identification of children in vulnerable situations',
      'Initial assessment of safety and immediate needs',
      'Referral to shelter, healthcare, and child protection services',
      'Family tracing and reunification where safe and in the child\u2019s best interests',
      'Support for educational reintegration',
      'Mentorship and life skills development',
      'Assistance connecting families to social support services',
      'Follow-up and reintegration monitoring',
    ],
    philosophy: 'Taking a child off the street is only the beginning. Sustainable change requires addressing the circumstances that brought the child there.',
  },
  {
    id: 'family-strengthening',
    title: 'Family Strengthening and Community Reintegration',
    subtitle: 'Building Stronger Families. Creating Safer Communities.',
    description: 'Families and communities play an important role in protecting children and supporting rehabilitation. We work to promote constructive family participation and strengthen community support systems.',
    icon: 'home',
    imageUrl: '/talk2.jpeg',
    services: [
      'Family counselling referrals and caregiver support',
      'Parenting education and child protection awareness',
      'Family mediation where appropriate and safe',
      'Family reunification assessments and follow-up',
      'Community education on child rights and juvenile justice',
      'Awareness campaigns addressing drug and substance use',
      'Engagement with schools, local leaders, and community organisations',
      'Referrals to relevant government and non-governmental services',
    ],
    philosophy: 'Sustainable rehabilitation requires more than changing a child\u2019s behaviour. It requires creating environments in which children feel safe, supported, accountable, and encouraged to thrive.',
  },
  {
    id: 'christian-mentorship',
    title: 'Christian Mentorship and Character Development',
    subtitle: 'Faith That Serves. Values That Transform.',
    description: 'We believe that faith can inspire hope, encourage positive choices, and strengthen a young person\u2019s sense of purpose. Through voluntary and age-appropriate Christian mentorship, we encourage children and young people to develop positive values.',
    icon: 'school',
    imageUrl: '/pre.jpeg',
    services: [
      'Christian mentorship and discipleship',
      'Values-based life skills education',
      'Personal development and goal-setting',
      'Leadership and responsible citizenship training',
      'Guidance on positive relationships and decision-making',
      'Encouragement towards education, vocational training, and productive activities',
      'Community service and constructive youth engagement',
    ],
    philosophy: 'Participation in religious activities should be respectful, appropriate, and voluntary. Our goal is to help young people develop a positive identity and contribute meaningfully to their families and communities.',
  },
];

export const APPROACH_PRINCIPLES = [
  {
    title: 'Listen and Understand',
    description: 'We seek to understand each child\u2019s circumstances, experiences, immediate needs, and aspirations before determining an appropriate intervention.',
    icon: 'person',
  },
  {
    title: 'Protect and Advocate',
    description: 'We work to protect children\u2019s rights, address immediate safeguarding concerns, and facilitate access to appropriate legal, health, and social services.',
    icon: 'shield',
  },
  {
    title: 'Assess and Refer',
    description: 'Where necessary, we facilitate professional assessments and referrals to qualified legal practitioners, healthcare providers, rehabilitation services, and child protection professionals.',
    icon: 'assignment',
  },
  {
    title: 'Rehabilitate and Empower',
    description: 'We support interventions that strengthen emotional wellbeing, personal responsibility, education, life skills, and constructive decision-making.',
    icon: 'trending_up',
  },
  {
    title: 'Reconnect and Reintegrate',
    description: 'Where appropriate and safe, we facilitate family engagement, educational reintegration, and reconnection with supportive community structures.',
    icon: 'people_alt',
  },
  {
    title: 'Follow Up and Support',
    description: 'We recognise that meaningful transformation takes time. We seek to encourage continuity of care, follow-up, and appropriate support throughout the rehabilitation journey.',
    icon: 'schedule',
  },
];

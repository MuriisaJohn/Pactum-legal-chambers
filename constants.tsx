
import { PracticeArea, NavLink, Value } from './types.ts';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Practice Areas', path: '/practice-areas' },
  { label: 'Dispute Resolution', path: '/dispute-resolution' },
  { label: 'Contact', path: '/contact' },
];

export const CORE_VALUES: Value[] = [
  {
    title: 'Justice',
    description: 'We pursue truth without compromise, advocating for the rights of the marginalized and the integrity of the law.',
    icon: 'balance',
  },
  {
    title: 'Integrity',
    description: 'Our yes is yes. We operate with radical transparency and honesty in every interaction and legal proceeding.',
    icon: 'verified_user',
  },
  {
    title: 'Stewardship',
    description: 'We view our legal expertise as a gift to be used for the benefit of our clients and the betterment of our community.',
    icon: 'diversity_1',
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'land-law',
    title: 'Land Law & Conveyancing',
    description: 'Strategic expertise in land acquisition, title processing, and complex real estate transactions within the Ugandan legal framework.',
    icon: 'landscape',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHnqc2EC-p4cZMOlUdZvxh32Bv-LhgJzN5H_lPv63m_sr9DzOzMTXRQAZivVaywyrQF5V7efSoKxVr-qn4ou_8vpL8wVDM6atrAHgVqyoV7nSkKmgpUzDFygm_ohYdIoXvo3L0Kf7EbaxNSEO3-2VGn0k5uu8UFb9EDGSgrKG2eGfT0kB8r6EuCXLuL-rOyY00lT6a8NqPYjHLZDGKQeCNAEJhb8cAXpo7O69abozElHglzfYzp5JNjZnnli5D31sJDsRunX4oyss',
    features: ['Title Processing', 'Lease Negotiations', 'Real Estate Disputes']
  },
  {
    id: 'family-law',
    title: 'Family & Succession',
    description: 'Compassionate and ethical legal support for matrimonial causes, succession, guardianship, and comprehensive estate planning.',
    icon: 'family_restroom',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFccJ-rsVqxgx2aHQ2OD-Vq7jwKEf4Bdc9uzr4G7YfKohTSC4V5Z6cmTvgqtj5fgDOtIUVb_gqQZv8NGhQz00HCUiff-X-p1ND5oYuWLcykNN4VEXjz1GiI3RR_YojetfEih9Wylp2-NWHZ3StgrAYoS-gp_MqkYQ5o5CO46oGtzcicMcbzCJwmx2TCx7pJoONXQO2WXceGu8DwoPz2weO9pI3RDIhBZcD_Na4unGFdL-H7hRuay_jN1z3oWhTgEg6Euw5fTsCBgw',
    features: ['Divorce & Separation', 'Probate & Wills', 'Child Custody']
  },
  {
    id: 'corporate-law',
    title: 'Corporate & Commercial',
    description: 'Comprehensive advice for businesses, including contract drafting, compliance, and strategic corporate governance.',
    icon: 'apartment',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCx1vPxqghikl5T2i3GX8vwtCLWclZkiaAmUQyjUsSsK_eTVOJAyGeWEqncCk0fHqHYRgWpKs2Xr_7xL2bMHOtBRsLbNcZt_3oqe8PsC0Atujin-d0Q0CWHyRjreVSQJM0Nqgsx74gDJYycbMsqLdVyJnRt1z9F5XvFlyIVaKcf0v779ou_LMRFk3LNJQ7-7vrDsYEdnXUu1sdE_4xdQbnLXoN6gP6WEEU5pz9wTQT1nUMkwQVllYlyP9WnjsqXlPGrS0Pn380HU0M',
    features: ['Contract Management', 'Company Formation', 'M&A Advisory']
  },
  {
    id: 'dispute-resolution',
    title: 'Litigation & ADR',
    description: 'Vigorous court representation and effective alternative dispute resolution to restore peace through principled solutions.',
    icon: 'balance',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOsSCLiRU-ri7Vq4w0tKTx_trCCMNeVIp_dxLD2JxxU8qj1IEoSorSa4fx-bE2YN2rfORSwDbWShFZAVMya7e7Gn3Z1n5_vdKnFIxytYbgOpG1YjV7UxeFojj1_9UOoScYq-NctNuhJSxX2Rd_Weu4wCpu7gihtF1ja35h3P-aqmtPTXMaxK9u6bciN4VTioLB3KQpkj5g9rSxwUMVgefx3OKwJJOjq2EmZEzSu0auZ1dTw0gcT4_FYZ8_zCdW3e282UCGS9xGO_w',
    features: ['Civil Litigation', 'Mediation', 'Arbitration']
  }
];

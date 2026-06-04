/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Pillar, ServiceType, Expert } from './types';

export const PILLARS_DATA: Pillar[] = [
  {
    id: 'citizens',
    title: 'Citizens',
    iconName: 'users',
    description: 'The core of our community receiving aid and driving local change.',
    learnMoreText: 'Learn More',
    color: 'primary',
    details: 'Our grassroots citizen networks participate directly in needs assessments, receive micro-grants, and report real-time challenges. By empowering local residents to lead, we ensure that aid is co-designed and sustainable rather than top-down.'
  },
  {
    id: 'volunteers',
    title: 'Volunteers',
    iconName: 'volunteer_activism',
    description: 'Dedicated heroes executing ground-level initiatives and support.',
    learnMoreText: 'Learn More',
    color: 'secondary',
    details: 'With over 12,000 active volunteers across regions, our volunteer core executes critical field operations, leads community workshops, conducts health camps, and acts as the immediate human-centric link for remote areas.'
  },
  {
    id: 'doctors',
    title: 'Doctors',
    iconName: 'medical_services',
    description: 'Verified medical experts providing consultation and critical care.',
    learnMoreText: 'Learn More',
    color: 'tertiary',
    details: 'Our network of verified physicians, specialists, and health scientists provide free virtual consultations, guide localized epidemic responses, and help build regional health strategy playbooks on a pro-bono basis.'
  },
  {
    id: 'partners',
    title: 'Partners',
    iconName: 'corporate_fare',
    description: 'Providing strategic funding and structural institutional support.',
    learnMoreText: 'Learn More',
    color: 'primary',
    details: 'Connecting with corporate CSR, foundations, and universities to drive structural funding. This synergizes academic research with capital and field capacity for deep transparency and measurable impact.'
  }
];

export const SERVICES_DATA: ServiceType[] = [
  {
    id: 'sos',
    title: 'SOS System',
    iconName: 'emergency',
    description: 'Rapid response emergency grid connecting victims to nearest first-responders.',
    statValue: 90,
    statLabel: '90% Response Speed',
    colorClass: 'tertiary'
  },
  {
    id: 'academy',
    title: 'Training Academy',
    iconName: 'school',
    description: 'Skilling the next generation of community leaders and field experts.',
    statValue: 75,
    statLabel: '75% Graduates Placed',
    colorClass: 'secondary'
  },
  {
    id: 'knowledge',
    title: 'Knowledge Center',
    iconName: 'menu_book',
    description: 'Access to curated social impact data, policies, and research papers.',
    statValue: 60,
    statLabel: '60% Data Digitized',
    colorClass: 'primary'
  },
  {
    id: 'csr',
    title: 'CSR Funding',
    iconName: 'monetization_on',
    description: 'Connecting impactful initiatives with corporate sustainability budgets.',
    statValue: 85,
    statLabel: '85% Transparency Score',
    colorClass: 'secondary'
  }
];

export const EXPERTS_DATA: Expert[] = [
  {
    id: 'amit-sharma',
    name: 'Amit Sharma',
    title: 'Public Health Strategy Specialist',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd-xgyjvEQJAaXHu1RScS4puODmRBa8Lfi-n1rX_2NQ4TlO7lTBU0yM2_Ze-xxAQJM6l7V9QPml0sdfDySMEa8BmTy8ev06_dsBU2Zhv41pzxS8ZfJy8Hfq0CILnbMTS2i1thOo-QKhMx9TbgWz9t3CL9lcK-gMdYW6xDq0YBXagcRCK_7h56218Q5NLzvJWbhdG_MNEcBAXDMq4iBELxs_BK-ZPGYKUJ7-_FzrsCQN8vDYgu6GalU1mbiqE0euKZx0WDBUEbh9Uo',
    topVerified: true,
    specialty: 'Epidemiology & Local Care Coordination',
    bio: 'Over 15 years designing regional health programs and optimizing grassroots clinic accessibility models.'
  },
  {
    id: 'priya-iyer',
    name: 'Priya Iyer',
    title: 'NGO Operations Consultant',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxJtDGR8mmSuvgB9a90tahhFANIpP6PVSOqPopHrGyQUjNYg7oYgBFUjKpw-5FehIr7If2TwAEdEzDiLHcUfcNbceuBHTVDD77R5HEXe92WGnN60jinmULPKYszjCpuOAOwUy8jOIE_Ns3QJKgrz2XbhiUg411Iu3X2PbZjmmHVSheWSKzk5S7ZodxKtVz44ajTGkZNilekuYcBnimk0a-0DF2iFT85oIrvUqcufwiUNmj5-zw6BUZ9-mfDrx3NtKLfbK4x5frmA8',
    specialty: 'Resource Allocation & Community Integration',
    bio: 'Dedicated to helping non-profits scale operational workflows, maintain compliance, and optimize field safety.'
  },
  {
    id: 'zaid-khan',
    name: 'Zaid Khan',
    title: 'CSR Legal Advisor',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXmccLfnQ83pX6MYrrWSLAU05BD0SvZ9NHvWR4IauHkvhSywq-noNy3xhizLFNTUezGOQl2rrRjADI2iXErZAPnqR5kyTqrjb0lbq7SzgR-nPYc0_AVPOeD9gLu6O0qPir7zpGCAtsfvRPuXK3Rsj3znTm9_4a2JDake44TzspqYhPXYDUrc9p6MJFx7blzFp9rxUD1PT2LZaRfmVzcKfeTMiSjF1OwymksCr_nuxUS3Xz9EiVdO-OIYtnR-SFNl_M6Va7sdVWd6c',
    specialty: 'Regulatory Compliance & Joint Ventures',
    bio: 'Advising corporations and networks on corporate social responsibility laws, governance standards, and structured impact auditing.'
  }
];

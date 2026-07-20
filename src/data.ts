import { Pillar, ServiceType, Expert } from "./types";

export const PILLARS_DATA: Pillar[] = [
  {
    id: "citizens",
    title: "Citizens",
    iconName: "users",
    description:
      "The core of our community driving local change and participating in needs assessments.",
    learnMoreText: "Learn More",
    color: "primary",
    details:
      "Our grassroots citizen networks participate directly in needs assessments and report real-time challenges. By empowering local residents to lead, we ensure that initiatives are co-designed and sustainable rather than top-down.",
  },
  {
    id: "volunteers",
    title: "Volunteers",
    iconName: "volunteer_activism",
    description: "Dedicated individuals executing ground-level initiatives and community support.",
    learnMoreText: "Learn More",
    color: "secondary",
    details:
      "Volunteers form the backbone of our field operations, leading community workshops, conducting awareness camps, and serving as the immediate human-centric link for areas that need hands-on support.",
  },
  {
    id: "trainers",
    title: "Trainers & Mentors",
    iconName: "school",
    description:
      "Subject-matter experts providing guidance, training, and capacity-building support.",
    learnMoreText: "Learn More",
    color: "tertiary",
    details:
      "Our network of subject-matter experts and mentors provide training sessions, guide localized program design, and help build community capacity through knowledge-sharing and structured workshops.",
  },
  {
    id: "partners",
    title: "Partners",
    iconName: "corporate_fare",
    description:
      "Providing strategic support and institutional collaboration for sustainable impact.",
    learnMoreText: "Learn More",
    color: "primary",
    details:
      "Connecting with corporate CSR departments, foundations, and academic institutions to drive collaborative programs that combine research, funding, and field capacity for measurable impact.",
  },
];

export const SERVICES_DATA: ServiceType[] = [
  {
    id: "training",
    title: "Community Training",
    iconName: "school",
    description: "Structured workshops building skills for community leaders and field volunteers.",
    colorClass: "secondary",
  },
  {
    id: "knowledge",
    title: "Knowledge Center",
    iconName: "menu_book",
    description: "Access to curated social impact research, policies, and development resources.",
    colorClass: "primary",
  },
  {
    id: "csr",
    title: "CSR Collaboration",
    iconName: "monetization_on",
    description:
      "Connecting impactful initiatives with corporate sustainability and social responsibility programs.",
    colorClass: "secondary",
  },
  {
    id: "awareness",
    title: "Awareness Campaigns",
    iconName: "campaign",
    description:
      "Community-focused awareness drives for health, safety, and environmental initiatives.",
    colorClass: "tertiary",
  },
];

export const EXPERTS_DATA: Expert[] = [];

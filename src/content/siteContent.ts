export type ContentStatus =
  "approved" | "draft" | "awaiting-verification" | "proposed" | "under-development";

interface ContentItem<T> {
  status: ContentStatus;
  value: T;
}

export const BRAND = {
  name: "Navpahal",
  tagline: "Aware. Engage. Empower.",
  missionStatement:
    "Navpahal bridges the gap between institutional resources and grassroots needs, creating a resilient ecosystem for sustainable community development through awareness, preparedness, and training.",
} as const;

export const SERVICE_BOUNDARY =
  "In an active emergency, contact the appropriate official emergency service immediately. Navpahal provides awareness, preparedness and community training; it does not replace doctors, hospitals, police, fire services, ambulances or professional emergency responders.";

export const FORM_DISCLOSURE =
  "Online submissions are not yet active. No information entered here is transmitted to Navpahal.";

export const CONTACT_VERIFICATION =
  "Official contact details will be published after verification.";

export const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/programs", label: "Programs" },
  { path: "/training", label: "Training" },
  { path: "/get-involved", label: "Get Involved" },
  { path: "/impact", label: "Impact" },
  { path: "/resources", label: "Resources" },
  { path: "/contact", label: "Contact" },
] as const;

export const FOUNDATION_CONTENT: ContentItem<{
  vision: { summary: string; details: string };
  mission: { summary: string; details: string };
}> = {
  status: "draft",
  value: {
    vision: {
      summary:
        "To build a world where every community has the tools, network, and expertise to drive their own sustainable development.",
      details:
        "Navpahal proposes to explore technology frameworks and community partnerships that could help verify grassroots needs and connect them with relevant support. [Draft — awaiting organizational approval.]",
    },
    mission: {
      summary:
        "Navpahal proposes to systemize social impact through community training networks and cross-sector collaboration.",
      details:
        "The planned four-pillar approach — Citizens, Volunteers, Trainers & Mentors, Partners — is under development. Details about how these groups would operate await organizational approval and program design. [Draft — awaiting organizational approval.]",
    },
  },
};

export const PILLARS_CONTENT: ContentItem<
  {
    id: string;
    title: string;
    iconName: string;
    description: string;
    learnMoreText: string;
    details: string;
    color: "primary" | "secondary" | "tertiary";
  }[]
> = {
  status: "draft",
  value: [
    {
      id: "citizens",
      title: "Citizens",
      iconName: "users",
      description:
        "Navpahal proposes to involve local community members in needs assessment and program feedback. [Proposed pillar.]",
      learnMoreText: "Proposed pillar details",
      details:
        "This planned pillar would explore how to gather input from local residents and include them in program design. Implementation details are under development and await organizational approval.",
      color: "primary",
    },
    {
      id: "volunteers",
      title: "Volunteers",
      iconName: "volunteer_activism",
      description:
        "Navpahal plans to organize community volunteering pathways once programs are established. [Proposed pillar.]",
      learnMoreText: "Proposed pillar details",
      details:
        "This proposed pillar would involve volunteers in community workshops and awareness activities. Volunteer coordination systems and onboarding processes have not yet been developed.",
      color: "secondary",
    },
    {
      id: "trainers",
      title: "Trainers & Mentors",
      iconName: "school",
      description:
        "Navpahal aims to build a network of subject-matter experts for community training. [Proposed pillar.]",
      learnMoreText: "Proposed pillar details",
      details:
        "This proposed pillar would connect community members with trainers and mentors. No trainer network currently exists; this is a planned future activity.",
      color: "tertiary",
    },
    {
      id: "partners",
      title: "Partners",
      iconName: "corporate_fare",
      description:
        "Navpahal intends to collaborate with institutions for sustainable development. [Proposed pillar.]",
      learnMoreText: "Proposed pillar details",
      details:
        "This proposed pillar would explore partnerships with CSR departments, foundations, and academic institutions. No active partnerships exist at this time.",
      color: "primary",
    },
  ],
};

export const SERVICES_DATA: {
  id: string;
  title: string;
  iconName: string;
  description: string;
  colorClass: string;
  status: ContentStatus;
}[] = [
  {
    id: "training",
    title: "Community Training",
    iconName: "school",
    description:
      "Proposed structured workshops to build skills for community leaders and volunteers. [Under development — no active training programs.]",
    colorClass: "secondary",
    status: "proposed",
  },
  {
    id: "knowledge",
    title: "Knowledge Center",
    iconName: "menu_book",
    description:
      "Planned access to curated social impact resources. [Under development — no active knowledge center.]",
    colorClass: "primary",
    status: "under-development",
  },
  {
    id: "csr",
    title: "CSR Collaboration",
    iconName: "monetization_on",
    description:
      "Proposed connections between community initiatives and corporate sustainability programs. [No active partnerships.]",
    colorClass: "secondary",
    status: "proposed",
  },
  {
    id: "awareness",
    title: "Awareness Campaigns",
    iconName: "campaign",
    description:
      "Proposed community awareness drives for health, safety, and environmental initiatives. [Under development.]",
    colorClass: "tertiary",
    status: "proposed",
  },
];

export const HERO_CONTENT = {
  title: "Empowering Communities, One Initiative at a Time",
  tagline: "Community Empowerment",
  description:
    "Navpahal proposes to bridge the gap between institutional resources and grassroots needs, creating a resilient ecosystem for sustainable community development through awareness, preparedness, and training.",
  ctaPrimary: { label: "Learn About Our Programs", to: "/programs" },
  ctaSecondary: { label: "How to Get Involved", to: "/get-involved" },
  status: "draft" as ContentStatus,
};

export const EXPERTS_STATUS = "under-development" as ContentStatus;

export const FOUNDATION_SUBTITLE =
  "Navpahal proposes to build a foundation of transparency, thoughtful execution, and systemic improvements in grassroots community welfare. [Draft — awaiting organizational approval.]";

export const PROGRAM_CATEGORIES: ContentItem<
  {
    id: string;
    title: string;
    description: string;
    status: ContentStatus;
  }[]
> = {
  status: "draft",
  value: [
    {
      id: "awareness",
      title: "Awareness Campaigns",
      description:
        "Navpahal proposes to organise community-focused awareness drives for health, safety, and environmental initiatives. [Proposed program — details awaiting approval.]",
      status: "proposed",
    },
    {
      id: "preparedness",
      title: "Community Preparedness",
      description:
        "Navpahal proposes to develop training and resources to help communities prepare for emergencies. [Proposed program — details awaiting approval.]",
      status: "proposed",
    },
    {
      id: "education",
      title: "Community Education",
      description:
        "Navpahal proposes to create structured workshops and learning programmes building skills for community leaders and volunteers. [Proposed program — details awaiting approval.]",
      status: "proposed",
    },
    {
      id: "collaboration",
      title: "Institutional Collaboration",
      description:
        "Navpahal proposes to connect community initiatives with institutional partners for sustainable development. [Proposed program — details awaiting approval.]",
      status: "proposed",
    },
  ],
};

export const TRAINING_AREAS: ContentItem<
  {
    id: string;
    title: string;
    description: string;
    status: ContentStatus;
  }[]
> = {
  status: "draft",
  value: [
    {
      id: "community-organizing",
      title: "Community Organizing",
      description:
        "Navpahal proposes to develop skills training for mobilizing and organizing community groups.",
      status: "proposed",
    },
    {
      id: "digital-literacy",
      title: "Digital Literacy",
      description:
        "Navpahal proposes to develop digital skills training for community development practitioners.",
      status: "proposed",
    },
    {
      id: "project-management",
      title: "Project Management",
      description:
        "Navpahal proposes to develop training in planning, executing, and evaluating community projects.",
      status: "proposed",
    },
    {
      id: "impact-measurement",
      title: "Impact Measurement",
      description:
        "Navpahal proposes to develop methods and training for tracking social impact outcomes.",
      status: "proposed",
    },
  ],
};

export const META_DESCRIPTIONS: Record<string, string> = {
  "/": "Navpahal proposes to empower communities through awareness, preparedness, and training. Learn about our planned mission and how to get involved.",
  "/about":
    "Learn about Navpahal's proposed mission, vision, and operating principles for community empowerment.",
  "/programs":
    "Explore Navpahal's proposed programs in awareness, preparedness, community education, and institutional collaboration.",
  "/training": "Discover Navpahal's planned training areas for community capacity building.",
  "/get-involved":
    "Find out how to get involved with Navpahal through proposed volunteering, mentoring, or partnerships.",
  "/impact":
    "Navpahal's proposed impact measurement framework — no verified metrics published yet.",
  "/resources":
    "Navpahal's planned resource center — curated materials for community development under development.",
  "/contact": "Contact Navpahal. Official contact details pending verification.",
};

export const PAGE_TITLES: Record<string, string> = {
  "/": "Navpahal | Aware. Engage. Empower.",
  "/about": "About | Navpahal",
  "/programs": "Programs | Navpahal",
  "/training": "Training | Navpahal",
  "/get-involved": "Get Involved | Navpahal",
  "/impact": "Impact | Navpahal",
  "/resources": "Resources | Navpahal",
  "/contact": "Contact | Navpahal",
};

export const IMPACT_FRAMEWORK = {
  status: "draft" as ContentStatus,
  areas: [
    "Awareness reach and engagement",
    "Training participation and skill outcomes",
    "Community preparedness indicators",
    "Partnership and collaboration metrics",
  ],
};

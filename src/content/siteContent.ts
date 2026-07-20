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
        "Community-focused awareness drives for health, safety, and environmental initiatives. [Proposed program — details awaiting approval.]",
      status: "proposed",
    },
    {
      id: "preparedness",
      title: "Community Preparedness",
      description:
        "Training and resources to help communities prepare for and respond to emergencies. [Proposed program — details awaiting approval.]",
      status: "proposed",
    },
    {
      id: "education",
      title: "Community Education",
      description:
        "Structured workshops and learning programs building skills for community leaders and volunteers. [Proposed program — details awaiting approval.]",
      status: "proposed",
    },
    {
      id: "collaboration",
      title: "Institutional Collaboration",
      description:
        "Connecting impactful initiatives with institutional partners for sustainable development. [Proposed program — details awaiting approval.]",
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
      description: "Skills for mobilizing and organizing community groups effectively.",
      status: "proposed",
    },
    {
      id: "digital-literacy",
      title: "Digital Literacy",
      description: "Building digital skills for community development practitioners.",
      status: "proposed",
    },
    {
      id: "project-management",
      title: "Project Management",
      description: "Fundamentals of planning, executing, and evaluating community projects.",
      status: "proposed",
    },
    {
      id: "impact-measurement",
      title: "Impact Measurement",
      description: "Methods for tracking and evaluating social impact outcomes.",
      status: "proposed",
    },
  ],
};

export const META_DESCRIPTIONS: Record<string, string> = {
  "/": "Navpahal empowers communities through awareness, preparedness, and training. Learn about our mission and how to get involved.",
  "/about":
    "Learn about Navpahal's mission, vision, and operating principles for community empowerment.",
  "/programs":
    "Explore Navpahal's proposed programs in awareness, preparedness, community education, and institutional collaboration.",
  "/training": "Discover Navpahal's planned training areas for community capacity building.",
  "/get-involved":
    "Find out how to get involved with Navpahal through volunteering, mentoring, or partnerships.",
  "/impact": "Navpahal's impact measurement framework — no verified metrics published yet.",
  "/resources":
    "Navpahal's resource center — curated materials for community development under development.",
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

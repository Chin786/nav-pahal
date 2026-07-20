export interface Pillar {
  id: string;
  title: string;
  iconName: string;
  description: string;
  learnMoreText: string;
  details: string;
  color: "primary" | "secondary" | "tertiary";
}

export interface ServiceType {
  id: string;
  title: string;
  iconName: string;
  description: string;
  colorClass: string;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  bio: string;
  specialty: string;
}

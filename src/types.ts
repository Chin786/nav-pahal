export interface VolunteerRegistration {
  id: string;
  name: string;
  email: string;
  interestArea: string;
  status: string;
  date: string;
}

export interface ExpertInquiry {
  id: string;
  expertId: string;
  expertName: string;
  userName: string;
  userEmail: string;
  query: string;
  date: string;
  status: string;
}

export interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  subject: string;
  message: string;
  date: string;
}

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

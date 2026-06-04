/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VolunteerRegistration {
  id: string;
  name: string;
  email: string;
  interestArea: string;
  status: string; // 'Approved' | 'Pending'
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
  status: string; // 'Answered' | 'Pending Response'
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
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface ServiceType {
  id: string;
  title: string;
  iconName: string;
  description: string;
  statValue: number; // 0-100 percentage
  statLabel: string;
  colorClass: string;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  imageUrl: string;
  topVerified?: boolean;
  bio: string;
  specialty: string;
}

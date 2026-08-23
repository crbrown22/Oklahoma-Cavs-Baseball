export type PageTab = 'home' | 'about' | 'roster' | 'coaches' | 'schedule' | 'gallery' | 'contact';

export interface Player {
  id: string;
  number: number;
  name: string;
  positions: string[];
  primaryPosition: 'Pitcher' | 'Catcher' | 'Infielder' | 'Outfielder' | 'Two-Way';
  bats: 'R' | 'L' | 'S';
  throws: 'R' | 'L';
  height: string;
  weight: number;
  hometown: string;
  state: string;
  highSchool: string;
  gradYear: number;
  commitmentStatus: string;
  gpa: number;
  metrics: {
    fastballVelo?: string;
    exitVelocity?: string;
    sixtyYardDash?: string;
    popTime?: string;
  };
  bio: string;
  imageUrl?: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  title: string;
  email?: string;
  phone?: string;
  bio: string;
  responsibilities: string[];
  experience: string[];
  quote?: string;
  imageUrl?: string;
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  iconName: string;
}

export interface GameSchedule {
  id: string;
  date: string;
  time: string;
  opponent: string;
  opponentLocation: string;
  isHome: boolean;
  gameType: 'Single 9-Inn' | 'Doubleheader (7/7)' | '14-Inning Scrimmage' | 'Scout Day / Clinic' | 'Collegiate Series';
  season: 'Fall' | 'Spring';
  location: string;
  field: string;
  result?: string;
  status: 'Upcoming' | 'Final' | 'Live' | 'Postponed';
  notes?: string;
}

export interface FAQItem {
  id: string;
  category: 'Players' | 'Parents' | 'Transfer & Eligibility' | 'Cost & Financial Aid';
  question: string;
  answer: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'facilities' | 'games' | 'training' | 'campus';
  categoryLabel: string;
  description: string;
  imageUrl: string;
}

export interface RecruitmentFormData {
  fullName: string;
  email: string;
  phone: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  gradYear: string;
  highSchool: string;
  cityState: string;
  primaryPosition: string;
  secondaryPosition: string;
  batsThrows: string;
  height: string;
  weight: string;
  gpa: string;
  actSat: string;
  videoLink: string;
  twitterHandle: string;
  interestReason: string;
}

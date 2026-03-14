export interface TechItem {
  name: string;
  link: string;
  image: string;
}

export interface ProjectItem {
  name: string;
  link: string;
  image: string;
}

export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  time_period: string;
  place: string;
  overview: string;
  my_role: string;
  impact: string;
  projects: ProjectItem[];
  tech: TechItem[];
}

export interface EducationItem {
  studied_at: string;
  qualified: string;
  time_period: string;
  place: string;
}

export interface ToolItem {
  name: string;
  description: string;
  link: string;
  image: string;
}

export interface CodingProfileItem {
  platform: string;
  username: string;
  url: string;
  category: 'Open Source' | 'DSA' | 'Competitive';
  accentClass: string;
  icon: string;
  categoryIcon: string;
}

export interface Testimonial {
  text: string;
  author?: string;
  role?: string;
}

export interface RoadmapStep {
  number: number;
  title: string;
  description: string;
  bullets: string[];
  quote: string;
  achievement: string;
}

export interface ComparisonRow {
  criteria: string;
  us: string;
  fibers: string;
  wigs: string;
  lowcost: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  highlight: string;
}
export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  requiredSkills: string[];
  timeEstimate: number; // in hours per week
  domain: string;
  image: string;
};

export type RecommendedProject = Project & {
  similarityScore: number;
};

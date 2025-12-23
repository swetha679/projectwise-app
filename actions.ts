
'use server';

import { matchSkillsWithProjects } from '@/ai/flows/match-skills-with-projects';
import { generateProjectSummary as generateProjectSummaryFlow } from '@/ai/flows/generate-project-summary';
import { projects as allProjects } from '@/lib/data';
import type { RecommendedProject, Project } from '@/lib/types';

// Fallback function for non-AI matching
function getSimpleRecommendations(skills: string[], projects: Project[]): RecommendedProject[] {
  const recommendedProjects: RecommendedProject[] = projects.map(project => {
    const matchingSkills = project.requiredSkills.filter(skill => 
      skills.some(userSkill => userSkill.toLowerCase() === skill.toLowerCase())
    );
    // Simple score: percentage of required skills that match user skills.
    const similarityScore = project.requiredSkills.length > 0 
      ? matchingSkills.length / project.requiredSkills.length 
      : 0;

    return {
      ...project,
      similarityScore,
    };
  }).filter(project => project.similarityScore > 0); // Only include projects with at least one match

  // Sort by similarity score in descending order
  recommendedProjects.sort((a, b) => b.similarityScore - a.similarityScore);

  return recommendedProjects;
}


export async function getProjectRecommendations(
  skills: string[],
  maxTime: number
): Promise<RecommendedProject[]> {
  const MINIMUM_PROJECT_COUNT = 30;

  try {
    if (skills.length === 0) {
      return [];
    }
    
    // First, filter by skills to get a relevant pool of projects
    let skillFilteredProjects = allProjects.filter(project =>
      project.requiredSkills.some(requiredSkill =>
        skills.some(userSkill => userSkill.toLowerCase() === requiredSkill.toLowerCase())
      )
    );

    // If no projects match the skills, return an empty array or a broader list.
    // For a better experience, let's try to provide some projects anyway.
    if (skillFilteredProjects.length === 0) {
       skillFilteredProjects = allProjects; // Use all projects if no skill matches
    }

    // Sort this pool by how close their time estimate is to the user's max time
    const sortedByTime = skillFilteredProjects.sort((a, b) => 
        Math.abs(a.timeEstimate - maxTime) - Math.abs(b.timeEstimate - maxTime)
    );

    // Take at least the minimum number of projects, even if they are outside the time range
    let eligibleProjects = sortedByTime.slice(0, Math.max(MINIMUM_PROJECT_COUNT, sortedByTime.length));
    
    // If somehow we still have no projects, take top projects from the full list sorted by time.
    if (eligibleProjects.length === 0) {
      const allProjectsSortedByTime = [...allProjects].sort((a, b) => 
        Math.abs(a.timeEstimate - maxTime) - Math.abs(b.timeEstimate - maxTime)
      );
      eligibleProjects = allProjectsSortedByTime.slice(0, MINIMUM_PROJECT_COUNT);
    }

    // Check if the API key is available. If not, use the fallback.
    if (!process.env.GEMINI_API_KEY) {
      console.log("No API key found. Using simple recommendation fallback.");
      return getSimpleRecommendations(skills, eligibleProjects);
    }
    
    const projectDescriptions = eligibleProjects.map((p) => p.description);

    // Use GenAI to get similarity scores
    const similarityResults = await matchSkillsWithProjects({
      userSkills: skills,
      projectDescriptions: projectDescriptions,
    });
    
    // Create a map for easy lookup
    const descriptionToProjectMap = new Map(
      eligibleProjects.map((p) => [p.description, p])
    );

    const recommendedProjects: RecommendedProject[] = similarityResults
      .map((result) => {
        const project = descriptionToProjectMap.get(result.projectDescription);
        if (project) {
          return {
            ...project,
            similarityScore: result.similarityScore,
          };
        }
        return null;
      })
      .filter((p): p is RecommendedProject => p !== null);

    // Sort by similarity score in descending order
    recommendedProjects.sort((a, b) => b.similarityScore - a.similarityScore);

    return recommendedProjects;
  } catch (error) {
    console.error("Error getting project recommendations:", error);
    // Fallback to simple recommendations on any API error
    console.log("AI recommendation failed. Using simple recommendation fallback.");
    
    // Re-run the logic to get a baseline set of projects for the simple fallback
    let fallbackProjects = allProjects.filter(project =>
      project.requiredSkills.some(requiredSkill =>
        skills.some(userSkill => userSkill.toLowerCase() === requiredSkill.toLowerCase())
      )
    );
     if (fallbackProjects.length === 0) {
       fallbackProjects = allProjects;
    }
    const sortedByTime = fallbackProjects.sort((a, b) => 
        Math.abs(a.timeEstimate - maxTime) - Math.abs(b.timeEstimate - maxTime)
    );
    const eligibleProjects = sortedByTime.slice(0, Math.max(MINIMUM_PROJECT_COUNT, sortedByTime.length));
    
    return getSimpleRecommendations(skills, eligibleProjects);
  }
}

export async function getProjectSummary(
  projectDescription: string
): Promise<string> {
  try {
     // If no key, return a simple message
    if (!process.env.GEMINI_API_KEY) {
      return "AI summary is unavailable without an API key.";
    }
    const result = await generateProjectSummaryFlow({ projectDescription });
    return result.projectSummary;
  } catch (error) {
    console.error("Error generating project summary:", error);
    throw new Error("Failed to generate project summary.");
  }
}

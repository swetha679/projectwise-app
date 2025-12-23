
import { ProjectCard } from "./project-card";
import { type RecommendedProject } from "@/lib/types";

interface ProjectListProps {
  projects: RecommendedProject[];
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <div 
          key={project.id}
          className="animate-in fade-in-0 slide-in-from-top-4 duration-500"
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

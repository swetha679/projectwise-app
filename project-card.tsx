
"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { RecommendedProject } from "@/lib/types";
import { Clock, Layers } from "lucide-react";

interface ProjectCardProps {
  project: RecommendedProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const image = PlaceHolderImages.find((img) => img.id === project.image);
  const matchPercentage = Math.round(project.similarityScore * 100);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        {image && (
          <div className="aspect-[3/2] w-full overflow-hidden">
            <Image
              src={image.imageUrl}
              alt={project.title}
              width={600}
              height={400}
              className="object-cover w-full h-full"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-1">{project.title}</CardTitle>
        <p className="text-muted-foreground mb-4">{project.tagline}</p>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1 text-sm">
            <span className="font-medium text-primary">Skill Match</span>
            <span className="font-semibold text-primary">{matchPercentage}%</span>
          </div>
          <Progress value={matchPercentage} className="h-2" />
        </div>
        
        <div className="flex justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4"/>
                <span>{project.domain}</span>
            </div>
            <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{project.timeEstimate} hrs/week</span>
            </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.requiredSkills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>More Details</AccordionTrigger>
            <AccordionContent className="space-y-4">
              <p className="text-muted-foreground">{project.description}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

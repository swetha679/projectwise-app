"use client";

import { useState } from "react";
import { Lightbulb, ServerCrash } from "lucide-react";
import { getProjectRecommendations } from "@/app/actions";
import type { RecommendedProject } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import { ProjectForm } from "@/components/project-form";
import { ProjectList } from "@/components/project-list";
import { ProjectCardSkeleton } from "@/components/project-card-skeleton";
import NoSsr from "@/components/no-ssr";

type PageState = "initial" | "loading" | "results" | "no_results" | "error";

export default function Home() {
  const [projects, setProjects] = useState<RecommendedProject[]>([]);
  const [pageState, setPageState] = useState<PageState>("initial");
  const { toast } = useToast();

  const handleFindProjects = async (skills: string[], time: number) => {
    setPageState("loading");
    try {
      const results = await getProjectRecommendations(skills, time);
      setProjects(results);
      setPageState(results.length > 0 ? "results" : "no_results");
    } catch (error) {
      setPageState("error");
      toast({
        variant: "destructive",
        title: "An Error Occurred",
        description: "We couldn't fetch project recommendations. Please try again later.",
      });
    }
  };
  
  const renderContent = () => {
    switch (pageState) {
      case "initial":
        return (
          <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full">
            <Lightbulb className="w-16 h-16 text-muted-foreground/50 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Welcome to ProjectWise</h2>
            <p className="text-muted-foreground max-w-md">
              Enter your skills and availability on the left to discover projects perfectly tailored for you.
            </p>
          </div>
        );
      case "loading":
        return (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        );
      case "results":
        return <ProjectList projects={projects} />;
      case "no_results":
        return (
          <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-full">
            <ServerCrash className="w-16 h-16 text-muted-foreground/50 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Matches Found</h2>
            <p className="text-muted-foreground">Try adjusting your skills or available time to find more projects.</p>
          </div>
        );
      case "error":
        return (
          <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-destructive/50 rounded-lg h-full">
            <ServerCrash className="w-16 h-16 text-destructive/80 mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-destructive">Something Went Wrong</h2>
            <p className="text-muted-foreground">We had trouble fetching recommendations. Please try again later.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            ProjectWise
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            Your personal guide to the perfect project.
          </p>
        </header>

        <NoSsr>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
            <div className="lg:col-span-1">
              <ProjectForm
                onSubmit={handleFindProjects}
                isLoading={pageState === "loading"}
              />
            </div>
            <div className="lg:col-span-2">
              {renderContent()}
            </div>
          </div>
        </NoSsr>
      </div>
    </main>
  );
}


"use client";

import { useState } from "react";
import { BrainCircuit, Clock, Sparkles, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectFormProps {
  onSubmit: (skills: string[], time: number) => void;
  isLoading: boolean;
}

export function ProjectForm({ onSubmit, isLoading }: ProjectFormProps) {
  const [skills, setSkills] = useState<string[]>(["React", "TypeScript"]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [time, setTime] = useState("10");

  const handleAddSkill = () => {
    if (currentSkill && !skills.includes(currentSkill)) {
      setSkills([...skills, currentSkill]);
      setCurrentSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  }

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          Find Your Project
        </CardTitle>
        <CardDescription>
          Enter your skills and constraints to get tailored project recommendations.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="skills" className="flex items-center gap-2">
            <BrainCircuit className="w-4 h-4" /> Your Skills
          </Label>
          <div className="flex gap-2">
            <Input
              id="skills"
              value={currentSkill}
              onChange={(e) => setCurrentSkill(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="e.g., Python"
            />
            <Button onClick={handleAddSkill} variant="outline">Add</Button>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm">
                {skill}
                <button
                  onClick={() => handleRemoveSkill(skill)}
                  className="ml-2 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="time" className="flex items-center gap-2">
            <Clock className="w-4 h-4" /> Available Time
          </Label>
          <RadioGroup
            defaultValue="10"
            value={time}
            onValueChange={setTime}
            className="space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="5" id="t1" />
              <Label htmlFor="t1" className="font-normal">1-5 hrs/week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="10" id="t2" />
              <Label htmlFor="t2" className="font-normal">5-10 hrs/week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="20" id="t3" />
              <Label htmlFor="t3" className="font-normal">10-20 hrs/week</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="40" id="t4" />
              <Label htmlFor="t4" className="font-normal">20+ hrs/week</Label>
            </div>
          </RadioGroup>
        </div>

        <Button
          onClick={() => onSubmit(skills, parseInt(time, 10))}
          disabled={isLoading || skills.length === 0}
          className="w-full"
          size="lg"
        >
          {isLoading ? "Searching..." : "Find Projects"}
        </Button>
      </CardContent>
    </Card>
  );
}

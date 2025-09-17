import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Badge, Button, Link } from "@radix-ui/themes";
import { GlobeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

interface ProjectCardProps extends React.HTMLAttributes<"div"> {
  className?: string;
  project: Project;
}

export function ProjectCard({ className, project }: ProjectCardProps) {
  return (
    <Card className={cn("", className)}>
      <div className="flex flex-col gap-4">
        <div className="w-8 h-8 flex justify-center items-center overflow-hidden rounded-full ">
          {project.src ? (
            <Image
              className="w-full h-full"
              src={project.src}
              alt={`${project.name}-logo`}
            />
          ) : (
            <span className="flex justify-center items-center bg-blue-500 w-full font-fira-mono h-full text-2xl text-blue-200  ">
              {project.name.substring(0, 1).toUpperCase()}
            </span>
          )}
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <h2 className="text-2xl font-fira-mono font-semibold text-slate-600 dark:text-slate-100">
            {project.name}
          </h2>
          <p className="text-sm font-inter text-slate-600 dark:text-slate-100">
            {project.description}
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-1">
          {project.techStack.map((ts) => (
            <Badge
              key={ts}
              size={{ initial: "1" }}
              variant="outline"
              style={{ cursor: "pointer" }}
              color="gray"
              highContrast
            >
              {ts}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Link href={project.url} target="_blank">
            <Button
              size={{ initial: "1" }}
              color="gray"
              style={{
                cursor: project.url ? "pointer" : "not-allowed",
              }}
              disabled={!project.url}
            >
              <GlobeIcon /> Website
            </Button>
          </Link>
          <Link href={project.code} target="_blank">
            <Button
              size={{ initial: "1" }}
              color="gray"
              highContrast
              style={{
                cursor: "pointer",
              }}
            >
              <GitHubLogoIcon /> Source
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

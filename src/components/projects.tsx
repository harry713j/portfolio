import { ProjectCard } from "@/components/project-card";
import { projects } from "@/utils/constants";
import { useMemo } from "react";

export function Projects() {
  const cachedProjects = useMemo(() => projects, []);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-fira-mono font-bold text-slate-700 dark:text-slate-200">
        Works
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {cachedProjects.map((project, i) => (
          <ProjectCard
            key={`${project.name}-${i}`}
            className="flex flex-col gap-4"
            project={project}
          />
          // show only 4 projects with a show more button
        ))}
      </div>
    </div>
  );
}

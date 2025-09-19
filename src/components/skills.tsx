"use client";
import { skills } from "@/utils/constants";
import { useMemo } from "react";
import { Badge, Tooltip } from "@radix-ui/themes";
import { BackgroundHeader } from "./ui/headings";

export function Skills() {
  const cachedSkills = useMemo(() => skills, []);
  return (
    <div
      id="skill"
      className="flex flex-col items-start gap-3 md:gap-4 scroll-mt-24"
    >
      <BackgroundHeader>Skills</BackgroundHeader>
      <div className="flex flex-col items-start gap-1">
        <p className="text-center mb-6 font-inter text-slate-600 dark:text-slate-200 ">
          Here are some skills i have aquired. I am always eager to learn and
          improve!
        </p>

        <div className="flex flex-col items-start gap-1 ">
          <h3 className="text-sm md:text-base font-medium font-inter text-slate-600 opacity-70 dark:text-slate-200 ">
            Programming Languages
          </h3>
          <div className="flex items-center gap-2 flex-wrap ">
            {cachedSkills
              .filter((skill) => skill.category === "language")
              .map((skill) => (
                <Tooltip key={`${skill.name}`} content={skill.name}>
                  <Badge
                    size={{ initial: "2", md: "3" }}
                    variant="solid"
                    color="gray"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {skill.name}
                  </Badge>
                </Tooltip>
              ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 ">
          <h3 className="text-sm md:text-base font-medium font-inter text-slate-600 opacity-70 dark:text-slate-200 ">
            Frameworks / Libraries
          </h3>
          <div className="flex items-center gap-2  flex-wrap ">
            {cachedSkills
              .filter((skill) => skill.category === "framework")
              .map((skill) => (
                <Tooltip key={`${skill.name}`} content={skill.name}>
                  <Badge
                    size={{ initial: "2", md: "3" }}
                    variant="solid"
                    color="gray"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {skill.name}
                  </Badge>
                </Tooltip>
              ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 ">
          <h3 className="text-sm md:text-base font-medium font-inter text-slate-600 opacity-70 dark:text-slate-200 ">
            Database
          </h3>
          <div className="flex items-center gap-2 flex-wrap  ">
            {cachedSkills
              .filter((skill) => skill.category === "database")
              .map((skill) => (
                <Tooltip key={`${skill.name}`} content={skill.name}>
                  <Badge
                    size={{ initial: "2", md: "3" }}
                    variant="solid"
                    color="gray"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {skill.name}
                  </Badge>
                </Tooltip>
              ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 ">
          <h3 className="text-sm md:text-base font-medium font-inter text-slate-600 opacity-70 dark:text-slate-200 ">
            Others
          </h3>
          <div className="flex items-center gap-2 flex-wrap  ">
            {cachedSkills
              .filter((skill) => skill.category === "others")
              .map((skill) => (
                <Tooltip key={`${skill.name}`} content={skill.name}>
                  <Badge
                    size={{ initial: "2", md: "3" }}
                    variant="solid"
                    color="gray"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {skill.name}
                  </Badge>
                </Tooltip>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

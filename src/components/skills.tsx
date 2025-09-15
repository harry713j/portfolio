"use client";
import { skills } from "@/utils/constants";
import { useMemo } from "react";
import { Badge, Tooltip } from "@radix-ui/themes";

export function Skills() {
  const cachedSkills = useMemo(() => skills, []);
  return (
    <div className="flex flex-col items-start gap-4 ">
      <h2 className="text-3xl font-fira-mono font-bold text-slate-700 dark:text-slate-200">
        Skills
      </h2>
      <div className="flex gap-2 items-center justify-center flex-wrap">
        {cachedSkills.map((skill) => (
          <Tooltip key={`${skill}`} content={skill}>
            <Badge
              size={{ initial: "3" }}
              variant="solid"
              color="gray"
              style={{
                cursor: "pointer",
              }}
            >
              {skill}
            </Badge>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
